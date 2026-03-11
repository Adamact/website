// Älgamo Software AB — i18n and smooth scroll
const STORAGE_KEY = "algamo-lang";
const CONSENT_KEY = "algamo-consent";

interface ConsentData {
  analytics: boolean;
  timestamp: string;
}

type Lang = "sv" | "en";
type Translations = Record<Lang, Record<string, string>>;

const translations: Translations = {
  sv: {
    pageTitle: "Attestro — Fakturor i strukturerat format | Älgamo Software AB",
    pageDescription: "Attestro gör fakturor till strukturerad data (t.ex. Excel), med logikvalidering, felflaggor och automatisk kontroll mot avtal och projekt. Från Älgamo Software AB.",
    pricingTitle: "Priser för Attestro — Älgamo Software AB",
    pricingDescription: "Prisplaner för Attestro. Fakturor till strukturerad data med validering och kontroll mot avtal och projekt.",
    aboutPageTitle: "Om oss — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB bygger Attestro, ett verktyg för att få ordning på fakturor.",
    navSolutions: "Funktioner",
    navAbout: "Om oss",
    navPricing: "Priser",
    navContact: "Kontakt",
    navBlog: "Nyheter",
    ctaHeader: "Boka demo",
    heroBadge: "Svenskt verktyg för fakturahantering",
    heroTitle: "Automatisera fakturakontroll och stoppa fel innan de kostar pengar.",
    heroLead: "Attestro omvandlar leverantörsfakturor till strukturerad data, validerar mot avtal och flaggar avvikelser automatiskt.",
    heroNoChange: "Ni behöver inte byta ekonomisystem. Attestro fungerar vid sidan av det ni har idag.",
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
    process1Desc: "Ladda upp fakturan som PDF eller bild. Attestro läser av leverantör, artikelrader, priser och projektkoppling.",
    process2Title: "Validering",
    process2Desc: "Fakturans innehåll kontrolleras mot avtalade priser, projektvillkor och interna regler. Avvikelser flaggas direkt.",
    process3Title: "Struktur och export",
    process3Desc: "Ni får ut strukturerad data i Excel eller integrerat mot ert ekonomisystem, med full historik och spårbarhet.",
    processResult: "Färre fel, mindre manuellt arbete och bättre kontroll över kostnaderna i varje projekt.",
    audienceTitle: "Automatisera fakturakontroll i bygg- och transportprojekt",
    audienceLead: "Attestro är byggt för projektintensiva branscher med många fakturor och komplexa avtal, där manuell kontroll helt enkelt inte räcker till.",
    audienceConstructionTitle: "Bygg och anläggning",
    audienceConstructionDesc: "Kontrollera fakturor mot projektavtal, ÄTA och à-prislistor. Fånga avvikelser innan de påverkar projektresultatet.",
    audienceTransportTitle: "Transport och logistik",
    audienceTransportDesc: "Verifiera fraktfakturor mot avtalade priser, zoner och volymer. Identifiera överdebitering automatiskt.",
    audienceServicesTitle: "Tjänsteföretag med underleverantörer",
    audienceServicesDesc: "Matcha fakturor mot timavtal och ramavtal. Säkerställ att varje rad stämmer innan betalning.",
    aboutTitle: "Varför Attestro finns",
    aboutText1: "Felaktiga fakturor och manuella kontroller kostar mer än de flesta tror. Med Attestro får ni strukturerad data och automatisk validering mot avtal, så att avvikelser syns innan de påverkar resultatet.",
    aboutText2: "Det betyder mindre manuellt arbete, bättre spårbarhet och att varje faktura faktiskt matchar era villkor.",
    aboutSubtitleCompany: "Om Älgamo Software",
    aboutText3: "Älgamo Software AB utvecklar Attestro, ett verktyg för strukturerad fakturahantering och automatisk validering mot avtal. Bolaget startades för att lösa ett problem vi sett på nära håll: manuell fakturakontroll i projektintensiva verksamheter tar för mycket tid och skapar onödig risk.",
    aboutSubtitleFounder: "Grundare",
    aboutText4: "Bolaget drivs av Adam Älgamo, civilingenjörsstudent inom teknisk fysik och elektroteknik.",
    ctaTitle: "Prova Attestro",
    ctaLead: "Boka en demo eller skicka en fråga. Vi berättar gärna mer om hur Attestro kan hjälpa er.",
    footerTagline: "Attestro. Fakturor i ordning.",
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
    faqQ1: "Vad är Attestro?",
    faqA1: "Attestro är ett verktyg som automatiskt analyserar leverantörsfakturor i entreprenadprojekt. Systemet extraherar fakturadata, jämför mot avtal och projektprislistor och flaggar avvikelser innan fakturan attesteras.",
    faqQ2: "Vilka företag passar Attestro för?",
    faqA2: "Attestro är främst utvecklat för:<br>• entreprenadföretag<br>• byggbolag<br>• transport- och materialleverantörer<br>• projektorganisationer med många leverantörsfakturor",
    faqQ3: "Vad kontrolleras och vilken data extraheras?",
    faqA3: "Attestro extraherar leverantör, fakturanummer, datum, projekt/littra, transaktioner, mängd och pris per enhet. Systemet kontrollerar:<br>• pris mot projektets prislista<br>• projekt- eller littra-koppling<br>• avvikelser mot avtal",
    faqQ4: "Hur börjar man använda Attestro?",
    faqA4: "• Ladda upp exempel på fakturor från era leverantörer<br>• Systemet konfigureras för era mallar<br>• Attestro börjar analysera nya fakturor automatiskt",
    faqQ5: "Behöver vi ändra vårt ekonomisystem?",
    faqA5: "Nej. Attestro är byggt som ett komplement till befintliga ekonomisystem.",
    faqQ6: "Kan vi testa innan vi bestämmer oss?",
    faqA6: "Ja. Vi erbjuder pilotprojekt och demo så att ni kan utvärdera Attestro innan ni binder er.",
    contactUs: "Kontakta oss",
    langSv: "Svenska",
    langEn: "English",
    // Pilot CTA
    pilotTitle: "Vi söker pilotpartners",
    pilotLead: "Vi bygger Attestro tillsammans med tidiga användare. Bli en av de första att testa och var med och påverka hur produkten utvecklas.",
    pilotCta: "Ansök om pilotplats",
    // Contact form
    formCompany: "Företagsnamn",
    formEmail: "E-post",
    formVolume: "Antal fakturor/mån",
    formVolumeDefault: "Välj…",
    formVolume1: "<100",
    formVolume2: "100–500",
    formVolume3: "500–1 000",
    formVolume4: "1 000+",
    formMessage: "Meddelande",
    formSubmit: "Skicka förfrågan",
    formPrivacyNotice: "Formuläret öppnar ditt e-postprogram. Ingen data lagras på våra servrar.",
    // Trust strip
    trustSweden: "Data lagras i Sverige",
    trustGdpr: "GDPR-kompatibelt",
    trustEncryption: "Krypterad dataöverföring",
    trustNoSharing: "Ingen delning utan samtycke",
    // Footer
    footerSecurity: "Säkerhet",
    footerPrivacy: "Integritetspolicy",
    // Security page
    securityPageTitle: "Säkerhet — Attestro | Älgamo Software AB",
    securityPageDescription: "Hur Attestro hanterar data: lagring i Sverige, GDPR-efterlevnad, kryptering, åtkomstkontroll och underbiträden.",
    securityTitle: "Säkerhet och datahantering",
    securityLead: "Här beskriver vi hur Attestro hanterar och skyddar era uppgifter.",
    secStorageTitle: "Datalagring och infrastruktur",
    secStorageText: "All data lagras på servrar inom Sverige/EU. Vi använder etablerade molntjänster med datacenter i Sverige för att säkerställa att er data aldrig lämnar landet.",
    secGdprTitle: "GDPR och personuppgifter",
    secGdprText: "Attestro är byggt för GDPR-efterlevnad. Vi behandlar personuppgifter enligt gällande dataskyddslagstiftning. Personuppgiftsbiträdesavtal (DPA) tillhandahålls på begäran. Se vår <a href=\"privacy.html\">integritetspolicy</a> för fullständig information om hur vi behandlar personuppgifter.",
    secEncryptionTitle: "Kryptering",
    secEncryptionText: "All dataöverföring sker via TLS-kryptering (HTTPS). Data krypteras även i vila (at rest) med branschstandard AES-256.",
    secAccessTitle: "Åtkomstkontroll",
    secAccessText: "Varje kund har isolerad data. Åtkomst styrs per organisation och användare, och internt tillämpar vi principen om minsta möjliga behörighet.",
    secSubprocessorsTitle: "Underbiträden",
    secSubprocessorsText: "Vi använder ett begränsat antal underbiträden för drift och infrastruktur. En fullständig lista tillhandahålls i samband med avtal eller på begäran.",
    secContactTitle: "Kontakt för säkerhetsfrågor",
    secContactText: "Har ni frågor om säkerhet eller datahantering? Kontakta oss på <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Privacy page
    privacyPageTitle: "Integritetspolicy — Attestro | Älgamo Software AB",
    privacyPageDescription: "Integritetspolicy för Attestro och algamo.se. Hur vi hanterar personuppgifter, vilka uppgifter vi behandlar och dina rättigheter enligt GDPR.",
    privacyTitle: "Integritetspolicy",
    privacyLead: "Här beskriver vi hur Älgamo Software AB behandlar personuppgifter på denna webbplats och i tjänsten Attestro.",
    privacyLastUpdated: "Senast uppdaterad: 9 mars 2026",
    privacyControllerTitle: "Personuppgiftsansvarig",
    privacyControllerText: "Älgamo Software AB är personuppgiftsansvarig för behandlingen av personuppgifter på denna webbplats. Kontakta oss på <a href=\"mailto:support@algamo.se\">support@algamo.se</a> vid frågor om personuppgifter.",
    privacyDataTitle: "Vilka uppgifter vi behandlar",
    privacyDataText: "<strong>Språkpreferens:</strong> Vi sparar ert språkval (svenska/engelska) lokalt i er webbläsare (localStorage). Detta är ingen personuppgift och skickas aldrig till våra servrar.<br><br><strong>Kontaktförfrågningar:</strong> När ni skickar en förfrågan via kontaktformuläret öppnas ert eget e-postprogram. Meddelandet skickas direkt från er e-postklient — vi lagrar ingen data på våra servrar via formuläret. När vi tar emot ert e-postmeddelande behandlar vi er e-postadress, eventuellt namn och meddelandeinnehåll för att besvara er förfrågan.<br><br><strong>Analyticscookies:</strong> Om ni samtycker via vår cookiebanner sätts cookies av Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) för anonym webbplatsstatistik. Se avsnittet \"Cookies och analys\" nedan.<br><br><strong>Serverloggar:</strong> Webbplatsen hostas av GitHub Pages (se avsnittet Hosting nedan). GitHub kan behandla besökares IP-adresser i sina serverloggar i samband med leverans av webbplatsen.",
    privacyLegalBasisTitle: "Rättslig grund",
    privacyLegalBasisText: "<strong>Språkpreferens:</strong> Berättigat intresse (artikel 6.1 f GDPR) — för att förbättra användarupplevelsen.<br><br><strong>Kontaktförfrågningar:</strong> Åtgärder som föregår avtal på den registrerades begäran (artikel 6.1 b GDPR) — ni kontaktar oss om en potentiell affärsrelation. Ni kan när som helst begära att vi raderar era uppgifter.<br><br><strong>Analyticscookies:</strong> Samtycke (artikel 6.1 a GDPR) — laddas först efter ert aktiva godkännande via cookiebannern. Ni kan återkalla samtycket när som helst.<br><br><strong>Hosting/serverloggar:</strong> Berättigat intresse (artikel 6.1 f GDPR) — nödvändigt för att leverera webbplatsen.",
    privacyRetentionTitle: "Lagringstid",
    privacyRetentionText: "<strong>Språkpreferens:</strong> Lagras i er webbläsare tills ni rensar den eller byter webbläsare. Vi har ingen åtkomst till denna data.<br><br><strong>Kontaktförfrågningar:</strong> E-postmeddelanden bevaras så länge det är relevant för den pågående affärsdialogen och raderas därefter. Ni kan begära radering när som helst.<br><br><strong>Analyticscookies:</strong> Cookies (<code>_ga</code>, <code>_ga_*</code>) lagras i upp till 14 månader. Samtyckesvalet lagras i er webbläsare (localStorage) utan tidsbegränsning.<br><br><strong>Serverloggar:</strong> Hanteras av GitHub enligt deras integritetspolicy. Vi har ingen åtkomst till dessa loggar.",
    privacyHostingTitle: "Hosting",
    privacyHostingText: "Webbplatsen hostas av GitHub Pages (GitHub, Inc., ett Microsoft-företag, USA). GitHub kan behandla besökares IP-adresser i sina serverloggar. GitHub är certifierat under EU-US Data Privacy Framework. Mer information finns i <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">GitHubs integritetspolicy</a>.",
    privacyThirdPartyTitle: "Tredjepartsleverantörer",
    privacyThirdPartyText: "Typsnitt är lokalt hostade. Vi laddar inga externa skript eller bilder från tredje part.<br><br><strong>GitHub Pages</strong> (GitHub, Inc., ett Microsoft-företag, USA) — hosting av webbplatsen. Se ovan.<br><br><strong>Google LLC</strong> (USA) — Google Analytics 4 för anonym webbplatsstatistik. Laddas enbart efter samtycke. Google är certifierat under EU-US Data Privacy Framework. Mer information finns i <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Googles integritetspolicy</a>.",
    privacyRightsTitle: "Dina rättigheter",
    privacyRightsText: "Enligt GDPR har du rätt att:<br>• begära tillgång till dina personuppgifter (artikel 15)<br>• begära rättelse av felaktiga uppgifter (artikel 16)<br>• begära radering av dina uppgifter (artikel 17)<br>• begära begränsning av behandling (artikel 18)<br>• begära dataportabilitet (artikel 20)<br>• invända mot behandling (artikel 21)<br>• återkalla samtycke när som helst, utan att det påverkar lagligheten av behandling som utförts innan återkallelsen (artikel 7.3)<br>• lämna klagomål till Integritetsskyddsmyndigheten (IMY), <a href=\"https://www.imy.se\" target=\"_blank\" rel=\"noopener noreferrer\">www.imy.se</a>, <a href=\"mailto:imy@imy.se\">imy@imy.se</a>",
    privacyContactTitle: "Kontakt",
    privacyContactText: "Har du frågor om hur vi hanterar personuppgifter? Kontakta oss på <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Pricing comparison table
    comparisonTitle: "Jämför planer",
    comparisonFeature: "Funktion",
    compOcr: "OCR-extraktion",
    compExcel: "Excel-export",
    compValidation: "Grundläggande fältvalidering",
    compCustomExport: "Anpassad export",
    compPriceVerify: "Prisverifiering mot avtal",
    compOvercharge: "Identifiering av överdebitering",
    compHistory: "Historik och spårbarhet",
    compApi: "API-integration",
    compDashboard: "Dashboard / BI-export",
    compMultiEntity: "Multi-entity support",
    compSla: "SLA",
    // Pricing FAQ
    pricingFaqTitle: "Vanliga frågor om priser",
    pricingFaqQ1: "Kan jag byta plan?",
    pricingFaqA1: "Ja. Ni kan uppgradera eller nedgradera er plan när som helst. Ändringen träder i kraft vid nästa faktureringsperiod.",
    pricingFaqQ2: "Vad händer om vi överskrider fakturagränsen?",
    pricingFaqA2: "Vi hör av oss innan gränsen nås så att ni kan uppgradera. Inga dolda avgifter.",
    pricingFaqQ3: "Ingår implementation i priset?",
    pricingFaqA3: "Implementation debiteras som en engångskostnad utöver månadspriset. Den omfattar konfigurering av era faktureringsmallar och avtalsinställningar.",
    // About values
    valuesTitle: "Våra värderingar",
    valuePrecisionTitle: "Precision",
    valuePrecisionDesc: "Varje siffra, varje rad, varje kontroll ska stämma. Vi bygger mjukvara som verifierar, inte gissar.",
    valueTransparencyTitle: "Transparens",
    valueTransparencyDesc: "Ni ser exakt vad ni betalar och hur era fakturor hanteras. Inga dolda avgifter, inga överraskningar.",
    valueLongtermTitle: "Långsiktighet",
    valueLongtermDesc: "Vi bygger för att hålla. Det gäller både tekniken och relationerna med våra kunder.",
    // Cookie consent
    consentText: "Vi använder cookies för anonym webbplatsstatistik (Google Analytics). Ingen data används för marknadsföring.",
    consentAccept: "Acceptera",
    consentReject: "Avvisa",
    consentPrivacyLink: "Läs mer i vår integritetspolicy",
    footerCookies: "Cookie-inställningar",
    // Privacy: cookies section
    privacyCookieTitle: "Cookies och analys",
    privacyCookieText: "Vi använder Google Analytics 4 (GA4) för anonym webbplatsstatistik. GA4 sätter cookies (<code>_ga</code>, <code>_ga_*</code>) som lagras i upp till 14 månader. Data som samlas in inkluderar sidvisningar, tid på sidan, hänvisningskälla och enhetstyp. Ingen data används för marknadsföring eller delas med tredje part utöver Google.<br><br>GA4 laddas <strong>endast efter ditt aktiva samtycke</strong> via cookiebannern. Du kan när som helst ändra ditt val.",
    privacyCookieReset: "Ändra cookie-inställningar",
    // Skip link
    skipToContent: "Hoppa till innehåll",
    // Breadcrumb
    breadcrumbHome: "Hem",
    // 404 page
    notfoundPageTitle: "Sidan hittades inte — Älgamo Software AB",
    notfoundPageDescription: "Sidan du söker finns inte. Gå tillbaka till startsidan.",
    notfoundTitle: "Sidan hittades inte",
    notfoundText: "Sidan du letar efter finns inte eller har flyttats.",
    notfoundLink: "Tillbaka till startsidan",
    // Pricing CTA
    pricingCtaTitle: "Redo att testa?",
    pricingCtaLead: "Kontakta oss för en demo eller fråga om hur Attestro kan hjälpa er verksamhet.",
    pricingCtaCta: "Kontakta oss",
    // Blog page
    blogPageTitle: "Nyheter — Attestro | Älgamo Software AB",
    blogPageDescription: "Senaste nyheterna från Attestro och Älgamo Software AB. Uppdateringar om produkten, branschen och företaget.",
    blogTitle: "Nyheter",
    blogLead: "Uppdateringar från Attestro och Älgamo Software AB.",
    blogEmpty: "Inga nyheter ännu. Följ oss på <a href=\"https://www.linkedin.com/company/%C3%A4lgamo-software-ab/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> för uppdateringar.",
    blogPost1Title: "Webbplatsen är lanserad!",
    blogPost1Body: "Vi är glada att kunna presentera vår nya webbplats för Attestro. Här kommer ni kunna följa vår resa och ta del av nyheter om produkten och företaget. Välkomna!",
    footerBlog: "Nyheter",
    // Calculator
    calcTitle: "Hur mycket tid kan ni spara?",
    calcLead: "Uppskatta hur mycket pengar per månad Attestro kan spara åt ert team.",
    calcInvoicesLabel: "Antal fakturor/mån",
    calcMinutesLabel: "Tid per faktura (min)",
    calcCostLabel: "Kostnad per timme",
    calcCostUnit: "kr",
    calcErrorRateLabel: "Andel fakturor med fel",
    calcErrorCostLabel: "Snittförlust per felaktig faktura",
    calcTimeSavings: "Tidsbesparingar",
    calcErrorSavings: "Minskade felkostnader",
    calcTotalPrefix: "Total besparing",
    calcTotalSuffix: "kr per månad",
    calcAssumption: "Uppskattning baserad på 60 % minskad granskningstid och 80 % minskad risk för att felaktiga fakturor passerar.",
    // Form validation
    formEmailRequired: "E-post krävs",
  },
  en: {
    pageTitle: "Attestro — Invoices to structured data | Älgamo Software AB",
    pageDescription: "Attestro turns invoices into structured formats like Excel, with logic validation, error flagging, and automatic control against contracts and projects. From Älgamo Software AB.",
    pricingTitle: "Attestro pricing — Älgamo Software AB",
    pricingDescription: "Pricing plans for Attestro. Invoices to structured data with validation and contract and project control.",
    aboutPageTitle: "About us — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB builds Attestro, a tool to get invoices in order.",
    navSolutions: "Features",
    navAbout: "About",
    navPricing: "Pricing",
    navContact: "Contact",
    navBlog: "News",
    ctaHeader: "Book a demo",
    heroBadge: "Swedish tool for invoice management",
    heroTitle: "Automate invoice control and stop errors before they cost you money.",
    heroLead: "Attestro converts supplier invoices to structured data, validates against contracts, and flags discrepancies automatically.",
    heroNoChange: "You don't need to change your accounting system. Attestro works alongside what you already have.",
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
    process1Desc: "Upload the invoice as a PDF or image. Attestro reads the supplier, line items, prices and project references.",
    process2Title: "Validation",
    process2Desc: "The invoice is checked against agreed prices, project terms and your internal rules. Deviations are flagged straight away.",
    process3Title: "Structure and export",
    process3Desc: "You get structured data in Excel or fed into your accounting system, with full history and traceability.",
    processResult: "Fewer errors, less manual work and better cost control on every project.",
    audienceTitle: "Automate invoice control in construction and transport projects",
    audienceLead: "Attestro is built for project-heavy industries with lots of invoices and complex contracts, where manual checks just don't cut it.",
    audienceConstructionTitle: "Construction and infrastructure",
    audienceConstructionDesc: "Check invoices against project contracts, change orders and unit price lists. Catch deviations before they affect the project result.",
    audienceTransportTitle: "Transport and logistics",
    audienceTransportDesc: "Verify freight invoices against agreed prices, zones and volumes. Identify overcharging automatically.",
    audienceServicesTitle: "Service companies with subcontractors",
    audienceServicesDesc: "Match invoices against hourly and framework agreements. Ensure every line is correct before payment.",
    aboutTitle: "Why Attestro exists",
    aboutText1: "Wrong invoices and manual checks cost more than most people think. Attestro gives you structured data and automatic validation against contracts, so discrepancies show up before they hit your bottom line.",
    aboutText2: "That means less manual work, better traceability, and knowing that every invoice actually matches your terms.",
    aboutSubtitleCompany: "About Älgamo Software",
    aboutText3: "Älgamo Software AB develops Attestro, a tool for structured invoice handling and automatic validation against contracts. The company was started to solve a problem we've seen up close: manual invoice checks in project-heavy businesses take too much time and create unnecessary risk.",
    aboutSubtitleFounder: "Founder",
    aboutText4: "The company is run by Adam Älgamo, engineering student in applied physics and electrical engineering.",
    ctaTitle: "Try Attestro",
    ctaLead: "Book a demo or send us a question. We're happy to tell you more about how Attestro can help.",
    footerTagline: "Attestro. Invoices in order.",
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
    faqQ1: "What is Attestro?",
    faqA1: "Attestro is a tool that automatically analyzes supplier invoices in construction projects. The system extracts invoice data, compares it against contracts and project price lists, and flags discrepancies before the invoice is approved.",
    faqQ2: "Which companies is Attestro suited for?",
    faqA2: "Attestro is primarily developed for:<br>• contracting companies<br>• construction companies<br>• transport and material suppliers<br>• project organizations with many supplier invoices",
    faqQ3: "What is checked and what data is extracted?",
    faqA3: "Attestro extracts supplier, invoice number, date, project/cost code, transactions, quantity, and price per unit. The system checks:<br>• price against the project's price list<br>• project or cost code linking<br>• discrepancies against contracts",
    faqQ4: "How do you get started with Attestro?",
    faqA4: "• Upload sample invoices from your suppliers<br>• The system is configured for your templates<br>• Attestro starts analyzing new invoices automatically",
    faqQ5: "Do we need to change our accounting system?",
    faqA5: "No. Attestro is built as a complement to existing accounting systems.",
    faqQ6: "Can we try before committing?",
    faqA6: "Yes. We offer pilot projects and demos so you can evaluate Attestro before committing.",
    contactUs: "Contact us",
    langSv: "Svenska",
    langEn: "English",
    // Pilot CTA
    pilotTitle: "We're looking for pilot partners",
    pilotLead: "We're building Attestro together with early users. Be one of the first to try it and help shape the product.",
    pilotCta: "Apply for a pilot spot",
    // Contact form
    formCompany: "Company name",
    formEmail: "Email",
    formVolume: "Invoices per month",
    formVolumeDefault: "Select…",
    formVolume1: "<100",
    formVolume2: "100–500",
    formVolume3: "500–1,000",
    formVolume4: "1,000+",
    formMessage: "Message",
    formSubmit: "Send inquiry",
    formPrivacyNotice: "The form opens your email client. No data is stored on our servers.",
    // Trust strip
    trustSweden: "Data stored in Sweden",
    trustGdpr: "GDPR compliant",
    trustEncryption: "Encrypted data transfer",
    trustNoSharing: "No sharing without consent",
    // Footer
    footerSecurity: "Security",
    footerPrivacy: "Privacy policy",
    // Security page
    securityPageTitle: "Security — Attestro | Älgamo Software AB",
    securityPageDescription: "How Attestro handles data: storage in Sweden, GDPR compliance, encryption, access control, and subprocessors.",
    securityTitle: "Security and data handling",
    securityLead: "Here's how Attestro handles and protects your data.",
    secStorageTitle: "Data storage and infrastructure",
    secStorageText: "All data is stored on servers within Sweden/EU. We use established cloud services with data centers in Sweden to ensure your data never leaves the country.",
    secGdprTitle: "GDPR and personal data",
    secGdprText: "Attestro is built for GDPR compliance. We process personal data according to applicable data protection legislation. A Data Processing Agreement (DPA) is available on request. See our <a href=\"privacy.html\">privacy policy</a> for full details on how we process personal data.",
    secEncryptionTitle: "Encryption",
    secEncryptionText: "All data transfers use TLS encryption (HTTPS). Data is also encrypted at rest using industry-standard AES-256.",
    secAccessTitle: "Access control",
    secAccessText: "Each customer's data is isolated. Access is controlled per organization and user, and internally we follow the principle of least privilege.",
    secSubprocessorsTitle: "Subprocessors",
    secSubprocessorsText: "We use a limited number of subprocessors for operations and infrastructure. A complete list is provided in connection with contracts or on request.",
    secContactTitle: "Security contact",
    secContactText: "Have questions about security or data handling? Contact us at <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Privacy page
    privacyPageTitle: "Privacy policy — Attestro | Älgamo Software AB",
    privacyPageDescription: "Privacy policy for Attestro and algamo.se. How we handle personal data, what data we process, and your rights under GDPR.",
    privacyTitle: "Privacy policy",
    privacyLead: "Here we describe how Älgamo Software AB processes personal data on this website and in the Attestro service.",
    privacyLastUpdated: "Last updated: 9 March 2026",
    privacyControllerTitle: "Data controller",
    privacyControllerText: "Älgamo Software AB is the data controller for personal data processing on this website. Contact us at <a href=\"mailto:support@algamo.se\">support@algamo.se</a> for questions about personal data.",
    privacyDataTitle: "What data we process",
    privacyDataText: "<strong>Language preference:</strong> We store your language choice (Swedish/English) locally in your browser (localStorage). This is not personal data and is never sent to our servers.<br><br><strong>Contact inquiries:</strong> When you submit an inquiry via the contact form, your own email client opens. The message is sent directly from your email client — we do not store any data on our servers via the form. When we receive your email, we process your email address, any name provided, and message content in order to respond to your inquiry.<br><br><strong>Analytics cookies:</strong> If you consent via our cookie banner, cookies are set by Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) for anonymous website statistics. See the \"Cookies and analytics\" section below.<br><br><strong>Server logs:</strong> The website is hosted on GitHub Pages (see Hosting section below). GitHub may process visitor IP addresses in its server logs as part of delivering the website.",
    privacyLegalBasisTitle: "Legal basis",
    privacyLegalBasisText: "<strong>Language preference:</strong> Legitimate interest (Article 6.1 f GDPR) — to improve user experience.<br><br><strong>Contact inquiries:</strong> Pre-contractual measures at the data subject's request (Article 6.1 b GDPR) — you contact us about a potential business relationship. You may request deletion of your data at any time.<br><br><strong>Analytics cookies:</strong> Consent (Article 6.1 a GDPR) — loaded only after your active approval via the cookie banner. You may withdraw consent at any time.<br><br><strong>Hosting/server logs:</strong> Legitimate interest (Article 6.1 f GDPR) — necessary to deliver the website.",
    privacyRetentionTitle: "Retention period",
    privacyRetentionText: "<strong>Language preference:</strong> Stored in your browser until you clear it or switch browsers. We have no access to this data.<br><br><strong>Contact inquiries:</strong> Emails are retained as long as relevant to the ongoing business dialogue and deleted afterwards. You may request deletion at any time.<br><br><strong>Analytics cookies:</strong> Cookies (<code>_ga</code>, <code>_ga_*</code>) are stored for up to 14 months. Your consent choice is stored in your browser (localStorage) indefinitely.<br><br><strong>Server logs:</strong> Managed by GitHub according to their privacy policy. We have no access to these logs.",
    privacyHostingTitle: "Hosting",
    privacyHostingText: "The website is hosted on GitHub Pages (GitHub, Inc., a Microsoft company, USA). GitHub may process visitor IP addresses in its server logs. GitHub is certified under the EU-US Data Privacy Framework. More information is available in <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub's privacy policy</a>.",
    privacyThirdPartyTitle: "Third-party providers",
    privacyThirdPartyText: "Fonts are self-hosted. We load no external scripts or images from third parties.<br><br><strong>GitHub Pages</strong> (GitHub, Inc., a Microsoft company, USA) — website hosting. See above.<br><br><strong>Google LLC</strong> (USA) — Google Analytics 4 for anonymous website statistics. Loaded only after consent. Google is certified under the EU-US Data Privacy Framework. More information is available in <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google's privacy policy</a>.",
    privacyRightsTitle: "Your rights",
    privacyRightsText: "Under GDPR you have the right to:<br>• request access to your personal data (Article 15)<br>• request correction of inaccurate data (Article 16)<br>• request deletion of your data (Article 17)<br>• request restriction of processing (Article 18)<br>• request data portability (Article 20)<br>• object to processing (Article 21)<br>• withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal (Article 7.3)<br>• file a complaint with the Swedish Authority for Privacy Protection (IMY), <a href=\"https://www.imy.se\" target=\"_blank\" rel=\"noopener noreferrer\">www.imy.se</a>, <a href=\"mailto:imy@imy.se\">imy@imy.se</a>",
    privacyContactTitle: "Contact",
    privacyContactText: "Have questions about how we handle personal data? Contact us at <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Pricing comparison table
    comparisonTitle: "Compare plans",
    comparisonFeature: "Feature",
    compOcr: "OCR extraction",
    compExcel: "Excel export",
    compValidation: "Basic field validation",
    compCustomExport: "Custom export",
    compPriceVerify: "Price verification against contracts",
    compOvercharge: "Overcharge identification",
    compHistory: "History and traceability",
    compApi: "API integration",
    compDashboard: "Dashboard / BI export",
    compMultiEntity: "Multi-entity support",
    compSla: "SLA",
    // Pricing FAQ
    pricingFaqTitle: "Pricing FAQ",
    pricingFaqQ1: "Can I switch plans?",
    pricingFaqA1: "Yes. You can upgrade or downgrade your plan at any time. The change takes effect at the next billing period.",
    pricingFaqQ2: "What happens if we exceed the invoice limit?",
    pricingFaqA2: "We'll let you know before the limit is reached so you can upgrade. No hidden fees.",
    pricingFaqQ3: "Is implementation included in the price?",
    pricingFaqA3: "Implementation is charged as a one-time cost in addition to the monthly price. It covers configuration of your invoice templates and contract settings.",
    // About values
    valuesTitle: "Our values",
    valuePrecisionTitle: "Precision",
    valuePrecisionDesc: "Every number, every line, every check has to be right. We build software that verifies, not guesses.",
    valueTransparencyTitle: "Transparency",
    valueTransparencyDesc: "You see exactly what you pay and how your invoices are handled. No hidden fees, no surprises.",
    valueLongtermTitle: "Long-term thinking",
    valueLongtermDesc: "We build to last. That goes for both the technology and the relationships with our customers.",
    // Cookie consent
    consentText: "We use cookies for anonymous website statistics (Google Analytics). No data is used for marketing.",
    consentAccept: "Accept",
    consentReject: "Reject",
    consentPrivacyLink: "Read more in our privacy policy",
    footerCookies: "Cookie settings",
    // Privacy: cookies section
    privacyCookieTitle: "Cookies and analytics",
    privacyCookieText: "We use Google Analytics 4 (GA4) for anonymous website statistics. GA4 sets cookies (<code>_ga</code>, <code>_ga_*</code>) stored for up to 14 months. Data collected includes page views, time on page, referral source, and device type. No data is used for marketing or shared with third parties beyond Google.<br><br>GA4 is loaded <strong>only after your active consent</strong> via the cookie banner. You can change your choice at any time.",
    privacyCookieReset: "Change cookie settings",
    // Skip link
    skipToContent: "Skip to main content",
    // Breadcrumb
    breadcrumbHome: "Home",
    // 404 page
    notfoundPageTitle: "Page not found — Älgamo Software AB",
    notfoundPageDescription: "The page you are looking for does not exist. Go back to the home page.",
    notfoundTitle: "Page not found",
    notfoundText: "The page you are looking for does not exist or has been moved.",
    notfoundLink: "Back to home page",
    // Pricing CTA
    pricingCtaTitle: "Ready to try?",
    pricingCtaLead: "Contact us for a demo or ask how Attestro can help your business.",
    pricingCtaCta: "Contact us",
    // Blog page
    blogPageTitle: "News — Attestro | Älgamo Software AB",
    blogPageDescription: "Latest news from Attestro and Älgamo Software AB. Updates about the product, industry, and company.",
    blogTitle: "News",
    blogLead: "Updates from Attestro and Älgamo Software AB.",
    blogEmpty: "No news yet. Follow us on <a href=\"https://www.linkedin.com/company/%C3%A4lgamo-software-ab/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> for updates.",
    blogPost1Title: "Website launched!",
    blogPost1Body: "We are happy to present our new website for Attestro. Here you will be able to follow our journey and stay updated on product and company news. Welcome!",
    footerBlog: "News",
    // Calculator
    calcTitle: "How much time can you save?",
    calcLead: "Estimate how much money per month Attestro can save your team.",
    calcInvoicesLabel: "Invoices per month",
    calcMinutesLabel: "Time per invoice (min)",
    calcCostLabel: "Cost per hour",
    calcCostUnit: "SEK",
    calcErrorRateLabel: "Invoices with errors",
    calcErrorCostLabel: "Average loss per incorrect invoice",
    calcTimeSavings: "Time savings",
    calcErrorSavings: "Reduced error costs",
    calcTotalPrefix: "Total savings",
    calcTotalSuffix: "SEK per month",
    calcAssumption: "Estimate based on 60% reduced review time and 80% reduced risk of incorrect invoices passing through.",
    // Form validation
    formEmailRequired: "Email is required",
  },
};

function getLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sv") return stored;
  } catch {
    // ignore
  }
  try {
    if (navigator.language.startsWith("en")) return "en";
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
  const isSecurity = document.body.querySelector(".security") != null;
  const isPrivacy = document.body.querySelector(".privacy") != null;
  const isBlog = document.body.querySelector(".blog") != null;
  const isNotfound = document.body.querySelector(".notfound") != null;
  let title = t.pageTitle;
  let desc = t.pageDescription;
  if (isPricing) {
    title = t.pricingTitle;
    desc = t.pricingDescription;
  } else if (isAbout) {
    title = t.aboutPageTitle;
    desc = t.aboutPageDescription;
  } else if (isSecurity) {
    title = t.securityPageTitle;
    desc = t.securityPageDescription;
  } else if (isPrivacy) {
    title = t.privacyPageTitle;
    desc = t.privacyPageDescription;
  } else if (isBlog) {
    title = t.blogPageTitle;
    desc = t.blogPageDescription;
  } else if (isNotfound) {
    title = t.notfoundPageTitle;
    desc = t.notfoundPageDescription;
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

  // Focus trap for mobile menu
  panel.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !panel.classList.contains("is-open")) return;
    const focusable = panel.querySelectorAll<HTMLElement>("a, button");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  const emailInput = form.elements.namedItem("email") as HTMLInputElement;
  const emailError = document.getElementById("cf-email-error");

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      emailInput.removeAttribute("aria-invalid");
      if (emailError) emailError.textContent = "";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const email = emailInput.value.trim();
    const volume = (form.elements.namedItem("volume") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!email) {
      emailInput.setAttribute("aria-invalid", "true");
      if (emailError) {
        const lang = getLang();
        emailError.textContent = translations[lang].formEmailRequired;
      }
      emailInput.focus();
      return;
    }

    const subject = encodeURIComponent("Attestro förfrågan" + (company ? " — " + company : ""));
    const bodyParts: string[] = [];
    if (company) bodyParts.push("Företag: " + company);
    bodyParts.push("E-post: " + email);
    if (volume) bodyParts.push("Fakturor/mån: " + volume);
    if (message) bodyParts.push("\n" + message);

    const body = encodeURIComponent(bodyParts.join("\n"));
    window.location.href = "mailto:sales@algamo.se?subject=" + subject + "&body=" + body;
  });
}

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

