// Älgamo Software AB — i18n and smooth scroll
const STORAGE_KEY = "algamo-lang";
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
    navIntegrations: "Integrationer",
    navContact: "Kontakt",
    navNews: "Nyheter",
    ctaHeader: "Boka demo",
    heroBadge: "Svenskt verktyg för fakturakontroll",
    heroTitle: "Fakturakontroll mot avtal och offerter.",
    heroLead: "Attestro omvandlar leverantörsfakturor till strukturerad data, <strong>förstår innebörden</strong> i era avtal och offerter, och flaggar avvikelser.",
    heroNoChange: "Ni behöver inte byta ekonomisystem. Attestro fungerar vid sidan av det ni har idag.",
    heroCtaPrimary: "Boka en demo",
    heroValueClaim: "Minska manuell fakturakontroll och fånga fel innan de attesteras.",
    heroTrustEU: "Data lagras inom EU",
    heroTrustGdpr: "GDPR-kompatibelt",
    heroTrustNoChange: "Inget systembyte",
    heroCollab: "Utvecklat i samarbete med entreprenadföretag",
    solutionsTitle: "Så fungerar det",
    solutionsLead: "Tre enkla steg från faktura till tydlig kontroll.",
    step1: "Ladda upp faktura",
    step2: "Automatisk validering mot avtal",
    step3: "Få tydliga avvikelser och rapporter",
    processTitle: "Från faktura till verifierad data",
    process1Title: "Import",
    process1Desc: "Ladda upp fakturan som PDF eller bild, eller hämta den automatiskt från Fortnox. Attestro läser av leverantör, artikelrader, priser och projektkoppling.",
    process2Title: "Validering",
    process2Desc: "Med semantisk matchning jämförs varje fakturarad mot avtalade priser och villkor utifrån innebörd, inte bara exakta ord. Avvikelser flaggas direkt.",
    process3Title: "Struktur och export",
    process3Desc: "Ni får ut strukturerad data i Excel eller kolla direkt i appen, med full historik och spårbarhet.",
    processResult: "Färre fel, mindre manuellt arbete och bättre kontroll över kostnaderna i varje projekt.",
    audienceTitle: "Fakturakontroll i bygg- och entreprenadprojekt",
    audienceLead: "Attestro är byggt för projektintensiva branscher med många fakturor och komplexa avtal, där manuell kontroll helt enkelt inte räcker till.",
    audienceConstructionTitle: "Bygg och anläggning",
    audienceConstructionDesc: "Kontrollera fakturor mot ramavtal, ÄTA och offerter. Fånga avvikelser innan de påverkar projektresultatet.",
    audienceTransportTitle: "Alla avtalsformat",
    audienceTransportDesc: "Ladda upp avtal och offerter som de är. Attestro tolkar innehållet oavsett format, utan att ni behöver strukturera om.",
    audienceServicesTitle: "Tjänsteföretag med underleverantörer",
    audienceServicesDesc: "Matcha fakturor mot timavtal och ramavtal. Säkerställ att varje rad stämmer innan betalning.",
    diffCallout: "Till skillnad från andra system kräver inte Attestro att ni strukturerar om era underlag. Vi matchar fakturor mot avtal utifrån innebörd, inte exakta fältnamn.",
    whyLabel: "Varför Attestro",
    whyTitle: "Byggt för hur ni redan jobbar",
    whyLead: "Till skillnad från andra system kräver inte Attestro att ni strukturerar om era underlag. Tre saker som gör skillnad i praktiken.",
    whyCard1Title: "Förstår innebörden i era avtal",
    whyCard1Desc: "Semantisk matchning jämför fakturarader mot avtal och offerter utifrån betydelse, inte exakta fältnamn. Ni behöver inte strukturera om något.",
    whyCard2Title: "Inget systembyte",
    whyCard2Desc: "Attestro fungerar tillsammans med ert befintliga ekonomisystem. Ingen migrering, ingen ny leverantörsreskontra, inga avbrott i verksamheten.",
    whyCard3Title: "Svensk support, data i EU",
    whyCard3Desc: "Utvecklat och supporterat i Sverige. All data lagras inom EU och hanteras enligt GDPR, utan delning med tredje part.",
    pricingTeaserTitle: "Från 590 kr/mån",
    pricingTeaserLead: "Inga uppstartsavgifter. Välj den volym som passar ert team och betala bara för det ni behöver.",
    pricingTeaserCta: "Se priser →",
    formNextStep: "Vi svarar inom en arbetsdag med en kort intro och förslag på demotid.",
    aboutTitle: "Varför Attestro finns",
    aboutText1: "Felaktiga fakturor och manuella kontroller kostar mer än de flesta tror. Med Attestro får ni strukturerad data och automatisk validering mot avtal, så att avvikelser syns innan de påverkar resultatet.",
    aboutText2: "Det betyder mindre manuellt arbete, bättre spårbarhet och att varje faktura faktiskt matchar era villkor.",
    aboutSubtitleCompany: "Om Älgamo Software",
    aboutText3: "Älgamo Software AB utvecklar Attestro, ett verktyg för strukturerad fakturahantering och automatisk validering mot avtal. Bolaget startades för att lösa ett problem vi sett på nära håll: manuell fakturakontroll i projektintensiva verksamheter tar för mycket tid och skapar onödig risk.",
    aboutText4: "Vi arbetar nära tidiga kunder inom bygg och transport för att säkerställa att Attestro löser verkliga problem i befintliga arbetsflöden.",
    aboutSubtitleFounder: "Om grundaren",
    aboutFounderText1: "Älgamo Software grundades av Adam Älgamo, student i Teknisk fysik och elektroteknik vid Linköpings universitet. Under drygt två år arbetade Adam parallellt med studierna på ett väletablerat schaktbolag i Stockholm, där han fick nära inblick i hur branschens processer fungerar och identifierade tydliga ineffektiviteter i arbetsflödet.",
    aboutFounderText2: "Samma mönster återkom hos andra bolag i branschen: entreprenörer, åkerier och anläggningsbolag som alla arbetade med samma typ av underlag. Problemet var inte lokalt, det var strukturellt.",
    aboutFounderText3: "De AP-plattformar som dominerar marknaden är byggda för stora organisationer med disciplinerade PO-flöden och standardiserade artikelregister. För mindre bolag i entreprenad, transport och anläggning, där underlaget oftare är en offert eller ett ramavtal än en inköpsorder, blir en sådan lösning både för tung och fel anpassad för hur verksamheten faktiskt fungerar. Adam valde att gå all in och bygga Attestro: ett verktyg för fakturakontroll som möter den verkligheten utan att kräva ny AP-plattform eller strikt PO-disciplin.",
    ctaTitle: "Prova Attestro",
    ctaLead: "Boka en demo så berättar vi mer om hur Attestro kan hjälpa er.",
    footerTagline: "Attestro. Tidseffektiv fakturakontroll.",
    footerLegal: "Älgamo Software AB (559579-6987), Sverige",
    footerSupport: "Kundsupport:",
    pricingHeading: "Priser för Attestro",
    pricingLead: "Välj plan utifrån er volym och behov. Alla planer inkluderar omvandling till strukturerad data, validering och felflaggor.",
    pricingBindingLabel: "12 månaders bindningstid",
    pricingRecommended: "Rekommenderad",
    planFlexTitle: "Kontroll",
    planFlexDesc: "Välj den volym som passar ert team.",
    featFlex1: "Automatisk utläsning av fakturadata",
    featFlex2: "Validering av fält och totalbelopp",
    featFlex3: "Prisverifiering mot avtal och offerter",
    featFlex4: "Anpassningsbar Excel-export",
    featFlex6: "Dedikerad kontakt",
    featFlex7: "Fortnox-integration",
    pricingVolumeUnitSv: "fakturor / mån",
    pricingPriceUnitSv: "kr/mån",
    planEnterprise: "Enterprise",
    priceEnterprise: "Pris enligt offert",
    enterpriseNote: "Minimiavtal på 12 månader",
    featEntVolume: "1 500+ fakturor / mån",
    featEntHistorical: "Ett års historiska fakturor ingår vid köp",
    featEnt1: "Allt i Kontroll",
    featEnt3: "Analys- och BI-export",
    featEnt4: "Stöd för flera bolag",
    featEnt5: "SLA med garanterad tillgänglighet",
    featEnt6: "Dedikerad kontakt",
    faqTitle: "Vanliga frågor",
    faqQ1: "Vad är Attestro?",
    faqA1: "Attestro är ett verktyg som analyserar leverantörsfakturor i entreprenadprojekt. Systemet extraherar fakturadata, jämför mot avtal och offerter och flaggar avvikelser innan fakturan attesteras.",
    faqQ2: "Vilka företag passar Attestro för?",
    faqA2: "Attestro är främst utvecklat för:<br>• entreprenadföretag<br>• byggbolag<br>• transport- och materialleverantörer<br>• projektorganisationer med många leverantörsfakturor",
    faqQ3: "Vad kontrolleras och vilken data extraheras?",
    faqA3: "Attestro extraherar leverantör, fakturanummer, datum, projekt/littra, transaktioner, mängd och pris per enhet. Systemet kontrollerar:<br>• pris mot avtal och offerter<br>• projekt- eller littra-koppling<br>• avvikelser mot avtal",
    faqQ5: "Hur hanterar Attestro våra avtal och offerter?",
    faqA5: "Attestro använder semantisk analys för att förstå innehållet i era befintliga avtal och offerter. Ni laddar upp de dokument ni redan har och systemet tolkar dem, oavsett format eller struktur. Det innebär att ni inte behöver anpassa era underlag - Attestro arbetar med det ni redan använder och matchar fakturarader mot rätt avtalspriser och villkor.",
    faqQ7: "Vad skiljer Attestro från andra system?",
    faqA7: "Attestro använder semantisk matchning istället för att kräva strukturerad indata. Det betyder att ni kan använda era befintliga avtal och offerter precis som de är, oavsett om de kommer som PDF, Excel eller skannade dokument. Ni behöver inte anpassa era underlag eller mata in data manuellt. Attestro förstår innehållet och matchar det mot fakturarader.",
    faqQ6: "Kan vi testa innan vi bestämmer oss?",
    faqA6: "Ja. Boka en demo så går vi igenom Attestro tillsammans, gärna med era egna fakturor som underlag.",
    contactUs: "Kontakta oss",
    langSv: "Svenska",
    langEn: "English",
    // Contact form
    formCompany: "Företagsnamn",
    formEmail: "E-post",
    formMessage: "Meddelande",
    formSubmit: "Skicka förfrågan",
    formSending: "Skickar…",
    formSuccess: "Tack för din förfrågan! Vi återkommer inom en arbetsdag.",
    formError: "Något gick fel. Försök igen, eller mejla oss direkt på sales@algamo.se.",
    formPrivacyNotice: "Formuläret skickas säkert via vår formulärtjänst till sales@algamo.se. Läs mer i vår <a href=\"privacy.html\">integritetspolicy</a>.",
    // Trust strip
    trustSweden: "Data lagras i EU",
    trustGdpr: "GDPR-kompatibelt",
    trustEncryption: "Krypterad dataöverföring",
    trustNoSharing: "Ingen delning utan samtycke",
    // Footer
    footerSecurity: "Säkerhet",
    footerPrivacy: "Integritetspolicy",
    // Security page
    securityPageTitle: "Säkerhet — Attestro | Älgamo Software AB",
    securityPageDescription: "Hur Attestro hanterar data: EU-hosting hos Hetzner i Helsingfors, GDPR-efterlevnad, kryptering, åtkomstkontroll och underbiträden.",
    securityTitle: "Säkerhet och datahantering",
    securityLead: "Här beskriver vi hur Attestro hanterar och skyddar era uppgifter.",
    secStorageTitle: "Datalagring och infrastruktur",
    secStorageText: "All data lagras inom EU på servrar hos Hetzner i Helsingfors, Finland. Vi använder etablerad EU-baserad infrastruktur för att säkerställa att er data aldrig lämnar EU.",
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
    privacyLastUpdated: "Senast uppdaterad: 30 augusti 2026",
    privacyControllerTitle: "Personuppgiftsansvarig",
    privacyControllerText: "Älgamo Software AB är personuppgiftsansvarig för behandlingen av personuppgifter på denna webbplats. Kontakta oss på <a href=\"mailto:support@algamo.se\">support@algamo.se</a> vid frågor om personuppgifter.",
    privacyDataTitle: "Vilka uppgifter vi behandlar",
    privacyDataText: "<strong>Språkpreferens:</strong> Vi sparar ert språkval (svenska/engelska) lokalt i er webbläsare (localStorage). Detta är ingen personuppgift och skickas aldrig till våra servrar.<br><br><strong>Kontaktförfrågningar:</strong> När ni skickar en förfrågan via kontaktformuläret överförs uppgifterna (företagsnamn, e-postadress och meddelande) till oss per e-post (sales@algamo.se) via formulärtjänsten Web3Forms. Web3Forms behandlar uppgifterna som personuppgiftsbiträde enligt biträdesavtal och lagrar dem krypterat i högst 30 dagar, varefter de raderas automatiskt. När vi tar emot er förfrågan behandlar vi er e-postadress, eventuellt företagsnamn och meddelandeinnehåll för att besvara den.<br><br><strong>Webbplatsstatistik:</strong> Vi använder Plausible Analytics för anonym besöksstatistik. Plausible sätter inga cookies och samlar inte in personuppgifter. Data som samlas in inkluderar sidvisningar, hänvisningskälla och enhetstyp, men ingen information kan kopplas till enskilda besökare.<br><br><strong>Serverloggar:</strong> Webbplatsen hostas av GitHub Pages (se avsnittet Hosting nedan). GitHub kan behandla besökares IP-adresser i sina serverloggar i samband med leverans av webbplatsen.",
    privacyLegalBasisTitle: "Rättslig grund",
    privacyLegalBasisText: "<strong>Språkpreferens:</strong> Berättigat intresse (artikel 6.1 f GDPR) — för att förbättra användarupplevelsen.<br><br><strong>Kontaktförfrågningar:</strong> Åtgärder som föregår avtal på den registrerades begäran (artikel 6.1 b GDPR) — ni kontaktar oss om en potentiell affärsrelation. Ni kan när som helst begära att vi raderar era uppgifter.<br><br><strong>Webbplatsstatistik:</strong> Berättigat intresse (artikel 6.1 f GDPR) — för att förstå hur webbplatsen används. Plausible Analytics samlar inte in personuppgifter och sätter inga cookies.<br><br><strong>Hosting/serverloggar:</strong> Berättigat intresse (artikel 6.1 f GDPR) — nödvändigt för att leverera webbplatsen.",
    privacyRetentionTitle: "Lagringstid",
    privacyRetentionText: "<strong>Språkpreferens:</strong> Lagras i er webbläsare tills ni rensar den eller byter webbläsare. Vi har ingen åtkomst till denna data.<br><br><strong>Kontaktförfrågningar:</strong> E-postmeddelanden bevaras i högst 12 månader efter senaste kontakt, såvida inte en pågående affärsrelation motiverar längre lagring. Formulärtjänsten Web3Forms lagrar inskickade formulär i högst 30 dagar, därefter raderas de automatiskt. Ni kan begära radering när som helst.<br><br><strong>Webbplatsstatistik:</strong> Plausible lagrar aggregerad statistik utan koppling till enskilda besökare. Ingen data lagras i besökarens webbläsare.<br><br><strong>Serverloggar:</strong> Hanteras av GitHub enligt deras integritetspolicy. Vi har ingen åtkomst till dessa loggar.",
    privacyHostingTitle: "Hosting",
    privacyHostingText: "Webbplatsen hostas av GitHub Pages (GitHub, Inc., ett Microsoft-företag, USA). GitHub kan behandla besökares IP-adresser i sina serverloggar. GitHub är certifierat under EU-US Data Privacy Framework. Mer information finns i <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">GitHubs integritetspolicy</a>.",
    privacyThirdPartyTitle: "Tredjepartsleverantörer",
    privacyThirdPartyText: "Typsnitt är lokalt hostade. Vi laddar inga externa bilder från tredje part.<br><br><strong>GitHub Pages</strong> (GitHub, Inc., ett Microsoft-företag, USA) — hosting av webbplatsen. Se ovan.<br><br><strong>Plausible Analytics</strong> (Plausible Insights OÜ, Estland, EU) — cookiefri webbplatsstatistik. Ingen persondata behandlas. Mer information finns i <a href=\"https://plausible.io/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Plausibles integritetspolicy</a>.<br><br><strong>Web3Forms</strong> (Web3Creative, Indien) — vidarebefordran av kontaktformulär via e-post. Inskickade uppgifter lagras krypterat i högst 30 dagar och raderas därefter automatiskt. Personuppgiftsbiträdesavtal (DPA) finns. Eftersom Indien saknar beslut om adekvat skyddsnivå sker överföringen med stöd av standardavtalsklausuler i biträdesavtalet. Mer information finns i <a href=\"https://web3forms.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Web3Forms integritetspolicy</a>.",
    privacyRightsTitle: "Dina rättigheter",
    privacyRightsText: "Enligt GDPR har du rätt att:<br>• begära tillgång till dina personuppgifter (artikel 15)<br>• begära rättelse av felaktiga uppgifter (artikel 16)<br>• begära radering av dina uppgifter (artikel 17)<br>• begära begränsning av behandling (artikel 18)<br>• begära dataportabilitet (artikel 20)<br>• invända mot behandling (artikel 21)<br>• återkalla samtycke när som helst, utan att det påverkar lagligheten av behandling som utförts innan återkallelsen (artikel 7.3)<br>• lämna klagomål till Integritetsskyddsmyndigheten (IMY), <a href=\"https://www.imy.se\" target=\"_blank\" rel=\"noopener noreferrer\">www.imy.se</a>, <a href=\"mailto:imy@imy.se\">imy@imy.se</a>",
    privacyContactTitle: "Kontakt",
    privacyContactText: "Har du frågor om hur vi hanterar personuppgifter? Kontakta oss på <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Pricing FAQ
    pricingFaqTitle: "Vanliga frågor om priser",
    pricingFaqQ1: "Kan jag byta plan?",
    pricingFaqA1: "Ja. Ni kan uppgradera eller nedgradera er plan när som helst. Ändringen träder i kraft vid nästa faktureringsperiod.",
    pricingFaqQ2: "Vad händer om vi överskrider fakturagränsen?",
    pricingFaqA2: "Ni får en notifiering innan ni når er gräns. Fakturor utöver er plans gräns kan debiteras per styck enligt en pay-as-you-go-modell, men endast efter ert aktiva godkännande. Inga dolda avgifter. Om ni regelbundet överskrider gränsen rekommenderar vi att uppgradera till nästa plan för ett lägre styckpris.",
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
    // Privacy: analytics section
    privacyCookieTitle: "Webbplatsstatistik",
    privacyCookieText: "Vi använder Plausible Analytics för anonym besöksstatistik. Plausible sätter inga cookies och samlar inte in personuppgifter. Data som samlas in inkluderar sidvisningar, hänvisningskälla och enhetstyp, men ingen information kan kopplas till enskilda besökare. Plausible Insights OÜ är baserat i Estland (EU). Mer information finns i <a href=\"https://plausible.io/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Plausibles integritetspolicy</a>.",
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
    pricingCtaLead: "Boka en demo så visar vi hur Attestro fungerar med era egna fakturor.",
    pricingCtaCta: "Boka en demo",
    newsPageTitle: "Nyheter — Attestro | Älgamo Software AB",
    newsPageDescription: "Senaste nyheterna från Attestro och Älgamo Software AB. Uppdateringar om produkten, branschen och företaget.",
    newsTitle: "Nyheter",
    newsLead: "Senaste uppdateringarna från Attestro och Älgamo Software AB.",
    newsPost10Title: "Ny prismodell och uppdaterad webbplats",
    newsPost10Body: "Vi har förenklat vår prismodell. Nu betalar ni per faktura i stället för per sida. Varje faktura räknas som en, oavsett hur många sidor den har, så en lång faktura med många rader kostar inte mer än en kort. Det gör det också enklare att förutse vad Attestro kostar varje månad. Samtidigt har vi uppdaterat webbplatsen med de nya priserna och ett enklare kontaktformulär. Se alla planer på vår <a href=\"/pricing.html\">prissida</a>.",
    newsPost9Title: "Attestro är publicerad i Fortnox",
    newsPost9Body: "Idag är det officiellt: Attestro finns nu publicerad i Fortnox. Det innebär att Fortnox-användare enkelt kan hitta och aktivera Attestros integration direkt via Fortnox. Vi är otroligt stolta över att vara en del av Fortnox ekosystem och ser fram emot att hjälpa fler ekonomiteam med automatiserad fakturakontroll. Läs mer på vår <a href=\"/integrationer/fortnox.html\">Fortnox-integrationssida</a>.",
    newsPost7Title: "Attestro integreras med Fortnox",
    newsPost7Body: "Attestro har nu en direkt integration med Fortnox. Det innebär att leverantörsfakturor hämtas automatiskt från Fortnox och verifieras mot avtal och offerter i Attestro. Ingen manuell export eller import behövs, och ingen data skrivs tillbaka till Fortnox. Integrationen gör det enklare för ekonomiteam att fånga felaktiga fakturor innan de attesteras i Fortnox. Läs mer på vår <a href=\"/integrationer/fortnox.html\">Fortnox-integrationssida</a>.",
    newsPost6Title: "Älgamo Software AB är bildat",
    newsPost6Body: "Nu är det officiellt. Älgamo Software AB är registrerat hos Bolagsverket och bolaget är formellt bildat. Det innebär att vi går från \"under bildande\" till ett fullt etablerat aktiebolag. Vi fortsätter utveckla Attestro med samma fokus som tidigare: att göra fakturakontroll snabbare och mer tillförlitlig för bygg-, transport- och projektintensiva branscher.",
    newsPost4Title: "Ny funktion: e-postintegration",
    newsPost4Body: "Nu kan ni skicka leverantörsfakturor direkt till Attestro via e-post. Vidarebefordra fakturor till er dedikerade Attestro-adress, så läses de in och körs genom validering mot avtal och offerter. Ingen manuell uppladdning behövs. Perfekt för team som vill effektivisera sitt fakturaflöde ytterligare.",
    newsPost3Title: "Attestro är live!",
    newsPost3Body: "Nu är appen tillgänglig! Logga in på <a href=\"https://app.algamo.se\">app.algamo.se</a> och börja verifiera era leverantörsfakturor. Ladda upp fakturor, matcha dem mot avtal och priser, och få avvikelser flaggade direkt. Vi ser fram emot att hjälpa er spara tid och pengar.",
    newsPost1Title: "Webbplatsen är lanserad!",
    newsPost1Body: "Vi är glada att kunna presentera vår nya webbplats för Attestro. Här kommer ni kunna följa vår resa och ta del av nyheter om produkten och företaget. Välkomna!",
    footerNews: "Nyheter",
    // Calculator
    calcTitle: "Hur mycket kan ni spara?",
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
    calcTotalSuffix: "kr per år",
    calcMonthlyPrefix: "motsvarar",
    calcMonthlySuffix: "kr per månad",
    calcAssumption: "Uppskattning baserad på 60 % minskad granskningstid och 80 % minskad risk för att felaktiga fakturor passerar.",
    // Form validation
    formEmailRequired: "E-post krävs",
    formEmailInvalid: "Ange en giltig e-postadress",
    contactEmailSubject: "Attestro förfrågan",
    aboutStatLabel1: "Byggt i Sverige och hostat i EU",
    aboutStatLabel2: "Fullt kompatibelt med EU-lagstiftning",
    aboutStatLabel3: "PDF, skannade fakturor och bildformat",
    aboutStatValue1: "Svenskutvecklat",
    aboutStatValue2: "GDPR",
    aboutStatValue3: "Alla format",
    audienceLabel: "Fakturaverifiering",
    heroStepCompare: "Kontroll",
    heroStepFlag: "Avvikelse",
    heroStepInvoice: "Faktura",
    heroStepOCR: "OCR",
    heroStepTable: "Data",
    showcaseTabUpload: "Ladda upp",
    showcaseTabPrislista: "Prislista",
    showcaseTabAvtal: "Avtal",
    showcaseTabProjekt: "Projekt",
    showcaseTabOk: "Inga avvikelser",
    showcaseTabPrisavvik: "Avvikande pris",
    showcaseTabArtikelavvik: "Avvikande artikel",
    showcaseUploadAlt: "Skärmbild som visar uppladdning av leverantörsfaktura i Attestro",
    showcasePrislistaAlt: "Skärmbild som visar prislistor och avtalsdokument i Attestro",
    showcaseAvtalAlt: "Skärmbild som visar förhandsgranskning av leveransavtal med prislista",
    showcaseProjektAlt: "Skärmbild som visar projektvy med matchgrad och total överpris i Attestro",
    showcaseOkAlt: "Skärmbild som visar fakturarader utan avvikelser, alla godkända mot avtal",
    showcasePrisavvikAlt: "Skärmbild som visar prisavvikelse markerad på fakturarad mot avtalat pris",
    showcaseArtikelavvikAlt: "Skärmbild som visar artikel som inte hittades i prislistan, flaggad för granskning",
    pilotBenefit1: "Tidig tillgång till Attestro",
    pilotBenefit2: "Direkt inflytande över produktutvecklingen",
    pilotBenefit3: "Rabatterad prissättning under pilotfasen",
    pilotBenefitsLabel: "Pilotpartners får",
    pilotLimited: "Endast ett fåtal pilotplatser tillgängliga.",
    processCredibility: "Fungerar med PDF:er, skannade fakturor och befintliga ekonomisystem.",
    planEnterpriseDesc: "För organisationer med höga volymer.",
    pricingFaqA6: "Ja, prisverifiering ingår i alla planer. Attestro jämför varje fakturarad mot era ramavtal, offerter och projektvillkor. Avvikelser flaggas.",
    pricingFaqQ6: "Kan Attestro verifiera priser mot våra avtal?",
    glossaryDefAta: "Arbeten som tillkommer utöver det ursprungliga kontraktet i byggprojekt, och som faktureras separat. ÄTA-poster kräver särskild granskning vid fakturakontroll för att säkerställa att arbetet är beställt och godkänt.",
    glossaryDefAttest: "Formellt godkännande av en faktura för betalning, ofta utfört av en behörig person enligt företagets attestordning. Attestprocessen innebär att en utsedd person kontrollerar att fakturan är korrekt innan den godkänns för utbetalning.",
    glossaryDefAvtal: "Verifiering av att fakturerade priser och villkor överensstämmer med det som avtalats med leverantören. Avtalskontroll är en central del av fakturagranskningen, särskilt i projekt med komplexa prisstrukturer.",
    glossaryDefDubblett: "En faktura som skickats eller registrerats mer än en gång, med risk för dubbel betalning. Dubbletter kan uppstå genom systemfel, manuella misstag eller när leverantören skickar samma faktura i flera kanaler.",
    glossaryDefEfaktura: "Elektronisk faktura i strukturerat format som kan läsas maskinellt, till skillnad från en PDF eller pappersfaktura. Vanliga format inkluderar Peppol BIS och Svefaktura.",
    glossaryDefFakturaattest: "Processen där en utsedd person granskar och godkänner en faktura innan betalning genomförs. Fakturaattest är en av de viktigaste internkontrollerna i ett företags ekonomiprocess.",
    glossaryDefFeldebitering: "En situation där leverantören fakturerar ett felaktigt belopp, felaktiga mängder eller felaktiga artiklar. Feldebitering kan bero på misstag i leverantörens system eller på avsiktliga avvikelser.",
    glossaryDefFlode: "Den väg en faktura tar genom organisationen, från mottagning och registrering till kontroll, attest och betalning. Ett effektivt fakturaflöde minskar handläggningstiden och risken för fel.",
    glossaryDefFormat: "Det tekniska formatet för en faktura, exempelvis PDF, Peppol BIS, Svefaktura eller skannat pappersdokument. Formatvariationen mellan leverantörer är en av de större utmaningarna vid automatisering.",
    glossaryDefKontering: "Tilldelning av en faktura till rätt konto, projekt eller kostnadsställe i bokföringen. Korrekt kontering är avgörande för att uppföljning och rapportering ska bli korrekt.",
    glossaryDefKontroll: "Systematisk granskning av en faktura för att verifiera att uppgifterna är korrekta innan betalning. Fakturakontroll omfattar priskontroll, mängdverifiering, avtalskontroll och duplikatkontroll.",
    glossaryDefKredit: "En faktura som utfärdas av leverantören för att korrigera en tidigare felaktig faktura. Kreditfakturan minskar det utestående beloppet och används vid reklamation eller felaktiga leveranser.",
    glossaryDefLeverantor: "En faktura som ett företag tar emot från en leverantör för varor eller tjänster som levererats. Leverantörsfakturor utgör grunden för företagets utbetalningar och kräver kontroll före attest.",
    glossaryDefMatchning: "Jämförelse av fakturadata mot order, leverans eller avtal för att säkerställa överensstämmelse. Trevägsmatchning innebär att fakturan jämförs mot både order och leveransbekräftelse.",
    glossaryDefOcr: "Teknik som omvandlar text i skannade dokument eller bilder till maskinläsbar text. OCR är ett centralt steg i automatiserad fakturahantering, där pappersfakturor eller PDF:er digitaliseras för vidare bearbetning.",
    glossaryDefOverdebitering: "När en leverantör fakturerar mer än det avtalade priset eller för fler enheter än vad som levererats. Överdebitering kan vara svår att upptäcka utan systematisk kontroll mot avtal och leveransdata.",
    glossaryDefPrisliste: "Verifiering av att fakturerade enhetspriser överensstämmer med avtalade prislistor. Prislistekontroll är särskilt viktigt i branscher med stora volymer och komplexa prisstrukturer.",
    glossaryDefStrukturerad: "Fakturainformation som har organiserats i ett format som kan bearbetas maskinellt, exempelvis tabeller med leverantör, artiklar, mängder och priser. Att omvandla fakturor till strukturerad data är ett centralt steg i automatiserad fakturahantering.",
    glossaryDefTrevags: "En kontrollmetod där fakturan jämförs mot både inköpsorder och leveransbekräftelse för att säkerställa att alla tre överensstämmer. Trevägsmatchning är standardmetoden i större organisationer.",
    glossaryIntro: "Här samlar vi de viktigaste begreppen inom fakturahantering och fakturakontroll. Varje term förklaras kortfattat och länkas till relevanta guider där du kan läsa mer.",
    glossaryMeta: "Ordlista",
    glossaryTermAta: "ÄTA (Ändrings- och tilläggsarbeten)",
    glossaryTermAttest: "Attestering",
    glossaryTermAvtal: "Avtalskontroll",
    glossaryTermDubblett: "Dubblettfaktura",
    glossaryTermEfaktura: "E-faktura",
    glossaryTermFakturaattest: "Fakturaattest",
    glossaryTermFeldebitering: "Feldebitering",
    glossaryTermFlode: "Fakturaflöde",
    glossaryTermFormat: "Fakturaformat",
    glossaryTermKontering: "Kontering",
    glossaryTermKontroll: "Fakturakontroll",
    glossaryTermKredit: "Kreditfaktura",
    glossaryTermLeverantor: "Leverantörsfaktura",
    glossaryTermMatchning: "Fakturamatchning",
    glossaryTermOcr: "OCR (Optical Character Recognition)",
    glossaryTermOverdebitering: "Överdebitering",
    glossaryTermPrisliste: "Prislistekontroll",
    glossaryTermStrukturerad: "Strukturerad data",
    glossaryTermTrevags: "Trevägsmatchning",
    glossaryTitle: "Ordlista för fakturahantering",
    privacyAutomatedText: "Vi fattar inga automatiserade beslut, inklusive profilering, som har rättsliga eller liknande betydande effekter för dig baserat på dina personuppgifter (artikel 22 GDPR).",
    privacyAutomatedTitle: "Automatiserat beslutsfattande",
    secBackupText: "Kunddata säkerhetskopieras regelbundet och lagras krypterat inom EU. Vi har dokumenterade rutiner för katastrofåterställning för att minimera dataförlust och säkerställa tjänstens tillgänglighet.",
    secBackupTitle: "Säkerhetskopiering och katastrofåterställning",
    secIncidentText: "Vid en personuppgiftsincident underrättar vi berörd tillsynsmyndighet inom 72 timmar i enlighet med artikel 33 GDPR. Om incidenten sannolikt medför hög risk för enskildas rättigheter och friheter informerar vi även de berörda registrerade utan onödigt dröjsmål (artikel 34 GDPR).",
    secIncidentTitle: "Incidenthantering",
    secVulnerabilityText: "Om du upptäcker en säkerhetsbrist i Attestro eller på denna webbplats, vänligen rapportera den till <a href=\"mailto:support@algamo.se\">support@algamo.se</a>. Vi tar alla rapporter på allvar och bekräftar mottagandet inom 48 timmar.",
    secVulnerabilityTitle: "Rapportera säkerhetsproblem",
    navProduct: "Produkt",
    produktPageTitle: "Attestro - Automatiserad fakturakontroll | Älgamo Software AB",
    produktPageDescription: "Attestro omvandlar leverantörsfakturor till strukturerad data, validerar mot avtal och flaggar avvikelser. Läs om funktioner, arbetsflöde och teknisk information.",
    produktHeroTitle: "Automatiserad fakturakontroll för bygg och transport",
    produktHeroLead: "Attestro läser leverantörsfakturor, validerar varje rad mot avtal och offerter, och ger er strukturerad data med full spårbarhet.",
    produktHeroCtaPrimary: "Boka en demo",
    produktHeroCtaSecondary: "Se priser",
    produktHowTitle: "Så fungerar Attestro",
    produktHowLead: "Från faktura till verifierad, strukturerad data i tre steg.",
    produktHow1Title: "Ladda upp faktura",
    produktHow1Desc: "Ladda upp leverantörsfakturan som PDF, skannad bild eller digitalt format, eller hämta den automatiskt från Fortnox. Attestro identifierar leverantör, fakturanummer, datum, artikelrader, mängder, enhetspriser och projektkopplingar med hjälp av OCR och dokumentanalys.",

    produktHow2Title: "Automatisk validering",
    produktHow2Desc: "Varje rad kontrolleras mot era ramavtal, offerter och projektvillkor. Attestro flaggar prisavvikelser, felaktiga mängder, saknade projektkopplingar och andra avvikelser innan fakturan godkänns för betalning.",

    produktHow3Title: "Strukturerad export",
    produktHow3Desc: "Ni får ut verifierad data i Excel. Varje kontroll loggas med full historik och spårbarhet, så ni alltid kan se exakt vad som kontrollerats och varför.",

    produktFeaturesTitle: "Funktioner i detalj",
    produktFeaturesLead: "Allt ni behöver för att gå från manuell fakturakontroll till automatiserad verifiering.",
    produktFeatCat1Title: "Datautläsning",
    produktFeatCat1Item1: "OCR-extraktion från PDF, skannade fakturor och bilder",
    produktFeatCat1Item2: "Stöd för svenska fakturaformat och leverantörsmallar",
    produktFeatCat1Item3: "Automatisk identifiering av leverantör, datum, fakturanummer",
    produktFeatCat1Item4: "Radnivåextraktion: artikel, mängd, enhetspris, belopp samt registreringsnummer och datum om aktuellt",
    produktFeatCat2Title: "Validering",
    produktFeatCat2Item1: "Fältvalidering (format, belopp, moms)",
    produktFeatCat2Item2: "Prisverifiering mot avtal och offerter",
    produktFeatCat2Item3: "Projektkoppling och littra-matchning",
    produktFeatCat2Item4: "Automatisk flaggning av avvikelser och feldebitering",
    produktFeatCat2Item6: "Första attest-godkännande innan fakturan skickas vidare",
    produktFeatCat3Title: "Export och integration",
    produktFeatCat3Item1: "Excel-export med strukturerad data",
    produktFeatCat3Item2: "Anpassade exportmallar",
    produktFeatCat3Item3: "Fortnox-integration för automatisk hämtning av fakturor",
    produktFeatCat3Item4: "Dashboard och BI-export",
    produktFeatCat4Title: "Spårbarhet och historik",
    produktFeatCat4Item1: "Fullständig revisionslogg för varje faktura",
    produktFeatCat4Item2: "Databaslagring av alla kontroller och resultat",
    produktFeatCat4Item3: "Sökbar historik per leverantör, projekt och period",
    produktFeatCat4Item4: "Dokumentation av alla avvikelser och åtgärder",
    produktTechTitle: "Teknisk information",
    produktTechFormatsTitle: "Format som stöds",
    produktTechFormatsDesc: "PDF (digitala och skannade), JPEG, PNG, TIFF. Svenska och internationella fakturaformat.",
    produktTechOcrTitle: "OCR och dokumentanalys",
    produktTechOcrDesc: "Avancerad OCR med stöd för svenska tecken, tabeller och flersidig layout. Automatisk mallidentifiering per leverantör.",
    produktTechIntegrationTitle: "Integration",
    produktTechIntegrationDesc: "Integration med Fortnox som hämtar leverantörsfakturor automatiskt. Excel-export som standard. Anpassade exportformat efter behov.",
    produktTechSecurityTitle: "Säkerhet och data",
    produktTechSecurityDesc: "Data lagras krypterat inom EU. GDPR-kompatibelt. Ingen delning med tredje part. Fullständig revisionslogg.",
    produktCtaTitle: "Redo att förbättra er fakturakontroll?",
    produktCtaLead: "Boka en demo så visar vi hur Attestro fungerar med era fakturor och avtal.",
    fortnoxBreadcrumbIntegrations: "Integrationer",
    fortnoxHeroTitle: "Integration mellan Attestro och Fortnox",
    fortnoxHeroLead: "Hämta leverantörsfakturor direkt från Fortnox, kontrollera varje rad mot avtal och offerter.",
    fortnoxHeroBadge: "Integration för Fortnox",
    fortnoxHeroDemo: "Boka demo",
    fortnoxHeroTrust: "GDPR-säker · EU-hosting · Ingen dubbelregistrering · Svenskt bolag",
    fortnoxPartnerMarkLabel: "Officiell Fortnox-partner",
    fortnoxValueTitle: "Vad Attestro och Fortnox gör tillsammans",
    fortnoxValueLead: "Attestro är ett kontrollsteg före godkännande. Fakturan matchas mot avtal och offerter och avvikelser i pris, mängd och villkor flaggas. Ni konterar och godkänner fakturan i Fortnox som vanligt, nu med ett tydligt underlag för beslutet.",
    fortnoxValueQ1Title: "Problemet vi löser tillsammans",
    fortnoxValueQ1Desc: "Leverantörsfakturor innehåller ofta fel: felaktiga priser, avvikande mängder, poster som inte finns i avtalet. Manuell kontroll är tidskrävande och missar detaljer. Fortnox ensamt kan inte jämföra fakturarader mot externa avtal.",
    fortnoxValueQ2Title: "Det här kan bara integrationen göra",
    fortnoxValueQ2Desc: "Radvis kontroll mot era avtal och offerter innan fakturan bokförs i Fortnox. Attestro fångar avvikelser medan det fortfarande går att åtgärda, inte efter att pengarna redan är på väg ut.",
    fortnoxValueQ3Title: "Det sparar tid och pengar",
    fortnoxValueQ3Desc: "Mindre manuell kontroll, färre felaktiga betalningar, snabbare månadsbokslut. Attestanten får ett färdigt beslutsunderlag i stället för att gräva i avtal och offerter manuellt.",
    fortnoxValueQ4Title: "Vem har mest nytta",
    fortnoxValueQ4Desc: "Bygg-, entreprenad-, transport- och tillverkningsbolag med 20 till 100 anställda som använder Fortnox och hanterar många leverantörsfakturor mot ramavtal, offerter eller projektbudgetar.",
    fortnoxFlowTitle: "Så flödar datan mellan systemen",
    fortnoxFlowLead: "Enkelriktad OAuth 2.0-integration. Attestro läser inkommande leverantörsfakturor från Fortnox och presenterar ett verifierat beslutsunderlag i Attestro. Ingen data skrivs tillbaka till Fortnox. Ni konterar och attesterar fakturan i Fortnox som vanligt, med Attestros underlag som beslutsstöd.",
    fortnoxFlowFortnoxLabel: "Fortnox",
    fortnoxFlowFortnoxLabel2: "Manuell attest i Fortnox",
    fortnoxFlowFortnoxDesc: "Källsystem för leverantörsfakturor",
    fortnoxFlowFortnoxReturnDesc: "Ni konterar och godkänner fakturan i Fortnox med Attestros underlag",
    fortnoxFlowAttestroLabel: "Attestro",
    fortnoxFlowAttestroDesc: "OCR, matchning mot avtal och offerter, flaggning av avvikelser",
    fortnoxFlowArrow1: "Fakturor, PDF, metadata (läs)",
    fortnoxFlowArrow2: "Beslutsunderlag (visas i Attestro)",
    fortnoxHowTitle: "Så fungerar det, steg för steg",
    fortnoxHow1Title: "Anslut Fortnox",
    fortnoxHow1Desc: "Klicka på \"Anslut Fortnox\" i Attestro, logga in med ditt Fortnox-konto och godkänn de scopes integrationen behöver. Klart på under två minuter.",
    fortnoxHow2Title: "Attestro hämtar fakturorna",
    fortnoxHow2Desc: "Nya leverantörsfakturor hämtas från Fortnox, inklusive PDF, rader, belopp och projektreferens. Ingen manuell export behövs.",
    fortnoxHow3Title: "Kontroll mot avtal och offerter",
    fortnoxHow3Desc: "Varje fakturarad matchas mot era avtal och offerter. Avvikelser i pris, mängd eller villkor flaggas direkt, med full revisionslogg.",
    fortnoxHow4Title: "Beslutsunderlag i Attestro",
    fortnoxHow4Desc: "När Attestros kontroll är klar visas resultatet i Attestro med eventuella avvikelser flaggade. Ni konterar och godkänner fakturan i Fortnox som vanligt, med Attestros underlag som beslutsstöd. Ingen data skrivs tillbaka till Fortnox.",
    fortnoxScreenshot1: "Inkommande leverantörsfakturor från Fortnox i Attestro",
    fortnoxScreenshot2: "Radvis kontroll mot avtal och offerter",
    fortnoxChecklistTitle: "Teknisk översikt",
    fortnoxChecklistLead: "Allt du behöver veta innan du ansluter, på en sida.",
    fortnoxCheck1Label: "Typ av integration",
    fortnoxCheck1Value: "Enkelriktad. Attestro läser leverantörsfakturor från Fortnox men skriver ingenting tillbaka.",
    fortnoxCheck2Label: "Autentisering",
    fortnoxCheck2Value: "OAuth 2.0 via Fortnox Developer Portal",
    fortnoxCheck3Label: "Scopes som används",
    fortnoxCheck3Value: "supplierinvoice, supplier, article, project, settings",
    fortnoxCheck4Label: "Data som hämtas från Fortnox",
    fortnoxCheck4Value: "Leverantörsfakturor (PDF och rader), leverantörsregister, artikellista, projekt",
    fortnoxCheck5Label: "Data som skickas till Fortnox",
    fortnoxCheck5Value: "Ingen. Attestro skriver inte till Fortnox. Beslutsunderlaget och kontrolloggen visas i Attestro.",
    fortnoxCheck6Label: "Synkfrekvens",
    fortnoxCheck6Value: "Nära realtid via webhook, med polling-fallback var 15:e minut",
    fortnoxCheck7Label: "Datalagring",
    fortnoxCheck7Value: "EU (Sverige), krypterat. Se <a href=\"../security.html\">säkerhetssidan</a> för detaljer.",
    fortnoxCheck8Label: "Aktiveringstid",
    fortnoxCheck8Value: "Plug-and-play, ca 10 minuter för de flesta bolag. Större bolag med stora artikelregister kan få ett onboarding-samtal.",
    fortnoxAudienceTitle: "Vem har mest nytta",
    fortnoxAudienceLead: "Integrationen är byggd för företag som hanterar många leverantörsfakturor mot ramavtal, offerter eller projektbudgetar.",
    fortnoxAudience1Title: "Bygg- och entreprenadbolag",
    fortnoxAudience1Desc: "ÄTA-fakturor, underentreprenörsfakturor och material mot ramavtal. Attestro kontrollerar mot avtal och offerter och flaggar avvikelser innan de bokförs.",
    fortnoxAudience2Title: "Transport- och logistikbolag",
    fortnoxAudience2Desc: "Kilometer- och timtariffer, bränsletillägg, viktbaserade priser. Attestro matchar varje fakturarad mot transportavtalet och upptäcker felaktiga debiteringar.",
    fortnoxAudience3Title: "Tillverkande företag",
    fortnoxAudience3Desc: "Material och komponenter mot inköpsavtal. Attestro kontrollerar enhetspris, mängd och villkor per rad, så att ni vet vilka fakturor som är säkra att godkänna i Fortnox.",
    fortnoxTrustTitle: "Säkerhet och efterlevnad",
    fortnoxTrustLead: "Byggt mot Fortnox Developer API och drivet från Sverige. Inga amerikanska molntjänster mellan er och era fakturor.",
    fortnoxTrust1Title: "Byggd mot Fortnox API",
    fortnoxTrust1Desc: "Integrationen använder Fortnox Developer API enligt Fortnox best practices. Uppdateras löpande när API:et utvecklas.",
    fortnoxTrust2Title: "GDPR och data i EU",
    fortnoxTrust2Desc: "All data lagras inom EU, på servrar i Helsingfors, Finland. Läs mer på vår säkerhetssida.",
    fortnoxTrust3Title: "Krypterad överföring och lagring",
    fortnoxTrust3Desc: "TLS 1.2+ för all trafik mellan Attestro och Fortnox. Lagring krypterad i vila.",
    fortnoxTrust4Title: "Svenskt bolag, svensk kundtjänst",
    fortnoxTrust4Desc: "Älgamo Software AB (org.nr 559579-6987). Support på svenska och engelska.",
    fortnoxStartTitle: "Kom igång idag",
    fortnoxStart1: "Skapa ett Attestro-konto.",
    fortnoxStartContact: "Kontakta oss på <a href=\"mailto:sales@algamo.se\">sales@algamo.se</a> så aktiverar vi ert konto och hjälper er igång.",
    fortnoxStart2: "Klicka \"Anslut Fortnox\" och logga in med ditt Fortnox-konto.",
    fortnoxStart3: "Godkänn de scopes integrationen behöver.",
    fortnoxStart4: "Ladda upp eller koppla dina avtal och offerter.",
    fortnoxStart5: "Klart. Attestro börjar verifiera nya fakturor direkt.",
    fortnoxStartCta: "Starta anslutningen",
    fortnoxFaqTitle: "Vanliga frågor om integrationen",
    fortnoxFaq1Q: "Vad kostar Fortnox-integrationen?",
    fortnoxFaq1A: "Fortnox-integrationen ingår utan extra avgift i alla Attestro-planer. Observera att Fortnox kan ta ut en separat licensavgift för integrationen från sin sida. Se <a href=\"../pricing.html\">pricing</a> för aktuella priser.",
    fortnoxFaq2Q: "Ändras något i min Fortnox-miljö när jag ansluter?",
    fortnoxFaq2A: "Nej. Attestro har endast läsåtkomst till leverantörsfakturor i Fortnox. Beslutsunderlaget visas i Attestro och inga inställningar, kontoplaner eller historiska poster i Fortnox ändras.",
    fortnoxFaq3Q: "Vilka fakturor fångas upp av integrationen?",
    fortnoxFaq3A: "Alla leverantörsfakturor som finns i Fortnox kan hämtas. Du kan filtrera på leverantör, projekt eller belopp om du vill börja smalt och sedan skala upp.",
    fortnoxFaq4Q: "Hur hanteras känslig data?",
    fortnoxFaq4A: "All data lagras krypterat i EU (Sverige). Åtkomsten går via OAuth 2.0 och Attestro har full revisionslogg på varje kontroll. Läs mer på vår <a href=\"../security.html\">säkerhetssida</a>.",
    fortnoxFaq5Q: "Går det att koppla bort integrationen?",
    fortnoxFaq5A: "Ja. Du kan när som helst återkalla åtkomsten från din Fortnox-användare. Ingen historisk data påverkas i Fortnox när du kopplar bort Attestro.",
    fortnoxContactTitle: "Kom igång med Attestro och Fortnox",
    fortnoxContactLead: "Har du frågor om integrationen eller vill se en demo? Kontakta oss så hjälper vi dig igång.",
    fortnoxContactEmailLabel: "E-post:",
    fortnoxContactCta: "Boka demo",
    fortnoxFortnoxLink: "Attestro fungerar med Fortnox. Läs mer på <a href=\"https://www.fortnox.se/?utm_source=integrator&amp;utm_medium=link&amp;utm_campaign=attestro-fortnox-landing\" rel=\"noopener\">fortnox.se</a>.",
  },
  en: {
    pageTitle: "Attestro — Invoices to structured data | Älgamo Software AB",
    pageDescription: "Attestro turns invoices into structured formats like Excel, with logic validation, error flagging, and automatic control against contracts and quotes. From Älgamo Software AB.",
    pricingTitle: "Attestro pricing — Älgamo Software AB",
    pricingDescription: "Pricing plans for Attestro. Invoices to structured data with validation and contract and project control.",
    aboutPageTitle: "About us — Älgamo Software AB",
    aboutPageDescription: "Älgamo Software AB builds Attestro, a tool to get invoices in order.",
    navSolutions: "Features",
    navAbout: "About",
    navPricing: "Pricing",
    navIntegrations: "Integrations",
    navContact: "Contact",
    navNews: "News",
    ctaHeader: "Book a demo",
    heroBadge: "Swedish tool for invoice control",
    heroTitle: "Invoice control against contracts and quotes.",
    heroLead: "Attestro converts supplier invoices to structured data, <strong>understands the meaning</strong> in your contracts and quotes, and flags discrepancies automatically.",
    heroNoChange: "You don't need to change your accounting system. Attestro works alongside what you already have.",
    heroCtaPrimary: "Book a demo",
    heroValueClaim: "Reduce manual invoice checks and catch errors before they're approved.",
    heroTrustEU: "Data stored within the EU",
    heroTrustGdpr: "GDPR compliant",
    heroTrustNoChange: "No system change",
    heroCollab: "Developed in collaboration with contracting companies",
    solutionsTitle: "How it works",
    solutionsLead: "Three simple steps from invoice to clear control.",
    step1: "Upload invoice",
    step2: "Automatic validation against contracts and quotes",
    step3: "Get clear discrepancies and reports",
    processTitle: "From invoice to verified data",
    process1Title: "Import",
    process1Desc: "Upload the invoice as a PDF or image, or have it fetched automatically from Fortnox. Attestro reads the supplier, line items, prices and project references.",
    process2Title: "Validation",
    process2Desc: "Using semantic matching, each invoice line is compared against agreed prices and terms by meaning, not just exact wording. Deviations are flagged straight away.",
    process3Title: "Structure and export",
    process3Desc: "You get structured data in Excel or check directly in the app, with full history and traceability.",
    processResult: "Fewer errors, less manual work and better cost control on every project.",
    audienceTitle: "Invoice control in construction and contracting projects",
    audienceLead: "Attestro is built for project-heavy industries with lots of invoices and complex contracts, where manual checks just don't cut it.",
    audienceConstructionTitle: "Construction and infrastructure",
    audienceConstructionDesc: "Check invoices against project contracts, change orders and unit price lists. Catch deviations before they affect the project result.",
    audienceTransportTitle: "All contract formats",
    audienceTransportDesc: "Upload contracts, quotes, and price lists as they are. Attestro interprets the content regardless of format, with no reformatting needed.",
    audienceServicesTitle: "Service companies with subcontractors",
    audienceServicesDesc: "Match invoices against hourly and framework agreements. Ensure every line is correct before payment.",
    diffCallout: "Unlike other systems, Attestro does not require you to reformat your documents. We match invoices against contracts by meaning, not exact field names.",
    whyLabel: "Why Attestro",
    whyTitle: "Built for how you already work",
    whyLead: "Unlike other systems, Attestro does not require you to restructure your documents. Three things that make a real difference.",
    whyCard1Title: "Understands the meaning in your contracts",
    whyCard1Desc: "Semantic matching compares invoice lines against contracts and quotes by meaning, not exact field names. You don't need to restructure anything.",
    whyCard2Title: "No system change",
    whyCard2Desc: "Attestro works alongside your existing accounting system. No migration, no new accounts payable ledger, no disruption to your operations.",
    whyCard3Title: "Swedish support, data in the EU",
    whyCard3Desc: "Developed and supported in Sweden. All data is stored within the EU and handled according to GDPR, with no sharing with third parties.",
    pricingTeaserTitle: "From SEK 590/month",
    pricingTeaserLead: "No setup fees. Pick the volume that fits your team and only pay for what you need.",
    pricingTeaserCta: "See pricing →",
    formNextStep: "We reply within one business day with a short intro and suggested demo times.",
    aboutTitle: "Why Attestro exists",
    aboutText1: "Wrong invoices and manual checks cost more than most people think. Attestro gives you structured data and automatic validation against contracts and quotes, so discrepancies show up before they hit your bottom line.",
    aboutText2: "That means less manual work, better traceability, and knowing that every invoice actually matches your terms.",
    aboutSubtitleCompany: "About Älgamo Software",
    aboutText3: "Älgamo Software AB develops Attestro, a tool for structured invoice handling and automatic validation against contracts and quotes. The company was started to solve a problem we've seen up close: manual invoice checks in project-heavy businesses take too much time and create unnecessary risk.",
    aboutText4: "We work closely with early customers in construction and transport to ensure that Attestro solves real problems in existing workflows.",
    aboutSubtitleFounder: "About the founder",
    aboutFounderText1: "Älgamo Software was founded by Adam Älgamo, a student of Engineering Physics and Electrical Engineering at Linköping University. For more than two years alongside his studies, Adam worked at a well-established excavation company in Stockholm, where he gained close insight into how the industry's processes actually work and identified clear inefficiencies in the day-to-day workflow.",
    aboutFounderText2: "The same pattern appeared at other companies in the industry: contractors, hauliers and groundworks firms all working with the same kind of documentation. The problem was structural, not local.",
    aboutFounderText3: "The AP platforms that dominate the market are built for large organizations with disciplined PO flows and standardized article registries. For smaller companies in construction, transport and groundworks, where the underlying document is more often a quote or a framework agreement than a purchase order, that category of solution is both too heavy and poorly suited to how the business actually operates. Adam decided to go all in and build Attestro: a verification tool that matches that reality without requiring a new AP platform or strict PO discipline.",
    ctaTitle: "Try Attestro",
    ctaLead: "Book a demo and we'll tell you more about how Attestro can help.",
    footerTagline: "Attestro. Time-efficient invoice verification.",
    footerLegal: "Älgamo Software AB (559579-6987), Sweden",
    footerSupport: "Support:",
    pricingHeading: "Attestro pricing",
    pricingLead: "Choose a plan based on your volume and needs. All plans include conversion to structured data, validation, and error flagging.",
    pricingBindingLabel: "12 month commitment",
    pricingRecommended: "Recommended",
    planFlexTitle: "Kontroll",
    planFlexDesc: "Pick the volume that fits your team.",
    featFlex1: "Automatic invoice data extraction",
    featFlex2: "Field and total validation",
    featFlex3: "Price verification against contracts and quotes",
    featFlex4: "Customizable Excel export",
    featFlex6: "Dedicated contact",
    featFlex7: "Fortnox integration",
    pricingVolumeUnitSv: "invoices / month",
    pricingPriceUnitSv: "SEK/month",
    planEnterprise: "Enterprise",
    priceEnterprise: "Price by quote",
    enterpriseNote: "Minimum 12-month agreement",
    featEntVolume: "1,500+ invoices / month",
    featEntHistorical: "One year of historical invoices included at purchase",
    featEnt1: "Everything in Kontroll",
    featEnt3: "Analytics and BI export",
    featEnt4: "Multi-entity support",
    featEnt5: "SLA with guaranteed availability",
    featEnt6: "Dedicated contact",
    faqTitle: "Frequently asked questions",
    faqQ1: "What is Attestro?",
    faqA1: "Attestro is a tool that analyzes supplier invoices in construction projects. The system extracts invoice data, compares it against contracts and quotes, and flags discrepancies before the invoice is approved.",
    faqQ2: "Which companies is Attestro suited for?",
    faqA2: "Attestro is primarily developed for:<br>• contracting companies<br>• construction companies<br>• transport and material suppliers<br>• project organizations with many supplier invoices",
    faqQ3: "What is checked and what data is extracted?",
    faqA3: "Attestro extracts supplier, invoice number, date, project/cost code, transactions, quantity, and price per unit. The system checks:<br>• price against the project's contracts and quotes<br>• project or cost code linking<br>• discrepancies against agreed terms",
    faqQ5: "How does Attestro handle our contracts and quotes?",
    faqA5: "Attestro uses semantic analysis to understand the content of your existing contracts and quotes. You upload the documents you already have and the system interprets them, regardless of format or structure. This means you don't need to adapt your source documents. Attestro works with what you already use and matches invoice lines against the correct agreed prices and terms.",
    faqQ7: "What sets Attestro apart from other systems?",
    faqA7: "Attestro uses semantic matching instead of requiring structured input. This means you can use your existing contracts and quotes as they are, whether they come as PDF, Excel, or even pricing in emails. You don't need to adapt your documents or enter data manually. Attestro understands the content and matches it against invoice lines.",
    faqQ6: "Can we try before committing?",
    faqA6: "Yes. Book a demo and we'll walk through Attestro together, ideally using your own invoices as the basis.",
    contactUs: "Contact us",
    langSv: "Svenska",
    langEn: "English",
    // Contact form
    formCompany: "Company name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send inquiry",
    formSending: "Sending…",
    formSuccess: "Thank you for your inquiry! We will get back to you within one business day.",
    formError: "Something went wrong. Please try again, or email us directly at sales@algamo.se.",
    formPrivacyNotice: "The form is sent securely via our form service to sales@algamo.se. Learn more in our <a href=\"privacy.html\">privacy policy</a>.",
    // Trust strip
    trustSweden: "Data stored in the EU",
    trustGdpr: "GDPR compliant",
    trustEncryption: "Encrypted data transfer",
    trustNoSharing: "No sharing without consent",
    // Footer
    footerSecurity: "Security",
    footerPrivacy: "Privacy policy",
    // Security page
    securityPageTitle: "Security — Attestro | Älgamo Software AB",
    securityPageDescription: "How Attestro handles data: EU hosting with Hetzner in Helsinki, GDPR compliance, encryption, access control, and subprocessors.",
    securityTitle: "Security and data handling",
    securityLead: "Here's how Attestro handles and protects your data.",
    secStorageTitle: "Data storage and infrastructure",
    secStorageText: "All data is stored within the EU on servers operated by Hetzner in Helsinki, Finland. We use established EU-based infrastructure to ensure your data never leaves the EU.",
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
    privacyLastUpdated: "Last updated: 30 August 2026",
    privacyControllerTitle: "Data controller",
    privacyControllerText: "Älgamo Software AB is the data controller for personal data processing on this website. Contact us at <a href=\"mailto:support@algamo.se\">support@algamo.se</a> for questions about personal data.",
    privacyDataTitle: "What data we process",
    privacyDataText: "<strong>Language preference:</strong> We store your language choice (Swedish/English) locally in your browser (localStorage). This is not personal data and is never sent to our servers.<br><br><strong>Contact inquiries:</strong> When you submit an inquiry via the contact form, the data (company name, email address, and message) is transmitted to us by email (sales@algamo.se) via the form service Web3Forms. Web3Forms processes the data as a data processor under a data processing agreement and stores it encrypted for a maximum of 30 days, after which it is automatically deleted. When we receive your inquiry, we process your email address, any company name provided, and message content in order to respond.<br><br><strong>Website statistics:</strong> We use Plausible Analytics for anonymous visitor statistics. Plausible does not set cookies and does not collect personal data. Data collected includes page views, referral source, and device type, but no information can be linked to individual visitors.<br><br><strong>Server logs:</strong> The website is hosted on GitHub Pages (see Hosting section below). GitHub may process visitor IP addresses in its server logs as part of delivering the website.",
    privacyLegalBasisTitle: "Legal basis",
    privacyLegalBasisText: "<strong>Language preference:</strong> Legitimate interest (Article 6.1 f GDPR) — to improve user experience.<br><br><strong>Contact inquiries:</strong> Pre-contractual measures at the data subject's request (Article 6.1 b GDPR) — you contact us about a potential business relationship. You may request deletion of your data at any time.<br><br><strong>Website statistics:</strong> Legitimate interest (Article 6.1 f GDPR) — to understand how the website is used. Plausible Analytics does not collect personal data and does not set cookies.<br><br><strong>Hosting/server logs:</strong> Legitimate interest (Article 6.1 f GDPR) — necessary to deliver the website.",
    privacyRetentionTitle: "Retention period",
    privacyRetentionText: "<strong>Language preference:</strong> Stored in your browser until you clear it or switch browsers. We have no access to this data.<br><br><strong>Contact inquiries:</strong> Emails are retained for a maximum of 12 months after the last contact, unless an ongoing business relationship justifies longer retention. The form service Web3Forms stores submitted forms for a maximum of 30 days, after which they are automatically deleted. You may request deletion at any time.<br><br><strong>Website statistics:</strong> Plausible stores aggregated statistics with no link to individual visitors. No data is stored in the visitor's browser.<br><br><strong>Server logs:</strong> Managed by GitHub according to their privacy policy. We have no access to these logs.",
    privacyHostingTitle: "Hosting",
    privacyHostingText: "The website is hosted on GitHub Pages (GitHub, Inc., a Microsoft company, USA). GitHub may process visitor IP addresses in its server logs. GitHub is certified under the EU-US Data Privacy Framework. More information is available in <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub's privacy policy</a>.",
    privacyThirdPartyTitle: "Third-party providers",
    privacyThirdPartyText: "Fonts are self-hosted. We load no external images from third parties.<br><br><strong>GitHub Pages</strong> (GitHub, Inc., a Microsoft company, USA) — website hosting. See above.<br><br><strong>Plausible Analytics</strong> (Plausible Insights OÜ, Estonia, EU) — cookie-free website statistics. No personal data is processed. More information is available in <a href=\"https://plausible.io/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Plausible's privacy policy</a>.<br><br><strong>Web3Forms</strong> (Web3Creative, India) — forwarding of contact form submissions by email. Submitted data is stored encrypted for a maximum of 30 days and then automatically deleted. A data processing agreement (DPA) is in place. As India lacks an adequacy decision, the transfer is based on standard contractual clauses in the DPA. More information is available in <a href=\"https://web3forms.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Web3Forms' privacy policy</a>.",
    privacyRightsTitle: "Your rights",
    privacyRightsText: "Under GDPR you have the right to:<br>• request access to your personal data (Article 15)<br>• request correction of inaccurate data (Article 16)<br>• request deletion of your data (Article 17)<br>• request restriction of processing (Article 18)<br>• request data portability (Article 20)<br>• object to processing (Article 21)<br>• withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal (Article 7.3)<br>• file a complaint with the Swedish Authority for Privacy Protection (IMY), <a href=\"https://www.imy.se\" target=\"_blank\" rel=\"noopener noreferrer\">www.imy.se</a>, <a href=\"mailto:imy@imy.se\">imy@imy.se</a>",
    privacyContactTitle: "Contact",
    privacyContactText: "Have questions about how we handle personal data? Contact us at <a href=\"mailto:support@algamo.se\">support@algamo.se</a>.",
    // Pricing comparison table
    // Pricing FAQ
    pricingFaqTitle: "Pricing FAQ",
    pricingFaqQ1: "Can I switch plans?",
    pricingFaqA1: "Yes. You can upgrade or downgrade your plan at any time. The change takes effect at the next billing period.",
    pricingFaqQ2: "What happens if we exceed the invoice limit?",
    pricingFaqA2: "You'll be notified before reaching your limit. Invoices beyond your plan's limit can be charged per invoice on a pay-as-you-go basis, but only with your explicit consent. No hidden fees. If you regularly exceed the limit, we recommend upgrading to the next plan for a lower per-invoice cost.",
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
    // Privacy: analytics section
    privacyCookieTitle: "Website statistics",
    privacyCookieText: "We use Plausible Analytics for anonymous visitor statistics. Plausible does not set cookies and does not collect personal data. Data collected includes page views, referral source, and device type, but no information can be linked to individual visitors. Plausible Insights OÜ is based in Estonia (EU). More information is available in <a href=\"https://plausible.io/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Plausible's privacy policy</a>.",
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
    pricingCtaLead: "Book a demo and we'll show you how Attestro works with your own invoices.",
    pricingCtaCta: "Book a demo",
    newsPageTitle: "News — Attestro | Älgamo Software AB",
    newsPageDescription: "Latest news from Attestro and Älgamo Software AB. Updates about the product, industry, and company.",
    newsTitle: "News",
    newsLead: "Latest updates from Attestro and Älgamo Software AB.",
    newsPost10Title: "New pricing model and updated website",
    newsPost10Body: "We have simplified our pricing model. You now pay per invoice instead of per page. Each invoice counts as one, regardless of how many pages it has, so a long invoice with many line items costs no more than a short one. This also makes it easier to predict what Attestro costs each month. We have also updated the website with the new prices and a simpler contact form. See all plans on our <a href=\"/pricing.html\">pricing page</a>.",
    newsPost9Title: "Attestro is published on Fortnox",
    newsPost9Body: "Today it's official: Attestro is now published on Fortnox. This means Fortnox users can easily find and activate the Attestro integration directly via Fortnox. We are incredibly proud to be part of the Fortnox ecosystem and look forward to helping more finance teams with automated invoice verification. Read more on our <a href=\"/integrationer/fortnox.html\">Fortnox integration page</a>.",
    newsPost7Title: "Attestro integrates with Fortnox",
    newsPost7Body: "Attestro now has a direct integration with Fortnox. This means supplier invoices are fetched automatically from Fortnox and verified against contracts and quotes in Attestro. No manual export or import is needed, and no data is written back to Fortnox. The integration makes it easier for finance teams to catch incorrect invoices before they are approved in Fortnox. Read more on our <a href=\"/integrationer/fortnox.html\">Fortnox integration page</a>.",
    newsPost6Title: "Älgamo Software AB is officially formed",
    newsPost6Body: "It's official. Älgamo Software AB is now registered with the Swedish Companies Registration Office (Bolagsverket) and the company is formally established. This means we move from \"in formation\" to a fully established limited company. We continue to develop Attestro with the same focus as before: making invoice verification faster and more reliable for construction, transport, and project-intensive industries.",
    newsPost4Title: "New feature: email integration",
    newsPost4Body: "You can now send supplier invoices directly to Attestro via email. Forward invoices to your dedicated Attestro address, and they will be imported and validated against contracts and quotes. No manual upload needed. Perfect for teams looking to streamline their invoice workflow even further.",
    newsPost3Title: "Attestro is live!",
    newsPost3Body: "The app is now available! Log in at <a href=\"https://app.algamo.se\">app.algamo.se</a> and start verifying your supplier invoices. Upload invoices, match them against contracts and quotes, and get deviations flagged instantly. We look forward to helping you save time and money.",
    newsPost1Title: "Website launched!",
    newsPost1Body: "We are happy to present our new website for Attestro. Here you will be able to follow our journey and stay updated on product and company news. Welcome!",
    footerNews: "News",
    // Calculator
    calcTitle: "How much can you save?",
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
    calcTotalSuffix: "SEK per year",
    calcMonthlyPrefix: "equivalent to",
    calcMonthlySuffix: "SEK per month",
    calcAssumption: "Estimate based on 60% reduced review time and 80% reduced risk of incorrect invoices passing through.",
    // Form validation
    formEmailRequired: "Email is required",
    formEmailInvalid: "Please enter a valid email address",
    contactEmailSubject: "Attestro inquiry",
    aboutStatLabel1: "Built in Sweden and hosted in the EU",
    aboutStatLabel2: "Fully compliant with EU legislation",
    aboutStatLabel3: "PDF, scanned invoices, and image formats",
    aboutStatValue1: "Swedish-built",
    aboutStatValue2: "GDPR",
    aboutStatValue3: "All formats",
    audienceLabel: "Invoice verification",
    heroStepCompare: "Verify",
    heroStepFlag: "Flag",
    heroStepInvoice: "Invoice",
    heroStepOCR: "OCR",
    heroStepTable: "Data",
    showcaseTabUpload: "Upload",
    showcaseTabPrislista: "Price list",
    showcaseTabAvtal: "Contract",
    showcaseTabProjekt: "Project",
    showcaseTabOk: "No deviations",
    showcaseTabPrisavvik: "Price deviation",
    showcaseTabArtikelavvik: "Article not found",
    showcaseUploadAlt: "Screenshot showing supplier invoice upload in Attestro",
    showcasePrislistaAlt: "Screenshot showing price lists and contract documents in Attestro",
    showcaseAvtalAlt: "Screenshot showing preview of a delivery contract with pricing schedule",
    showcaseProjektAlt: "Screenshot showing project view with match rate and total overcharge in Attestro",
    showcaseOkAlt: "Screenshot showing invoice rows with no deviations, all approved against the contract",
    showcasePrisavvikAlt: "Screenshot showing a price deviation flagged on an invoice row against contract pricing",
    showcaseArtikelavvikAlt: "Screenshot showing an article not found in the price list, flagged for review",
    pilotBenefit1: "Early access to Attestro",
    pilotBenefit2: "Direct influence over product development",
    pilotBenefit3: "Discounted pricing during the pilot phase",
    pilotBenefitsLabel: "Pilot partners receive",
    pilotLimited: "Only a limited number of pilot spots available.",
    processCredibility: "Works with PDFs, scanned invoices, and existing accounting systems.",
    planEnterpriseDesc: "For organizations with high volumes.",
    pricingFaqA6: "Yes, price verification is included in all plans. Attestro compares each invoice line against your framework agreements, quotes, and project terms. Discrepancies are flagged.",
    pricingFaqQ6: "Can Attestro verify prices against our contracts?",
    glossaryDefAta: "Work that is added beyond the original contract in construction projects, and is invoiced separately. Variation orders require special review during invoice verification to ensure the work was ordered and approved.",
    glossaryDefAttest: "Formal approval of an invoice for payment, typically performed by an authorized person according to the company's approval policy. The approval process involves a designated person verifying that the invoice is correct before authorizing payment.",
    glossaryDefAvtal: "Verification that invoiced prices and terms match what was agreed with the supplier. Contract verification is a central part of invoice review, especially in projects with complex pricing structures.",
    glossaryDefDubblett: "An invoice that has been sent or registered more than once, creating a risk of double payment. Duplicates can occur due to system errors, manual mistakes, or when the supplier sends the same invoice through multiple channels.",
    glossaryDefEfaktura: "An electronic invoice in a structured format that can be read by machines, as opposed to a PDF or paper invoice. Common formats include Peppol BIS and Svefaktura.",
    glossaryDefFakturaattest: "The process in which a designated person reviews and approves an invoice before payment is made. Invoice approval is one of the most important internal controls in a company's financial process.",
    glossaryDefFeldebitering: "A situation where the supplier invoices an incorrect amount, incorrect quantities, or incorrect items. Incorrect billing can result from mistakes in the supplier's system or from intentional deviations.",
    glossaryDefFlode: "The path an invoice takes through an organization, from receipt and registration to verification, approval, and payment. An efficient invoice workflow reduces processing time and the risk of errors.",
    glossaryDefFormat: "The technical format of an invoice, such as PDF, Peppol BIS, Svefaktura, or a scanned paper document. Format variation between suppliers is one of the major challenges in automation.",
    glossaryDefKontering: "Assignment of an invoice to the correct account, project, or cost center in the accounting system. Correct account coding is essential for accurate follow-up and reporting.",
    glossaryDefKontroll: "Systematic review of an invoice to verify that the details are correct before payment. Invoice verification covers price checks, quantity verification, contract verification, and duplicate detection.",
    glossaryDefKredit: "An invoice issued by the supplier to correct a previous erroneous invoice. The credit note reduces the outstanding amount and is used for claims or incorrect deliveries.",
    glossaryDefLeverantor: "An invoice that a company receives from a supplier for goods or services that have been delivered. Supplier invoices form the basis for a company's outgoing payments and require verification before approval.",
    glossaryDefMatchning: "Comparison of invoice data against orders, deliveries, or contracts to ensure consistency. Three-way matching means the invoice is compared against both the order and the delivery confirmation.",
    glossaryDefOcr: "Technology that converts text in scanned documents or images into machine-readable text. OCR is a central step in automated invoice handling, where paper invoices or PDFs are digitized for further processing.",
    glossaryDefOverdebitering: "When a supplier invoices more than the agreed price or for more units than were delivered. Overcharging can be difficult to detect without systematic verification against contracts and delivery data.",
    glossaryDefPrisliste: "Verification that invoiced unit prices match the agreed price lists. Price list verification is particularly important in industries with large volumes and complex pricing structures.",
    glossaryDefStrukturerad: "Invoice information that has been organized into a format that can be processed by machines, such as tables with supplier, items, quantities, and prices. Converting invoices to structured data is a central step in automated invoice handling.",
    glossaryDefTrevags: "A verification method where the invoice is compared against both the purchase order and the delivery confirmation to ensure that all three are consistent. Three-way matching is the standard method in larger organizations.",
    glossaryIntro: "Here you will find the most important terms related to invoice handling and invoice verification. Each term is briefly explained and linked to relevant guides where you can read more.",
    glossaryMeta: "Glossary",
    glossaryTermAta: "Variation orders (changes and additions)",
    glossaryTermAttest: "Approval (Attestation)",
    glossaryTermAvtal: "Contract verification",
    glossaryTermDubblett: "Duplicate invoice",
    glossaryTermEfaktura: "E-invoice",
    glossaryTermFakturaattest: "Invoice approval",
    glossaryTermFeldebitering: "Incorrect billing",
    glossaryTermFlode: "Invoice workflow",
    glossaryTermFormat: "Invoice format",
    glossaryTermKontering: "Account coding",
    glossaryTermKontroll: "Invoice verification",
    glossaryTermKredit: "Credit note",
    glossaryTermLeverantor: "Supplier invoice",
    glossaryTermMatchning: "Invoice matching",
    glossaryTermOcr: "OCR (Optical Character Recognition)",
    glossaryTermOverdebitering: "Overcharging",
    glossaryTermPrisliste: "Price list verification",
    glossaryTermStrukturerad: "Structured data",
    glossaryTermTrevags: "Three-way matching",
    glossaryTitle: "Invoice handling glossary",
    privacyAutomatedText: "No automated decisions, including profiling, that produce legal or similarly significant effects are made based on personal data (Article 22 GDPR).",
    privacyAutomatedTitle: "Automated decision-making",
    secBackupText: "Customer data is backed up regularly and stored encrypted within the EU. Documented disaster recovery procedures are in place to minimize data loss and ensure service availability.",
    secBackupTitle: "Backup and disaster recovery",
    secIncidentText: "In the event of a personal data breach, the relevant supervisory authority is notified within 72 hours in accordance with Article 33 GDPR. If the breach is likely to result in a high risk to individuals' rights and freedoms, the affected data subjects are also informed without undue delay (Article 34 GDPR).",
    secIncidentTitle: "Incident management",
    secVulnerabilityText: "If you discover a security vulnerability in Attestro or on this website, please report it to <a href=\"mailto:support@algamo.se\">support@algamo.se</a>. All reports are taken seriously and receipt is confirmed within 48 hours.",
    secVulnerabilityTitle: "Report a security issue",
    navProduct: "Product",
    produktPageTitle: "Attestro - Automated invoice verification | Älgamo Software AB",
    produktPageDescription: "Attestro turns supplier invoices into structured data, validates against contracts, and flags discrepancies. Learn about features, workflow, and technical details.",
    produktHeroTitle: "Automated invoice verification for construction and transport",
    produktHeroLead: "Attestro reads supplier invoices, validates every line against contracts and quotes, and gives you structured data with full traceability.",
    produktHeroCtaPrimary: "Book a demo",
    produktHeroCtaSecondary: "See pricing",
    produktHowTitle: "How Attestro works",
    produktHowLead: "From invoice to verified, structured data in three steps.",
    produktHow1Title: "Upload invoice",
    produktHow1Desc: "Upload the supplier invoice as a PDF, scanned image, or digital format, or have it retrieved automatically from Fortnox. Attestro identifies supplier, invoice number, date, line items, quantities, unit prices, and project references using OCR and document analysis.",

    produktHow2Title: "Automatic validation",
    produktHow2Desc: "Every line is checked against your framework agreements, quotes, and project terms. Attestro flags price deviations, incorrect quantities, missing project references, and other discrepancies before the invoice is approved for payment.",

    produktHow3Title: "Structured export",
    produktHow3Desc: "You get verified data in Excel. Every check is logged with full history and traceability, so you can always see exactly what was verified and why.",

    produktFeaturesTitle: "Features in detail",
    produktFeaturesLead: "Everything you need to go from manual invoice checks to automated verification.",
    produktFeatCat1Title: "Data extraction",
    produktFeatCat1Item1: "OCR extraction from PDF, scanned invoices, and images",
    produktFeatCat1Item2: "Support for Swedish invoice formats and supplier templates",
    produktFeatCat1Item3: "Automatic identification of supplier, date, invoice number",
    produktFeatCat1Item4: "Line-level extraction: item, quantity, unit price, amount, plus registration number and date when applicable",
    produktFeatCat2Title: "Validation",
    produktFeatCat2Item1: "Field validation (format, amounts, VAT)",
    produktFeatCat2Item2: "Price verification against contracts and quotes",
    produktFeatCat2Item3: "Project linking and cost code matching",
    produktFeatCat2Item4: "Automatic flagging of discrepancies and overcharges",
    produktFeatCat2Item6: "First-level attest approval before the invoice is forwarded",
    produktFeatCat3Title: "Export and integration",
    produktFeatCat3Item1: "Excel export with structured data",
    produktFeatCat3Item2: "Custom export templates",
    produktFeatCat3Item3: "Fortnox integration for automatic invoice retrieval",
    produktFeatCat3Item4: "Dashboard and BI export",
    produktFeatCat4Title: "Traceability and history",
    produktFeatCat4Item1: "Complete audit log for every invoice",
    produktFeatCat4Item2: "Database storage of all checks and results",
    produktFeatCat4Item3: "Searchable history by supplier, project, and period",
    produktFeatCat4Item4: "Documentation of all discrepancies and actions",
    produktTechTitle: "Technical information",
    produktTechFormatsTitle: "Supported formats",
    produktTechFormatsDesc: "PDF (digital and scanned), JPEG, PNG, TIFF. Swedish and international invoice formats.",
    produktTechOcrTitle: "OCR and document analysis",
    produktTechOcrDesc: "Advanced OCR with support for Swedish characters, tables, and multi-page layouts. Automatic template identification per supplier.",
    produktTechIntegrationTitle: "Integration",
    produktTechIntegrationDesc: "Fortnox integration that fetches supplier invoices automatically. Excel export as standard. Custom export formats as needed.",
    produktTechSecurityTitle: "Security and data",
    produktTechSecurityDesc: "Data stored encrypted within the EU. GDPR compliant. No third-party sharing. Complete audit log.",
    produktCtaTitle: "Ready to improve your invoice verification?",
    produktCtaLead: "Book a demo and we'll show you how Attestro works with your invoices and contracts.",
    fortnoxBreadcrumbIntegrations: "Integrations",
    fortnoxHeroTitle: "Integration between Attestro and Fortnox",
    fortnoxHeroLead: "Fetch supplier invoices directly from Fortnox, verify every line against your contracts and quotes.",
    fortnoxHeroBadge: "Integration for Fortnox",
    fortnoxHeroDemo: "Book a demo",
    fortnoxHeroTrust: "GDPR compliant · EU hosting · No double entry · Swedish company",
    fortnoxPartnerMarkLabel: "Official Fortnox partner",
    fortnoxValueTitle: "What Attestro and Fortnox do together",
    fortnoxValueLead: "Attestro is a verification step before approval. The invoice is matched against contracts and quotes, and deviations in price, quantity and terms are flagged. You code and approve the invoice in Fortnox as usual, now with a clear basis for the decision.",
    fortnoxValueQ1Title: "The problem we solve together",
    fortnoxValueQ1Desc: "Supplier invoices often contain errors: wrong prices, mismatched quantities, items not in the contract. Manual checks are time-consuming and miss details. Fortnox alone cannot compare invoice lines against external contracts.",
    fortnoxValueQ2Title: "What only the integration can do",
    fortnoxValueQ2Desc: "Line-by-line verification against your contracts and quotes before the invoice is posted in Fortnox. Attestro catches discrepancies while you can still act on them, not after the money is already on its way out.",
    fortnoxValueQ3Title: "It saves time and money",
    fortnoxValueQ3Desc: "Less manual checking, fewer incorrect payments, faster month-end close. The approver gets a ready decision basis instead of digging through contracts and quotes by hand.",
    fortnoxValueQ4Title: "Who benefits most",
    fortnoxValueQ4Desc: "Construction, contracting, transport, and manufacturing companies with 20 to 100 employees using Fortnox that handle many supplier invoices against framework agreements, price lists, or project budgets.",
    fortnoxFlowTitle: "How data flows between the systems",
    fortnoxFlowLead: "One-way OAuth 2.0 integration. Attestro reads incoming supplier invoices from Fortnox and presents a verified decision basis inside Attestro. No data is written back to Fortnox. You code and approve the invoice in Fortnox as usual, using Attestro's report as decision support.",
    fortnoxFlowFortnoxLabel: "Fortnox",
    fortnoxFlowFortnoxLabel2: "Manual approval in Fortnox",
    fortnoxFlowFortnoxDesc: "Source system for supplier invoices",
    fortnoxFlowFortnoxReturnDesc: "You code and approve the invoice in Fortnox using Attestro's report",
    fortnoxFlowAttestroLabel: "Attestro",
    fortnoxFlowAttestroDesc: "OCR, matching against contracts and quotes, flagging deviations",
    fortnoxFlowArrow1: "Invoices, PDF, metadata (read)",
    fortnoxFlowArrow2: "Decision basis (shown in Attestro)",
    fortnoxHowTitle: "How it works, step by step",
    fortnoxHow1Title: "Connect Fortnox",
    fortnoxHow1Desc: "Click \"Connect Fortnox\" in Attestro, log in with your Fortnox account, and approve the scopes the integration needs. Done in under two minutes.",
    fortnoxHow2Title: "Attestro fetches the invoices",
    fortnoxHow2Desc: "New supplier invoices are fetched from Fortnox, including PDF, lines, amounts, and project reference. No manual export needed.",
    fortnoxHow3Title: "Verification against contracts and quotes",
    fortnoxHow3Desc: "Every invoice line is matched against your contracts and quotes. Discrepancies in price, quantity, or terms are flagged immediately, with a full audit log.",
    fortnoxHow4Title: "Decision basis in Attestro",
    fortnoxHow4Desc: "Once Attestro's verification is complete, the result is shown in Attestro with any deviations flagged. You code and approve the invoice in Fortnox as usual, using Attestro's report as decision support. No data is written back to Fortnox.",
    fortnoxScreenshot1: "Incoming supplier invoices from Fortnox in Attestro",
    fortnoxScreenshot2: "Line-by-line verification against contracts and quotes",
    fortnoxChecklistTitle: "Technical overview",
    fortnoxChecklistLead: "Everything you need to know before you connect, on a single page.",
    fortnoxCheck1Label: "Integration type",
    fortnoxCheck1Value: "One-way. Attestro reads supplier invoices from Fortnox but writes nothing back.",
    fortnoxCheck2Label: "Authentication",
    fortnoxCheck2Value: "OAuth 2.0 via Fortnox Developer Portal",
    fortnoxCheck3Label: "Scopes used",
    fortnoxCheck3Value: "supplierinvoice, supplier, article, project, settings",
    fortnoxCheck4Label: "Data fetched from Fortnox",
    fortnoxCheck4Value: "Supplier invoices (PDF and lines), supplier register, article list, projects",
    fortnoxCheck5Label: "Data sent to Fortnox",
    fortnoxCheck5Value: "None. Attestro does not write to Fortnox. The decision basis and audit log are shown inside Attestro.",
    fortnoxCheck6Label: "Sync frequency",
    fortnoxCheck6Value: "Near real-time via webhook, with a 15-minute polling fallback",
    fortnoxCheck7Label: "Data storage",
    fortnoxCheck7Value: "EU (Sweden), encrypted. See our <a href=\"../security.html\">security page</a> for details.",
    fortnoxCheck8Label: "Activation time",
    fortnoxCheck8Value: "Plug-and-play, about 10 minutes for most companies. Larger companies with large article registers may get an onboarding call.",
    fortnoxAudienceTitle: "Who benefits most",
    fortnoxAudienceLead: "The integration is built for companies that handle many supplier invoices against framework agreements, quotes, or project budgets.",
    fortnoxAudience1Title: "Construction and contracting companies",
    fortnoxAudience1Desc: "Change-order invoices, subcontractor invoices, and materials against framework agreements. Attestro checks against the project price list and flags discrepancies before they are posted.",
    fortnoxAudience2Title: "Transport and logistics companies",
    fortnoxAudience2Desc: "Kilometer and hourly rates, fuel surcharges, weight-based prices. Attestro matches each invoice line against the transport agreement and catches incorrect charges.",
    fortnoxAudience3Title: "Manufacturing companies",
    fortnoxAudience3Desc: "Materials and components against purchasing agreements. Attestro verifies unit price, quantity, and terms per line, so you know which invoices are safe to approve in Fortnox.",
    fortnoxTrustTitle: "Security and compliance",
    fortnoxTrustLead: "Built on the Fortnox Developer API and operated from Sweden. No US cloud services between you and your invoices.",
    fortnoxTrust1Title: "Built on the Fortnox API",
    fortnoxTrust1Desc: "The integration uses the Fortnox Developer API following Fortnox best practices. Updated continuously as the API evolves.",
    fortnoxTrust2Title: "GDPR and data in the EU",
    fortnoxTrust2Desc: "All data is stored within the EU, on servers in Helsinki, Finland. Read more on our security page.",
    fortnoxTrust3Title: "Encrypted transfer and storage",
    fortnoxTrust3Desc: "TLS 1.2+ for all traffic between Attestro and Fortnox. Storage encrypted at rest.",
    fortnoxTrust4Title: "Swedish company, Swedish support",
    fortnoxTrust4Desc: "Älgamo Software AB (reg. no. 559579-6987). Support in Swedish and English.",
    fortnoxStartTitle: "Get started today",
    fortnoxStart1: "Create an Attestro account.",
    fortnoxStartContact: "Contact us at <a href=\"mailto:sales@algamo.se\">sales@algamo.se</a> so we can activate your account and help you get started.",
    fortnoxStart2: "Click \"Connect Fortnox\" and log in with your Fortnox account.",
    fortnoxStart3: "Approve the scopes the integration needs.",
    fortnoxStart4: "Upload or connect your contracts and quotes.",
    fortnoxStart5: "Done. Attestro starts verifying new invoices immediately.",
    fortnoxStartCta: "Start the connection",
    fortnoxFaqTitle: "Common questions about the integration",
    fortnoxFaq1Q: "What does the Fortnox integration cost?",
    fortnoxFaq1A: "The Fortnox integration is included at no extra cost in all Attestro plans. Note that Fortnox may charge a separate license fee for the integration on their side. See <a href=\"../pricing.html\">pricing</a> for current plans.",
    fortnoxFaq2Q: "Does anything change in my Fortnox environment when I connect?",
    fortnoxFaq2A: "No. Attestro has read-only access to supplier invoices in Fortnox. The decision basis is shown inside Attestro, and no settings, chart of accounts, or historical entries in Fortnox are changed.",
    fortnoxFaq3Q: "Which invoices does the integration pick up?",
    fortnoxFaq3A: "Every supplier invoice in Fortnox can be fetched. You can filter by supplier, project, or amount if you want to start narrow and scale up later.",
    fortnoxFaq4Q: "How is sensitive data handled?",
    fortnoxFaq4A: "All data is stored encrypted in the EU (Sweden). Access is via OAuth 2.0 and Attestro keeps a full audit log of every check. Read more on our <a href=\"../security.html\">security page</a>.",
    fortnoxFaq5Q: "Can I disconnect the integration?",
    fortnoxFaq5A: "Yes. You can revoke access from your Fortnox user at any time. No historical data in Fortnox is affected when you disconnect Attestro.",
    fortnoxContactTitle: "Get started with Attestro and Fortnox",
    fortnoxContactLead: "Have questions about the integration or want to see a demo? Contact us and we'll help you get started.",
    fortnoxContactEmailLabel: "Email:",
    fortnoxContactCta: "Book a demo",
    fortnoxFortnoxLink: "Attestro works with Fortnox. Read more at <a href=\"https://www.fortnox.se/?utm_source=integrator&amp;utm_medium=link&amp;utm_campaign=attestro-fortnox-landing\" rel=\"noopener\">fortnox.se</a>.",
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
  renderPricingSlider();
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
  document.querySelectorAll<HTMLImageElement>("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    const value = key ? t[key] : undefined;
    if (value != null) el.alt = value;
  });
}

