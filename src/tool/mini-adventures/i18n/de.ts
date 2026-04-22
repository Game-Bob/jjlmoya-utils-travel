import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-abenteuer-generator';
const title = 'Mini Abenteuer Generator : Raus aus dem Trott';
const description = 'Zufälliger Generator für tägliche Herausforderungen, um die Monotonie zu durchbrechen und Ihre Umgebung zu erkunden.';

const ui: MiniAdventuresUI = {
  title: "Mini Abenteuer",
  homeTitle: "Mini-Abenteuer",
  homeDesc: "Machen Sie den heutigen Tag ein wenig anders. Sind Sie bereit für Entdeckungen?",
  generateBtn: "ABENTEUER GENERIEREN",
  anotherBtn: "NOCH EINES",
  doneBtn: "ERLEDIGT",
  shareBtn: "TEILEN",
  categories: {
    exploration: { id: "exploration", label: "Erkundung", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomie", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Lernen", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Kreativität", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Soziales", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Beobachtung", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Wohlbefinden", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Probieren Sie einen Kaffee oder ein Getränk an einem Ort, den Sie noch nie betreten haben.", categoryId: "food" },
    { id: 2, text: "Gehen Sie 10 Minuten lang in eine Richtung, die Sie normalerweise nicht einschlagen, wenn Sie das Haus verlassen.", categoryId: "exploration" },
    { id: 3, text: "Lernen Sie, wie man 'Danke' in drei verschiedenen Sprachen sagt, die Sie nicht kennen.", categoryId: "learning" },
    { id: 4, text: "Fotografieren Sie ein architektonisches Detail in Ihrer Straße, das Ihnen ins Auge fällt.", categoryId: "creativity" },
    { id: 5, text: "Kaufen Sie eine Frucht, die Sie noch nie probiert haben, und entdecken Sie ihren Geschmack.", categoryId: "food" },
    { id: 6, text: "Suchen Sie in Ihrer Nachbarschaft nach einer Gedenktafel und lesen Sie die Geschichte, die sie erzählt.", categoryId: "exploration" },
    { id: 7, text: "Zeichnen Sie etwas, das Sie vor sich haben, in weniger als 60 Sekunden.", categoryId: "creativity" },
    { id: 8, text: "Grüßen Sie einen Nachbarn, mit dem Sie normalerweise nicht sprechen.", categoryId: "social" },
    { id: 9, text: "Hören Sie sich 5 Minuten lang ein Musikgenre an, das Sie normalerweise nicht mögen.", categoryId: "learning" },
    { id: 10, text: "Besuchen Sie ein Antiquitäten- oder Second-Hand-Geschäft und finden Sie das seltsamste Objekt.", categoryId: "exploration" },
    { id: 11, text: "Setzen Sie sich in einen Park und zählen Sie, wie viele verschiedene Vogelarten Sie sehen.", categoryId: "observation" },
    { id: 12, text: "Schreiben Sie eine positive Nachricht und hinterlassen Sie sie in einem Buch in einer öffentlichen Bibliothek.", categoryId: "social" },
    { id: 13, text: "Machen Sie eine Liste mit 5 Dingen, für die Sie heute dankbar sind.", categoryId: "wellness" },
    { id: 14, text: "Versuchen Sie, ein neues Rezept zu kochen und verwenden Sie nur das, was Sie in der Vorratskammer haben.", categoryId: "food" },
    { id: 15, text: "Verbringen Sie 20 Minuten, ohne auf einen Bildschirm (Handy, TV, PC) zu schauen.", categoryId: "wellness" },
    { id: 16, text: "Suchen Sie einen Baum in der Nähe Ihres Hauses und versuchen Sie, seine Art zu bestimmen.", categoryId: "learning" },
    { id: 300, text: "Planen Sie einen Besuch in einer nahe gelegenen Stadt für dieses Wochenende.", categoryId: "exploration" },
    { id: 301, text: "Lernen Sie, wie die Finger der Hand auf Latein heißen.", categoryId: "learning" },
    { id: 302, text: "Finden Sie einen Reim für jedes Wort in diesem Satz.", categoryId: "creativity" },
    { id: 303, text: "Bedanken Sie sich bei einem Freund für etwas, das schon lange zurückliegt.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Das Erwachen", categoryId: "global", icon: "mdi:footprint", description: "Dein erstes Mini-Abenteuer abgeschlossen." },
    { id: "g10", milestone: 10, label: "Wunder-Gewohnheit", categoryId: "global", icon: "mdi:sparkles", description: "Du hast den Trott 10 Mal durchbrochen." },
    { id: "g50", milestone: 50, label: "Tagessammler", categoryId: "global", icon: "mdi:calendar-star", description: "50 Tage, an denen das Gewöhnliche außergewöhnlich wurde." },
    { id: "g150", milestone: 150, label: "Meister des Zufalls", categoryId: "global", icon: "mdi:trophy-variant", description: "Du hast die Hälfte des Abenteuerkatalogs abgeschlossen." },
    { id: "g300", milestone: 300, label: "Freigeist", categoryId: "global", icon: "mdi:ghost", description: "Du beherrschst die Kunst des täglichen Abenteuers." },
    { id: "e3", milestone: 3, label: "Tourist zu Hause", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 neue Ecken entdeckt." },
    { id: "e15", milestone: 15, label: "Stadtkartograf", categoryId: "exploration", icon: "mdi:map-check", description: "Du kennst deine Postleitzahl besser als jeder andere." },
    { id: "f3", milestone: 3, label: "Rastloser Gaumen", categoryId: "food", icon: "mdi:silverware-clean", description: "Du hast 3 Geschmacksrichtungen probiert, die du nicht kanntest." },
    { id: "f15", milestone: 15, label: "Gourmet-Alchemist", categoryId: "food", icon: "mdi:silverware-variant", description: "Deine Speisekammer ist ein Reisepass für die Welt." },
    { id: "l3", milestone: 3, label: "Lehrling von allem", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Du hast 3 Kuriositäten aus der Welt gelernt." },
    { id: "l15", milestone: 15, label: "Wandelnde Bibliothek", categoryId: "learning", icon: "mdi:head-cog", description: "Deine Neugier kennt keine Grenzen." },
    { id: "c3", milestone: 3, label: "Zeichenhand", categoryId: "creativity", icon: "mdi:palette-outline", description: "Du hast bei 3 kleinen Herausforderungen deine Spuren hinterlassen." },
    { id: "c15", milestone: 15, label: "Lokale Avantgarde", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Du siehst Kunst, wo andere nur die Straße sehen." },
    { id: "s3", milestone: 3, label: "Menschliche Brücke", categoryId: "social", icon: "mdi:account-voice", description: "Du hast heute Verbindungen zu 3 Menschen geknüpft." },
    { id: "s15", milestone: 15, label: "Seele der Straße", categoryId: "social", icon: "mdi:account-group", description: "Du hast aus Fremden Geschichten gemacht." },
    { id: "o3", milestone: 3, label: "Detailverliebt", categoryId: "observation", icon: "mdi:magnify", description: "Du hast 3 Dinge gesehen, die sonst niemand bemerkt." },
    { id: "o15", milestone: 15, label: "Filmemacher-Auge", categoryId: "observation", icon: "mdi:telescope", description: "Dein Blick ist das Objektiv eines großen Films." },
    { id: "w3", milestone: 3, label: "Achtsame Pause", categoryId: "wellness", icon: "mdi:leaf", description: "Du hast 3 Momente deinem inneren Frieden gewidmet." },
    { id: "w15", milestone: 15, label: "Totale Balance", categoryId: "wellness", icon: "mdi:spa", description: "Körper und Geist danken es dir." }
  ],
  stats: {
    adventures: "Abenteuer",
    badges: "Abzeichen",
    progress: "Dein Fortschritt",
    trophies: "Trophäensammlung"
  },
  shareTemplate: "Ich habe gerade ein Mini-Abenteuer bekommen!\n\n\"{text}\"\n\nTraust du dich auch? Erstelle deines hier: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini-Abenteuer: Die Kunst des Alltäglichen", level: 2 },
  { type: "paragraph", html: "Entdecken Sie, wie Mikro-Abenteuer Ihr Gehirn neu verdrahten, den Alltag bekämpfen und Ihre angeborene Neugier wecken können. Routine ist der Feind der Kreativität. Indem wir kleine Variationen in unser tägliches Leben einbauen, zwingen wir unser Gehirn, neue neuronale Verbindungen zu knüpfen." },
  { type: "title", text: "Neuroplastizität in Aktion", level: 3 },
  { type: "paragraph", html: "Routine ist der Feind der Kreativität. Indem wir kleine Variationen in unser tägliches Leben einbauen — wie das Ausprobieren einer neuen Geschmacksrichtung oder das Gehen durch eine unbekannte Straße — zwingen wir unser Gehirn, neue neuronale Verbindungen zu knüpfen. Diese Mikro-Abenteuer wirken wie ein mentales Fitnessstudio, das den Geist beweglich und offen für neue Möglichkeiten hält." },
  { type: "title", text: "Emotionales Wohlbefinden", level: 3 },
  { type: "paragraph", html: "Das Gefühl des Stillstands entsteht oft durch absolute Vorhersehbarkeit. Der gesteuerte Zufall eines Abenteuer-Generators führt das Element der 'positiven Überraschung' ein, das Dopamin freisetzt und die Stimmung auf natürliche Weise verbessert. Man braucht keine transozeanische Reise, um den Nervenkitzel der Entdeckung zu spüren." },
  { type: "title", text: "Erkunden Sie, was Sie bereits kennen: Lokale Philosophie", level: 2 },
  { type: "paragraph", html: "Wir sind umgeben von Geschichten und Details, die unbemerkt bleiben. Das Ziel dieser Vorhersage ist es, Ihr Auge darauf zu trainieren, das Außergewöhnliche im Gewöhnlichen zu sehen. Suchen Sie nicht nach dem perfekten Moment; suchen Sie nach dem möglichen Moment." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Keine Ausreden", html: "Abenteuer, die weniger als 15 Minuten und Null Euro erfordern. Zeit ist kein Hindernis für Neugier." },
  { type: "card", icon: "mdi:lock-outline", title: "Volle Privatsphäre", html: "Sie müssen sich nicht registrieren oder Ihre Daten teilen. Ihr Fortschritt und Ihre abgeschlossenen Abenteuer werden nur auf Ihrem Gerät gespeichert." },
  { type: "card", icon: "mdi:share-variant", title: "Gesunde Viralität", html: "Teilen Sie Herausforderungen, die andere inspirieren, aus ihrer Blase auszubrechen, anstatt den ständigen Vergleich in den sozialen Medien zu befeuern." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamification", html: "Sammeln Sie exklusive Abzeichen für jede abgeschlossene Herausforderungskategorie." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Was ist ein Mikro-Abenteuer?", answer: "Es ist ein kurzes, lokales, günstiges und einfaches Abenteuer. Der Begriff (bekannt gemacht durch Alastair Humphreys) soll zeigen, dass man nicht auf die andere Seite der Welt reisen muss, um aufregende Erfahrungen zu machen." },
  { question: "Wofür ist dieser Generator gut?", answer: "Er hilft gegen Analyse-Paralyse. Manchmal wollen wir etwas anderes machen, wissen aber nicht was. Dieser Simulator wählt eine zufällige Herausforderung für Sie aus und befreit Sie von der mentalen Last der Entscheidung." },
  { question: "Muss ich meine Abenteuer registrieren?", answer: "Nein. Dies ist ein Werkzeug für absolute Privatsphäre. Die Herausforderungen werden zufällig in Ihrem Browser generiert, und wir speichern keinerlei Aufzeichnungen darüber, was Sie tun oder wohin Sie gehen." },
  { question: "Kann ich neue Abenteuer vorschlagen?", answer: "Natürlich! Der Code für dieses Tool ist offen. Wenn Sie Ideen für lustige Herausforderungen haben, die nicht viel Budget oder Zeit erfordern, können Sie diese über das Repository auf GitHub vorschlagen." }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Generieren", text: "Drücken Sie den Generieren-Button, um eine zufällige Herausforderung zu erhalten." },
  { name: "Machen", text: "Versuchen Sie, die Herausforderung vor Ende des Tages abzuschließen." },
  { name: "Abschließen", text: "Markieren Sie die Herausforderung als erledigt, um Abzeichen und Fortschritt zu verdienen." }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description: description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description: description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Häufig gestellte Fragen",
  bibliography: "Quellen und Referenzen",
  howTo,
  howToTitle: "Wie es funktioniert",
  schemas: [faqSchema, howToSchema, appSchema],
};