function initCalculator(): void {
  const invoicesSlider = document.getElementById("calc-invoices") as HTMLInputElement | null;
  const minutesSlider = document.getElementById("calc-minutes") as HTMLInputElement | null;
  const costSlider = document.getElementById("calc-cost") as HTMLInputElement | null;
  const errorRateSlider = document.getElementById("calc-error-rate") as HTMLInputElement | null;
  const errorCostSlider = document.getElementById("calc-error-cost") as HTMLInputElement | null;
  const invoicesOutput = document.getElementById("calc-invoices-value");
  const minutesOutput = document.getElementById("calc-minutes-value");
  const costOutput = document.getElementById("calc-cost-value");
  const errorRateOutput = document.getElementById("calc-error-rate-value");
  const errorCostOutput = document.getElementById("calc-error-cost-value");
  const resultTime = document.getElementById("calc-result-time");
  const resultErrors = document.getElementById("calc-result-errors");
  const resultTotal = document.getElementById("calc-result-total");
  if (!invoicesSlider || !minutesSlider || !costSlider || !errorRateSlider || !errorCostSlider) return;

  function update() {
    const invoices = parseInt(invoicesSlider!.value, 10);
    const minutes = parseInt(minutesSlider!.value, 10);
    const costPerHour = parseInt(costSlider!.value, 10);
    const errorRate = parseInt(errorRateSlider!.value, 10);
    const errorCost = parseInt(errorCostSlider!.value, 10);
    if (invoicesOutput) invoicesOutput.textContent = formatNumber(invoices);
    if (minutesOutput) minutesOutput.textContent = String(minutes);
    if (costOutput) costOutput.textContent = formatNumber(costPerHour);
    if (errorRateOutput) errorRateOutput.textContent = String(errorRate);
    if (errorCostOutput) errorCostOutput.textContent = formatNumber(errorCost);

    const timeSaved = Math.round(invoices * minutes * 0.60 / 60);
    const timeSavingsKr = timeSaved * costPerHour;
    const errorSavingsKr = Math.round(invoices * (errorRate / 100) * errorCost * 0.80);
    const total = timeSavingsKr + errorSavingsKr;

    if (resultTime) resultTime.textContent = formatNumber(timeSavingsKr);
    if (resultErrors) resultErrors.textContent = formatNumber(errorSavingsKr);
    if (resultTotal) resultTotal.textContent = formatNumber(total);
  }

  invoicesSlider.addEventListener("input", update);
  minutesSlider.addEventListener("input", update);
  costSlider.addEventListener("input", update);
  errorRateSlider.addEventListener("input", update);
  errorCostSlider.addEventListener("input", update);
  update();
}

