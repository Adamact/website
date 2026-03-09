// Älgamo Software AB — i18n and smooth scroll
const STORAGE_KEY = "algamo-lang";

type Lang = "sv" | "en";
type Translations = Record<Lang, Record<string, string>>;

const translations: Translations = {
  sv: {
    pageTitle: "Attestro — Fakturor i strukturerat format | Älgamo Software AB",
    pageDescription: "Attestro gör fakturor till strukturerad data (t.ex. Excel), med logikvalidering, felflaggor och automatisk kontroll mot avtal och projekt. Från Älgamo Software AB.",
    pricingTitle: "Priser för Attestro — Älgamo Software AB",
    pricingDescription: "Prisplaner för Attestro. Fakturor till strukturerad data med validering och kontroll mot avtal och projekt.",
    aboutPageTitle: "Om oss — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB bygger Attestro — ett verktyg för att få ordning på fakturor. Vi värderar tydlighet, kvalitet och långsiktighet.",
    navSolutions: "Funktioner",
    navAbout: "Om oss",
    navPricing: "Priser",
    navContact: "Kontakt",
    ctaHeader: "Boka demo",
    heroBadge: "Svenskt verktyg för fakturahantering",
    heroTitle: "Automatisera fakturakontroll och stoppa fel innan de kostar pengar.",
    heroLead: "Attestro omvandlar leverantörsfakturor till strukturerad data, validerar mot avtal och flaggar avvikelser automatiskt.",
    heroNoChange: "Attestro fungerar vid sidan av ert befintliga ekonomisystem — ni behöver inte byta.",
    heroCtaPrimary: "Boka en demo",
    heroCtaSecondary: "Se priser",
    heroCollab: "Utvecklat i samarbete med entreprenadföretag",
    solutionsTitle: "Så fungerar det",
    solutionsLead: "Tre enkla steg från faktura till tydlig kontroll.",
    step1: "Ladda upp faktura",
    step2: "Automatisk validering mot avtal",
    step3: "Få tydliga avvikelser och rapporter",
    processTitle: "Från faktura till verifierad data",
    process1Title: "Import",
    process1Desc: "Ladda upp faktura i PDF eller bildformat. Attestro extraherar automatiskt relevant data såsom leverantör, artikelrader, priser och projektkoppling.",
    process2Title: "Validering",
    process2Desc: "Systemet kontrollerar fakturans innehåll mot avtalade priser, projektvillkor och interna regler. Avvikelser identifieras direkt.",
    process3Title: "Struktur och export",
    process3Desc: "Ni får strukturerad data i Excel-format eller integrerat mot ert ekonomisystem. Avvikelser och kontrollhistorik är spårbara.",
    processResult: "Resultatet är färre fel, minskat manuellt arbete och full kontroll över kostnader per projekt.",
    audienceTitle: "Automatisera fakturakontroll i bygg- och transportprojekt",
    audienceLead: "Attestro är byggt för projektintensiva branscher där fakturor är många, avtal komplexa och manuell kontroll inte räcker till.",
    audienceConstructionTitle: "Bygg och anläggning",
    audienceConstructionDesc: "Kontrollera fakturor mot projektavtal, ÄTA och à-prislistor. Fånga avvikelser innan de påverkar projektresultatet.",
    audienceTransportTitle: "Transport och logistik",
    audienceTransportDesc: "Verifiera fraktfakturor mot avtalade priser, zoner och volymer. Identifiera överdebitering automatiskt.",
    audienceServicesTitle: "Tjänsteföretag med underleverantörer",
    audienceServicesDesc: "Matcha fakturor mot timavtal och ramavtal. Säkerställ att varje rad stämmer innan betalning.",
    aboutTitle: "Varför Attestro finns",
    aboutText1: "Felaktiga fakturor, bristande kontroll och manuella processer kostar mer än man tror. Attestro ger er strukturerad data, automatisk validering mot avtal och tydliga avvikelser innan fel påverkar resultatet.",
    aboutText2: "Ni minskar manuellt arbete, ökar spårbarheten och säkerställer att varje faktura matchar era villkor och projekt.",
    aboutSubtitleCompany: "Om Älgamo Software",
    aboutText3: "Älgamo Software AB utvecklar Attestro, ett verktyg för strukturerad fakturahantering och automatisk validering mot avtal och projekt. Bolaget grundades för att lösa ett konkret problem i projektintensiva verksamheter där manuella kontroller skapar risk och ineffektivitet.",
    aboutSubtitleFounder: "Grundare",
    aboutText4: "Bolaget drivs av Adam Älgamo, civilingenjörsstudent inom teknisk fysik och elektroteknik. Arbetet med Attestro bygger på teknisk precision, strukturerad problemlösning och ett långsiktigt produktperspektiv.",
    stat1Value: "Kvalitet först",
    stat1Label: "Så bygger vi",
    stat2Value: "Sverige",
    stat2Label: "Där vi finns",
    ctaTitle: "Prova Attestro",
    ctaLead: "Boka en demo eller skicka en fråga. Vi berättar gärna mer om hur Attestro kan hjälpa er med fakturor, validering och kontroll mot avtal och projekt.",
    footerTagline: "Attestro — fakturor i ordning.",
    footerLegal: "Älgamo Software AB — Sverige",
    footerSupport: "Kundsupport:",
    pricingHeading: "Priser för Attestro",
    pricingLead: "Välj plan utifrån er volym och behov. Alla planer inkluderar omvandling till strukturerad data, validering och felflaggor.",
    pricingBindingLabel: "12 månaders bindningstid",
    pricingRecommended: "Rekommenderad",
    planMinimum: "Minimum",
    planSaker: "Säker",
    planEnterprise: "Enterprise",
    priceMinimumDefault: "1 590 kr/mån",
    priceMinimumBinding: "1 350 kr/mån",
    priceSakerDefault: "4 990 kr/mån",
    priceSakerBinding: "4 240 kr/mån",
    priceEnterprise: "Pris enligt offert",
    enterpriseNote: "Minimiavtal på 12 månader",
    setupMinimum: "Engångsimplementation 5 000 kr",
    setupSaker: "Engångsimplementation 15 000 kr",
    featMin1: "100 fakturor / mån",
    featMin2: "OCR-extraktion",
    featMin3: "Excel-export",
    featMin4: "Grundläggande fältvalidering",
    featMin5: "E-postsupport",
    featSakerVolume: "500 fakturor / mån",
    featSaker1: "Allt i Minimum",
    featSaker2: "Anpassad export",
    featSaker3: "Automatisk prisverifiering mot avtal",
    featSaker4: "Identifierar överdebitering",
    featSaker5: "Historik och spårbarhet",
    featSaker6: "Prioriterad support",
    featSaker7: "Databaslagring & historik",
    featEntVolume: "1000+ fakturor / mån",
    featEnt1: "Allt i Säker",
    featEnt2: "API-integration",
    featEnt3: "Dashboard / BI-export",
    featEnt4: "Multi-entity support",
    featEnt5: "SLA",
    featEnt6: "Dedikerad kontakt",
    faqTitle: "Vanliga frågor",
    faqQ1: "Vad gör Attestro?",
    faqA1: "Attestro omvandlar leverantörsfakturor till strukturerad data, validerar mot avtal och flaggar avvikelser automatiskt. Resultatet levereras i Excel-format eller integrerat mot ert ekonomisystem.",
    faqQ2: "Vilka branscher passar Attestro för?",
    faqA2: "Attestro är byggt för projektintensiva branscher som bygg och anläggning, transport och logistik, samt tjänsteföretag med underleverantörer — där fakturor är många, avtal komplexa och manuell kontroll inte räcker till.",
    faqQ3: "Behöver vi byta ekonomisystem för att använda Attestro?",
    faqA3: "Nej. Attestro fungerar vid sidan av ert befintliga ekonomisystem — ni behöver inte byta.",
    faqQ4: "Vad kostar Attestro?",
    faqA4: "Attestro erbjuds i tre planer: Minimum från 1 590 kr/mån (100 fakturor), Säker från 4 990 kr/mån (500 fakturor) och Enterprise (1000+ fakturor, pris enligt offert).",
    faqQ5: "Hur fungerar Attestro steg för steg?",
    faqA5: "1. Import: Ladda upp faktura i PDF eller bildformat — Attestro extraherar data automatiskt. 2. Validering: Systemet kontrollerar innehållet mot avtalade priser, projektvillkor och interna regler. 3. Struktur och export: Ni får strukturerad data i Excel-format eller integrerat mot ert ekonomisystem med spårbar kontrollhistorik.",
    contactUs: "Kontakta oss",
    langSv: "Svenska",
    langEn: "English",
  },
  en: {
    pageTitle: "Attestro — Invoices to structured data | Älgamo Software AB",
    pageDescription: "Attestro turns invoices into structured formats like Excel, with logic validation, error flagging, and automatic control against contracts and projects. From Älgamo Software AB.",
    pricingTitle: "Attestro pricing — Älgamo Software AB",
    pricingDescription: "Pricing plans for Attestro. Invoices to structured data with validation and contract and project control.",
    aboutPageTitle: "About us — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB builds Attestro — a tool to get invoices in order. We value clarity, quality, and long-term thinking.",
    navSolutions: "Features",
    navAbout: "About",
    navPricing: "Pricing",
    navContact: "Contact",
    ctaHeader: "Book a demo",
    heroBadge: "Swedish tool for invoice management",
    heroTitle: "Automate invoice control and stop errors before they cost you money.",
    heroLead: "Attestro converts supplier invoices to structured data, validates against contracts, and flags discrepancies automatically.",
    heroNoChange: "Attestro works alongside your existing accounting system — no switch required.",
    heroCtaPrimary: "Book a demo",
    heroCtaSecondary: "See pricing",
    heroCollab: "Developed in collaboration with contracting companies",
    solutionsTitle: "How it works",
    solutionsLead: "Three simple steps from invoice to clear control.",
    step1: "Upload invoice",
    step2: "Automatic validation against contracts",
    step3: "Get clear discrepancies and reports",
    processTitle: "From invoice to verified data",
    process1Title: "Import",
    process1Desc: "Upload invoices as PDF or image. Attestro automatically extracts relevant data such as supplier, line items, prices and project links.",
    process2Title: "Validation",
    process2Desc: "The system checks invoice content against agreed prices, project terms and internal rules. Deviations are identified immediately.",
    process3Title: "Structure and export",
    process3Desc: "You get structured data in Excel format or integrated with your accounting system. Deviations and control history are traceable.",
    processResult: "The result is fewer errors, less manual work and full control over costs per project.",
    audienceTitle: "Automate invoice control in construction and transport projects",
    audienceLead: "Attestro is built for project-intensive industries where invoices are many, contracts complex, and manual control isn't enough.",
    audienceConstructionTitle: "Construction and infrastructure",
    audienceConstructionDesc: "Check invoices against project contracts, change orders and unit price lists. Catch deviations before they affect the project result.",
    audienceTransportTitle: "Transport and logistics",
    audienceTransportDesc: "Verify freight invoices against agreed prices, zones and volumes. Identify overcharging automatically.",
    audienceServicesTitle: "Service companies with subcontractors",
    audienceServicesDesc: "Match invoices against hourly and framework agreements. Ensure every line is correct before payment.",
    aboutTitle: "Why Attestro exists",
    aboutText1: "Incorrect invoices, lack of control, and manual processes cost more than you think. Attestro gives you structured data, automatic validation against contracts, and clear discrepancies before errors affect the bottom line.",
    aboutText2: "You reduce manual work, increase traceability, and ensure every invoice matches your terms and projects.",
    aboutSubtitleCompany: "About Älgamo Software",
    aboutText3: "Älgamo Software AB develops Attestro, a tool for structured invoice handling and automatic validation against contracts and projects. The company was founded to solve a concrete problem in project-intensive businesses where manual controls create risk and inefficiency.",
    aboutSubtitleFounder: "Founder",
    aboutText4: "The company is run by Adam Älgamo, Master of Science in Engineering student in technical physics and electrical engineering. The work on Attestro is built on technical precision, structured problem-solving, and a long-term product perspective.",
    stat1Value: "Quality first",
    stat1Label: "How we build",
    stat2Value: "Sweden",
    stat2Label: "Where we're based",
    ctaTitle: "Try Attestro",
    ctaLead: "Book a demo or send a question. We're happy to explain how Attestro can help with invoices, validation, and control against contracts and projects.",
    footerTagline: "Attestro — invoices in order.",
    footerLegal: "Älgamo Software AB — Sweden",
    footerSupport: "Support:",
    pricingHeading: "Attestro pricing",
    pricingLead: "Choose a plan based on your volume and needs. All plans include conversion to structured data, validation, and error flagging.",
    pricingBindingLabel: "12 month commitment",
    pricingRecommended: "Recommended",
    planMinimum: "Minimum",
    planSaker: "Säker",
    planEnterprise: "Enterprise",
    priceMinimumDefault: "1,590 SEK/month",
    priceMinimumBinding: "1,350 SEK/month",
    priceSakerDefault: "4,990 SEK/month",
    priceSakerBinding: "4,240 SEK/month",
    priceEnterprise: "Price by quote",
    enterpriseNote: "Minimum 12-month agreement",
    setupMinimum: "One-time implementation 5,000 SEK",
    setupSaker: "One-time implementation 15,000 SEK",
    featMin1: "100 invoices / month",
    featMin2: "OCR extraction",
    featMin3: "Excel export",
    featMin4: "Basic field validation",
    featMin5: "Email support",
    featSakerVolume: "500 invoices / month",
    featSaker1: "Everything in Minimum",
    featSaker2: "Custom export",
    featSaker3: "Automatic price verification against contracts",
    featSaker4: "Identifies overcharging",
    featSaker5: "History and traceability",
    featSaker6: "Priority support",
    featSaker7: "Database storage & history",
    featEntVolume: "1000+ invoices / month",
    featEnt1: "Everything in Säker",
    featEnt2: "API integration",
    featEnt3: "Dashboard / BI export",
    featEnt4: "Multi-entity support",
    featEnt5: "SLA",
    featEnt6: "Dedicated contact",
    faqTitle: "Frequently asked questions",
    faqQ1: "What does Attestro do?",
    faqA1: "Attestro converts supplier invoices to structured data, validates against contracts, and flags discrepancies automatically. The result is delivered in Excel format or integrated with your accounting system.",
    faqQ2: "Which industries is Attestro suited for?",
    faqA2: "Attestro is built for project-intensive industries such as construction and infrastructure, transport and logistics, and service companies with subcontractors — where invoices are many, contracts complex, and manual control isn't enough.",
    faqQ3: "Do we need to switch accounting system to use Attestro?",
    faqA3: "No. Attestro works alongside your existing accounting system — no switch required.",
    faqQ4: "What does Attestro cost?",
    faqA4: "Attestro is offered in three plans: Minimum from 1,590 SEK/month (100 invoices), Säker from 4,990 SEK/month (500 invoices), and Enterprise (1000+ invoices, price by quote).",
    faqQ5: "How does Attestro work step by step?",
    faqA5: "1. Import: Upload an invoice as PDF or image — Attestro extracts data automatically. 2. Validation: The system checks the content against agreed prices, project terms, and internal rules. 3. Structure and export: You get structured data in Excel format or integrated with your accounting system with traceable control history.",
    contactUs: "Contact us",
    langSv: "Svenska",
    langEn: "English",
  },
};

function getLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sv") return stored;
  } catch {
    // ignore
  }
  return "sv";
}

function setLang(lang: Lang): void {
  if (lang !== "sv" && lang !== "en") return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  document.documentElement.lang = lang;
  document.documentElement.classList.remove("lang-sv", "lang-en");
  document.documentElement.classList.add("lang-" + lang);
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updateMeta(lang);
}

function applyTranslations(lang: Lang): void {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = key ? t[key] : undefined;
    if (value == null) return;
    if (el.getAttribute("data-i18n-html") !== null) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

function updateMeta(lang: Lang): void {
  const t = translations[lang];
  if (!t) return;
  const isPricing = document.body.querySelector(".pricing") != null;
  const isAbout = document.body.querySelector(".about") != null;
  let title = t.pageTitle;
  let desc = t.pageDescription;
  if (isPricing) {
    title = t.pricingTitle;
    desc = t.pricingDescription;
  } else if (isAbout) {
    title = t.aboutPageTitle;
    desc = t.aboutPageDescription;
  }
  document.title = title;
  const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", desc);
}

function updateLangSwitcher(lang: Lang): void {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const target = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", target === lang);
    btn.setAttribute("aria-pressed", target === lang ? "true" : "false");
  });
}

function initLang(): void {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.classList.add("lang-" + lang);
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updateMeta(lang);
}

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".logo-link").forEach((link) => {
  const img = link.querySelector<HTMLImageElement>(".logo-img");
  const fallback = link.querySelector<HTMLElement>(".logo-fallback");
  if (img && fallback) {
    img.addEventListener("error", () => {
      img.style.display = "none";
      fallback.style.display = "inline";
    });
  }
});

function initLangSwitcher(): void {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (lang === "sv" || lang === "en") setLang(lang);
    });
  });
}

function initPricingToggle(): void {
  const section = document.querySelector<HTMLElement>(".pricing");
  const toggle = document.getElementById("pricing-binding-toggle");
  if (!section || !toggle) return;
  toggle.addEventListener("click", () => {
    const on = toggle.getAttribute("aria-checked") === "true";
    toggle.setAttribute("aria-checked", String(!on));
    if (on) {
      section.classList.add("pricing-binding-leaving");
      section.classList.remove("pricing-binding-on");
      setTimeout(() => section.classList.remove("pricing-binding-leaving"), 720);
    } else {
      section.classList.add("pricing-binding-on");
    }
  });
}

function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const panel = document.getElementById("mobile-menu");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}

initLang();
initLangSwitcher();
initPricingToggle();
initMobileMenu();
