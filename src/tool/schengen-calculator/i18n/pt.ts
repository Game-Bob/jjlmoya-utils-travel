import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-estadia-schengen-90-180';
const title = 'Calculadora de Estadia Schengen 90 180 Dias';
const description =
  'Verifique a conformidade da sua viagem à Europa com a regra de visto 90/180 dias. Calcule os dias de estadia permitidos e evite multas no espaço Schengen.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Viagem Legal e Segura (Dentro do Limite)',
  verdictWarningTitle: 'Atenção: Perto do Limite de 90 Dias',
  verdictOverstayTitle: 'Excesso de Estadia Ilegal Detetado',
  daysRemainingSub: 'Dias Permitidos Restantes',
  daysUsedSub: 'Dias Usados em 180 Dias',
  maxStaySub: 'Estadia Contínua Máxima',
  fullResetSub: 'Data de Reinício Total a 90 Dias',
  plannerHeading: '1. Verificar Data Alvo',
  plannerEntryLabel: 'Data de Entrada ou Voo Previsto',
  quickDatesLabel: 'Saltar para Data',
  presetToday: 'Hoje',
  presetPlus7: '+1 Semana',
  presetPlus14: '+2 Semanas',
  presetPlus30: '+1 Mês',
  tripsHeading: '2. Histórico e Planos de Viagem na Europa',
  addTripBtn: '+ Adicionar Viagem',
  emptyTripsMsg: 'Nenhuma viagem adicionada. Introduza as suas estadias passadas ou planeadas no espaço Schengen.',
  colArrival: 'Entrada (Chegada)',
  colDeparture: 'Saída (Partida)',
  colDestination: 'País / Notas',
  colDays: 'Dias',
  sampleBtn: 'Carregar Exemplo Nómada',
  clearBtn: 'Limpar Tudo',
  timelineTitle: 'Janela Móvel de 180 Dias',
  legendInSchengen: 'No Espaço Schengen',
  legendOutside: 'Fora',
  legendOverstay: 'Excesso de Estadia',
  bannerSafe: 'A {date}, terá utilizado {used} ({rem} disponíveis).',
  bannerWarning: 'A {date}, terá utilizado {used} (apenas {rem} restantes).',
  bannerOverstay: 'Excesso de estadia detetado a partir de {date}. O seu itinerário excede o limite legal por {days}.',
  unitDays: 'dias',
  notesPlaceholder: 'ex. França, Espanha',
  sampleNotes1: 'Viagem por Itália (20 dias)',
  sampleNotes2: 'Alemanha e Áustria (20 dias)',
  sampleNotesDefault: 'França e Espanha',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Como Funciona Realmente a Regra 90 180 no Espaço Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Princípios Fundamentais da Janela Móvel Schengen',
    items: [
      'Cidadãos de países terceiros podem permanecer até 90 dias em qualquer período móvel de 180 dias.',
      'A janela de 180 dias move-se continuamente com o passar de cada dia, olhando 179 dias para trás.',
      'O dia de entrada e o dia de saída contam como dias inteiros de presença física.',
      'Sair da Europa não reinicia o contador a 90 dias sem uma ausência contínua de 90 dias fora da zona.',
    ],
  },
  {
    type: 'paragraph',
    html: 'O espaço Schengen estabelece um limite rigoroso de <strong>90 dias de permanência máxima em qualquer período de 180 dias</strong> para viajantes isentos de visto ou titulares de visto uniforme de curta duração tipo C, ao abrigo do Artigo 6(1) do <em>Código de Fronteiras Schengen (Regulamento UE 2016/399)</em>. A cada dia no território europeu, as autoridades fronteiriças calculam os dias passados nos 29 países membros durante os 179 dias anteriores mais o dia atual.',
  },
  {
    type: 'title',
    text: 'Métricas Regulamentares e Padrões de Fronteira',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Dias',
        label: 'Estadia Máxima Permitida',
      },
      {
        value: '180 Dias',
        label: 'Janela Móvel de Inspeção',
      },
      {
        value: 'Ambos os Dias',
        label: 'Cálculo Fronteiriço Inclusivo',
      },
      {
        value: '29 Países',
        label: 'Território Comum Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Quotas de Ano Civil vs Janelas Móveis Dinâmicas',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Mito do Ano Civil Fixo',
        description:
          'Muitos viajantes assumem erradamente que os seus 90 dias são renovados a 1 de janeiro ou após uma breve saída da Europa. Esta confusão causa excessos de permanência involuntários e multas pesadas nos aeroportos.',
      },
      {
        title: 'Funcionamento Real da Janela Móvel',
        description:
          'Cada dia passado no espaço Schengen é contabilizado numa linha temporal contínua. Com o avanço dos dias, as estadias mais antigas saem da janela de 180 dias, libertando gradualmente novos dias autorizados.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Perfis de Viagem e Avaliação de Conformidade',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Perfil de Viagem', 'Exemplo', 'Estado Legal', 'Recomendação'],
    rows: [
      [
        'Estadia Contínua Única',
        'Entrada a 1 de junho, saída a 29 de agosto (90 dias)',
        'Conforme',
        'Deve sair no 90º dia exato e permanecer 90 dias seguidos fora para restaurar o saldo total.',
      ],
      [
        'Viajante Frequente',
        'Três viagens de 30 dias com 30 dias de intervalo fora',
        'Conforme',
        'Cada entrada deve ser verificada contra a janela retrospectiva de 180 dias.',
      ],
      [
        'Nómada Digital Alternado',
        'Alternar 60 dias em Schengen e 30 dias fora',
        'Risco Crítico de Overstay',
        'Uma pausa de 30 dias apenas recupera dias com 180 dias de antiguidade, arriscando recusa na fronteira.',
      ],
      [
        'Reinício Total de 90 Dias',
        'Ausência contínua de 90 dias fora do espaço Schengen',
        'Saldo Restaurado',
        'Garante a recuperação total dos 90 dias permitidos na próxima entrada.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Orientações Estratégicas para Evitar Sanções',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Planeie Dias de Margem de Segurança',
    html: 'Nunca marque o seu voo de regresso para o 90º dia exato. Um cancelamento imprevisto ou emergência de saúde pode empurrar a sua saída para o dia 91, originando um registo automático de infração no novo Sistema de Entrada/Saída (EES) da UE.',
  },
  {
    type: 'card',
    title: 'Guarde Comprovativos de Estadia Fora de Schengen',
    html: 'Guarde cartões de embarque, faturas de hotel e carimbos no passaporte de países não pertencentes a Schengen (como Reino Unido, Irlanda, Chipre, Montenegro ou Albânia) para comprovar documentalmente a sua ausência.',
  },
  {
    type: 'title',
    text: 'Glossário de Termos de Fronteira Europeus',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Excesso de Estadia)',
        definition:
          'Permanecer no espaço Schengen além dos 90 dias autorizados num período de 180 dias, resultando em multas, expulsão ou proibição de entrada.',
      },
      {
        term: 'EES (Sistema de Entrada/Saída)',
        definition:
          'O sistema informático automatizado da UE que substitui os carimbos nos passaportes por registos biométricos de cidadãos não comunitários.',
      },
      {
        term: 'Nacional de País Terceiro',
        definition:
          'Qualquer indivíduo que não possua cidadania de um Estado-Membro da União Europeia ou da EFTA.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'O que é a regra 90 180 no espaço Schengen?',
    answer:
      'Permite que cidadãos de fora da UE viajem sem visto de longa duração por até 90 dias dentro de qualquer período móvel de 180 dias nos 29 países membros.',
  },
  {
    question: 'Os 90 dias reiniciam se sair da Europa?',
    answer:
      'Não. Sair do espaço Schengen não reinicia o contador. A janela de 180 dias é contínua e móvel; a restauração completa só acontece após 90 dias seguidos fora do território Schengen.',
  },
  {
    question: 'Os dias de entrada e saída contam como dias inteiros?',
    answer:
      'Sim. De acordo com o Artigo 6 do Código de Fronteiras Schengen, tanto o dia de chegada como o dia de partida contam como dias completos de permanência.',
  },
  {
    question: 'Quais os países que pertencem ao espaço Schengen para este cálculo?',
    answer:
      'Abrange 29 países: Alemanha, Áustria, Bélgica, Bulgária, Croácia, Dinamarca, Eslováquia, Eslovénia, Espanha, Estónia, Finlândia, França, Grécia, Hungria, Islândia, Itália, Letónia, Liechtenstein, Lituânia, Luxemburgo, Malta, Noruega, Países Baixos, Polónia, Portugal, República Checa, Roménia, Suécia e Suíça. O Reino Unido e a Irlanda não integram o espaço Schengen.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Selecione a Data de Avaliação',
    text: 'Indique a data do seu próximo voo para consultar o saldo de dias legais de que dispõe.',
  },
  {
    name: 'Registe as suas Viagens Anteriores e Futuras',
    text: 'Introduza as datas de entrada e saída de todas as estadias em países Schengen nos últimos meses.',
  },
  {
    name: 'Consulte a Margem de Segurança',
    text: 'Verifique o mostrador de dias restantes, o tempo máximo de permanência contínua e a data de reinício do saldo.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Como calcular a estadia Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