// Cookie consent + GA4 via GTM
const GA_ID = "G-N1YY4NV0YC";

function getConsent(): ConsentData | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentData;
  } catch {
    return null;
  }
}

function setConsent(analytics: boolean): void {
  const data: ConsentData = { analytics, timestamp: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function clearConsent(): void {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
}

let gaLoaded = false;
function loadGA(): void {
  if (gaLoaded) return;
  gaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);

  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: any[]) { w.dataLayer.push(args); }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

function deleteGaCookies(): void {
  const cookies = document.cookie.split(";");
  const hostname = window.location.hostname;
  for (const cookie of cookies) {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      // Try all domain variants to ensure deletion
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + hostname;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + hostname;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }
}

function showConsentBanner(): void {
  const banner = document.getElementById("cookie-consent");
  if (banner) banner.removeAttribute("hidden");
}

function hideConsentBanner(): void {
  const banner = document.getElementById("cookie-consent");
  if (banner) banner.setAttribute("hidden", "");
}

function initCookieConsent(): void {
  const consent = getConsent();

  if (consent === null) {
    // No choice made yet — show banner
    showConsentBanner();
  } else if (consent.analytics) {
    // Previously accepted — load GTM silently
    loadGA();
  }
  // Previously rejected — do nothing

  // Accept button
  document.getElementById("consent-accept")?.addEventListener("click", () => {
    setConsent(true);
    loadGA();
    hideConsentBanner();
  });

  // Reject button
  document.getElementById("consent-reject")?.addEventListener("click", () => {
    setConsent(false);
    deleteGaCookies();
    hideConsentBanner();
  });

  // Footer cookie settings link + privacy page reset button
  document.querySelectorAll("#cookie-settings-link, #cookie-reset-btn").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      clearConsent();
      deleteGaCookies();
      gaLoaded = false;
      showConsentBanner();
      // Scroll banner into view
      const banner = document.getElementById("cookie-consent");
      if (banner) banner.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  });
}

function initFaqAnimation(): void {
  document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((item) => {
    const summary = item.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (e) => {
      e.preventDefault();
      if (item.open) {
        item.classList.add("is-closing");
        const answer = item.querySelector<HTMLElement>(".faq-answer");
        if (answer) {
          answer.addEventListener("transitionend", () => {
            item.open = false;
            item.classList.remove("is-closing");
          }, { once: true });
        } else {
          item.open = false;
          item.classList.remove("is-closing");
        }
      } else {
        item.classList.add("is-opening");
        item.open = true;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            item.classList.remove("is-opening");
          });
        });
      }
    });
  });
}

initLang();
initLangSwitcher();
initPricingToggle();
initMobileMenu();
initContactForm();
initCalculator();
initCookieConsent();
initFaqAnimation();
