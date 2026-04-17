import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'sutsu-kesu-mochimono-check-list-generator';
const title = 'スーツケース持ち物チェックリスト作成 | 旅行の準備を完璧に';
const description = '旅行のタイプ、目的地、期間に基づいて荷物を整理するための究極のオンラインツール。旅行の必需品を二度と忘れることはありません。';

const ui: SuitcaseChecklistUI = {
  title: "パッキング・プランナー",
  form: {
    destTitle: "目的地と気候",
    destTypes: [
      { id: "playa", name: "ビーチ / 海岸", icon: "mdi:beach" },
      { id: "ciudad", name: "都市 / 市街地", icon: "mdi:city" },
      { id: "montana", name: "山 / 農村", icon: "mdi:pine-tree" },
      { id: "frio", name: "寒い / 雪", icon: "mdi:snowflake" }
    ],
    daysTitle: "何日間ですか？",
    intlTitle: "海外旅行ですか？",
    intlLabel: "はい、国境を越えます",
    reasonTitle: "旅行の目的",
    reasons: [
      { id: "ocio", name: "レジャー / 観光", icon: "mdi:party-popper" },
      { id: "negocios", name: "ビジネス", icon: "mdi:tie" }
    ],
    submitBtn: "理想的なバッグを構成する"
  },
  results: {
    title: "あなたの持ち物リスト",
    editBtn: "編集",
    printBtn: "PDFで保存",
    tipsTitle: "旅行のヒント",
    progressText: "完了"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "書類と基本アイテム",
      icon: "mdi:passport",
      items: [
        { label: "身分証明書 / パスポート" },
        { label: "銀行カード" },
        { label: "現金" },
        { label: "チケット（飛行機/電車）" },
        { label: "予約確認書" },
        { label: "家の鍵" },
        { label: "海外旅行用書類", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "テクノロジー",
      icon: "mdi:laptop",
      items: [
        { label: "携帯電話" },
        { label: "電話用充電器" },
        { label: "ヘッドフォン" },
        { label: "モバイルバッテリー" },
        { label: "電源アダプター", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "洗面用具",
      icon: "mdi:toothbrush",
      items: [
        { label: "歯ブラシと歯磨き粉" },
        { label: "デオドラント" },
        { label: "ジェルとシャンプー" },
        { label: "くし / ブラシ" },
        { label: "ミニ救急セット" },
        { label: "常備薬" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "日常着",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "下着", dynamicId: "qty-ropa-interior" },
        { label: "Tシャツ / トップス", dynamicId: "qty-camisetas" },
        { label: "ズボン / ボトムス", dynamicId: "qty-pantalones" },
        { label: "靴下", dynamicId: "qty-calcetines" },
        { label: "パジャマ" },
        { label: "軽いジャケット" },
        { label: "履き慣れた靴" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "海岸用",
        icon: "mdi:beach",
        items: [
          { label: "水着" },
          { label: "ビーチタオル" },
          { label: "日焼け止め" },
          { label: "サングラス" },
          { label: "ビーチサンダル" },
          { label: "帽子（ハットやキャップ）" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "都市用",
        icon: "mdi:city",
        items: [
          { label: "ウォーキングシューズ" },
          { label: "防犯機能付き小型バックパック" },
          { label: "折りたたみ傘" },
          { label: "シティガイド" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "山岳用",
        icon: "mdi:pine-tree",
        items: [
          { label: "ハイキングブーツ" },
          { label: "ウィンドブレーカー" },
          { label: "トレッキングパンツ" },
          { label: "水筒" },
          { label: "登山用バックパック" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "寒冷地用",
        icon: "mdi:snowflake",
        items: [
          { label: "厚手のコート" },
          { label: "帽子と手袋" },
          { label: "冬用フットウェア" },
          { label: "サーマルシャツ（インナー）" },
          { label: "スカーフ / マフラー" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "ビジネス",
        icon: "mdi:tie",
        items: [
          { label: "スーツ / 礼服" },
          { label: "ワイシャツ" },
          { label: "フォーマルシューズ" },
          { label: "ノートパソコン" },
          { label: "ノートパソコン用充電器" },
          { label: "仕事用書類" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "レジャー",
        icon: "mdi:camera",
        items: [
          { label: "夜の外出着" },
          { label: "カメラ（オプション）" },
          { label: "本 / エンターテインメント" }
        ]
      }
    }
  },
  tips: {
    military: "服を「ミリタリースタイル」で丸めると、シワを防ぎ、スペースを大幅に節約できます。",
    longTravel: "1週間以上の旅行ですね。途中で基本アイテムを洗濯することを計画しましょう。",
    intlPassport: "海外旅行：パスポートの有効期限が少なくとも6ヶ月以上あるか今日確認してください。",
    intlBank: "必要なビザを確認し、銀行が海外手数料を課すかどうかチェックしましょう。",
    intlAdapter: "目的地のプラグ形状が異なる場合は、ユニバーサルアダプターを忘れずに！",
    coldLayers: "寒い気候では重ね着をしましょう：サーマルのベース、断熱層、そして防水のアウターです。",
    coldHeavyOn: "機内スペースを節約するために、最もかさばる/重い服は飛行機に乗る時に着用しましょう。",
    beachWet: "水着は複数持っていきましょう。湿気が多いと一晩で乾かないことがあります。"
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "スーツケース持ち物リスト作成：あなたの理想的な旅の相棒", level: 2 },
  { type: "paragraph", html: "スーツケースのパッキングは、旅行前の最もストレスのかかる瞬間の1つです。重要なものを忘れることへの恐怖、目的地の天候への不安、あるいはどれくらいの荷物を持っていくべきかという不確実性が、待ちに待った休暇前の数日間を台無しにすることがあります。ここで、<strong>スーツケース持ち物チェックリスト作成ツール</strong>があなたの最良の味方となります。" },
  {
    type: "summary",
    title: "当ツールを使用するメリット",
    items: [
      "目的地の気候（ビーチ、山、都市、または雪）に合わせた完全なパーソナライズ。",
      "旅行期間に基づいた衣類枚数の自動計算。",
      "チェックを入れられるインタラクティブなリストによる、ロジスティックなストレスの大幅な軽減。",
      "「念のため」症候群を避け、荷物スペースを最適化。"
    ]
  },
  { type: "title", text: "なぜ荷物の計画が根本的なのか？", level: 3 },
  { type: "paragraph", html: "旅行は人生を変えるような体験ですが、計画が不十分だと不必要な悩みの種になります。当社のスマートツールを使用することで、本来なら計算や記憶に何時間もかかるプロセスを自動化できます。効率的な整理は、あらゆる冒険を成功させるための基盤です。" }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "生成されたリストを保存できますか？", answer: "リストの項目にチェックを入れたり外したりできるほか、印刷ボタンやデバイスにPDFファイルとして保存するボタンも利用できます。" },
  { question: "衣類の枚数はどのように計算されますか？", answer: "当ツールは、選択された旅行期間に基づいて衣類のセット数を推定し、荷物の軽量化と最適化を促進します。" },
  { question: "寒い気候や雪の場所でも使えますか？", answer: "はい、寒冷地の目的地を選択すれば、チェックリストにそれらの条件に不可欠なアイテムが自動的に含まれます。" },
  { question: "ツールは無料ですか？", answer: "はい、当社のスーツケース用チェックリスト作成ツールは100%無料であり、登録や追加アプリのダウンロードも不要です。" }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "こんまり - スーツケースをこんまり流に整理する方法", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - 持ち物リスト：究極の旅行パッキング・チェックリスト", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "旅行の内容を定義する", text: "目的地の気候、目的、旅行期間を選択します。" },
  { name: "リストを生成する", text: "ボタンを押すと、化粧品からテクノロジーまで、必要なすべてのアイテムが即座に表示されます。" },
  { name: "パッキングする", text: "荷物を詰める際、重要なものを忘れないようにリストにチェックを入れます。" }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "よくある質問",
  bibliography,
  bibliographyTitle: "出典とリファレンス",
  howTo,
  howToTitle: "スーツケースのパッキング方法",
  schemas: [faqSchema, howToSchema, appSchema],
};
