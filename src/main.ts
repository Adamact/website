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
    pageTitle: "Attestro — Tidseffektiv fakturakontroll | Älgamo Software AB",
    pageDescription: "Attestro gör fakturor till strukturerad data (t.ex. Excel), med logikvalidering, felflaggor och automatisk kontroll mot avtal och projekt. Från Älgamo Software AB.",
    pricingTitle: "Priser för Attestro — Älgamo Software AB",
    pricingDescription: "Prisplaner för Attestro. Fakturor till strukturerad data med validering och kontroll mot avtal och projekt.",
    aboutPageTitle: "Om oss — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB bygger Attestro, ett verktyg för att få ordning på fakturor.",
    navSolutions: "Funktioner",
    navAbout: "Om oss",
    navPricing: "Priser",
    navContact: "Kontakt",
    navNews: "Nyheter",
    navBlog: "Blogg",
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
    audienceTransportDesc: "Verifiera fraktfakturor mot avtalade priser, zoner och volymer. Fånga avvikelser automatiskt.",
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
    footerTagline: "Attestro. Tidseffektiv fakturakontroll.",
    footerLegal: "Älgamo Software AB, Sverige",
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
    pilotDiscount: "Pilotpartners får rabatterad tillgång till Attestro under utvecklingsfasen.",
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
    privacyDataText: "<strong>Språkpreferens:</strong> Vi sparar ert språkval (svenska/engelska) lokalt i er webbläsare (localStorage). Detta är ingen personuppgift och skickas aldrig till våra servrar.<br><br><strong>Kontaktförfrågningar:</strong> När ni skickar en förfrågan via kontaktformuläret öppnas ert eget e-postprogram. Meddelandet skickas direkt från er e-postklient. Vi lagrar ingen data på våra servrar via formuläret. När vi tar emot ert e-postmeddelande behandlar vi er e-postadress, eventuellt namn och meddelandeinnehåll för att besvara er förfrågan.<br><br><strong>Analyticscookies:</strong> Om ni samtycker via vår cookiebanner sätts cookies av Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) för anonym webbplatsstatistik. Se avsnittet \"Cookies och analys\" nedan.<br><br><strong>Serverloggar:</strong> Webbplatsen hostas av GitHub Pages (se avsnittet Hosting nedan). GitHub kan behandla besökares IP-adresser i sina serverloggar i samband med leverans av webbplatsen.",
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
    pricingFaqA2: "Fakturor utöver er plans gräns debiteras per styck enligt en pay-as-you-go-modell. Ni kan fortsätta använda tjänsten utan avbrott. Om ni regelbundet överskrider gränsen rekommenderar vi att uppgradera till nästa plan för ett lägre styckpris.",
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
    blogPageTitle: "Blogg — Attestro | Älgamo Software AB",
    blogPageDescription: "Bloggartiklar om fakturakontroll, OCR, automatisering och leverantörsfakturor. Från Attestro och Älgamo Software AB.",
    blogTitle: "Blogg",
    blogLead: "Artiklar om fakturakontroll, automatisering och leverantörsfakturor.",
    blogEmpty: "Inga artiklar ännu. Följ oss på <a href=\"https://www.linkedin.com/company/%C3%A4lgamo-software-ab/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> för uppdateringar.",
    blogSearchPlaceholder: "Sök bland inlägg...",
    blogNoResults: "Inga inlägg matchar din sökning.",
    newsPageTitle: "Nyheter — Attestro | Älgamo Software AB",
    newsPageDescription: "Senaste nyheterna från Attestro och Älgamo Software AB. Uppdateringar om produkten, branschen och företaget.",
    newsTitle: "Nyheter",
    newsLead: "Senaste uppdateringarna från Attestro och Älgamo Software AB.",
    newsPost2Title: "Bloggen är igång!",
    newsPost2Body: "Nu har vi börjat lägga upp bloggartiklar om fakturakontroll, OCR och automatisering. Vi skriver för ekonomiteam och projektledare som vill förstå varför leverantörsfakturor ofta är krångliga att hantera, och hur det går att göra det enklare. Kika in på bloggsidan och läs våra första inlägg!",
    newsPost1Title: "Webbplatsen är lanserad!",
    newsPost1Body: "Vi är glada att kunna presentera vår nya webbplats för Attestro. Här kommer ni kunna följa vår resa och ta del av nyheter om produkten och företaget. Välkomna!",
    blogReadMore: "Läs mer →",
    blogRelatedTitle: "Relaterade artiklar",
    blogFfTitle: "Så ser ett typiskt fakturaflöde ut i ett företag",
    blogFfIntro: "Hela fakturaprocessen steg för steg, från mottagning och registrering till betalning och arkivering. Förstå var ineffektivitet uppstår i hanteringen av leverantörsfakturor.",
    blogFfBreadcrumb: "Fakturaflöde i företag",
    blogBtTitle: "Vad gör fakturor inom bygg och transport unika?",
    blogBtIntro: "Fakturor i bygg och transport innehåller mängdbaserad prissättning, komplexa avtal, underentreprenörskedjor och ÄTA-arbeten. Artikeln förklarar varför de är svårare att granska, och varför det spelar roll.",
    blogFmtTitle: "Varför fakturaformat skiljer sig så mycket mellan leverantörer",
    blogFmtIntro: "Leverantörsfakturor ser olika ut beroende på ERP-system, bransch och format. Varför är det så, och vilka utmaningar skapar det för ekonomiteam?",
    bp1Title: "Så mycket kostar manuell fakturahantering egentligen",
    bp1ListSummary: "Manuell fakturahantering döljer betydande kostnader: arbetstid, felkostnader, förseningsavgifter och produktivitetsförluster. En genomgång av vad det egentligen kostar.",
    bp2Title: "Hur automatiserad fakturakontroll fungerar steg för steg",
    bp2ListSummary: "Från OCR-avläsning till validering mot avtal och attest. Så fungerar automatiserad fakturakontroll steg för steg.",
    bp3Title: "Varför leverantörsfakturor i entreprenadprojekt är så svåra att kontrollera",
    bp3ListSummary: "Rörliga mängder, komplexa avtal och varierande format gör entreprenadprojektens fakturakontroll till en av de mest underskattade riskerna i projektekonomin.",
    blogOcrTitle: "Från OCR till strukturerad data: så omvandlas fakturor automatiskt",
    blogOcrLead: "OCR, layoutanalys, tabellextraktion, datanormalisering och validering. Så fungerar hela kedjan från ostrukturerad PDF till maskinläsbar fakturadata.",
    bpRiskTitle: "Utmaningar, fel och risker vid fakturahantering. En komplett guide",
    bpRiskLead: "Inkonsekvent format, prisfel, dubbelfakturering, tidspress och bedrägeri. En genomgång av de vanligaste problemen vid fakturahantering och hur automatisering kan lösa dem.",
    bpWipTitle: "Vad är fakturahantering? Komplett guide, från manuell process till automatisering",
    bpWipLead: "Vad innebär fakturahantering, hur ser arbetsflödet ut och vilka utmaningar möter företag? En komplett guide om manuell och automatiserad fakturahantering.",
    bpKfbTitle: "Kontroll av leverantörsfakturor i byggprojekt",
    bpKfbIntro: "Leverantörsfakturor i byggprojekt hör till de mest komplexa fakturor som företag hanterar. Mängdbaserad prissättning, avtal med hundratals prisrader, ÄTA-arbeten och långa underentreprenörskedjor gör att varje faktura kräver noggrann granskning. Den här artikeln beskriver varför fakturakontroll i bygg är särskilt krävande och hur en strukturerad verifieringsprocess ser ut.",
    blogExlTitle: "Excel vs automatiserad fakturahantering, vilken metod passar ditt företag?",
    blogExlIntro: "Jämförelse mellan Excel och automatiserad fakturahantering. Fördelar, begränsningar och när det är dags att byta från kalkylark till ett fakturakontroll system.",
    bp4Title: "5 vanliga fel i leverantörsfakturor som företag bör känna till",
    bp4Summary: "Fel enhetspris, fel antal, dubbelfakturering, avtalsavvikelser och felaktig kontering. Fem vanliga fakturafel som automatiserad kontroll kan fånga.",
    bp5Title: "Dolda risker med manuell fakturakontroll",
    bp5ListSummary: "Mänskliga misstag, tidspress, komplexa fakturor och bedrägeri gör manuell fakturakontroll till en källa till reella ekonomiska förluster.",
    bp6Title: "Från PDF till strukturerad data: hur dokument blir maskinläsbara",
    bp6Summary: "OCR, layoutanalys, tabellextraktion, datanormalisering och validering. Steg för steg genom processen som omvandlar en PDF till maskinläsbar data.",
    blogTfeTitle: "Vanliga fel i transportfakturor och hur de uppstår",
    blogTfeIntro: "Fel vikt, felberäknat avstånd, oförklarade tilläggsavgifter och duplicerade sändningar. En genomgång av de vanligaste felen i transportfakturor och varför de uppstår.",
    blogTfeBreadcrumb: "Vanliga fel i transportfakturor",
    blogTfeLead: "Transportfakturor innehåller ofta fel som är svåra att upptäcka utan systematisk kontroll. Felaktig vikt, felberäknat avstånd, oförklarade tilläggsavgifter och duplicerade sändningar är alla vanligt förekommande. Problemen beror sällan på medveten manipulation. Istället handlar det om komplexa prismodeller, manuell datahantering och bristande avstämning mellan transportör och beställare. Den här artikeln går igenom de vanligaste feltyperna i transportfakturor, förklarar varför de uppstår och beskriver vad som krävs för att fånga dem i tid.",
    blogTfeWeightTitle: "Fel vikt på transportfakturan",
    blogTfeWeightText1: "Viktbaserad prissättning är standard inom godstransport, särskilt vid frakt av bulkmaterial som grus, sand, betong och stål. Fakturan baseras på den vikt som registreras vid lastning eller lossning, och priset beräknas per ton eller per kilogram enligt avtal. Problem uppstår när den vikt som faktureras inte stämmer överens med den faktiskt levererade vikten.",
    blogTfeWeightText2: "Orsakerna kan vara flera. Vågar som inte kalibrerats korrekt ger systematiska avvikelser. Fuktigt material väger mer än torrt, vilket innebär att samma volym kan ge olika vikt beroende på väderförhållanden vid lastning. I vissa fall registreras bruttovikt (fordon plus last) utan korrekt avdrag för fordonets taravikt. Om taravikten för fordonet inte uppdateras regelbundet, kan varje transport faktureras med ett par hundra kilo för mycket.",
    blogTfeWeightText3: "Ett konkret exempel: ett åkeri levererar 15 lass grus under en vecka. Om varje lass registreras med 200 kg för hög vikt på grund av felaktig taravikt, och tonpriset är 85 kr, innebär det en överfakturering på cirka 255 kr per vecka. Över ett helt projekt med hundratals leveranser blir summan betydande. Utan att systematiskt jämföra vågsedlar mot fakturor upptäcks sällan denna typ av avvikelse.",
    blogTfeDistanceTitle: "Felaktigt transportavstånd",
    blogTfeDistanceText1: "Många transportavtal baserar priset på köravstånd, ofta med zonindelning eller kilometerpris. Fakturerat avstånd ska motsvara den faktiska körsträckan mellan hämtnings- och leveransplats. I praktiken förekommer avvikelser av flera anledningar.",
    blogTfeDistanceText2: "Transportören kan använda en standardsträcka mellan två platser som inte tar hänsyn till att leveransadressen ändrats under projektets gång. Om ett byggprojekt flyttar sitt mottagningsställe 8 km närmare täkten, men transportören fortsätter att fakturera enligt det ursprungliga avståndet, uppstår en överfakturering vid varje leverans. Samma problem förekommer vid zonbaserade priser, där en sändning som hamnar precis på gränsen mellan två zoner kan faktureras i fel zon.",
    blogTfeDistanceText3: "Ytterligare en orsak är att transportören beräknar avstånd baserat på tur och retur, medan avtalet avser enkel resa. Denna typ av missförstånd är vanligare än den borde vara, särskilt i avtal som inte uttryckligen specificerar beräkningsgrunden. Att kontrollera transportavstånd kräver tillgång till aktuella adresser, avtalade zonindelningar och ibland kartverktyg för att verifiera faktiska körsträckor.",
    blogTfeFeesTitle: "Oväntade tilläggsavgifter",
    blogTfeFeesText1: "Transportfakturor innehåller ofta rader utöver den grundläggande fraktavgiften. Bränsletillägg, miljöavgifter, väntetidsdebitering, lossningsavgifter, expressavgifter och helgtillägg är alla vanliga poster. Var och en har sin egen beräkningsgrund, och det är inte ovanligt att avgifter faktureras utan att mottagaren kan verifiera dem mot avtalet.",
    blogTfeFeesText2: "Bränsletillägget är ett typiskt exempel. De flesta transportavtal innehåller en klausul om bränsleindex, där tillägget justeras periodvis baserat på marknadspriset för diesel. Om indexjusteringen inte stämmer med det aktuella bränslepriset, eller om transportören tillämpar en äldre procentsats, blir tillägget felaktigt. Att verifiera detta kräver att fakturamottagaren har tillgång till aktuella indexdata och vet vilken period som gäller.",
    blogTfeFeesText3: "Väntetidsavgifter är ett annat problematiskt område. Transportören kan debitera för väntetid vid lastning eller lossning, men det saknas ofta oberoende dokumentation av den faktiska väntetiden. Om chauffören rapporterar 45 minuters väntetid medan mottagaren uppfattar att lossningen tog 20 minuter, är det svårt att avgöra vad som är korrekt i efterhand. Utan tydliga rutiner för dokumentation av ankomst- och avgångstider blir väntetidsavgifter en källa till återkommande tvister.",
    blogTfeDuplicateTitle: "Duplicerade sändningar på fakturan",
    blogTfeDuplicateText1: "Dubbelfakturering av samma transport förekommer oftare än vad många förväntar sig. Det kan handla om att samma sändning registreras två gånger i transportörens system, att en delfaktura och en slutfaktura båda inkluderar samma leverans, eller att en kreditering inte matchas korrekt mot den ursprungliga debiteringen.",
    blogTfeDuplicateText2: "Problemet förvärras i verksamheter med hög transportvolym. Ett företag som tar emot hundratals transporter per månad från samma transportör får samlingsfakturor med tiotals rader. Att manuellt kontrollera varje rad mot leveransdokumentation är tidskrävande, och risken att en dubblerad post passerar obemärkt ökar med volymen. En enskild dubblering av en transport på 4 500 kr märks kanske inte i en faktura på 180 000 kr.",
    blogTfeDuplicateText3: "Systemfel hos transportören är en vanlig orsak. Om en order registreras manuellt i ett TMS (Transport Management System) och sedan också importeras via en EDI-integration, kan samma sändning finnas i systemet under två olika referensnummer. Det skapar två separata fakturaposter för samma fysiska transport. Denna typ av fel är svår att upptäcka utan att jämföra datum, adresser och godsbeskrivning rad för rad.",
    blogTfeWhyTitle: "Varför uppstår dessa fel?",
    blogTfeWhyText1: "De flesta fel i transportfakturor är inte avsiktliga. De uppstår i skärningspunkten mellan komplexa prismodeller, manuella processer och bristfällig kommunikation mellan parter. Transportbranschen kännetecknas av höga volymer, snäva marginaler och prisstrukturer som varierar mellan kunder, avtal och tidsperioder. Det skapar förutsättningar för fel på flera nivåer.",
    blogTfeWhyText2: "Manuell registrering är en primär felkälla. Trots ökad digitalisering sker mycket datainmatning fortfarande manuellt, från vägning och avståndsbedömning till orderregistrering och fakturering. Varje manuellt steg i kedjan innebär en risk för felaktig inmatning, förväxling eller utelämnad information.",
    blogTfeWhyText3: "Avtalsomplexitet förstärker problemet. När ett transportavtal innehåller grundpris, zonindelning, viktklasser, bränsletillägg, säsongsjusteringar och volymrabatter, blir det svårt även för erfarna medarbetare att beräkna rätt pris för en enskild transport. Felmarginalen ökar ytterligare när avtal uppdateras mitt i en avtalsperiod utan att alla berörda system och rutiner anpassas samtidigt.",
    blogTfePracticalTitle: "Praktiska konsekvenser av felaktiga transportfakturor",
    blogTfePracticalText1: "Felaktiga transportfakturor påverkar mer än bara den enskilda betalningen. Om felen inte upptäcks snedvrider de projektkalkyler och lönsamhetsberäkningar. Ett byggföretag som systematiskt betalar 3-5 procent för mycket på sina transporter riskerar att underskatta transportkostnader i framtida anbud, vilket direkt påverkar marginalen.",
    blogTfePracticalText2: "Felaktiga fakturor skapar också administrativ belastning. Varje ifrågasatt faktura leder till utredningsarbete, kontakt med transportören, eventuell kreditering och ny fakturahantering. Företag som saknar systematiska rutiner för kontroll av transportfakturor hamnar ofta i en reaktiv situation, där fel upptäcks slumpmässigt snarare än genom strukturerad granskning.",
    blogTfeConclusionTitle: "Sammanfattning",
    blogTfeConclusionText: "Fel i transportfakturor är vanligt förekommande och beror oftast på komplexa prismodeller, manuell datahantering och bristande avstämning. Viktavvikelser, felaktigt beräknat avstånd, omotiverade tilläggsavgifter och duplicerade sändningar är de mest frekventa problemtyperna. Att upptäcka dessa fel kräver systematisk kontroll, tillgång till rätt underlag och möjlighet att jämföra fakturadata mot avtal och leveransdokumentation. Automatiserad fakturakontroll, som den Attestro erbjuder, kan förenkla denna process genom att strukturera fakturadata och flagga avvikelser mot avtalade priser och villkor.",
    blogTfeCta: "Kontroll av transportfakturor kräver strukturerade processer och tillgång till rätt data. Attestro hjälper företag att automatisera denna kontroll genom att extrahera fakturadata och matcha den mot avtal. <a href=\"index.html#contact\">Boka en demo</a> för att se hur det fungerar.",
    blogClTitle: "Checklista: kontrollera leverantörsfakturor innan attest",
    blogClBreadcrumb: "Checklista för fakturakontroll",
    blogClLead: "Att attestera en faktura innebär att godkänna den för betalning. Det är det sista steget innan pengarna lämnar företaget. Trots det sker attesten i många organisationer utan en tydlig kontrollprocess. Fakturor godkänns baserat på att beloppet \"ser rimligt ut\" eller att leverantören är känd sedan tidigare. Resultatet blir att felaktiga belopp, avtalsavvikelser och dubbletter passerar obemärkt. Den här artikeln innehåller en komplett fakturakontroll checklista med konkreta kontrollpunkter som bör genomföras innan varje faktura attesteras, oavsett om det gäller en enstaka faktura eller hundratals per månad.",
    blogClWhyTitle: "Varför fakturakontroll innan attest är nödvändig",
    blogClWhyText1: "Fakturakontroll är den sista barriären mellan ett fel och en utbetalning. När en faktura väl är betald är det betydligt svårare, och i många fall dyrare, att korrigera felet i efterhand. Att kräva tillbaka en felaktig betalning från en leverantör tar tid, skapar friktion i affärsrelationen och belastar ekonomiavdelningen med extra arbete.",
    blogClWhyText2: "En strukturerad fakturakontroll före attest fyller flera funktioner. Den säkerställer att företaget betalar för det som faktiskt levererats, till det pris som avtalats, med korrekt moms och till rätt leverantör. Den fungerar också som ett internt kontrollverktyg som minskar risken för bedrägeri och dubbelfakturering. I projektintensiva verksamheter, som bygg och transport, är kontrollen dessutom avgörande för att projektbudgetar ska stämma.",
    blogClWhyText3: "Utan en definierad kontrollprocess blir kvaliteten på granskningen beroende av den enskilde attestantens erfarenhet och tillgängliga tid. Det skapar en ojämn och opålitlig process som inte skalar vid ökande faktureringsvolymer.",
    blogClChecklistTitle: "Komplett checklista: sju kontrollpunkter innan attest",
    blogClCheck1Title: "1. Korrekt leverantör",
    blogClCheck1Text: "Kontrollera att fakturan kommer från en leverantör som företaget har en aktiv affärsrelation med. Verifiera att organisationsnumret stämmer och att leverantören finns i leverantörsregistret. Fakturor från okända eller icke godkända leverantörer bör stoppas och utredas innan attest. Detta är också en grundläggande kontroll mot fakturabedrägerier, där bluffakturor skickas från avsändare som liknar verkliga leverantörer.",
    blogClCheck2Title: "2. Fakturanummer och formalia",
    blogClCheck2Text: "Varje faktura ska ha ett unikt fakturanummer. Kontrollera att fakturanumret inte redan finns registrerat i ekonomisystemet, eftersom det kan tyda på en dubblett. Verifiera också att fakturan innehåller alla lagstadgade uppgifter: leverantörens namn och adress, organisationsnummer, momsregistreringsnummer, fakturadatum, förfallodatum och betalningsuppgifter. Fakturor som saknar formella krav bör returneras till leverantören för korrigering.",
    blogClCheck3Title: "3. Rätt prissättning",
    blogClCheck3Text: "Jämför enhetspriset på varje fakturarad mot det avtalade priset i gällande prislistor eller ramavtal. I verksamheter med komplexa avtalsstrukturer kan priser variera beroende på volym, leveranszon, tidsperiod eller materialtyp. Det är inte ovanligt att leverantörer tillämpar ett äldre pris eller missar en avtalad rabatt. Utan tillgång till uppdaterade avtalsdokument vid granskningstillfället är det svårt att upptäcka den typen av avvikelser.",
    blogClCheck4Title: "4. Korrekta mängder",
    blogClCheck4Text: "Verifiera att de fakturerade kvantiteterna stämmer med vad som faktiskt levererats eller utförts. Underlag för denna kontroll kan vara följesedlar, tidrapporter, transportdokumentation eller projektrapporter. I branscher som bygg och transport, där fakturering ofta sker på löpande räkning eller efter mängdförteckning, är mängdverifieringen särskilt viktig. Små avvikelser per rad ackumuleras snabbt över tid.",
    blogClCheck5Title: "5. Avtalsefterlevnad",
    blogClCheck5Text: "Kontrollera att fakturans innehåll täcks av ett giltigt avtal. Det innebär att de fakturerade tjänsterna eller varorna ska finnas specificerade i avtalet, att betalningsvillkoren tillämpas korrekt (exempelvis 30 dagar netto) och att eventuella tilläggsavtal eller ÄTA-arbeten är godkända. Fakturor som avser arbete utanför avtalets omfattning bör flaggas för särskild granskning och godkännande innan attest.",
    blogClCheck6Title: "6. Dubbletter",
    blogClCheck6Text: "Systematisk duplikatkontroll innebär mer än att bara kontrollera fakturanumret. Två fakturor kan ha olika nummer men ändå avse samma leverans. En effektiv duplikatkontroll jämför kombinationen av leverantör, belopp, datum och artikelrader. I organisationer med höga faktureringsvolymer, där flera personer hanterar inkommande fakturor parallellt, ökar risken för att dubbletter missas. Konsekvensen är att samma leverans betalas två gånger.",
    blogClCheck7Title: "7. Korrekt moms",
    blogClCheck7Text: "Verifiera att rätt momssats tillämpas på varje fakturarad och att momsbeloppet är korrekt beräknat. Vanliga momssatser i Sverige är 25 %, 12 % och 6 %, och det förekommer regelbundet att leverantörer tillämpar fel sats. Inom byggsektorn gäller dessutom omvänd skattskyldighet i många situationer, vilket innebär att moms inte ska debiteras av underentreprenören. Felaktig moms kan leda till problem vid momsrapportering och i värsta fall krav från Skatteverket.",
    blogClSkippedTitle: "Varför dessa kontroller ofta hoppas över",
    blogClSkippedText1: "I praktiken genomförs sällan alla sju kontrollpunkter på varje faktura. De vanligaste orsakerna är tidsbrist, bristande tillgång till avtalsdokument och avsaknad av en formaliserad process. Attestanter som hanterar stora volymer tenderar att prioritera de fakturor som sticker ut beloppsmässigt och godkänna resten på rutin.",
    blogClSkippedText2: "En annan vanlig orsak är att avtalsdokumenten förvaras separat från fakturaflödet. Om attestanten måste leta upp rätt avtal i en filstruktur eller ett annat system för varje faktura tar kontrollen oproportionerligt lång tid. Resultatet blir att avtalskontroll och prismatchning hoppas över, särskilt för leverantörer som anses vara \"pålitliga\". Felet med det resonemanget är att de flesta faktureringsfel inte beror på avsiktligt fusk utan på misstag i leverantörens system.",
    blogClSkippedText3: "Beroendet av enskilda nyckelpersoner skapar ytterligare en sårbarhet. Om den person som normalt granskar en viss leverantörs fakturor är frånvarande faller ofta kontrollen bort helt eller utförs av någon utan samma avtalskännedom.",
    blogClAutoTitle: "Hur automatisering kan stödja fakturakontroll",
    blogClAutoText1: "Automatiserad fakturakontroll ersätter inte den mänskliga bedömningen men gör det möjligt att tillämpa samtliga kontrollpunkter konsekvent på varje faktura. Processen börjar med att fakturadata extraheras maskinellt, antingen via OCR för skannade dokument eller direkt parsing av digitala PDF:er.",
    blogClAutoText2: "Den extraherade datan jämförs sedan automatiskt mot avtalade priser, historiska faktureringsmönster och leveransdokumentation. Leverantörens organisationsnummer kontrolleras mot registret, momssatser valideras mot gällande regler och dubbletter detekteras genom att jämföra kombinationer av leverantör, belopp och innehåll. Avvikelser flaggas direkt och presenteras för attestanten.",
    blogClAutoText3: "Fördelen med denna metod är att rutinkontrollerna utförs med samma noggrannhet oavsett volym eller tidpunkt. Attestanten kan fokusera sin tid på de fakturor som faktiskt kräver manuell bedömning, istället för att granska varje rad på varje faktura. Det innebär inte att automatisering eliminerar behovet av kontroll, utan att den systematiserar processen och minskar risken för att avvikelser passerar obemärkt.",
    blogClConclusionTitle: "Sammanfattning",
    blogClConclusionText: "En komplett fakturakontroll checklista före attest omfattar leverantörskontroll, fakturanummer och formalia, prismatchning, mängdverifiering, avtalsefterlevnad, duplikatkontroll och momskontroll. Varje kontrollpunkt fyller en specifik funktion i att säkerställa att företaget betalar korrekt. I praktiken hoppas flera av dessa steg ofta över på grund av tidsbrist och bristande systemstöd. Automatisering gör det möjligt att tillämpa hela checklistan konsekvent, på varje faktura, utan att belasta attestanten med manuellt arbete som kan hanteras maskinellt.",
    blogClCta: "Programvarulösningar som Attestro är byggda för att stödja hela kontrollprocessen, från dataextraktion och avtalsmatchning till flaggning av avvikelser. <a href=\"index.html#contact\">Boka en demo</a> för att se hur det kan effektivisera er fakturakontroll före attest.",
    blogClListTitle: "Checklista: kontrollera leverantörsfakturor innan attest",
    blogClListSummary: "Sju konkreta kontrollpunkter som bör genomföras innan varje leverantörsfaktura attesteras: leverantör, fakturanummer, priser, mängder, avtal, dubbletter och moms.",
    // Blog: ROI fakturaautomation
    blogRoiTitle: "ROI på automatiserad fakturakontroll: så räknar du",
    blogRoiBreadcrumb: "ROI på fakturaautomation",
    blogRoiLead: "Automatisering av fakturakontroll är inte bara en fråga om effektivare processer. Det är en investering som bör utvärderas med samma ekonomiska rigorositet som vilken annan affärsinvestering som helst. Trots det saknar många organisationer en tydlig bild av vad manuell fakturahantering faktiskt kostar och vilka besparingar automatisering kan ge. Den här artikeln går igenom de centrala kostnadsposterna, presenterar exempelberäkningar och beskriver hur ROI på fakturaautomation kan beräknas i praktiken.",
    blogRoiManualTitle: "Vad kostar manuell fakturahantering?",
    blogRoiManualText1: "Kostnaden för manuell fakturahantering döljer sig ofta i den dagliga verksamheten. Den syns inte som en enskild post i resultaträkningen, utan fördelas på arbetstid, felkostnader och operativa ineffektiviteter som sällan mäts systematiskt. För att beräkna den verkliga kostnaden behöver flera komponenter vägas in.",
    blogRoiManualText2: "Den mest uppenbara posten är arbetstiden. Att manuellt granska en leverantörsfaktura, jämföra den mot avtal, verifiera mängder och kontrollera priser tar typiskt 10 till 20 minuter per faktura, beroende på komplexitet. I organisationer med komplexa avtalsstrukturer, exempelvis inom bygg och transport, kan en enskild faktura kräva 30 minuter eller mer.",
    blogRoiManualText3: "Utöver den direkta granskningstiden tillkommer tid för att leta fram avtalsdokument, kommunicera med leverantörer om avvikelser, hantera korrigeringar och registrera fakturor i ekonomisystemet. Dessa kringuppgifter fördubblar ofta den faktiska tiden per faktura jämfört med enbart granskningsmomentet.",
    blogRoiTimeTitle: "Tidsåtgång: en exempelberäkning",
    blogRoiTimeText1: "Antag att ett medelstort företag hanterar 500 leverantörsfakturor per månad. Om varje faktura kräver i genomsnitt 15 minuters manuell handläggningstid (granskning, avtalskontroll, kontering) innebär det 125 arbetstimmar per månad, eller ungefär 0,75 heltidstjänster.",
    blogRoiTimeText2: "Med en genomsnittlig personalkostnad på 450 kronor per timme (inklusive sociala avgifter, kontorsplats och overhead) blir den årliga kostnaden för enbart handläggningstiden 675 000 kronor. I den kalkylen ingår inte kostnaden för de fel som passerar kontrollen, förseningsavgifter eller den tid som läggs på att korrigera fel i efterhand.",
    blogRoiErrorTitle: "Den ekonomiska effekten av fel",
    blogRoiErrorText1: "Fakturafel är vanligare än de flesta organisationer uppskattar. Branschdata indikerar att mellan 1 och 3 procent av alla leverantörsfakturor innehåller fel som påverkar beloppet, oavsett om det handlar om fel enhetspris, felaktiga mängder, dubbletter eller avvikelser från avtalade villkor. I organisationer utan systematisk kontroll kan andelen vara högre.",
    blogRoiErrorText2: "Fortsätter exemplet ovan med 500 fakturor per månad och en genomsnittlig felfrekvens på 2 procent innebär det 10 felaktiga fakturor per månad. Om den genomsnittliga avvikelsen per felaktig faktura är 3 000 kronor resulterar det i 30 000 kronor i felbetalningar per månad, eller 360 000 kronor per år. En del av dessa fel upptäcks och korrigeras, men varje korrigering tar tid och skapar administrativt merarbete som i sig har en kostnad.",
    blogRoiErrorText3: "Till detta kommer förseningsavgifter och förlorade kassarabatter. Fakturor som fastnar i manuella godkännandeflöden betalas ibland för sent, vilket utlöser dröjsmålsränta. Omvänt innebär en långsam process att möjligheten att utnyttja kassarabatter (exempelvis 2 procent vid betalning inom 10 dagar) ofta missas. För ett företag med 10 miljoner kronor i årliga inköp kan dessa förlorade rabatter uppgå till 100 000 till 200 000 kronor per år.",
    blogRoiSavingsTitle: "Effektivitetsförbättringar genom automatisering",
    blogRoiSavingsText1: "Automatiserad fakturakontroll påverkar samtliga kostnadsposter ovan. Den mest direkta effekten är minskad handläggningstid. Genom maskinell extraktion av fakturadata och automatisk matchning mot avtal och prislistor minskar den manuella tiden per faktura till i genomsnitt 2 till 5 minuter, främst för de fakturor som flaggas för manuell granskning. Fakturor utan avvikelser passerar kontrollen utan manuell hantering.",
    blogRoiSavingsText2: "I exemplet med 500 fakturor per månad innebär en minskning från 15 till 4 minuters genomsnittlig handläggningstid en besparing på cirka 90 arbetstimmar per månad. Med samma personalkostnad på 450 kronor per timme motsvarar det en årlig tidsbesparing på drygt 486 000 kronor.",
    blogRoiSavingsText3: "Den andra betydande effekten är minskade felkostnader. Automatiserad prismatchning, duplikatdetektering och mängdverifiering fångar avvikelser som manuell granskning missar. Om felfrekvensen minskar från 2 procent till 0,5 procent reduceras de årliga felbetalningarna i exemplet från 360 000 till 90 000 kronor, en besparing på 270 000 kronor.",
    blogRoiCalcTitle: "Samlad ROI-beräkning",
    blogRoiCalcText1: "Sammanfattat för exempelföretaget med 500 fakturor per månad:",
    blogRoiCalcItem1: "Tidsbesparing: 486 000 kr/år",
    blogRoiCalcItem2: "Minskade felkostnader: 270 000 kr/år",
    blogRoiCalcItem3: "Minskade förseningsavgifter och förbättrat kassarabattutnyttjande: 50 000 till 150 000 kr/år (konservativ uppskattning)",
    blogRoiCalcItem4: "Total uppskattad besparing: 800 000 till 900 000 kr/år",
    blogRoiCalcText2: "Dessa siffror är ungefärliga och varierar beroende på fakturavolym, avtalskomplexitet, personalkostnader och nuvarande felfrekvens. Men de illustrerar en viktig poäng: kostnaden för manuell fakturahantering är ofta betydligt högre än vad organisationer initialt uppskattar, eftersom den fördelas på flera dolda poster.",
    blogRoiCalcText3: "Utöver de direkt mätbara besparingarna tillkommer kvalitativa fördelar som är svårare att kvantifiera men som påverkar organisationens effektivitet: minskad sårbarhet vid personalfrånvaro, konsekvent kontrollkvalitet oavsett faktureringsvolym, förbättrad spårbarhet och snabbare stängning av månadsböcker.",
    blogRoiScaleTitle: "Hur volymen påverkar ROI",
    blogRoiScaleText1: "ROI på fakturaautomation är starkt volymberoende. För ett företag med 100 fakturor per månad är den absoluta besparingen lägre, men kostnaden per faktura i den manuella processen är ofta densamma eller högre, eftersom skalfördelar saknas. För organisationer med 1 000 eller fler fakturor per månad är effekten betydligt större, och automatisering kan frigöra hela tjänster för mer kvalificerat arbete.",
    blogRoiScaleText2: "En tumregel som många organisationer använder är att automatisering av fakturakontroll börjar ge tydlig ROI vid cirka 200 fakturor per månad, förutsatt att fakturorna har tillräcklig komplexitet (avtalskoppling, variabel prissättning, projektkontering). Vid enklare fakturaflöden med standardiserade belopp kan tröskeln ligga högre.",
    blogRoiConclusionTitle: "Sammanfattning",
    blogRoiConclusionText: "ROI på automatiserad fakturakontroll består av tre huvudsakliga komponenter: minskad handläggningstid, minskade felkostnader och förbättrat kassaflöde. I ett exempelscenario med 500 fakturor per månad kan den årliga besparingen uppgå till 800 000 till 900 000 kronor. De exakta siffrorna varierar, men mönstret är konsekvent: kostnaden för manuell fakturahantering är högre än de flesta organisationer tror, och automatisering adresserar samtliga centrala kostnadsposter samtidigt.",
    blogRoiCta: "Programvarulösningar som Attestro automatiserar hela kedjan från dataextraktion till avtalsmatchning och avvikelserapportering. <a href=\"index.html#contact\">Boka en demo</a> för att beräkna ROI utifrån er organisations faktiska faktureringsvolym och processer.",
    blogRoiListTitle: "ROI på automatiserad fakturakontroll: så räknar du",
    blogRoiListSummary: "Vad kostar manuell fakturahantering egentligen? En analytisk genomgång med exempelberäkningar som visar tidsbesparingar, minskade felkostnader och total ROI vid automatisering.",
    // Blog: Fakturaattest
    blogAttTitle: "Vad är fakturaattest och hur fungerar attestprocessen?",
    blogAttBreadcrumb: "Fakturaattest och attestprocessen",
    blogAttLead: "Innan en leverantörsfaktura betalas behöver den godkännas av rätt person i organisationen. Denna process kallas fakturaattest och är en grundläggande del av den interna kontrollen i alla typer av verksamheter. Trots att attestprocessen finns i praktiskt taget alla företag varierar kvaliteten avsevärt. I vissa organisationer är processen snabb och tydlig. I andra orsakar den förseningar, missförstånd och felbetalningar. Den här artikeln beskriver vad fakturaattest innebär, varför den existerar, hur vanliga arbetsflöden ser ut, vilka problem som uppstår och hur digitala system förändrar processen.",
    blogAttIntro: "Fakturaattest innebär att en faktura granskas och godkänns innan betalning. Läs om attestprocessen, vanliga arbetsflöden, utmaningar och hur digitala system och automatisering förändrar fakturahanteringen.",
    blogAttWhatTitle: "Vad innebär fakturaattest?",
    blogAttWhatText1: "Fakturaattest innebär att en eller flera personer i en organisation granskar och godkänner en leverantörsfaktura innan den betalas. Syftet är att säkerställa att fakturan avser en verklig leverans eller tjänst, att beloppen är korrekta, att rätt kostnadsställe eller projekt belastas och att betalningen ryms inom budget. I praktiken är det en kontrollmekanism som skyddar företaget från att betala för varor eller tjänster som aldrig mottagits, eller som fakturerats till fel pris.",
    blogAttWhatText2: "I de flesta organisationer skiljer man mellan sakgranskning och beslutsattest. Sakgranskningen utförs av den person som har direkt kunskap om leveransen, till exempel en projektledare eller beställare, och bekräftar att leveransen stämmer. Beslutsattesten utförs av en person med budgetansvar, som bekräftar att kostnaden är godkänd. I mindre företag kan samma person utföra båda rollerna, medan större organisationer ofta har mer uppdelade ansvarsområden.",
    blogAttWhyTitle: "Varför existerar attestprocessen?",
    blogAttWhyText1: "Attestprocessen existerar av tre huvudsakliga skäl. Det första är intern kontroll. Genom att kräva att minst en person godkänner en faktura innan betalning minskar risken för felbetalningar, bedrägeri och obehöriga utbetalningar. Principen att den som beställer inte ska vara samma person som den som godkänner betalningen är en grundpelare i sund ekonomistyrning.",
    blogAttWhyText2: "Det andra skälet är budgetkontroll. Attestprocessen ger chefer och projektledare möjlighet att löpande följa och godkänna kostnader innan de belastar verksamheten. Utan attest skulle kostnader kunna ackumuleras utan att ansvariga upptäcker dem förrän vid periodbokslut.",
    blogAttWhyText3: "Det tredje skälet är spårbarhet. En dokumenterad attestprocess skapar en verifieringskedja som visar vem som godkänt en kostnad, när det skedde och på vilken grund. Det är värdefullt vid revision, både intern och extern, och gör det möjligt att i efterhand utreda oklarheter kring enskilda fakturor.",
    blogAttWorkflowTitle: "Vanliga arbetsflöden för fakturaattest",
    blogAttWorkflowText1: "Det enklaste attestflödet är linjärt: fakturan anländer, registreras av ekonomiavdelningen, skickas till en attestant som godkänner eller avvisar, och betalas vid godkännande. Det här flödet fungerar i mindre organisationer med begränsat antal fakturor och tydliga ansvarsområden.",
    blogAttWorkflowText2: "I mer komplexa organisationer används flerstegsgodkännande. En faktura som överstiger ett visst belopp kan kräva godkännande av både en projektledare och en avdelningschef. Fakturor som rör flera projekt eller kostnadsställen kan behöva delas upp och godkännas av flera personer. I vissa branscher finns dessutom krav på att separata kontroller utförs av olika roller, exempelvis att en inköpare bekräftar att leveransen mottagits medan en ekonomichef godkänner beloppet.",
    blogAttWorkflowText3: "Attestordningen kan också variera beroende på fakturans typ. Investerings- och anläggningsfakturor kan kräva godkännande på ledningsnivå, medan löpande driftfakturor hanteras längre ned i organisationen. Att ha tydliga attestregler, dokumenterade och kommunicerade, är avgörande för att processen ska fungera utan onödiga förseningar.",
    blogAttProblemsTitle: "Vanliga problem i attestprocessen",
    blogAttProblemsText1: "Ett av de vanligaste problemen är flaskhalsar. Om en enskild person är attestant för ett stort antal fakturor uppstår köer, särskilt vid semesterperioder, sjukdom eller hög arbetsbelastning. Försenad attest leder till försenade betalningar, vilket i sin tur kan ge förseningsavgifter och skadade leverantörsrelationer.",
    blogAttProblemsText2: "Ett annat vanligt problem är otydliga attestregler. Om det saknas tydliga riktlinjer för vem som ska attestera vilken typ av faktura, eller vid vilka beloppsgränser eskalering krävs, hamnar fakturor hos fel person. Resultatet blir att fakturor studsar fram och tillbaka i organisationen innan de når rätt attestant.",
    blogAttProblemsText3: "Bristande underlag är också ett återkommande problem. Attestanten förväntas godkänna en faktura men saknar tillgång till underlaget som behövs för att bedöma den. Det kan handla om avtal, beställningar, leveransdokumentation eller projektbudgetar. Utan detta underlag blir godkännandet en formalitet snarare än en verklig kontroll, och värdet av attestprocessen urholkas.",
    blogAttProblemsText4: "I organisationer som fortfarande hanterar attestprocessen via pappersflöden eller e-post finns dessutom risken att fakturor tappas bort, att versioner blandas ihop och att det saknas dokumentation om vem som godkänt vad. Dessa problem förstärks i takt med att faktureringsvolymen ökar.",
    blogAttDigitalTitle: "Digitala attestsystem",
    blogAttDigitalText1: "Digitala attestsystem ersätter manuella pappersflöden och e-postbaserade godkännanden med strukturerade, spårbara arbetsflöden. Fakturan registreras digitalt, kopplas automatiskt till rätt attestant baserat på fördefinierade regler och skickas som en uppgift till den personens kö. Attestanten kan granska fakturan, se tillhörande underlag och godkänna eller avvisa med ett klick.",
    blogAttDigitalText2: "Fördelarna är påtagliga. Handläggningstiden minskar eftersom fakturor inte behöver skickas fysiskt eller vänta på att rätt person öppnar ett e-postmeddelande. Spårbarheten förbättras eftersom systemet loggar vem som godkänt varje faktura och när. Eskalering kan ske automatiskt om en faktura inte attesteras inom en viss tid. Dessutom ger digitala system en överblick över var i processen varje faktura befinner sig, vilket eliminerar frågor som \"var är den fakturan?\".",
    blogAttDigitalText3: "Många ekonomisystem och fakturahanteringssystem inkluderar attestfunktionalitet, men kvaliteten varierar. I vissa system är attestflödet enkelt men begränsat. I andra finns avancerade funktioner som beloppsberoende eskalering, parallell attest, ställföreträdarhantering och integration med projektsystem. Valet av system bör styras av organisationens faktiska behov, inte enbart av befintlig systemmiljö.",
    blogAttAutoTitle: "Automatisering och framtida trender",
    blogAttAutoText1: "Trenden inom fakturaattest går mot ökad automatisering av de kontrollsteg som idag utförs manuellt. Istället för att en attestant själv ska kontrollera att priset stämmer mot avtal, att leveransen har mottagits och att konteringen är korrekt kan dessa kontroller utföras automatiskt av systemet. Attestanten får då ett beslutsunderlag som visar vilka kontroller som har passerat och vilka avvikelser som har identifierats, snarare än att behöva utföra alla kontroller från grunden.",
    blogAttAutoText2: "Automatiserad fakturakontroll, där fakturadata extraheras och jämförs mot avtal, prislistor och leveransdokumentation, kan drastiskt minska tiden som attestanten behöver lägga på varje faktura. Fakturor som matchar avtal och underlag kan hanteras snabbare, medan avvikande fakturor flaggas för noggrannare granskning. Resultatet är att attestprocessen går från att vara en flaskhals till att bli en effektiv kontrollpunkt.",
    blogAttAutoText3: "En annan trend är intelligent routing, där systemet inte bara skickar fakturan till rätt attestant utan även anpassar attestflödet baserat på fakturans egenskaper. En standardfaktura från en känd leverantör med avtalade priser kan kräva enklare godkännande, medan en faktura med avvikelser eller från en ny leverantör automatiskt eskaleras till en person med högre befogenhet.",
    blogAttSummaryTitle: "Sammanfattning",
    blogAttSummaryText: "Fakturaattest är en grundläggande kontrollmekanism som säkerställer att företag betalar rätt belopp, för rätt leverans, till rätt villkor. Processen har funnits lika länge som fakturor har skickats, men sättet den genomförs på förändras. Manuella pappersflöden och e-postbaserade godkännanden ersätts av digitala system med strukturerade arbetsflöden, automatiska kontroller och fullständig spårbarhet. För organisationer som hanterar stora faktureringsvolymer är en välfungerande attestprocess inte bara en administrativ fråga, det är en direkt del av den ekonomiska kontrollen.",
    blogAttCta: "Programvarulösningar som Attestro stödjer attestprocessen genom att automatiskt extrahera fakturadata, jämföra mot avtal och prislistor, och flagga avvikelser innan attestanten fattar beslut. <a href=\"index.html#contact\">Boka en demo</a> för att se hur det kan effektivisera er fakturahantering.",
    footerNews: "Nyheter",
    footerBlog: "Blogg",
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
    contactEmailSubject: "Attestro förfrågan",
    contactLabelCompany: "Företag",
    contactLabelEmail: "E-post",
    contactLabelVolume: "Fakturor/mån",
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
    navNews: "News",
    navBlog: "Blog",
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
    audienceTransportDesc: "Verify freight invoices against agreed prices, zones and volumes. Catch discrepancies automatically.",
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
    footerTagline: "Attestro. Time-efficient invoice verification.",
    footerLegal: "Älgamo Software AB, Sweden",
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
    pilotDiscount: "Pilot partners get discounted access to Attestro during the development phase.",
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
    privacyDataText: "<strong>Language preference:</strong> We store your language choice (Swedish/English) locally in your browser (localStorage). This is not personal data and is never sent to our servers.<br><br><strong>Contact inquiries:</strong> When you submit an inquiry via the contact form, your own email client opens. The message is sent directly from your email client. We do not store any data on our servers via the form. When we receive your email, we process your email address, any name provided, and message content in order to respond to your inquiry.<br><br><strong>Analytics cookies:</strong> If you consent via our cookie banner, cookies are set by Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) for anonymous website statistics. See the \"Cookies and analytics\" section below.<br><br><strong>Server logs:</strong> The website is hosted on GitHub Pages (see Hosting section below). GitHub may process visitor IP addresses in its server logs as part of delivering the website.",
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
    pricingFaqA2: "Invoices beyond your plan's limit are charged per invoice on a pay-as-you-go basis. You can continue using the service without interruption. If you regularly exceed the limit, we recommend upgrading to the next plan for a lower per-invoice cost.",
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
    blogPageTitle: "Blog — Attestro | Älgamo Software AB",
    blogPageDescription: "Blog articles about invoice processing, OCR, automation, and supplier invoices. From Attestro and Älgamo Software AB.",
    blogTitle: "Blog",
    blogLead: "Articles about invoice processing, automation, and supplier invoices.",
    blogEmpty: "No articles yet. Follow us on <a href=\"https://www.linkedin.com/company/%C3%A4lgamo-software-ab/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> for updates.",
    blogSearchPlaceholder: "Search posts...",
    blogNoResults: "No posts match your search.",
    newsPageTitle: "News — Attestro | Älgamo Software AB",
    newsPageDescription: "Latest news from Attestro and Älgamo Software AB. Updates about the product, industry, and company.",
    newsTitle: "News",
    newsLead: "Latest updates from Attestro and Älgamo Software AB.",
    newsPost2Title: "The blog is live!",
    newsPost2Body: "We have started posting blog articles about invoice verification, OCR and automation. We write for finance teams and project managers who want to understand why supplier invoices are often tricky to handle, and how it can be made easier. Head over to the blog page and check out our first posts!",
    newsPost1Title: "Website launched!",
    newsPost1Body: "We are happy to present our new website for Attestro. Here you will be able to follow our journey and stay updated on product and company news. Welcome!",
    blogReadMore: "Read more →",
    blogRelatedTitle: "Related articles",
    blogFfTitle: "What a typical invoice workflow looks like in a company",
    blogFfIntro: "The full invoice process step by step, from receipt and registration to payment and archiving. Understand where inefficiencies occur in supplier invoice handling.",
    blogFfBreadcrumb: "Invoice workflow in companies",
    blogBtTitle: "What makes invoices in construction and transport unique?",
    blogBtIntro: "Invoices in construction and transport involve quantity-based pricing, complex contracts, subcontractor chains, and change orders. This article explains why they are harder to review, and why it matters.",
    blogFmtTitle: "Why invoice formats vary so much between suppliers",
    blogFmtIntro: "Supplier invoices look different depending on ERP system, industry, and format. Why is that, and what challenges does it create for finance teams?",
    bp1Title: "The true cost of manual invoice processing",
    bp1ListSummary: "Manual invoice processing hides significant costs: labor hours, error costs, late fees, and productivity losses. A breakdown of what it actually costs.",
    bp2Title: "How automated invoice verification works step by step",
    bp2ListSummary: "From OCR scanning to validation against contracts and approval. How automated invoice verification works step by step.",
    bp3Title: "Why supplier invoices in construction projects are so hard to verify",
    bp3ListSummary: "Variable quantities, complex contracts, and inconsistent formats make invoice verification in construction projects one of the most underestimated risks in project finances.",
    blogOcrTitle: "From OCR to structured data: how invoices are transformed automatically",
    blogOcrLead: "OCR, layout analysis, table extraction, data normalization, and validation. How the full pipeline works, from unstructured PDF to machine-readable invoice data.",
    bpRiskTitle: "Challenges, errors, and risks in invoice processing. A complete guide",
    bpRiskLead: "Inconsistent formats, pricing errors, duplicate invoicing, time pressure, and fraud. A review of the most common problems in invoice processing and how automation can solve them.",
    bpWipTitle: "What is invoice processing? Complete guide, from manual workflow to automation",
    bpWipLead: "What does invoice processing involve, what does the workflow look like, and what challenges do companies face? A complete guide to manual and automated invoice processing.",
    bpKfbTitle: "Verifying supplier invoices in construction projects",
    bpKfbIntro: "Supplier invoices in construction projects are among the most complex invoices companies handle. Quantity-based pricing, contracts with hundreds of price lines, change orders, and long subcontractor chains mean every invoice requires careful review. This article explains why invoice verification in construction is particularly demanding and how a structured process works.",
    blogExlTitle: "Excel vs automated invoice processing: which method suits your company?",
    blogExlIntro: "Comparison of Excel and automated invoice processing. Advantages, limitations, and when it is time to switch from spreadsheets to an invoice verification system.",
    bp4Title: "5 common errors in supplier invoices that companies should know",
    bp4Summary: "Wrong unit price, wrong quantity, duplicate invoicing, contract deviations, and incorrect coding. Five common invoice errors that automated verification can catch.",
    bp5Title: "Hidden risks of manual invoice verification",
    bp5ListSummary: "Human mistakes, time pressure, complex invoices, and fraud make manual invoice verification a source of real financial losses.",
    bp6Title: "From PDF to structured data: how documents become machine-readable",
    bp6Summary: "OCR, layout analysis, table extraction, data normalization, and validation. Step by step through the process that transforms a PDF into machine-readable data.",
    blogTfeTitle: "Common errors in transport invoices and why they occur",
    blogTfeIntro: "Wrong weight, incorrect distance, unexplained surcharges, and duplicated shipments. A review of the most common errors in transport invoices and why they happen.",
    blogTfeBreadcrumb: "Common errors in transport invoices",
    blogTfeLead: "Transport invoices frequently contain errors that are difficult to detect without systematic verification. Incorrect weight, miscalculated distance, unexplained surcharges, and duplicated shipments are all common occurrences. These problems rarely stem from deliberate manipulation. Instead, they result from complex pricing models, manual data handling, and insufficient reconciliation between carrier and client. This article reviews the most common error types in transport invoices, explains why they occur, and describes what is needed to catch them in time.",
    blogTfeWeightTitle: "Incorrect weight on the transport invoice",
    blogTfeWeightText1: "Weight-based pricing is standard in freight transport, particularly for bulk materials such as gravel, sand, concrete, and steel. The invoice is based on the weight recorded at loading or unloading, and the price is calculated per tonne or per kilogram according to the contract. Problems arise when the invoiced weight does not match the weight actually delivered.",
    blogTfeWeightText2: "The causes can vary. Scales that have not been properly calibrated produce systematic deviations. Wet material weighs more than dry, meaning the same volume can yield different weights depending on weather conditions at loading. In some cases, gross weight (vehicle plus cargo) is recorded without correctly deducting the vehicle's tare weight. If the tare weight is not updated regularly, every transport may be invoiced with a few hundred kilos too much.",
    blogTfeWeightText3: "A concrete example: a haulier delivers 15 loads of gravel during one week. If each load is recorded with 200 kg too much due to incorrect tare weight, and the price per tonne is SEK 85, this results in overcharging of approximately SEK 255 per week. Over an entire project with hundreds of deliveries, the total becomes significant. Without systematically comparing weighing slips against invoices, this type of deviation is rarely detected.",
    blogTfeDistanceTitle: "Incorrect transport distance",
    blogTfeDistanceText1: "Many transport contracts base the price on driving distance, often using zone classification or per-kilometre pricing. The invoiced distance should correspond to the actual distance between the pickup and delivery locations. In practice, discrepancies occur for several reasons.",
    blogTfeDistanceText2: "The carrier may use a standard distance between two locations that does not account for the delivery address having changed during the project. If a construction project moves its receiving point 8 km closer to the quarry, but the carrier continues to invoice based on the original distance, overcharging occurs on every delivery. The same problem arises with zone-based pricing, where a shipment that falls just on the boundary between two zones may be invoiced in the wrong zone.",
    blogTfeDistanceText3: "Another cause is the carrier calculating distance based on a round trip, while the contract specifies one-way distance. This type of misunderstanding is more common than it should be, particularly in contracts that do not explicitly specify the calculation basis. Verifying transport distances requires access to current addresses, contracted zone classifications, and sometimes mapping tools to check actual driving distances.",
    blogTfeFeesTitle: "Unexpected surcharges",
    blogTfeFeesText1: "Transport invoices often include line items beyond the basic freight charge. Fuel surcharges, environmental fees, waiting time charges, unloading fees, express charges, and weekend supplements are all common items. Each has its own calculation basis, and it is not unusual for charges to be invoiced without the recipient being able to verify them against the contract.",
    blogTfeFeesText2: "The fuel surcharge is a typical example. Most transport contracts include a fuel index clause, where the surcharge is adjusted periodically based on the market price of diesel. If the index adjustment does not match the current fuel price, or if the carrier applies an outdated percentage, the surcharge becomes incorrect. Verifying this requires the invoice recipient to have access to current index data and know which period applies.",
    blogTfeFeesText3: "Waiting time charges are another problematic area. The carrier may charge for waiting time at loading or unloading, but independent documentation of the actual waiting time is often lacking. If the driver reports 45 minutes of waiting time while the recipient perceives that unloading took 20 minutes, it is difficult to determine what is correct after the fact. Without clear procedures for documenting arrival and departure times, waiting time charges become a source of recurring disputes.",
    blogTfeDuplicateTitle: "Duplicated shipments on the invoice",
    blogTfeDuplicateText1: "Double invoicing of the same transport occurs more often than many expect. It can involve the same shipment being registered twice in the carrier's system, a partial invoice and a final invoice both including the same delivery, or a credit note not being correctly matched against the original debit.",
    blogTfeDuplicateText2: "The problem is amplified in operations with high transport volumes. A company receiving hundreds of transports per month from the same carrier receives consolidated invoices with dozens of line items. Manually checking each line against delivery documentation is time-consuming, and the risk of a duplicated entry passing unnoticed increases with volume. A single duplication of a transport costing SEK 4,500 may not be noticed on an invoice totalling SEK 180,000.",
    blogTfeDuplicateText3: "System errors at the carrier are a common cause. If an order is registered manually in a TMS (Transport Management System) and then also imported via an EDI integration, the same shipment can exist in the system under two different reference numbers. This creates two separate invoice entries for the same physical transport. This type of error is difficult to detect without comparing dates, addresses, and cargo descriptions line by line.",
    blogTfeWhyTitle: "Why do these errors occur?",
    blogTfeWhyText1: "Most errors in transport invoices are not intentional. They arise at the intersection of complex pricing models, manual processes, and inadequate communication between parties. The transport industry is characterised by high volumes, tight margins, and pricing structures that vary between customers, contracts, and time periods. This creates conditions for errors at multiple levels.",
    blogTfeWhyText2: "Manual registration is a primary source of errors. Despite increasing digitisation, much data entry is still done manually, from weighing and distance assessment to order registration and invoicing. Every manual step in the chain carries a risk of incorrect input, mix-ups, or omitted information.",
    blogTfeWhyText3: "Contract complexity amplifies the problem. When a transport contract includes base price, zone classification, weight classes, fuel surcharges, seasonal adjustments, and volume discounts, it becomes difficult even for experienced staff to calculate the correct price for an individual transport. The error margin increases further when contracts are updated mid-period without all affected systems and routines being adapted simultaneously.",
    blogTfePracticalTitle: "Practical consequences of incorrect transport invoices",
    blogTfePracticalText1: "Incorrect transport invoices affect more than just the individual payment. If the errors go undetected, they distort project calculations and profitability assessments. A construction company that systematically pays 3-5 percent too much on its transports risks underestimating transport costs in future tenders, directly impacting margins.",
    blogTfePracticalText2: "Incorrect invoices also create administrative burden. Every disputed invoice leads to investigation work, contact with the carrier, potential credit notes, and renewed invoice processing. Companies that lack systematic routines for verifying transport invoices often end up in a reactive situation, where errors are discovered randomly rather than through structured review.",
    blogTfeConclusionTitle: "Summary",
    blogTfeConclusionText: "Errors in transport invoices are common and usually result from complex pricing models, manual data handling, and insufficient reconciliation. Weight discrepancies, incorrectly calculated distances, unjustified surcharges, and duplicated shipments are the most frequent problem types. Detecting these errors requires systematic verification, access to the right documentation, and the ability to compare invoice data against contracts and delivery records. Automated invoice verification, such as that offered by Attestro, can simplify this process by structuring invoice data and flagging deviations from contracted prices and terms.",
    blogTfeCta: "Transport invoice verification requires structured processes and access to the right data. Attestro helps companies automate this verification by extracting invoice data and matching it against contracts. <a href=\"index.html#contact\">Book a demo</a> to see how it works.",
    blogClTitle: "Checklist: verify supplier invoices before approval",
    blogClBreadcrumb: "Invoice verification checklist",
    blogClLead: "Approving an invoice means authorizing it for payment. It is the last step before money leaves the company. Yet in many organizations, approval happens without a clear verification process. Invoices are approved because the amount \"looks reasonable\" or the supplier is familiar. The result is that incorrect amounts, contract deviations, and duplicates pass unnoticed. This article contains a complete invoice verification checklist with concrete checkpoints that should be completed before every invoice is approved, whether it concerns a single invoice or hundreds per month.",
    blogClWhyTitle: "Why invoice verification before approval is necessary",
    blogClWhyText1: "Invoice verification is the last barrier between an error and a payment. Once an invoice has been paid, correcting the mistake is considerably harder, and in many cases more expensive. Recovering an incorrect payment from a supplier takes time, creates friction in the business relationship, and burdens the finance department with extra work.",
    blogClWhyText2: "A structured invoice verification process before approval serves multiple functions. It ensures the company pays for what was actually delivered, at the agreed price, with correct VAT, and to the right supplier. It also serves as an internal control tool that reduces the risk of fraud and duplicate invoicing. In project-intensive industries such as construction and transport, verification is also critical to keeping project budgets accurate.",
    blogClWhyText3: "Without a defined verification process, the quality of review depends on the individual approver's experience and available time. This creates an uneven and unreliable process that does not scale with increasing invoice volumes.",
    blogClChecklistTitle: "Complete checklist: seven checkpoints before approval",
    blogClCheck1Title: "1. Correct supplier",
    blogClCheck1Text: "Verify that the invoice comes from a supplier the company has an active business relationship with. Confirm that the organization number is correct and that the supplier exists in the supplier register. Invoices from unknown or unapproved suppliers should be stopped and investigated before approval. This is also a basic check against invoice fraud, where fake invoices are sent from senders that resemble real suppliers.",
    blogClCheck2Title: "2. Invoice number and formal requirements",
    blogClCheck2Text: "Every invoice must have a unique invoice number. Check that the invoice number is not already registered in the accounting system, as this may indicate a duplicate. Also verify that the invoice contains all legally required information: supplier name and address, organization number, VAT registration number, invoice date, due date, and payment details. Invoices that lack formal requirements should be returned to the supplier for correction.",
    blogClCheck3Title: "3. Correct pricing",
    blogClCheck3Text: "Compare the unit price on each invoice line against the agreed price in applicable price lists or framework agreements. In operations with complex contract structures, prices may vary depending on volume, delivery zone, time period, or material type. It is not uncommon for suppliers to apply an outdated price or miss an agreed discount. Without access to updated contract documents at the time of review, it is difficult to detect this type of deviation.",
    blogClCheck4Title: "4. Correct quantities",
    blogClCheck4Text: "Verify that the invoiced quantities match what was actually delivered or performed. Supporting documents for this check may include delivery notes, time reports, transport documentation, or project reports. In industries such as construction and transport, where invoicing often occurs on a running account basis or by bill of quantities, quantity verification is particularly important. Small deviations per line accumulate quickly over time.",
    blogClCheck5Title: "5. Contract compliance",
    blogClCheck5Text: "Verify that the invoice content is covered by a valid contract. This means that the invoiced services or goods should be specified in the contract, that payment terms are applied correctly (for example 30 days net), and that any supplementary agreements or change orders are approved. Invoices for work outside the scope of the contract should be flagged for special review and approval before attestation.",
    blogClCheck6Title: "6. Duplicates",
    blogClCheck6Text: "Systematic duplicate checking involves more than just verifying the invoice number. Two invoices can have different numbers but still refer to the same delivery. An effective duplicate check compares the combination of supplier, amount, date, and line items. In organizations with high invoice volumes, where multiple people handle incoming invoices in parallel, the risk of missing duplicates increases. The consequence is that the same delivery is paid twice.",
    blogClCheck7Title: "7. Correct VAT",
    blogClCheck7Text: "Verify that the correct VAT rate is applied on each invoice line and that the VAT amount is correctly calculated. Standard VAT rates in Sweden are 25%, 12%, and 6%, and suppliers regularly apply the wrong rate. In the construction sector, reverse charge VAT applies in many situations, meaning VAT should not be charged by the subcontractor. Incorrect VAT can lead to problems in VAT reporting and, in the worst case, demands from the Swedish Tax Agency.",
    blogClSkippedTitle: "Why these checks are often skipped",
    blogClSkippedText1: "In practice, all seven checkpoints are rarely completed for every invoice. The most common reasons are time pressure, limited access to contract documents, and lack of a formalized process. Approvers handling large volumes tend to prioritize invoices that stand out in terms of amount and approve the rest on routine.",
    blogClSkippedText2: "Another common reason is that contract documents are stored separately from the invoice workflow. If the approver must locate the correct contract in a file structure or another system for each invoice, the verification takes a disproportionate amount of time. The result is that contract verification and price matching are skipped, especially for suppliers considered \"reliable\". The flaw in that reasoning is that most invoicing errors are not due to intentional fraud but to mistakes in the supplier's system.",
    blogClSkippedText3: "Dependence on individual key personnel creates an additional vulnerability. If the person who normally reviews a particular supplier's invoices is absent, the verification often falls away entirely or is performed by someone without the same contract knowledge.",
    blogClAutoTitle: "How automation can support invoice verification",
    blogClAutoText1: "Automated invoice verification does not replace human judgment but makes it possible to apply all checkpoints consistently on every invoice. The process begins with machine extraction of invoice data, either via OCR for scanned documents or direct parsing of digital PDFs.",
    blogClAutoText2: "The extracted data is then automatically compared against agreed prices, historical invoicing patterns, and delivery documentation. The supplier's organization number is checked against the register, VAT rates are validated against applicable rules, and duplicates are detected by comparing combinations of supplier, amount, and content. Deviations are flagged immediately and presented to the approver.",
    blogClAutoText3: "The advantage of this approach is that routine checks are performed with the same thoroughness regardless of volume or timing. The approver can focus their time on the invoices that actually require manual judgment, instead of reviewing every line on every invoice. This does not mean automation eliminates the need for verification, but rather that it systematizes the process and reduces the risk of deviations passing unnoticed.",
    blogClConclusionTitle: "Summary",
    blogClConclusionText: "A complete invoice verification checklist before approval covers supplier verification, invoice number and formal requirements, price matching, quantity verification, contract compliance, duplicate checking, and VAT verification. Each checkpoint serves a specific function in ensuring the company pays correctly. In practice, several of these steps are often skipped due to time pressure and lack of system support. Automation makes it possible to apply the entire checklist consistently, on every invoice, without burdening the approver with manual work that can be handled by machines.",
    blogClCta: "Software solutions such as Attestro are designed to support the entire verification process, from data extraction and contract matching to flagging deviations. <a href=\"index.html#contact\">Book a demo</a> to see how it can streamline your invoice verification before approval.",
    blogClListTitle: "Checklist: verify supplier invoices before approval",
    blogClListSummary: "Seven concrete checkpoints that should be completed before every supplier invoice is approved: supplier, invoice number, pricing, quantities, contract compliance, duplicates, and VAT.",
    // Blog: ROI invoice automation
    blogRoiTitle: "ROI on automated invoice verification: how to calculate it",
    blogRoiBreadcrumb: "ROI on invoice automation",
    blogRoiLead: "Automating invoice verification is not just about more efficient processes. It is an investment that should be evaluated with the same financial rigor as any other business investment. Yet many organizations lack a clear picture of what manual invoice processing actually costs and what savings automation can deliver. This article reviews the key cost components, presents example calculations, and describes how ROI on invoice automation can be calculated in practice.",
    blogRoiManualTitle: "What does manual invoice processing cost?",
    blogRoiManualText1: "The cost of manual invoice processing is often hidden within daily operations. It does not appear as a single line item in the income statement but is distributed across labor hours, error costs, and operational inefficiencies that are rarely measured systematically. Calculating the true cost requires weighing multiple components.",
    blogRoiManualText2: "The most obvious cost is labor time. Manually reviewing a supplier invoice, comparing it against contracts, verifying quantities, and checking prices typically takes 10 to 20 minutes per invoice, depending on complexity. In organizations with complex contract structures, such as construction and transport, a single invoice may require 30 minutes or more.",
    blogRoiManualText3: "Beyond the direct review time, additional time is spent locating contract documents, communicating with suppliers about deviations, handling corrections, and registering invoices in the accounting system. These peripheral tasks often double the actual time per invoice compared to the review step alone.",
    blogRoiTimeTitle: "Time spent: an example calculation",
    blogRoiTimeText1: "Assume a mid-sized company processes 500 supplier invoices per month. If each invoice requires an average of 15 minutes of manual processing time (review, contract verification, coding), that amounts to 125 working hours per month, or roughly 0.75 full-time equivalents.",
    blogRoiTimeText2: "With an average personnel cost of 450 SEK per hour (including social contributions, office space, and overhead), the annual cost for processing time alone is 675,000 SEK. This calculation does not include the cost of errors that pass through verification, late payment fees, or the time spent correcting errors after the fact.",
    blogRoiErrorTitle: "The financial impact of errors",
    blogRoiErrorText1: "Invoice errors are more common than most organizations estimate. Industry data indicates that between 1 and 3 percent of all supplier invoices contain errors that affect the amount, whether through incorrect unit prices, wrong quantities, duplicates, or deviations from agreed terms. In organizations without systematic verification, the rate may be higher.",
    blogRoiErrorText2: "Continuing the example above with 500 invoices per month and an average error rate of 2 percent, that means 10 incorrect invoices per month. If the average deviation per incorrect invoice is 3,000 SEK, that results in 30,000 SEK in overpayments per month, or 360,000 SEK per year. Some of these errors are detected and corrected, but each correction takes time and creates administrative overhead that itself has a cost.",
    blogRoiErrorText3: "In addition, there are late payment fees and lost early payment discounts. Invoices that get stuck in manual approval workflows are sometimes paid late, triggering interest charges. Conversely, a slow process means the opportunity to capture early payment discounts (for example 2 percent for payment within 10 days) is often missed. For a company with 10 million SEK in annual purchases, these lost discounts can amount to 100,000 to 200,000 SEK per year.",
    blogRoiSavingsTitle: "Efficiency improvements through automation",
    blogRoiSavingsText1: "Automated invoice verification affects all of the cost items above. The most direct effect is reduced processing time. Through machine extraction of invoice data and automatic matching against contracts and price lists, manual time per invoice decreases to an average of 2 to 5 minutes, primarily for invoices flagged for manual review. Invoices without deviations pass through verification without manual handling.",
    blogRoiSavingsText2: "In the example with 500 invoices per month, a reduction from 15 to 4 minutes of average processing time saves approximately 90 working hours per month. At the same personnel cost of 450 SEK per hour, this corresponds to an annual time saving of just over 486,000 SEK.",
    blogRoiSavingsText3: "The second significant effect is reduced error costs. Automated price matching, duplicate detection, and quantity verification catch deviations that manual review misses. If the error rate decreases from 2 percent to 0.5 percent, the annual overpayments in the example are reduced from 360,000 to 90,000 SEK, a saving of 270,000 SEK.",
    blogRoiCalcTitle: "Combined ROI calculation",
    blogRoiCalcText1: "Summarized for the example company with 500 invoices per month:",
    blogRoiCalcItem1: "Time savings: 486,000 SEK/year",
    blogRoiCalcItem2: "Reduced error costs: 270,000 SEK/year",
    blogRoiCalcItem3: "Reduced late fees and improved early payment discount capture: 50,000 to 150,000 SEK/year (conservative estimate)",
    blogRoiCalcItem4: "Total estimated savings: 800,000 to 900,000 SEK/year",
    blogRoiCalcText2: "These figures are approximate and vary depending on invoice volume, contract complexity, personnel costs, and current error rates. But they illustrate an important point: the cost of manual invoice processing is often significantly higher than organizations initially estimate, because it is distributed across multiple hidden cost items.",
    blogRoiCalcText3: "Beyond the directly measurable savings, there are qualitative benefits that are harder to quantify but affect organizational efficiency: reduced vulnerability during staff absence, consistent verification quality regardless of invoice volume, improved traceability, and faster month-end closing.",
    blogRoiScaleTitle: "How volume affects ROI",
    blogRoiScaleText1: "ROI on invoice automation is strongly volume-dependent. For a company with 100 invoices per month, the absolute savings are lower, but the cost per invoice in the manual process is often the same or higher, since economies of scale are absent. For organizations with 1,000 or more invoices per month, the effect is significantly greater, and automation can free up entire positions for more qualified work.",
    blogRoiScaleText2: "A rule of thumb used by many organizations is that invoice verification automation begins to show clear ROI at approximately 200 invoices per month, provided the invoices have sufficient complexity (contract linkage, variable pricing, project coding). For simpler invoice flows with standardized amounts, the threshold may be higher.",
    blogRoiConclusionTitle: "Summary",
    blogRoiConclusionText: "ROI on automated invoice verification consists of three main components: reduced processing time, reduced error costs, and improved cash flow. In an example scenario with 500 invoices per month, the annual savings can amount to 800,000 to 900,000 SEK. The exact figures vary, but the pattern is consistent: the cost of manual invoice processing is higher than most organizations believe, and automation addresses all key cost items simultaneously.",
    blogRoiCta: "Software solutions such as Attestro automate the entire chain from data extraction to contract matching and deviation reporting. <a href=\"index.html#contact\">Book a demo</a> to calculate ROI based on your organization's actual invoice volume and processes.",
    blogRoiListTitle: "ROI on automated invoice verification: how to calculate it",
    blogRoiListSummary: "What does manual invoice processing actually cost? An analytical review with example calculations showing time savings, reduced error costs, and total ROI from automation.",
    // Blog: Invoice approval (fakturaattest)
    blogAttTitle: "What is invoice approval and how does the approval process work?",
    blogAttBreadcrumb: "Invoice approval and the approval process",
    blogAttLead: "Before a supplier invoice is paid, it needs to be approved by the right person in the organization. This process is called invoice approval (fakturaattest) and is a fundamental part of internal control in all types of businesses. Despite the approval process existing in virtually all companies, the quality varies considerably. In some organizations the process is fast and clear. In others it causes delays, misunderstandings, and incorrect payments. This article describes what invoice approval means, why it exists, what common workflows look like, what problems arise, and how digital systems are changing the process.",
    blogAttIntro: "Invoice approval means reviewing and approving an invoice before payment. Learn about the approval process, common workflows, challenges, and how digital systems and automation are changing invoice management.",
    blogAttWhatTitle: "What does invoice approval mean?",
    blogAttWhatText1: "Invoice approval means that one or more people in an organization review and approve a supplier invoice before it is paid. The purpose is to ensure that the invoice relates to an actual delivery or service, that the amounts are correct, that the right cost center or project is charged, and that the payment fits within the budget. In practice, it is a control mechanism that protects the company from paying for goods or services that were never received, or that were invoiced at the wrong price.",
    blogAttWhatText2: "In most organizations, a distinction is made between factual review and authorization. The factual review is performed by the person with direct knowledge of the delivery, such as a project manager or purchaser, and confirms that the delivery is correct. The authorization is performed by a person with budget responsibility, who confirms that the cost is approved. In smaller companies, the same person may perform both roles, while larger organizations often have more divided responsibilities.",
    blogAttWhyTitle: "Why does the approval process exist?",
    blogAttWhyText1: "The approval process exists for three main reasons. The first is internal control. By requiring at least one person to approve an invoice before payment, the risk of incorrect payments, fraud, and unauthorized disbursements is reduced. The principle that the person who orders should not be the same person who approves payment is a cornerstone of sound financial management.",
    blogAttWhyText2: "The second reason is budget control. The approval process gives managers and project leaders the ability to continuously monitor and approve costs before they are charged to the business. Without approval, costs could accumulate without those responsible discovering them until the period closing.",
    blogAttWhyText3: "The third reason is traceability. A documented approval process creates a verification chain showing who approved a cost, when it happened, and on what basis. This is valuable during audits, both internal and external, and makes it possible to investigate uncertainties regarding individual invoices after the fact.",
    blogAttWorkflowTitle: "Common workflows for invoice approval",
    blogAttWorkflowText1: "The simplest approval flow is linear: the invoice arrives, is registered by the finance department, sent to an approver who accepts or rejects it, and paid upon approval. This flow works in smaller organizations with a limited number of invoices and clear areas of responsibility.",
    blogAttWorkflowText2: "In more complex organizations, multi-step approval is used. An invoice exceeding a certain amount may require approval from both a project manager and a department head. Invoices relating to multiple projects or cost centers may need to be split and approved by several people. In some industries, separate checks must be performed by different roles, for example a purchaser confirming that the delivery was received while a finance manager approves the amount.",
    blogAttWorkflowText3: "The approval order can also vary depending on the type of invoice. Investment and capital expenditure invoices may require management-level approval, while recurring operational invoices are handled lower in the organization. Having clear approval rules, documented and communicated, is crucial for the process to function without unnecessary delays.",
    blogAttProblemsTitle: "Common problems in the approval process",
    blogAttProblemsText1: "One of the most common problems is bottlenecks. If a single person is the approver for a large number of invoices, queues form, especially during holiday periods, illness, or high workload. Delayed approval leads to delayed payments, which in turn can result in late payment fees and damaged supplier relationships.",
    blogAttProblemsText2: "Another common problem is unclear approval rules. If there are no clear guidelines for who should approve which type of invoice, or at what amount thresholds escalation is required, invoices end up with the wrong person. The result is that invoices bounce back and forth in the organization before reaching the right approver.",
    blogAttProblemsText3: "Insufficient supporting documentation is also a recurring problem. The approver is expected to authorize an invoice but lacks access to the documentation needed to assess it. This may include contracts, purchase orders, delivery documentation, or project budgets. Without this documentation, approval becomes a formality rather than a genuine control, and the value of the approval process is undermined.",
    blogAttProblemsText4: "In organizations that still manage the approval process via paper flows or email, there is also the risk that invoices are lost, versions are mixed up, and there is no documentation of who approved what. These problems intensify as invoicing volume increases.",
    blogAttDigitalTitle: "Digital approval systems",
    blogAttDigitalText1: "Digital approval systems replace manual paper flows and email-based approvals with structured, traceable workflows. The invoice is registered digitally, automatically linked to the right approver based on predefined rules, and sent as a task to that person's queue. The approver can review the invoice, see associated documentation, and approve or reject with one click.",
    blogAttDigitalText2: "The benefits are significant. Processing time decreases because invoices do not need to be sent physically or wait for the right person to open an email. Traceability improves because the system logs who approved each invoice and when. Escalation can happen automatically if an invoice is not approved within a certain time. Digital systems also provide an overview of where each invoice is in the process, eliminating questions like \"where is that invoice?\".",
    blogAttDigitalText3: "Many accounting systems and invoice management systems include approval functionality, but quality varies. In some systems the approval flow is simple but limited. In others there are advanced features such as amount-dependent escalation, parallel approval, deputy management, and integration with project systems. The choice of system should be driven by the organization's actual needs, not solely by the existing system environment.",
    blogAttAutoTitle: "Automation and future trends",
    blogAttAutoText1: "The trend in invoice approval is toward increased automation of the control steps that are currently performed manually. Instead of an approver personally checking that the price matches the contract, that the delivery has been received, and that the coding is correct, these checks can be performed automatically by the system. The approver then receives a decision basis showing which checks have passed and which deviations have been identified, rather than having to perform all checks from scratch.",
    blogAttAutoText2: "Automated invoice verification, where invoice data is extracted and compared against contracts, price lists, and delivery documentation, can drastically reduce the time the approver needs to spend on each invoice. Invoices that match contracts and supporting documentation can be handled faster, while deviating invoices are flagged for closer review. The result is that the approval process goes from being a bottleneck to becoming an efficient control point.",
    blogAttAutoText3: "Another trend is intelligent routing, where the system not only sends the invoice to the right approver but also adapts the approval flow based on the invoice's characteristics. A standard invoice from a known supplier with agreed prices may require simpler approval, while an invoice with deviations or from a new supplier is automatically escalated to a person with higher authority.",
    blogAttSummaryTitle: "Summary",
    blogAttSummaryText: "Invoice approval is a fundamental control mechanism that ensures companies pay the right amount, for the right delivery, on the right terms. The process has existed as long as invoices have been sent, but the way it is carried out is changing. Manual paper flows and email-based approvals are being replaced by digital systems with structured workflows, automated checks, and full traceability. For organizations handling large invoicing volumes, a well-functioning approval process is not just an administrative matter, it is a direct part of financial control.",
    blogAttCta: "Software solutions such as Attestro support the approval process by automatically extracting invoice data, comparing against contracts and price lists, and flagging deviations before the approver makes a decision. <a href=\"index.html#contact\">Book a demo</a> to see how it can streamline your invoice management.",
    footerNews: "News",
    footerBlog: "Blog",
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
    contactEmailSubject: "Attestro inquiry",
    contactLabelCompany: "Company",
    contactLabelEmail: "Email",
    contactLabelVolume: "Invoices/month",
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
  document.querySelectorAll<HTMLElement>("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = key ? t[key] : undefined;
    if (value != null && el instanceof HTMLInputElement) {
      el.placeholder = value;
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
  const isNews = document.body.querySelector(".nyheter") != null;
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
  } else if (isNews) {
    title = t.newsPageTitle;
    desc = t.newsPageDescription;
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

    const lang = getLang();
    const t = translations[lang];
    const subject = encodeURIComponent(t.contactEmailSubject + (company ? " — " + company : ""));
    const bodyParts: string[] = [];
    if (company) bodyParts.push(t.contactLabelCompany + ": " + company);
    bodyParts.push(t.contactLabelEmail + ": " + email);
    if (volume) bodyParts.push(t.contactLabelVolume + ": " + volume);
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

function initBlogSearch(): void {
  const input = document.getElementById("blog-search-input") as HTMLInputElement | null;
  const noResults = document.getElementById("blog-no-results");
  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    const allPosts = document.querySelectorAll<HTMLElement>(".blog-post-entry");

    allPosts.forEach((post) => {
      const title = post.querySelector("h2")?.textContent?.toLowerCase() ?? "";
      const summary = post.querySelector("p")?.textContent?.toLowerCase() ?? "";
      const matches = !query || title.includes(query) || summary.includes(query);
      post.style.display = matches ? "" : "none";
    });

    const visiblePosts = document.querySelectorAll<HTMLElement>('.blog-post-entry:not([style*="display: none"])');
    if (noResults) noResults.hidden = visiblePosts.length > 0 || !query;
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
initBlogSearch();
