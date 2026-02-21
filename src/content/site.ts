// ─── Typed content source for Schlecht & Co GmbH ─────────────────────
// All page content is defined here. Update this single file to change site text.
// Content was originally extracted from https://schlecht-movers.ch/

export type Locale = "de" | "en";

export const LOCALES: Locale[] = ["de", "en"];

// ─── Company info ──────────────────────────────────────────────────────
export const company = {
  name: "Schlecht & Co GmbH",
  legalName: "Schlecht & Co GmbH",
  address: "Bruggstrasse 7",
  city: "4153 Reinach BL",
  fullAddress: "Bruggstrasse 7, 4153 Reinach BL",
  email: "jillschlecht@schlecht-movers.ch",
  phones: ["+41 61 711 11 15", "+41 79 197 89 92"],
  whatsapp: "+41791978992",
  instagram: "https://www.instagram.com/schlechtundco",
  agbFilename: "AGB-25.11.2025.pdf",
  agbUrl: "/docs/AGB-25.11.2025.pdf",
} as const;

// ─── Route mapping ─────────────────────────────────────────────────────
export interface RouteEntry {
  de: string;
  en: string;
  labelDe: string;
  labelEn: string;
}

export const routes: Record<string, RouteEntry> = {
  home: { de: "/", en: "/en/home", labelDe: "Home", labelEn: "Home" },
  umzug: { de: "/de/umzug", en: "/en/privat-relocation", labelDe: "Privatumzug", labelEn: "Private Relocation" },
  transport: { de: "/de/umzug/transport", en: "/en/privat-relocation/transport", labelDe: "Transport", labelEn: "Transport" },
  firmenumzug: { de: "/de/firmenumzug", en: "/en/corporate-relocation", labelDe: "Firmenumzug", labelEn: "Corporate Relocation" },
  raeumung: { de: "/de/raeumung-und-entsorgung", en: "/en/disposal-and-clearance", labelDe: "Entsorgung", labelEn: "Clearance" },
  usm: { de: "/de/usm-haller", en: "/en/usm-haller", labelDe: "USM-Haller", labelEn: "USM-Haller" },
  about: { de: "/de/ueber-uns", en: "/en/about-us", labelDe: "Über uns", labelEn: "About Us" },
  team: { de: "/de/ueber-uns/unser-team", en: "/en/about-us/our-team", labelDe: "Unser Team", labelEn: "Our Team" },
  kontakt: { de: "/de/ueber-uns/kontakt", en: "/en/about-us/contact", labelDe: "Kontakt", labelEn: "Contact" },
  referenzen: { de: "/de/ueber-uns/referenzen", en: "/en/about-us/references", labelDe: "Referenzen", labelEn: "References" },
};

export function getRoute(key: string, locale: Locale): string {
  return routes[key]?.[locale] ?? (locale === "de" ? "/" : "/en/home");
}

export function getRouteLabel(key: string, locale: Locale): string {
  return locale === "de" ? routes[key]?.labelDe ?? key : routes[key]?.labelEn ?? key;
}

// ─── Navigation structure ──────────────────────────────────────────────
export interface NavItem {
  key: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { key: "umzug" },
  { key: "firmenumzug" },
  { key: "raeumung" },
  { key: "usm" },
  {
    key: "about",
    children: [{ key: "team" }, { key: "kontakt" }, { key: "referenzen" }],
  },
];

// ─── Opening hours ─────────────────────────────────────────────────────
export interface OpeningHour {
  day: { de: string; en: string };
  morning: string;
  afternoon: string;
}