function updateMeta(lang: Lang): void {
  const t = translations[lang];
  if (!t) return;
  const isPricing = document.body.querySelector(".pricing") != null;
  const isAbout = document.body.querySelector(".about") != null;
  const isSecurity = document.body.querySelector(".security") != null;
  const isPrivacy = document.body.querySelector(".privacy") != null;
  const isNews = document.body.querySelector(".nyheter") != null;
  const isNotfound = document.body.querySelector(".notfound") != null;
  const isProdukt = document.body.querySelector(".produkt") != null;
  let title = t.pageTitle;
  let desc = t.pageDescription;
  if (isPricing) {
    title = t.pricingTitle;
    desc = t.pricingDescription;
  } else if (isProdukt) {
    title = t.produktPageTitle;
    desc = t.produktPageDescription;
  } else if (isAbout) {
    title = t.aboutPageTitle;
    desc = t.aboutPageDescription;
  } else if (isSecurity) {
    title = t.securityPageTitle;
    desc = t.securityPageDescription;
  } else if (isPrivacy) {
    title = t.privacyPageTitle;
    desc = t.privacyPageDescription;
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

const PRICING_VOLUMES = [100, 300, 750, 1500];
const PRICING_PRICES = [590, 1390, 2990, 5290];
const PRICING_PRICES_BINDING = [490, 1190, 2490, 4490];

function renderPricingSlider(): void {
  const slider = document.getElementById("pricing-volume-slider") as HTMLInputElement | null;
  if (!slider) return;
  const i = Math.max(0, Math.min(PRICING_VOLUMES.length - 1, Number(slider.value) || 0));
  const lang = getLang();
  const priceUnit = lang === "en" ? "SEK/month" : "kr/mån";
  const volumeUnit = lang === "en" ? "invoices / month" : "fakturor / mån";
  const defaultEl = document.getElementById("pricing-flex-price-default");
  const bindingEl = document.getElementById("pricing-flex-price-binding");
  const volumeEl = document.getElementById("pricing-flex-volume");
  if (defaultEl) defaultEl.textContent = `${formatNumber(PRICING_PRICES[i])} ${priceUnit}`;
  if (bindingEl) bindingEl.textContent = `${formatNumber(PRICING_PRICES_BINDING[i])} ${priceUnit}`;
  if (volumeEl) volumeEl.textContent = `${formatNumber(PRICING_VOLUMES[i])} ${volumeUnit}`;
  const historicalEl = document.getElementById("pricing-flex-historical");
  if (historicalEl) {
    const n = formatNumber(PRICING_VOLUMES[i]);
    historicalEl.textContent = lang === "en"
      ? `Up to ${n} historical invoices included at\u00A0purchase`
      : `Upp till ${n} historiska fakturor ingår vid\u00A0köp`;
  }
  document.querySelectorAll<HTMLElement>(".pricing-slider-tick").forEach((tick, idx) => {
    tick.classList.toggle("is-active", idx === i);
    tick.setAttribute("aria-pressed", String(idx === i));
  });
}

function initPricingSlider(): void {
  const slider = document.getElementById("pricing-volume-slider") as HTMLInputElement | null;
  if (!slider) return;
  slider.addEventListener("input", renderPricingSlider);
  document.querySelectorAll<HTMLElement>(".pricing-slider-tick").forEach((tick, idx) => {
    tick.addEventListener("click", () => {
      slider.value = String(idx);
      renderPricingSlider();
    });
  });
  renderPricingSlider();
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

  // Public by design — Web3Forms access keys are meant for client-side embeds.
  // Abuse protection: the hidden botcheck honeypot, verified server-side by Web3Forms.
  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  const WEB3FORMS_ACCESS_KEY = "3a30a16b-c957-4c5e-a0a4-a0ec12297c8a";

  const emailInput = form.elements.namedItem("email") as HTMLInputElement;
  const emailError = document.getElementById("cf-email-error");
  const statusEl = document.getElementById("cf-status");
  const submitBtn = form.querySelector<HTMLButtonElement>(".btn-form-submit");

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      emailInput.removeAttribute("aria-invalid");
      if (emailError) emailError.textContent = "";
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const email = emailInput.value.trim();
    const t = translations[getLang()];

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.setAttribute("aria-invalid", "true");
      if (emailError) {
        emailError.textContent = email ? t.formEmailInvalid : t.formEmailRequired;
      }
      emailInput.focus();
      return;
    }

    if (statusEl) {
      statusEl.textContent = "";
      statusEl.classList.remove("is-success", "is-error");
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t.formSending;
    }

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", t.contactEmailSubject + (company ? " — " + company : ""));
    formData.append("from_name", company || email);

    let success = false;
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      success = res.ok && data.success === true;
    } catch {
      success = false;
    }

    const tNow = translations[getLang()];
    if (success) form.reset();
    if (statusEl) {
      statusEl.textContent = success ? tNow.formSuccess : tNow.formError;
      statusEl.classList.add(success ? "is-success" : "is-error");
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = tNow.formSubmit;
    }
  });
}

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

