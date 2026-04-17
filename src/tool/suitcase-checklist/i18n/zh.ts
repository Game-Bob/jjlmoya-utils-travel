import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'suitcase-checklist-generator';
const title = '行李清单生成器 轻松制定您的打包计划';
const description = '根据旅行类型、目的地和时长组织行李的终极在线工具。再也不会忘记您的旅行必备品。';

const ui: SuitcaseChecklistUI = {
  title: "打包计划程序",
  form: {
    destTitle: "目的地与气候",
    destTypes: [
      { id: "playa", name: "海滩 / 海岸", icon: "mdi:beach" },
      { id: "ciudad", name: "城市 / 都市", icon: "mdi:city" },
      { id: "montana", name: "山地 / 乡村", icon: "mdi:pine-tree" },
      { id: "frio", name: "寒冷 / 冰雪", icon: "mdi:snowflake" }
    ],
    daysTitle: "旅行天数？",
    intlTitle: "国际旅行？",
    intlLabel: "是的，跨境旅行",
    reasonTitle: "旅行目的",
    reasons: [
      { id: "ocio", name: "休闲 / 娱乐", icon: "mdi:party-popper" },
      { id: "negocios", name: "商务", icon: "mdi:tie" }
    ],
    submitBtn: "配置理想行李箱"
  },
  results: {
    title: "您的打包清单",
    editBtn: "编辑",
    printBtn: "保存 PDF",
    tipsTitle: "旅行贴士",
    progressText: "已完成"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "证件与基本物品",
      icon: "mdi:passport",
      items: [
        { label: "身份证 / 护照" },
        { label: "银行卡" },
        { label: "现金" },
        { label: "票据 (机票/车票)" },
        { label: "预订确认函" },
        { label: "家门钥匙" },
        { label: "国际旅行证件", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "电子产品",
      icon: "mdi:laptop",
      items: [
        { label: "手机" },
        { label: "手机充电器" },
        { label: "耳机" },
        { label: "移动电源" },
        { label: "电源适配器", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "洗漱用品",
      icon: "mdi:toothbrush",
      items: [
        { label: "牙刷与牙膏" },
        { label: "除臭剂" },
        { label: "沐浴露与洗发水" },
        { label: "梳子 / 刷子" },
        { label: "小型急救箱" },
        { label: "个人药品" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "日常衣物",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "内衣", dynamicId: "qty-ropa-interior" },
        { label: "T恤 / 上衣", dynamicId: "qty-camisetas" },
        { label: "裤子 / 下装", dynamicId: "qty-pantalones" },
        { label: "袜子", dynamicId: "qty-calcetines" },
        { label: "睡衣" },
        { label: "薄外套" },
        { label: "舒适的日常鞋履" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "海滨必备",
        icon: "mdi:beach",
        items: [
          { label: "泳装" },
          { label: "沙滩毛巾" },
          { label: "防晒霜" },
          { label: "太阳镜" },
          { label: "人字拖" },
          { label: "帽子" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "都市旅行",
        icon: "mdi:city",
        items: [
          { label: "步行运动鞋" },
          { label: "安全双肩小包" },
          { label: "便携雨伞" },
          { label: "城市指南" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "山地户外",
        icon: "mdi:pine-tree",
        items: [
          { label: "登山靴" },
          { label: "防风衣" },
          { label: "徒步裤" },
          { label: "水瓶" },
          { label: "登山包" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "寒冷气候",
        icon: "mdi:snowflake",
        items: [
          { label: "厚大衣 / 羽绒服" },
          { label: "帽子与手套" },
          { label: "冬鞋" },
          { label: "保暖内衣" },
          { label: "围巾" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "商务出行",
        icon: "mdi:tie",
        items: [
          { label: "西装 / 正装" },
          { label: "衬衫" },
          { label: "皮鞋" },
          { label: "笔记本电脑" },
          { label: "电脑充电器" },
          { label: "工作文件" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "休闲旅行",
        icon: "mdi:camera",
        items: [
          { label: "晚装" },
          { label: "相机 (可选)" },
          { label: "图书 / 娱乐" }
        ]
      }
    }
  },
  tips: {
    military: "使用“军队式”卷衣法可以有效减少褶皱并节省空间。",
    longTravel: "您的旅程超过一周。计划在行程过半时清洗基本衣物。",
    intlPassport: "国际旅行：今天请检查您的护照有效期是否至少还有 6 个月。",
    intlBank: "检查是否需要签证，以及您的银行是否收取境外手续费。",
    intlAdapter: "如果目的地的插座不同，别忘了带上万能适配器！",
    coldLayers: "寒冷天气请采用层叠穿法：保暖基层、绝缘层和防水外层。",
    coldHeavyOn: "将最笨重/最沉的衣物穿在身上登机，以节省行李箱空间。",
    beachWet: "带上多套泳装；湿度过大可能导致它们一夜干不了。"
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "行李清单生成器：您理想的旅行伙伴", level: 2 },
  { type: "paragraph", html: "收拾行李通常是旅行前最紧张的时刻之一。担心忘记重要物品、疑惑目的地的天气，或者不确定带多少行李比较合适，这些焦虑可能会冲淡您对假期的期待。这时，<strong>行李清单生成器</strong>将成为您最好的盟友。" },
  {
    type: "summary",
    title: "使用我们的清单创建器的益处",
    items: [
      "针对目的地气候（海滩、山地、城市或冰雪）的绝对个性化方案。",
      "根据旅行天数自动计算衣物数量。",
      "交互式核对清单，大幅减少物流压力。",
      "优化行李空间，避免“以防万一”综合征。"
    ]
  },
  { type: "title", text: "为什么行李规划至关重要？", level: 3 },
  { type: "paragraph", html: "旅行是一次改变生活的体验，但糟糕的规划会带来不必要的烦恼。通过使用我们的智能工具，您可以将原本需要数小时计算和记忆的过程自动化。高效的组织是任何成功冒险的基石。" }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "我可以保存生成的清单吗？", answer: "您可以在清单上勾选和取消勾选，也可以使用按钮将其打印或作为 PDF 文件保存到设备上。" },
  { question: "衣物数量是如何计算的？", answer: "我们的工具根据选择的旅行时长估算所需衣物套装，提倡轻装简行并优化行李空间。" },
  { question: "它适用于寒冷天气和冰雪天吗？", answer: "是的，您可以选择寒冷气候目的地，清单会自动包含适用于此类环境的必备物品。" },
  { question: "这个工具免费吗？", answer: "是的，我们的行李清单生成器 100% 免费，无需注册或下载额外的应用程序。" }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - 如何按照整理魔法打包行李", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - 终极旅行打包清单", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "定义您的旅行", text: "选择您旅行的气候、目的和时长。" },
  { name: "生成清单", text: "点击按钮，立即获取从洗漱用品到电子产品的所有必备物品。" },
  { name: "开始打包", text: "边打包边勾选，确保不会遗忘任何核心物品。" }
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "常见问题",
  bibliography,
  bibliographyTitle: "来源与参考",
  howTo,
  howToTitle: "如何打包您的行李箱",
  schemas: [faqSchema, howToSchema, appSchema],
};
