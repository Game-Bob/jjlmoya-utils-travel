import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-calculator';
const title = '申根 90 180天 停留时间计算器';
const description =
  '根据申根区90/180天滚动规则精确计算欧洲合法停留天数。实时查看剩余天数，规避逾期滞留风险及出入境黑名单处罚。';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: '合法安全停留（在允许限额内）',
  verdictWarningTitle: '注意: 已接近90天停留上限',
  verdictOverstayTitle: '检测到非法逾期滞留（Overstay）',
  daysRemainingSub: '剩余允许停留天数',
  daysUsedSub: '180天窗口内已用天数',
  maxStaySub: '最长连续停留天数',
  fullResetSub: '90天全额恢复重置日期',
  plannerHeading: '1. 查询目标日期状态',
  plannerEntryLabel: '入境日期 / 评估目标日期',
  quickDatesLabel: '快速跳转',
  presetToday: '今天',
  presetPlus7: '+1周',
  presetPlus14: '+2周',
  presetPlus30: '+1个月',
  tripsHeading: '2. 申根行程记录（历史与未来规划）',
  addTripBtn: '+ 添加行程',
  emptyTripsMsg: '暂无行程记录。请添加您过去或计划在申根区的停留日期。',
  colArrival: '入境（到达）',
  colDeparture: '出境（离开）',
  colDestination: '国家 / 备注',
  colDays: '天数',
  sampleBtn: '加载示例行程',
  clearBtn: '清空全部',
  timelineTitle: '180天滚动审查时间窗口',
  legendInSchengen: '在申根区内',
  legendOutside: '区外',
  legendOverstay: '逾期滞留',
  bannerSafe: '在 {date}，您将已使用 {used}（剩余可用：{rem}）。',
  bannerWarning: '在 {date}，您将已使用 {used}（仅剩：{rem}）。',
  bannerOverstay: '自 {date} 起检测到非法逾期滞留违规。您的行程已超出法定限制 {days}。',
  unitDays: '天',
  notesPlaceholder: '例如：法国、西班牙',
  sampleNotes1: '意大利自驾游 (20天)',
  sampleNotes2: '德国与奥地利 (20天)',
  sampleNotesDefault: '法国与西班牙',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: '申根 90 180天规则的真实计算运作机制',
    level: 2,
  },
  {
    type: 'summary',
    title: '申根滚动审查窗口系统的基本原则',
    items: [
      '非欧盟公民在任何连续的180天移动时间窗口内，于申根区停留总天数不得超过90天。',
      '180天审查窗口每天前移一天，始终严格倒推追溯此前的179天。',
      '入境当天和出境当天均无条件按整天计入实际停留天数。',
      '离开欧洲并不会自动清零天数，唯有在申根区外连续停留满90天方可全额重置。',
    ],
  },
  {
    type: 'paragraph',
    html: '依据<em>《申根边境法典》（欧盟条例 2016/399）</em>第6条第(1)款，申根区对免签旅客及持有短期C类申根签证的第三国公民实施<strong>任意180天期间最多停留90天</strong>的严格限制。在您身处欧洲的每一天，边检当局均会核算过去179天加上当天在29个成员国内所累积的实际在境天数。',
  },
  {
    type: 'title',
    text: '关键监管指标与边境核查标准',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90天',
        label: '最长允许停留期',
      },
      {
        value: '180天',
        label: '滚动倒推追溯期',
      },
      {
        value: '双端全计',
        label: '出入境算全天规则',
      },
      {
        value: '29国',
        label: '申根统一境内区域',
      },
    ],
  },
  {
    type: 'title',
    text: '固定自然年额度与动态滚动窗口对比',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '自然年清零的常见误区',
        description:
          '许多旅客误以为每年1月1日天数会自动重置，或短暂离境后额度即恢复为90天。这种误解导致了大量无意识的逾期滞留与机场海关高额罚款。',
      },
      {
        title: '动态滚动窗口的真实运作',
        description:
          '在申根区的每段停留均记录在时间轴上。随着时间向前推移，180天之前的历史行程会逐步移出窗口，从而持续释放出新的合法停留额度。',
      },
    ],
  },
  {
    type: 'title',
    text: '常见行程模式与合规性判定',
    level: 2,
  },
  {
    type: 'table',
    headers: ['行程模式', '具体案例', '合规状态', '操作建议'],
    rows: [
      [
        '单次连续长居',
        '6月1日入境，8月29日离境（满90天）',
        '合规',
        '必须在第90天当天离境，且需在申根区外连续停留满90天以完全恢复额度。',
      ],
      [
        '多次往返旅客',
        '3次各30天的行程，每次间隔30天离境休整',
        '合规',
        '每次行程的出入境节点均需依据各自的180天回溯窗口分别核验。',
      ],
      [
        '数字游民交替停留',
        '申根区内60天与区外30天交替进行',
        '极高滞留风险',
        '30天的休整仅能释放180天前的行程额度，极易在边检入境时遭遇遣返。',
      ],
      [
        '完全90天重置',
        '在申根区外连续不间断停留满90天',
        '额度全额恢复',
        '确保下次入境时拥有完整的90天合法停留上限。',
      ],
    ],
  },
  {
    type: 'title',
    text: '避免边境违规的实用策略建议',
    level: 2,
  },
  {
    type: 'tip',
    title: '预留充足的安全缓冲天数',
    html: '切勿将返程航班安排在恰好第90天。航班延误或突发就医可能导致离境顺延至第91天，从而在欧洲出入境系统（EES）自动生成非法滞留记录并导致未来入境受阻。',
  },
  {
    type: 'card',
    title: '妥善保管区外逗留凭证',
    html: '请完整保留非申根国（如英国、爱尔兰、塞浦路斯、黑山、阿尔巴尼亚等）的登机牌、酒店账单和出入境章，以便在受到核查时出具有力的离境证明。',
  },
  {
    type: 'title',
    text: '欧洲边境管理术语表',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay（逾期滞留）',
        definition: '在任意180天窗口内停留超过法定90天的违规行为，将面临罚款、驱逐出境或多年入境禁令。',
      },
      {
        term: 'EES（出入境系统）',
        definition: '欧盟用于自动登记非欧盟旅客出入境及生物识别信息的智能化信息系统。',
      },
      {
        term: '第三国国民',
        definition: '不具备欧盟成员国或欧洲自由贸易联盟（EFTA）国家国籍的任何个人。',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: '什么是申根区 90 180天规则？',
    answer:
      '该规则允许非欧盟公民在无长期签证的情况下，在任何滚动的180天周期内，于29个申根成员国境内累计停留最多90天。',
  },
  {
    question: '离开欧洲后 90天额度会自动重置吗？',
    answer:
      '不会。暂时离境不会自动清零天数。180天窗口每天都在移动，只有在申根区外连续停留满90天后，才能彻底恢复完整的90天额度。',
  },
  {
    question: '入境和出境当天算作完整的一天吗？',
    answer:
      '是的。根据《申根边境法典》第6条，通过海关边检的入境日和出境日，无论具体时间早晚，均各按完整的一天计入停留期。',
  },
  {
    question: '本计算器包含哪些申根国家？',
    answer:
      '涵盖29个成员国：奥地利、比利时、保加利亚、克罗地亚、捷克、丹麦、爱沙尼亚、芬兰、法国、德国、希腊、匈牙利、冰岛、意大利、拉脱维亚、列支敦士登、立陶宛、卢森堡、马耳他、荷兰、挪威、波兰、葡萄牙、罗马尼亚、斯洛伐克、斯洛文尼亚、西班牙、瑞典和瑞士。英国与爱尔兰不在申根区内。',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: '选择评估基准日期',
    text: '指定您计划出行的航班日期或需要核实额度的目标日期。',
  },
  {
    name: '输入历史与规划行程',
    text: '录入最近数月内每次出入申根国家的准确起止日期。',
  },
  {
    name: '核对剩余天数与安全边际',
    text: '查看剩余天数仪表盘、最长连续停留期限以及90天全额恢复日期。',
  },
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
  description,
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
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: '如何计算申根停留天数',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
