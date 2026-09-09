import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent, FAQItem, HowToStep, SEOSection } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { AirportConnectionBufferUI } from '../ui';

interface AirportLocaleCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  ui: AirportConnectionBufferUI;
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
  howToTitle: string;
}

const additionalSeo: Record<string, SEOSection[]> = {
  de: [
    { type: 'title', text: 'Die beiden Puffer richtig lesen', level: 2 },
    { type: 'paragraph', html: 'Der Hauptpuffer endet am Gateschluss. Der Stresspuffer zieht zusätzlich die gewählte Ankunftsverspätung ab. Der MCT-Vergleich bleibt davon getrennt.' },
    { type: 'title', text: 'Vor dem Vertrauen in das Ergebnis', level: 2 },
    { type: 'paragraph', html: 'Prüfe Airline, Terminal, Boarding-Frist, Passkontrolle und Gepäckregeln. Der Rechner kennt weder aktuelle Warteschlangen noch geschützte Anschlussbedingungen.' },
  ],
  es: [
    { type: 'title', text: 'Cómo leer los dos márgenes', level: 2 },
    { type: 'paragraph', html: 'El margen principal termina en el cierre de puerta. El margen de estrés resta además el retraso elegido. La comparación MCT es independiente.' },
    { type: 'title', text: 'Antes de fiarte del resultado', level: 2 },
    { type: 'paragraph', html: 'Comprueba aerolínea, terminal, límite de embarque, controles y equipaje. La calculadora no conoce las colas actuales ni las condiciones de protección del billete.' },
  ],
  fr: [
    { type: 'title', text: 'Lire les deux marges', level: 2 },
    { type: 'paragraph', html: 'La marge principale s arrête à la fermeture de la porte. La marge sous stress retire aussi le retard choisi. La comparaison MCT reste indépendante.' },
    { type: 'title', text: 'Avant de vous fier au résultat', level: 2 },
    { type: 'paragraph', html: 'Vérifiez compagnie, terminal, limite d embarquement, contrôles et bagages. Le calculateur ne connaît pas les files actuelles ni la protection de votre billet.' },
  ],
  id: [
    { type: 'title', text: 'Membaca dua waktu cadangan', level: 2 },
    { type: 'paragraph', html: 'Cadangan utama berakhir saat gate ditutup. Cadangan stres juga mengurangi keterlambatan yang dipilih. Perbandingan MCT berdiri sendiri.' },
    { type: 'title', text: 'Sebelum mengandalkan hasil', level: 2 },
    { type: 'paragraph', html: 'Periksa maskapai, terminal, batas boarding, pemeriksaan paspor, dan aturan bagasi. Kalkulator tidak mengetahui antrean saat ini atau perlindungan tiket.' },
  ],
  it: [
    { type: 'title', text: 'Come leggere i due margini', level: 2 },
    { type: 'paragraph', html: 'Il margine principale termina alla chiusura del gate. Il margine sotto stress sottrae anche il ritardo scelto. Il confronto MCT è separato.' },
    { type: 'title', text: 'Prima di fidarti del risultato', level: 2 },
    { type: 'paragraph', html: 'Controlla compagnia, terminal, limite di imbarco, controlli e bagagli. Il calcolatore non conosce le code attuali né la protezione del biglietto.' },
  ],
  ja: [
    { type: 'title', text: '2つの余裕の読み方', level: 2 },
    { type: 'paragraph', html: '通常の余裕は搭乗口の締切までです。遅延時の余裕は選んだ到着遅延も差し引きます。MCTの比較は別の確認です。' },
    { type: 'title', text: '結果を使う前に', level: 2 },
    { type: 'paragraph', html: '航空会社、ターミナル、搭乗締切、検査、手荷物の案内を確認してください。現在の列や航空券の保護条件は計算機では分かりません。' },
  ],
  ko: [
    { type: 'title', text: '두 여유 시간 읽기', level: 2 },
    { type: 'paragraph', html: '기본 여유는 게이트 마감까지의 시간입니다. 지연 여유는 선택한 도착 지연도 뺍니다. MCT 비교는 별도의 확인입니다.' },
    { type: 'title', text: '결과를 믿기 전에', level: 2 },
    { type: 'paragraph', html: '항공사, 터미널, 탑승 마감, 검사와 수하물 안내를 확인하세요. 현재 대기열과 항공권 보호 조건은 계산기가 알 수 없습니다.' },
  ],
  nl: [
    { type: 'title', text: 'De twee marges lezen', level: 2 },
    { type: 'paragraph', html: 'De hoofd marge eindigt wanneer de gate sluit. De stressmarge trekt ook de gekozen aankomstvertraging af. De MCT-vergelijking staat los daarvan.' },
    { type: 'title', text: 'Voordat je op het resultaat vertrouwt', level: 2 },
    { type: 'paragraph', html: 'Controleer maatschappij, terminal, boardingdeadline, controles en bagage. De calculator kent actuele wachtrijen en ticketbescherming niet.' },
  ],
  pl: [
    { type: 'title', text: 'Jak czytać oba zapasy', level: 2 },
    { type: 'paragraph', html: 'Główny zapas kończy się przy zamknięciu bramki. Zapas po opóźnieniu odejmuje także wybrane opóźnienie przylotu. Porównanie MCT jest oddzielne.' },
    { type: 'title', text: 'Zanim zaufasz wynikowi', level: 2 },
    { type: 'paragraph', html: 'Sprawdź linię, terminal, limit wejścia, kontrole i zasady bagażowe. Kalkulator nie zna aktualnych kolejek ani ochrony wynikającej z biletu.' },
  ],
  pt: [
    { type: 'title', text: 'Como ler as duas margens', level: 2 },
    { type: 'paragraph', html: 'A margem principal termina no fecho da porta. A margem sob pressão também subtrai o atraso escolhido. A comparação MCT é independente.' },
    { type: 'title', text: 'Antes de confiar no resultado', level: 2 },
    { type: 'paragraph', html: 'Confirme companhia, terminal, limite de embarque, controlos e bagagem. A calculadora não conhece filas atuais nem a proteção do bilhete.' },
  ],
  ru: [
    { type: 'title', text: 'Как читать два запаса', level: 2 },
    { type: 'paragraph', html: 'Основной запас заканчивается при закрытии выхода. Запас при задержке дополнительно вычитает выбранную задержку прибытия. Сравнение MCT выполняется отдельно.' },
    { type: 'title', text: 'Прежде чем полагаться на результат', level: 2 },
    { type: 'paragraph', html: 'Проверьте авиакомпанию, терминал, окончание посадки, проверки и багаж. Калькулятор не знает текущие очереди и условия защиты билета.' },
  ],
  sv: [
    { type: 'title', text: 'Så läser du de två marginalerna', level: 2 },
    { type: 'paragraph', html: 'Huvudmarginalen slutar när gaten stänger. Stressmarginalen drar dessutom av den valda ankomstförseningen. MCT-jämförelsen är separat.' },
    { type: 'title', text: 'Innan du litar på resultatet', level: 2 },
    { type: 'paragraph', html: 'Kontrollera flygbolag, terminal, boardinggräns, kontroller och bagage. Kalkylatorn känner inte aktuella köer eller biljettens skydd.' },
  ],
  tr: [
    { type: 'title', text: 'İki payı nasıl okuyabilirsiniz?', level: 2 },
    { type: 'paragraph', html: 'Ana pay kapı kapanışında biter. Stres payı seçtiğiniz varış gecikmesini de çıkarır. MCT karşılaştırması bundan bağımsızdır.' },
    { type: 'title', text: 'Sonuca güvenmeden önce', level: 2 },
    { type: 'paragraph', html: 'Havayolunu, terminali, biniş son saatini, kontrolleri ve bagaj kurallarını doğrulayın. Hesaplayıcı güncel kuyrukları veya bilet korumasını bilemez.' },
  ],
  zh: [
    { type: 'title', text: '如何阅读两种余量', level: 2 },
    { type: 'paragraph', html: '主要余量截止于登机口关闭。延误余量还会扣除所选的到达延误。MCT比较是独立的检查。' },
    { type: 'title', text: '在依赖结果之前', level: 2 },
    { type: 'paragraph', html: '请核对航空公司、航站楼、登机截止、检查和行李规则。计算器不知道当前排队情况，也不知道机票是否受到联程保护。' },
  ],
};

export function createAirportContent(copy: AirportLocaleCopy): ToolLocaleContent<AirportConnectionBufferUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'TravelApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: copy.locale,
  };
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    seo: [...copy.seo, ...(additionalSeo[copy.locale] ?? [])],
    faq: copy.faq,
    howTo: copy.howTo,
    howToTitle: copy.howToTitle,
    schemas: [faqSchema, howToSchema, appSchema],
    bibliography: bibliographyEntries,
  };
}
