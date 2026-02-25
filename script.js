// Älgamo Software AB — i18n and smooth scroll
const STORAGE_KEY = "algamo-lang";

const translations = {
  sv: {
    // Meta (set via JS)
    pageTitle: "Attestro — Fakturor i strukturerat format | Älgamo Software AB",
    pageDescription: "Attestro gör fakturor till strukturerad data (t.ex. Excel), med logikvalidering, felflaggor och automatisk kontroll mot avtal och projekt. Från Älgamo Software AB.",
    pricingTitle: "Priser för Attestro — Älgamo Software AB",
    pricingDescription: "Prisplaner för Attestro. Fakturor till strukturerad data med validering och kontroll mot avtal och projekt.",
    // Nav
    navSolutions: "Funktioner",
    navAbout: "Om oss",
    navPricing: "Priser",
    navContact: "Kontakt",
    ctaHeader: "Boka demo",
    // Hero
    heroBadge: "Svenskt verktyg för fakturahantering",
    heroTitle: "Attestro — fakturor till <em>strukturerad data</em>",
    heroLead: "Attestro omvandlar fakturor automatiskt till strukturerade format som Excel, med logikvalidering och felflaggor. Verktyget kontrollerar även värden mot era kunders avtal och projekt.",
    heroNoChange: "Attestro fungerar vid sidan av ert befintliga ekonomisystem — ni behöver inte byta.",
    heroCtaPrimary: "Boka en demo",
    heroCtaSecondary: "Se funktioner",
    // Features (ex-Solutions)
    solutionsTitle: "Vad Attestro gör",
    solutionsLead: "Strukturerad data, validering och kontroll — så att era fakturor blir tydliga och styrda. Verktyget fungerar vid sidan av ert ekonomisystem.",
    sol1Title: "Strukturerade format",
    sol1Text: "Fakturor omvandlas automatiskt till Excel och andra strukturerade format. Ni får enhetliga, användbara data istället för lösa PDF:er och papper.",
    sol2Title: "Validering och felflaggor",
    sol2Text: "Logikvalidering genomgår data och flaggar potentiella fel. Ni ser direkt vad som behöver dubbelkollas innan det når bokföringen.",
    sol3Title: "Kontroll mot avtal och projekt",
    sol3Text: "Attestro kontrollerar automatiskt värden mot era kunders avtal och projekt, så att fakturorna stämmer med det som är avtalat.",
    // About
    aboutTitle: "Bakom Attestro",
    aboutText1: "Älgamo Software AB är ett svenskt mjukvaruföretag som bygger Attestro — ett verktyg för att få ordning på fakturor. Vi värderar tydlighet, kvalitet och långsiktighet.",
    aboutText2: "Attestro riktar sig till er som vill automatisera fakturahantering, minska fel och styra mot avtal och projekt. Kontakta oss för en demo eller mer information.",
    stat1Value: "Kvalitet först",
    stat1Label: "Så bygger vi",
    stat2Value: "Sverige",
    stat2Label: "Där vi finns",
    // CTA
    ctaTitle: "Prova Attestro",
    ctaLead: "Boka en demo eller skicka en fråga. Vi berättar gärna mer om hur Attestro kan hjälpa er med fakturor, validering och kontroll mot avtal och projekt.",
    // Footer
    footerTagline: "Attestro — fakturor i ordning.",
    footerLegal: "Älgamo Software AB — Sverige",
    footerSupport: "Kundsupport:",
    // Pricing page
    pricingHeading: "Priser för Attestro",
    pricingLead: "Välj plan utifrån er volym och behov. Alla planer inkluderar omvandling till strukturerad data, validering och felflaggor.",
    planStarter: "Starter",
    planProfessional: "Professional",
    planEnterprise: "Enterprise",
    priceCustom: "Eget pris",
    planStarterDesc: "För mindre volymer. Kärnfunktioner: export till Excel och validering.",
    planProfessionalDesc: "För växande behov. Inkluderar kontroll mot avtal och projekt samt högre volym.",
    planEnterpriseDesc: "Dedikerad kapacitet, SLA och anpassade krav.",
    featureWebApp: "Export till Excel och strukturerade format",
    featureIterations: "Logikvalidering och felflaggor",
    featureDocs: "Dokumentation",
    featureFullstack: "Större fakturavolym",
    featureSupport: "Kontroll mot avtal och projekt",
    featureIntegrations: "Löpande support",
    featureStrategy: "API och integrationer",
    featureDedicated: "Dedikerat team",
    featureSla: "SLA och support",
    featureScope: "Anpassat omfång",
    contactUs: "Kontakta oss",
    langSv: "Svenska",
    langEn: "English",
  },
  en: {
    pageTitle: "Attestro — Invoices to structured data | Älgamo Software AB",
    pageDescription: "Attestro turns invoices into structured formats like Excel, with logic validation, error flagging, and automatic control against contracts and projects. From Älgamo Software AB.",
    pricingTitle: "Attestro pricing — Älgamo Software AB",
    pricingDescription: "Pricing plans for Attestro. Invoices to structured data with validation and contract and project control.",
    navSolutions: "Features",
    navAbout: "About",
    navPricing: "Pricing",
    navContact: "Contact",
    ctaHeader: "Book a demo",
    heroBadge: "Invoice intelligence from Sweden",
    heroTitle: "Attestro — invoices into <em>structured data</em>",
    heroLead: "Attestro automatically turns invoices into structured formats such as Excel, with logic validation and error flagging. It also controls values against your customers' contracts and projects.",
    heroNoChange: "Attestro works alongside your existing economy system — no change required.",
    heroCtaPrimary: "Book a demo",
    heroCtaSecondary: "See features",
    solutionsTitle: "What Attestro does",
    solutionsLead: "Structured data, validation, and control — so your invoices stay clear and governed. The tool works alongside your existing economy system.",
    sol1Title: "Structured formats",
    sol1Text: "Invoices are converted automatically to Excel and other structured formats. You get consistent, usable data instead of loose PDFs and paper.",
    sol2Title: "Validation & error flagging",
    sol2Text: "Logic validation runs through the data and flags potential errors. You see what needs a double-check before it reaches the books.",
    sol3Title: "Contract & project control",
    sol3Text: "Attestro automatically checks values against your customers' contracts and projects, so invoices match what was agreed.",
    aboutTitle: "Behind Attestro",
    aboutText1: "Älgamo Software AB is a Swedish software company that builds Attestro — a tool to get invoices in order. We value clarity, quality, and long-term thinking.",
    aboutText2: "Attestro is for teams who want to automate invoice handling, reduce errors, and control against contracts and projects. Get in touch for a demo or more information.",
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
    planStarter: "Starter",
    planProfessional: "Professional",
    planEnterprise: "Enterprise",
    priceCustom: "Custom",
    planStarterDesc: "For smaller volumes. Core features: Excel export and validation.",
    planProfessionalDesc: "For growing needs. Includes contract and project control and higher volume.",
    planEnterpriseDesc: "Dedicated capacity, SLA, and custom requirements.",
    featureWebApp: "Export to Excel and structured formats",
    featureIterations: "Logic validation and error flagging",
    featureDocs: "Documentation",
    featureFullstack: "Higher invoice volume",
    featureSupport: "Contract & project control",
    featureIntegrations: "Ongoing support",
    featureStrategy: "API and integrations",
    featureDedicated: "Dedicated team",
    featureSla: "SLA & support",
    featureScope: "Custom scope",
    contactUs: "Contact us",
    langSv: "Svenska",
    langEn: "English",
  },
};

function getLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sv") return stored;
  } catch (_) {}
  return "sv";
}

function setLang(lang) {
  if (lang !== "sv" && lang !== "en") return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
  document.documentElement.lang = lang;
  document.documentElement.classList.remove("lang-sv", "lang-en");
  document.documentElement.classList.add("lang-" + lang);
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updateMeta(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t[key];
    if (value == null) return;
    if (el.getAttribute("data-i18n-html") !== null) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

function updateMeta(lang) {
  const t = translations[lang];
  if (!t) return;
  const isPricing = document.body.querySelector(".pricing") != null;
  document.title = isPricing ? t.pricingTitle : t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", isPricing ? t.pricingDescription : t.pageDescription);
}

function updateLangSwitcher(lang) {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const target = btn.getAttribute("data-lang-btn");
    btn.classList.toggle("is-active", target === lang);
    btn.setAttribute("aria-pressed", target === lang ? "true" : "false");
  });
}

function initLang() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.classList.add("lang-" + lang);
  applyTranslations(lang);
  updateLangSwitcher(lang);
  updateMeta(lang);
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Logo fallback on image error
document.querySelectorAll(".logo-link").forEach((link) => {
  const img = link.querySelector(".logo-img");
  const fallback = link.querySelector(".logo-fallback");
  if (img && fallback) {
    img.addEventListener("error", () => {
      img.style.display = "none";
      fallback.style.display = "inline";
    });
  }
});

function initLangSwitcher() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (lang === "sv" || lang === "en") setLang(lang);
    });
  });
}

// Init language (default Swedish)
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initLangSwitcher();
});
