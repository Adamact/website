// Daglig övervakning av kontaktformuläret (körs av .github/workflows/form-monitor.yml).
// Skickar en riktig submission via headless Chromium — Web3Forms API ligger bakom
// Cloudflares botskydd, så rena HTTP-anrop (curl/fetch) blockeras.
import { chromium } from "playwright";

const MONITOR_URL = process.env.MONITOR_URL || "https://algamo.se/";
const ATTEMPTS = 2;

async function attempt(context, n) {
  const page = await context.newPage();
  try {
    await page.goto(MONITOR_URL, { waitUntil: "domcontentloaded", timeout: 30_000 });
    await page.waitForSelector("#contact-form", { timeout: 15_000 });

    // "[MONITOR]" i företagsfältet hamnar i mejlets ämnesrad (subject byggs som
    // contactEmailSubject + " — " + company i main.ts) så en inboxregel kan filtrera bort det.
    await page.fill("#cf-company", "[MONITOR] Automatisk övervakning");
    await page.fill("#cf-email", "form-monitor@algamo.se");
    await page.fill(
      "#cf-message",
      `Automatiskt övervakningstest ${new Date().toISOString()}. ` +
        "Kontrollerar att kontaktformuläret fungerar hela vägen till Web3Forms. Ignorera detta mejl.",
    );

    await page.click("#contact-form .btn-form-submit");
    await page.waitForSelector("#cf-status.is-success, #cf-status.is-error", { timeout: 25_000 });

    if ((await page.locator("#cf-status.is-error").count()) > 0) {
      const msg = (await page.locator("#cf-status").textContent()) ?? "";
      throw new Error(`Formuläret visade felstatus: "${msg.trim()}"`);
    }
    console.log(`Försök ${n}: OK — formuläret skickades och Web3Forms svarade success.`);
  } catch (err) {
    await page.screenshot({ path: `monitor-failure-${n}.png`, fullPage: true }).catch(() => {});
    throw err;
  } finally {
    await page.close();
  }
}

const browser = await chromium.launch();
// Cloudflare kan blockera default-UA:n som innehåller "HeadlessChrome".
const probe = await browser.newPage();
const ua = (await probe.evaluate(() => navigator.userAgent)).replace("HeadlessChrome", "Chrome");
await probe.close();
const context = await browser.newContext({ userAgent: ua, locale: "sv-SE" });

let failed = false;
for (let n = 1; n <= ATTEMPTS; n++) {
  try {
    await attempt(context, n);
    failed = false;
    break;
  } catch (err) {
    failed = true;
    console.error(`Försök ${n} misslyckades: ${err.message}`);
    if (n < ATTEMPTS) await new Promise((r) => setTimeout(r, 5_000));
  }
}

await browser.close();
if (failed) {
  console.error(`Kontaktformuläret på ${MONITOR_URL} fungerar INTE.`);
  process.exit(1);
}