export const openingHours: OpeningHour[] = [
  { day: { de: "Montag", en: "Monday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
  { day: { de: "Dienstag", en: "Tuesday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
  { day: { de: "Mittwoch", en: "Wednesday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
  { day: { de: "Donnerstag", en: "Thursday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
  { day: { de: "Freitag", en: "Friday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
  { day: { de: "Samstag", en: "Saturday" }, morning: "7:30–12:00", afternoon: "13:00–18:30" },
];

// ─── References gallery ────────────────────────────────────────────────
export interface ReferenceItem {
  id: string;
  captionDe: string;
  captionEn: string;
  imagePlaceholder: string; // local placeholder path
}

export const references: ReferenceItem[] = [
  { id: "ref-1", captionDe: "Zu Besuch bei UNIMMO für USM Montagen", captionEn: "Visiting UNIMMO for USM assemblies", imagePlaceholder: "/images/references/ref-1.jpg" },
  { id: "ref-2", captionDe: "USM-Umbauten für Firmen in der Region Reinach", captionEn: "USM modifications for companies in the Reinach region", imagePlaceholder: "/images/references/ref-2.jpg" },
  { id: "ref-3", captionDe: "Firmenumzug in Luzern", captionEn: "Company relocation in Luzern", imagePlaceholder: "/images/references/ref-3.jpg" },
  { id: "ref-4", captionDe: "Firmenumzug in Luzern", captionEn: "Company relocation in Luzern", imagePlaceholder: "/images/references/ref-4.jpg" },
  { id: "ref-5", captionDe: "Montagen in Basel", captionEn: "Assemblies in Basel", imagePlaceholder: "/images/references/ref-5.jpg" },
  { id: "ref-6", captionDe: "Montagen in Lausen", captionEn: "Assemblies in Lausen", imagePlaceholder: "/images/references/ref-6.jpg" },
  { id: "ref-7", captionDe: "Firmenumzug in Wettingen", captionEn: "Company relocation in Wettingen", imagePlaceholder: "/images/references/ref-7.jpg" },
  { id: "ref-8", captionDe: "Umzug mit Rollwagen", captionEn: "Moving with trolley", imagePlaceholder: "/images/references/ref-8.jpg" },
  { id: "ref-9", captionDe: "Umzug in Visp", captionEn: "Moving in Visp", imagePlaceholder: "/images/references/ref-9.jpg" },
  { id: "ref-10", captionDe: "Umzug im Schwarzwald", captionEn: "Moving in the Black Forest", imagePlaceholder: "/images/references/ref-10.jpg" },
  { id: "ref-11", captionDe: "Umzug in Frankreich", captionEn: "Moving in France", imagePlaceholder: "/images/references/ref-11.jpg" },
];

// ─── Page content sections ─────────────────────────────────────────────
export interface PageSection {
  heading?: string;
  body: string;
}

export interface PageContent {
  title: string;
  subtitle?: string;
  heroText?: string;
  sections: PageSection[];
  hasForm?: boolean;
}

type Pages = Record<string, PageContent>;

export const pagesDe: Pages = {
  home: {
    title: "Ihr kompetenter Umzugspartner",
    subtitle: "Reinach · Basel-Landschaft · Schweiz",
    heroText:
      "Willkommen bei der Firma Schlecht & Co GmbH. Wir sind ein junges Unternehmen mit Sitz in Reinach in Baselland. Wir kümmern uns um Umzüge wie auch Räumungen aller Art. Wir begleiten Sie nicht nur in Basel, sondern auch in Solothurn, dem Aargau und weit darüber hinaus.",
    sections: [
      {
        heading: "Privatumzug",
        body: "Wir zügeln Sie nicht nur in der Region Reinach oder Baselland, wir zügeln in der ganzen Schweiz. Lehnen Sie sich zurück und lassen Sie uns die Arbeit für Sie übernehmen. Umziehen ist meist mit viel Aufwand verbunden. Unser Ziel ist es Ihnen diesen Stress und die Sorgen dabei abzunehmen. Wir betreuen Sie vom Anfang bis zum Ende.",
      },
      {
        heading: "Firmenumzug",
        body: "Firmenumzüge werden bei uns gewissenhaft und effizient durchgeführt, durch unsere langjährige Erfahrung im Segment der Geschäftskunden, erfassen wir alle Aspekte im Interesse der Firma. Durch die direkte Betreuung durch unseren Teamleiter, werden Komplikationen frühzeitig erkannt und können kurzfristig und zeiteffizient gelöst werden.",
      },
      {
        heading: "Räumung & Entsorgung",
        body: "Mit unserem umfassenden Räumungs- und Entsorgungsservice stehen wir Ihnen kompetent zur Seite, wenn es darum geht, Platz zu schaffen, Immobilien frei zu machen oder komplette Haushalte und Unternehmen aufzulösen. Unser Service zeichnet sich durch professionelle Planung, diskrete Abwicklung und termingetreue Durchführung aus.",
      },
      {
        heading: "USM-Haller",
        body: "Wir bieten professionelle USM-Haller Montagen, Demontagen und Umbauten in Basel-Landschaft und der gesamten Nordwestschweiz an. Als erfahrener Dienstleister übernehmen wir den fachgerechten Aufbau, Abbau sowie die individuelle Anpassung von USM-Haller Möbeln für Privat- und Geschäftskunden.",
      },
    ],
  },
  umzug: {
    title: "Umzug",
    subtitle: "Privatumzüge zum Pauschalpreis",
    sections: [
      {
        body: "Ein Privatumzug braucht klare Planung und ein Team, das mitdenkt. Wir koordinieren Ablauf, Schutz und Timing, damit Sie sich entspannt auf Ihr neues Zuhause freuen können.",
      },
      {
        heading: "Privatumzüge zum Pauschalpreis",
        body: "Wir bieten fachgerechte Umzüge für Privatkunden von der sorgfältigen Planung bis zur sicheren Durchführung. Mit Erfahrung, Engagement und einem eingespielten Team sorgen wir dafür, dass Ihr Umzug effizient, termingerecht und ohne Stress abläuft. Ihre Möbel und persönlichen Gegenstände sind bei uns in besten Händen. Wir erstellen Ihren Auftrag sehr gerne mit einem Kostendach oder einer Pauschalsumme.",
      },
      {
        heading: "Seniorenumzüge",
        body: "Umzüge ins Altersheim gehören zu unseren täglichen Arbeiten, wir begleiten Ihre Liebsten mit Geduld und ohne Stress vom Zuhause in die Seniorenresidenz oder auch das Altersheim. Dort richten unsere Möbelträger das neue Zuhause gemäss Ihren Wünschen ein und erledigen auch die Montage von Bildern damit das Zimmer seinen Charme bekommt.",
      },
      {
        heading: "Kleinere Umzüge",
        body: "Von einem WG-Zimmer oder der erste Auszug von Zuhause bekommen bei uns die selbe Aufmerksamkeit wie ein Hausumzug. Wir begleiten Sie nicht als \"fremde\" die Ihre Möbel mitnehmen, sondern schaffen ein vertrautes und freundliches Ambiente. Wir kennen keine Grenzen, wir führen auch Übersiedlungen in unsere Nachbarländer durch. Entsprechend wickeln wir auch die Dokumentation am Zoll auf Wunsch für Sie ab.",
      },
      {
        heading: "Möbeltransport",
        body: "Nicht nur grosse Umzüge, wir kümmern uns auch um kleine Transporte! Unsere Firma steht nicht nur für professionelle Umzüge, sondern auch für zuverlässige Kleintransporte aller Art. Egal, ob Sie nur ein einzelnes Möbelstück, ein paar Kartons oder eine kleinere Lieferung transportieren möchten, wir sind flexibel und sorgen dafür, dass Alles schnell, sicher und termingerecht ankommt. Auch wenn es \"nur\" ein kleiner Auftrag ist, behandeln wir ihn mit derselben Sorgfalt und Professionalität wie einen grossen Umzug. Unser Team unterstützt Sie gerne bei Wohnungswechseln, Abholungen, Möbeltransporten, Entsorgungen oder kurzfristigen Lieferfahrten.",
      },
      {
        heading: "Spezialtransport",
        body: "Manche Gegenstände erfordern besondere Aufmerksamkeit, sei es aufgrund ihres Wertes, ihrer Empfindlichkeit oder ihrer Einzigartigkeit. Wir sind Ihr verlässlicher Partner für Spezialtransporte von Kunstwerken, Gemälden, Designmöbeln, USM-Systemen und empfindlichen Objekten aller Art. Mit unserer Erfahrung und dem richtigen Equipment gewährleisten wir, dass jedes Stück fachgerecht verpackt, sicher transportiert und sorgfältig platziert wird. Unsere geschulten Mitarbeitenden wissen genau, worauf es beim Umgang mit sensiblen Objekten ankommt, von der Vorbereitung über den Transport bis hin zur Montage vor Ort.",
      },
    ],
    hasForm: true,
  },
  transport: {
    title: "Transporte aller Art",
    subtitle: "Zuverlässige Transporte — vom Einzelstück bis zum Spezialgut",
    sections: [
      {
        body: "Ob Einzelstück oder Komplettladung: Wir übernehmen Transporte flexibel, schnell und mit der gleichen Sorgfalt wie bei einem Umzug.",
      },
      {
        heading: "Möbeltransport",
        body: "Nicht nur grosse Umzüge, wir kümmern uns auch um kleine Transporte! Unsere Firma steht nicht nur für professionelle Umzüge, sondern auch für zuverlässige Kleintransporte aller Art. Egal, ob Sie nur ein einzelnes Möbelstück, ein paar Kartons oder eine kleinere Lieferung transportieren möchten, wir sind flexibel und sorgen dafür, dass Alles schnell, sicher und termingerecht ankommt. Auch wenn es \"nur\" ein kleiner Auftrag ist, behandeln wir ihn mit derselben Sorgfalt und Professionalität wie einen grossen Umzug. Unser Team unterstützt Sie gerne bei Wohnungswechseln, Abholungen, Möbeltransporten, Entsorgungen oder kurzfristigen Lieferfahrten.",
      },
      {
        heading: "Spezialtransport",
        body: "Manche Gegenstände erfordern besondere Aufmerksamkeit, sei es aufgrund ihres Wertes, ihrer Empfindlichkeit oder ihrer Einzigartigkeit. Wir sind Ihr verlässlicher Partner für Spezialtransporte von Kunstwerken, Gemälden, Designmöbeln, USM-Systemen und empfindlichen Objekten aller Art. Mit unserer Erfahrung und dem richtigen Equipment gewährleisten wir, dass jedes Stück fachgerecht verpackt, sicher transportiert und sorgfältig platziert wird. Unsere geschulten Mitarbeitenden wissen genau, worauf es beim Umgang mit sensiblen Objekten ankommt, von der Vorbereitung über den Transport bis hin zur Montage vor Ort.",
      },
    ],
  },
  firmenumzug: {
    title: "Firmenumzug",
    sections: [
      {
        body: "Wir organisieren Ihren Firmenumzug strukturiert, terminsicher und mit klarer Verantwortlichkeit, damit der Betrieb schnell wieder läuft.",
      },
      {
        heading: "Besichtigung",
        body: "Vor der Planung des Umzuges, empfehlen wir eine Besichtigung vor Ort um das genaue Volumen und die Gegebenheiten kennenzulernen. Für uns sind alle Details wichtig die den Umzug als ganzes abrunden. Sollte eine Besichtigung nicht möglich sein, können Sie uns auch eine Möbelliste zusenden.",
      },
      {
        heading: "Strukturfindung",
        body: "Ein Büroumzug benötigt auf Grund seiner Grösse eine andere Herangehensweise als eine private Übersiedlung. Deswegen ist es uns wichtig, mit Ihnen zusammen eine Struktur und einen Ablauf zu erfassen. Jeder Prozess wird mit Ihnen besprochen und behandelt.",
      },
      {
        heading: "Verpackungsmaterial",
        body: "Für alle Büroartikel stellen wir Ihnen Umzugskartons wie auch Verpackungsmaterial zur Verfügung. Ob für Dokumente, Ordner oder Dekoration, wir haben für Alles eine Verpackung.",
      },
      {
        heading: "Umzugskonzept",
        body: "Wir erstellen ein Umzugskonzept, welches auf Ihren Auftrag massgeschneidert ist. Dies beinhaltet auch eine Checkliste mit dem systematischen Ablauf. Vom Einpacken und Vorbereiten, über den Transport zum neuen Büro bis hin zum Entpacken wird dort in Absprache mit Ihnen jede Position erfasst.",
      },
    ],
    hasForm: true,
  },
  raeumung: {
    title: "Räumung und Entsorgung",
    sections: [
      {
        body: "Wir übernehmen die Räumung und Entrümpelung von Wohnungen, Häusern, Kellern, Estrichen, Garagen, Lagerräumen und Gewerbeobjekten und sorgen für eine fach- und umweltgerechte Entsorgung aller nicht mehr benötigten Gegenstände. Dabei trennen wir Wertstoffe für Recycling, spenden gut erhaltene Möbel auf Wunsch an gemeinnützige Organisationen oder entsorgen Sperrmüll und Abfall nach den aktuellen gesetzlichen Vorgaben. Unsere erfahrenen Teams arbeiten effizient und respektvoll – besonders in sensiblen Situationen wie Nachlässen oder kurzfristigen Räumungsaufträgen stehen Sie als Kunde im Mittelpunkt.",
      },
      {
        heading: "Unsere Dienstleistungen für Privatkunden",
        body: "Für private Auftraggeber bieten wir umfassende Services rund um Wohnungs- und Hausräumungen, inklusive Entrümpelung von Keller, Estrich und Garage sowie die fachgerechte Entsorgung von Möbeln, Haushaltsgegenständen, Elektrogeräten und Sperrmüll. Wir unterstützen Sie bei kompletten Haushaltsauflösungen, unabhängig davon, ob ein Umzug ansteht, ein Verkauf bevorsteht oder ein sensibler Anlass wie ein Todesfall hinter Ihnen liegt. Auf Wunsch übergeben wir Ihre Räumlichkeiten besenrein und sorgen dafür, dass Sie sich um nichts kümmern müssen.",
      },
      {
        heading: "Unsere Dienstleistungen für Firmenkunden",
        body: "Für Unternehmen, Verwaltungen und Gewerbekunden sind wir ein starker Partner: Wir übernehmen Büro-, Geschäfts- und Lagerräumungen, Betriebsauflösungen und Archiventrümpelungen und kümmern uns dabei um demontage- und transportspezifische Anforderungen. Dabei achten wir auf effiziente Abläufe, diskrete Abwicklung und eine termintreue Übergabe, damit Ihre Geschäftsprozesse nicht länger als nötig beeinträchtigt werden. Fachgerechte Entsorgung und, wenn gewünscht, sachgerechte Vernichtung sensibler Unterlagen gehören dabei selbstverständlich zu unserem Service.",
      },
    ],
    hasForm: true,
  },
  usm: {
    title: "USM-Haller",
    subtitle: "USM-Haller Umbau und Neubau in der Nordwestschweiz",
    sections: [
      {
        body: "Ob Umbau bestehender USM-Haller Anlagen oder Neubau kompletter Systeme – wir planen die Umsetzung, montieren präzise und passen Module an neue Raumkonzepte an. Unsere Expertise umfasst USM-Haller Regale, Sideboards, Büromöbel und komplette Arbeitsplatzlösungen.",
      },
      {
        heading: "Umbau & Erweiterung",
        body: "Wir konfigurieren USM-Systeme neu, erweitern Regale, Sideboards und Arbeitsplätze und sorgen für saubere Anpassungen bei Umzügen oder Umnutzungen. Durch unsere spezialisierte Arbeitsweise bleiben Ihre hochwertigen USM-Haller Möbel dauerhaft funktional und wertbeständig.",
      },
      {
        heading: "Neubau & Einrichtung",
        body: "Von der ersten Idee bis zur fertigen Einrichtung setzen wir neue USM-Haller Lösungen um und schaffen funktionale Arbeits- und Wohnbereiche. Gerne beraten wir Sie persönlich und erstellen ein unverbindliches Angebot für Ihr Projekt in der Region Basel-Landschaft.",
      },
    ],
    hasForm: true,
  },
  about: {
    title: "Unsere Geschichte",
    subtitle: "Unser Unternehmen blickt auf eine spannende Entwicklung zurück.",
    sections: [
      {
        heading: "2024 – Der Anfang",
        body: "Im Jahr 2024 startete ich als gelernter Schreiner mit einem Einzelunternehmen, getragen von der Leidenschaft für präzises Handwerk und individuelle Lösungen.",
      },
      {
        heading: "2025 – Wachstum zur GmbH",
        body: "2025 erfolgte die Umwandlung zur GmbH – ein Schritt, der den wachsenden Erfolg, die zunehmende Nachfrage und die Erweiterung unseres Teams widerspiegelt.",
      },
      {
        heading: "Heute",
        body: "Heute stehen wir unseren Kunden als erfahrenes Team aus qualifizierten Schreinern zur Seite. Wir verbinden traditionelle Handwerkskunst mit modernen Techniken und legen besonderen Wert auf Kundennähe, persönliche Beratung und eine zuverlässige Umsetzung. Durch unsere regionale Verwurzelung sind wir nah an unseren Kunden, kennen ihre Bedürfnisse und können flexibel auf individuelle Wünsche eingehen. Mit unserer Erfahrung, unserem handwerklichen Können und unserer Begeisterung für das Schreinerhandwerk setzen wir jedes Projekt mit höchstem Anspruch an Qualität und Detailtreue um. Unser Ziel ist es, langlebige und massgeschneiderte Lösungen zu schaffen, die den Alltag unserer Kunden bereichern und Freude bereiten.",
      },
    ],
  },
  team: {
    title: "Unser Team",
    subtitle: "Persönlich, zuverlässig und mit Herzblut bei der Sache",
    sections: [
      {
        heading: "Jill Schlecht, Gründer",
        body: "Ich bin Gründer, CEO und Gesellschafter der Firma Schlecht & Co GmbH. 2024 habe ich mein eigenes Unternehmen gegründet und es bereits 2025 erfolgreich in eine GmbH umgewandelt. Ursprünglich habe ich den Beruf des Schreiners erlernt, bevor ich meine Leidenschaft für den Bereich Umzüge entdeckt habe. Durch meinen handwerklichen Hintergrund weiss ich, worauf es bei Sorgfalt, Qualität und Präzision ankommt — Eigenschaften, die ich in jedes Projekt einfliessen lasse. Heute stehe ich mit meinem Team für zuverlässige, kundenorientierte Umzugslösungen, die individuell auf die Bedürfnisse unserer Kundinnen und Kunden zugeschnitten sind. Mein Ziel ist es, jedem Umzug nicht nur reibungslos, sondern auch stressfrei und professionell zu gestalten — damit unsere Kundschaft von Anfang an ein gutes Gefühl hat.",
      },
      {
        heading: "Felix Pfeifer, Umzugsleiter",
        body: "Felix Pfeifer ist Umzugsleiter beim Unternehmen Schlecht & Co GmbH. Als gelernter Schreiner mit jahrelanger Erfahrung im Umzugsbereich verbindet er handwerkliche Präzision mit organisatorischem Geschick. Er betreut unsere Kundinnen und Kunden persönlich — unabhängig davon, ob es sich um einen kleinen Privatumzug oder ein grosses Projekt handelt. Mit seiner offenen Art und seinem hohen Qualitätsanspruch ist er während des gesamten Prozesses ein verlässlicher Ansprechpartner. Sein Ziel ist es, jedem Umzug die nötige Struktur und Ruhe zu geben, damit sich unsere Kundschaft jederzeit gut aufgehoben fühlt.",
      },
    ],
  },
  kontakt: {
    title: "Kontaktieren Sie uns noch heute",
    subtitle: "Gerne betreuen wir Sie telefonisch, per Mail, per WhatsApp oder persönlich vor Ort.",
    sections: [],
  },
  referenzen: {
    title: "Ein kleiner Einblick in unsere Arbeit",
    subtitle: "Werden auch Sie ein Teil unserer Referenz.",
    sections: [],
  },
};

export const pagesEn: Pages = {
  home: {
    title: "Your competent relocation partner",
    subtitle: "Reinach · Basel-Landschaft · Switzerland",
    heroText:
      "Welcome to Schlecht & Co GmbH. We are a young, dynamic company based in Reinach, Basel-Landschaft. We specialise in professional relocation services as well as clearances and removals of all kinds. Our services are not limited to the Basel region; we also operate in Solothurn, Aargau and far beyond.",
    sections: [
      {
        heading: "Private Relocation",
        body: "We do not only handle relocations within the Reinach or Basel-Landschaft region, we carry out moves throughout the entire Switzerland. Sit back and let us take care of the work for you. Moving is often associated with a great deal of effort and organisation. Our goal is to relieve you of this stress and the associated concerns. We support and manage your move from start to finish, ensuring a smooth and professional process.",
      },
      {
        heading: "Corporate Relocation",
        body: "Corporate relocations are carried out by us with great care and efficiency. Thanks to our many years of experience in the commercial and business client segment, we take all relevant aspects into account in the best interests of the company. Through direct supervision by our team leader, potential complications are identified at an early stage and can be resolved quickly and efficiently.",
      },
      {
        heading: "Disposal & Clearance",
        body: "With our comprehensive clearance and disposal services, we provide professional support whenever space needs to be created, properties need to be vacated, or entire households and businesses need to be dissolved. Our service is characterised by professional planning, discreet handling and punctual, reliable execution.",
      },
      {
        heading: "USM-Haller",
        body: "We offer professional USM Haller assembly, disassembly and modification services in Basel-Landschaft and throughout Northwestern Switzerland. As an experienced service provider, we handle the expert installation, dismantling and customised adaptation of USM Haller furniture for both private and commercial clients.",
      },
    ],
  },
  umzug: {
    title: "Relocations",
    subtitle: "Residential moves",
    sections: [
      {
        body: "A private relocation needs clear planning and a team that stays ahead of every detail. We coordinate timing, protection and logistics so you can settle into your new home with confidence.",
      },
      {
        heading: "Residential moves",
        body: "We provide professional relocation services for private clients, from careful planning through to safe and reliable execution. With experience, dedication and a well-coordinated team, we ensure that your move is carried out efficiently, on schedule and without stress. Your furniture and personal belongings are in the best possible hands with us.",
      },
      {
        heading: "Senior relocation",
        body: "Moves into retirement homes are part of our daily work. We accompany your loved ones with patience and care, ensuring a calm and stress-free transition from their home to a senior residence or nursing home. Once there, our experienced movers set up the new living space according to your wishes and also take care of tasks such as hanging pictures, so the room quickly feels warm, familiar and welcoming.",
      },
      {
        heading: "Small-Scale Moves",
        body: "Whether it is a move from a shared apartment room or a first move out of your family home, we give it the same level of care and attention as a full house relocation. We do not see ourselves as \"strangers\" simply transporting your furniture, but as a reliable partner who creates a familiar, friendly and reassuring atmosphere throughout the entire move. We know no boundaries and also carry out relocations to our neighbouring countries. Upon request, we are happy to handle the required customs documentation for you, ensuring a smooth and uncomplicated process.",
      },
      {
        heading: "Furniture transport",
        body: "Not only large relocations, we also take care of small transports. Our company stands not only for professional moving services, but also for reliable small-scale transport solutions of all kinds. Whether you need to move a single piece of furniture, a few boxes or a small delivery, we are flexible and ensure that everything arrives quickly, safely and on time. Even if it is \"only\" a small assignment, we treat it with the same care and professionalism as a large relocation. Our team is happy to assist you with apartment moves, collections, furniture transport, disposals or short-notice delivery services.",
      },
      {
        heading: "Special transport",
        body: "Some items require special attention, whether due to their value, their sensitivity or their uniqueness. We are your reliable partner for specialised transport services involving artworks, paintings, designer furniture, USM systems and delicate objects of all kinds. With our experience and the appropriate equipment, we ensure that every item is professionally packed, transported safely and carefully positioned. Our trained staff know exactly what matters when handling sensitive objects, from preparation and transport through to on-site installation.",
      },
    ],
    hasForm: true,
  },
  transport: {
    title: "Transport services of all kinds",
    subtitle: "Reliable transport — from single items to specialist goods",
    sections: [
      {
        body: "Whether it is a single item or a full load, we handle transport with speed, care and the same attention you expect from a relocation team.",
      },
      {
        heading: "Furniture transport",
        body: "Not only large relocations, we also take care of small transports. Our company stands not only for professional moving services, but also for reliable small-scale transport solutions of all kinds. Whether you need to move a single piece of furniture, a few boxes or a small delivery, we are flexible and ensure that everything arrives quickly, safely and on time. Even if it is \"only\" a small assignment, we treat it with the same care and professionalism as a large relocation. Our team is happy to assist you with apartment moves, collections, furniture transport, disposals or short-notice delivery services.",
      },
      {
        heading: "Special transport",
        body: "Some items require special attention, whether due to their value, their sensitivity or their uniqueness. We are your reliable partner for specialised transport services involving artworks, paintings, designer furniture, USM systems and delicate objects of all kinds. With our experience and the appropriate equipment, we ensure that every item is professionally packed, transported safely and carefully positioned. Our trained staff know exactly what matters when handling sensitive objects, from preparation and transport through to on-site installation.",
      },
    ],
  },
  firmenumzug: {
    title: "Corporate Relocation",
    sections: [
      {
        body: "We manage corporate relocations with clear structure, reliable timing and defined responsibilities, so your operations resume quickly.",
      },
      {
        heading: "Inspection",
        body: "Before planning the relocation, we recommend an on-site inspection in order to assess the exact volume and local conditions. For us, every detail matters in ensuring a smooth and well-coordinated move. If an on-site inspection is not possible, you are also welcome to send us a furniture list as an alternative.",
      },
      {
        heading: "Structural planning",
        body: "Due to its scale, an office relocation requires a different approach than a private move. For this reason, it is important to us to work with you to define a clear structure and process. Every step is discussed and coordinated with you to ensure a well-organised and efficient relocation.",
      },
      {
        heading: "Packing materials",
        body: "We provide moving boxes and suitable packing materials for all office items. Whether for documents, folders or decorative items, we have the right packaging solution for everything.",
      },
      {
        heading: "Relocation concept",
        body: "We create a relocation concept that is tailored specifically to your project. This also includes a checklist with a clearly structured and systematic workflow. From packing and preparation, through transport to the new office, and on to unpacking, every step is documented and coordinated with you.",
      },
    ],
    hasForm: true,
  },
  raeumung: {
    title: "Clearance and Disposal",
    sections: [
      {
        body: "We handle the clearance and removal of apartments, houses, basements, attics, garages, storage areas and commercial properties, and ensure the professional and environmentally responsible disposal of all items that are no longer required. In the process, we separate recyclable materials, donate well-preserved furniture to charitable organisations upon request, or dispose of bulky waste and refuse in accordance with current legal regulations. Our experienced teams work efficiently and respectfully. Especially in sensitive situations such as estate clearances or short-notice assignments, you as the client remain our top priority.",
      },
      {
        heading: "Our services for private clients",
        body: "For private customers, we offer comprehensive services for apartment and house clearances, including the removal of basements, attics and garages, as well as the professional disposal of furniture, household items, electrical appliances and bulky waste. We support you with complete household clearances, whether a relocation is planned, a property sale is pending or a sensitive situation such as a bereavement has occurred. Upon request, we hand over the premises in a broom-clean condition, ensuring that you do not have to worry about anything.",
      },
      {
        heading: "Our services for corporate clients",
        body: "For companies, public authorities and commercial clients, we are a reliable and capable partner. We handle office, commercial and warehouse clearances, business closures and archive removals, taking into account all dismantling and transport-related requirements. We place great importance on efficient workflows, discreet handling and punctual handover, ensuring that your business operations are disrupted as little as possible. Professional disposal and, if required, the secure destruction of sensitive documents are, of course, an integral part of our service.",
      },
    ],
    hasForm: true,
  },
  usm: {
    title: "USM-Haller",
    subtitle: "USM-Haller reconfiguration and new builds in Northwestern Switzerland",
    sections: [
      {
        body: "Whether it is a reconfiguration of existing USM-Haller systems or a new build of complete setups, we plan the execution, assemble with precision and adapt modules to new room concepts. Our expertise covers USM-Haller shelving units, sideboards, office furniture and complete workplace solutions.",
      },
      {
        heading: "Reconfiguration & Expansion",
        body: "We reconfigure USM systems, expand shelving, sideboards and workstations and deliver clean adjustments during relocations or space changes. Through our specialised approach, your high-quality USM-Haller furniture remains permanently functional and retains its value over the long term.",
      },
      {
        heading: "New Builds & Fit-Outs",
        body: "From the initial concept to the finished fit-out, we deliver new USM-Haller solutions that create functional work and living spaces. We are happy to advise you personally and provide a non-binding quotation for your project in the Basel-Landschaft region.",
      },
    ],
    hasForm: true,
  },
  about: {
    title: "Our Story",
    subtitle: "Our company looks back on an exciting development.",
    sections: [
      {
        heading: "2024 – The Beginning",
        body: "In 2024, I started as a trained carpenter with a sole proprietorship, driven by a passion for precise craftsmanship and individual solutions.",
      },
      {
        heading: "2025 – Growth to GmbH",
        body: "In 2025, the company was converted into a limited liability company (GmbH), a step that reflects our growing success, increasing demand and the expansion of our team.",
      },
      {
        heading: "Today",
        body: "Today, we support our clients as an experienced team of qualified carpenters. We combine traditional craftsmanship with modern techniques and place particular emphasis on close customer relationships, personal consultation and reliable execution. Thanks to our strong regional roots, we remain close to our customers, understand their needs and can respond flexibly to individual requirements. With our experience, craftsmanship and passion for carpentry, we carry out every project with the highest standards of quality and attention to detail. Our goal is to create durable, custom-made solutions that enhance our clients' everyday lives and bring lasting satisfaction.",
      },
    ],
  },
  team: {
    title: "Our Team",
    subtitle: "Personal, reliable and passionate about what we do",
    sections: [
      {
        heading: "Jill Schlecht, Founder",
        body: "I am the founder, CEO and shareholder of Schlecht & Co GmbH. In 2024, I founded my own company and successfully converted it into a GmbH in 2025. I originally trained as a carpenter before discovering my passion for the moving industry. Thanks to my craftsmanship background, I know what matters when it comes to care, quality and precision — qualities I bring to every project. Today, together with my team, I stand for reliable, customer-focused moving solutions tailored to the individual needs of our clients. My goal is to make every move not only seamless but also stress-free and professional — so our customers feel confident from the very start.",
      },
      {
        heading: "Felix Pfeifer, Moving Team Leader",
        body: "Felix Pfeifer is the moving team leader at Schlecht & Co GmbH. As a trained carpenter with years of experience in the moving industry, he combines craftsmanship precision with organisational skill. He personally looks after our clients — whether it is a small private move or a large-scale project. With his approachable manner and high standards of quality, he is a reliable point of contact throughout the entire process. His goal is to give every move the structure and calm it needs, so our clients always feel they are in good hands.",
      },
    ],
  },
  kontakt: {
    title: "Contact us today",
    subtitle: "We are happy to assist you by phone, email, WhatsApp or in person on site.",
    sections: [],
  },
  referenzen: {
    title: "A small insight into our work",
    subtitle: "Become part of our references.",
    sections: [],
  },
};

export function getPageContent(pageKey: string, locale: Locale): PageContent {
  const pages = locale === "de" ? pagesDe : pagesEn;
  return pages[pageKey] ?? { title: "Page not found", sections: [] };
}

// ─── UI strings ────────────────────────────────────────────────────────
export const ui = {
  de: {
    getInTouch: "Kontakt aufnehmen",
    learnMore: "Mehr erfahren",
    sendMessage: "Nachricht senden",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    required: "Pflichtfeld",
    formSuccess: "Vielen Dank! Ihre Nachricht wurde gesendet.",
    formError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    callUs: "Rufen Sie uns an",
    findUs: "Hier sind wir",
    ourContact: "Unser Kontakt",
    openingHours: "Unsere Öffnungszeiten",
    agbDownload: "AGB herunterladen",
    services: "Dienstleistungen",
    quickLinks: "Schnellzugriff",
    allRightsReserved: "Alle Rechte vorbehalten.",
    requestQuote: "Offerte anfragen",
    individualRequest: "Individuelle Anfragen dürfen Sie uns gerne auch direkt an unsere Mail senden mit Ihrem Anliegen.",
    weAreHereForYou: "Wir stehen Ihnen jederzeit tatkräftig zur Seite und freuen uns auf Ihre Anfrage.",
    morning: "Morgen",
    afternoon: "Nachmittag",
    backToHome: "Zurück zur Startseite",
    pageNotFound: "Seite nicht gefunden",
    pageNotFoundText: "Die angeforderte Seite konnte nicht gefunden werden.",
    ifOnlyTransport: "Wenn es nur ein Transport ist",
    plannedMove: "Umzug geplant?",
    switchLang: "EN",
  },
  en: {
    getInTouch: "Get in touch",
    learnMore: "Learn more",
    sendMessage: "Send message",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    required: "Required",
    formSuccess: "Thank you! Your message has been sent.",
    formError: "An error occurred. Please try again.",
    callUs: "Call us",
    findUs: "Where to find us",
    ourContact: "Our Contact",
    openingHours: "Opening hours",
    agbDownload: "Download terms & conditions",
    services: "Services",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved.",
    requestQuote: "Request a quote",
    individualRequest: "For individual requests, you are welcome to contact us directly by email with your specific requirements.",
    weAreHereForYou: "We are always ready to assist you and look forward to receiving your enquiry.",
    morning: "Morning",
    afternoon: "Afternoon",
    backToHome: "Back to home",
    pageNotFound: "Page not found",
    pageNotFoundText: "The requested page could not be found.",
    ifOnlyTransport: "If it's just a transport",
    plannedMove: "Planning a move?",
    switchLang: "DE",
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