function animateNumber(el: HTMLElement | null, target: number, duration = 400): void {
  if (!el) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    el.textContent = formatNumber(target);
    return;
  }
  const start = parseInt(el.textContent?.replace(/\s/g, "") ?? "0", 10) || 0;
  if (start === target) return;
  const startTime = performance.now();
  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    el!.textContent = formatNumber(current);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
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
  const resultMonthly = document.getElementById("calc-result-monthly");
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
    const monthlyTotal = timeSavingsKr + errorSavingsKr;
    const yearlyTime = timeSavingsKr * 12;
    const yearlyErrors = errorSavingsKr * 12;
    const yearlyTotal = monthlyTotal * 12;

    animateNumber(resultTime, yearlyTime);
    animateNumber(resultErrors, yearlyErrors);
    animateNumber(resultTotal, yearlyTotal);
    animateNumber(resultMonthly, monthlyTotal);
    if (resultTotal) {
      resultTotal.classList.add("is-updating");
      setTimeout(() => resultTotal.classList.remove("is-updating"), 150);
    }
  }

  invoicesSlider.addEventListener("input", update);
  minutesSlider.addEventListener("input", update);
  costSlider.addEventListener("input", update);
  errorRateSlider.addEventListener("input", update);
  errorCostSlider.addEventListener("input", update);
  update();
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

function initScrollReveal(): void {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}

function initHeroShowcase(): void {
  const root = document.querySelector<HTMLElement>("[data-hero-showcase]");
  if (!root) return;
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));

  const activate = (tab: HTMLButtonElement) => {
    const target = tab.dataset.target;
    if (!target) return;
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
    });
    panels.forEach((p) => {
      const active = p.id === target;
      p.classList.toggle("is-active", active);
      p.toggleAttribute("hidden", !active);
    });
  };

  root.addEventListener("click", (e) => {
    const tab = (e.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]');
    if (tab) activate(tab);
  });

  root.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const current = document.activeElement;
    if (!(current instanceof HTMLButtonElement)) return;
    const idx = tabs.indexOf(current);
    if (idx < 0) return;
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(idx + dir + tabs.length) % tabs.length];
    next.focus();
    activate(next);
    e.preventDefault();
  });
}

function initScreenshotLightbox(): void {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  const img = document.createElement("img");
  img.className = "lightbox-img";
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  const close = () => overlay.classList.remove("is-active");
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document
    .querySelectorAll<HTMLImageElement>(".produkt-screenshot, .hero-showcase-panel img")
    .forEach((el) => {
      el.style.cursor = "zoom-in";
      el.addEventListener("click", () => {
        img.src = el.currentSrc || el.src;
        img.alt = el.alt;
        overlay.classList.add("is-active");
      });
    });
}

initLang();
initLangSwitcher();
initPricingToggle();
initPricingSlider();
initMobileMenu();
initContactForm();
initCalculator();
initFaqAnimation();
initScrollReveal();
initScreenshotLightbox();
initHeroShowcase();
