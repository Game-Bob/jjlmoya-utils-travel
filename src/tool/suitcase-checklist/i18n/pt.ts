import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'gerador-lista-bagagem-mala-viagem';
const title = 'Gerador de Lista para Mala Crie a sua lista de bagagem';
const description = 'A ferramenta online definitiva para organizar a sua bagagem com base no tipo de viagem, destino e duração. Nunca mais esqueça os itens essenciais para a sua viagem.';

const ui: SuitcaseChecklistUI = {
  title: "Planeador de Bagagem",
  form: {
    destTitle: "Destino e Clima",
    destTypes: [
      { id: "playa", name: "Praia / Costa", icon: "mdi:beach" },
      { id: "ciudad", name: "Cidade / Urbano", icon: "mdi:city" },
      { id: "montana", name: "Montanha / Rural", icon: "mdi:pine-tree" },
      { id: "frio", name: "Frio / Neve", icon: "mdi:snowflake" }
    ],
    daysTitle: "Quantos dias?",
    intlTitle: "Viagem Internacional?",
    intlLabel: "Sim, atravessando fronteiras",
    reasonTitle: "Propósito da Viagem",
    reasons: [
      { id: "ocio", name: "Lazer / Prazer", icon: "mdi:party-popper" },
      { id: "negocios", name: "Negócios", icon: "mdi:tie" }
    ],
    submitBtn: "Configurar Mala Ideal"
  },
  results: {
    title: "A Sua Lista de Bagagem",
    editBtn: "Editar",
    printBtn: "Guardar PDF",
    tipsTitle: "Dicas de Viagem",
    progressText: "Concluído"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Documentos e Básico",
      icon: "mdi:passport",
      items: [
        { label: "Documento de Identificação / Passaporte" },
        { label: "Cartões bancários" },
        { label: "Dinheiro" },
        { label: "Bilhetes (Voo/Comboio)" },
        { label: "Confirmações de reserva" },
        { label: "Chaves de casa" },
        { label: "Documentos internacionais", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Tecnologia",
      icon: "mdi:laptop",
      items: [
        { label: "Telemóvel" },
        { label: "Carregador de telemóvel" },
        { label: "Auscultadores" },
        { label: "Power bank" },
        { label: "Adaptador de corrente", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Produtos de Higiene",
      icon: "mdi:toothbrush",
      items: [
        { label: "Escova e pasta de dentes" },
        { label: "Desodorizante" },
        { label: "Gel e champô" },
        { label: "Pente / Escova" },
        { label: "Mini kit de primeiros socorros" },
        { label: "Medicação pessoal" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Roupa Diária",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Roupa interior", dynamicId: "qty-ropa-interior" },
        { label: "T-shirts / Tops", dynamicId: "qty-camisetas" },
        { label: "Calças", dynamicId: "qty-pantalones" },
        { label: "Meias", dynamicId: "qty-calcetines" },
        { label: "Pijama" },
        { label: "Casaco leve" },
        { label: "Sapatos diários confortáveis" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Para a Costa",
        icon: "mdi:beach",
        items: [
          { label: "Fato de banho" },
          { label: "Toalha de praia" },
          { label: "Protetor solar" },
          { label: "Óculos de sol" },
          { label: "Chinelos" },
          { label: "Chapéu ou boné" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urbano",
        icon: "mdi:city",
        items: [
          { label: "Sapatilhas para caminhar" },
          { label: "Mochila pequena segura" },
          { label: "Guarda-chuva compacto" },
          { label: "Guia da cidade" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Montanha",
        icon: "mdi:pine-tree",
        items: [
          { label: "Botas de caminhada" },
          { label: "Corta-vento" },
          { label: "Calças de trekking" },
          { label: "Garrafa de água" },
          { label: "Mochila de montanha" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Clima Frio",
        icon: "mdi:snowflake",
        items: [
          { label: "Casaco pesado" },
          { label: "Gorros e luvas" },
          { label: "Calçado de inverno" },
          { label: "Camisolas térmicas" },
          { label: "Cachecol" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Negócios",
        icon: "mdi:tie",
        items: [
          { label: "Fato / Roupa formal" },
          { label: "Camisas clássicas" },
          { label: "Sapatos formais" },
          { label: "Portátil" },
          { label: "Carregador de portátil" },
          { label: "Documentos de trabalho" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Lazer",
        icon: "mdi:camera",
        items: [
          { label: "Roupa para sair à noite" },
          { label: "Câmara (Opcional)" },
          { label: "Livro / Entretenimento" }
        ]
      }
    }
  },
  tips: {
    military: "Enrolar a roupa ao 'estilo militar' ajuda muito contra rugas e economiza espaço.",
    longTravel: "Vai estar fora mais de uma semana. Planeie lavar os itens básicos a meio da viagem.",
    intlPassport: "Viagem Internacional: Verifique hoje se o seu passaporte é válido por pelo menos 6 meses.",
    intlBank: "Verifique vistos necessários ou se o seu banco cobra taxas estrangeiras.",
    intlAdapter: "Não esqueça o seu adaptador universal se as fichas do destino forem diferentes!",
    coldLayers: "Para o clima frio, vista-se por camadas: base térmica, isolamento e camada exterior impermeável.",
    coldHeavyOn: "Use os itens mais volumosos/pesados no avião para economizar espaço na bagagem.",
    beachWet: "Leve mais de um fato de banho; a humidade pode impedir que sequem durante a noite."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Gerador de Lista para Mala: O seu parceiro ideal de viagem", level: 2 },
  { type: "paragraph", html: "Preparar a mala é muitas vezes um dos momentos mais stressantes antes de uma viagem. O medo de esquecer algo importante, as dúvidas sobre o tempo no destino ou a incerteza sobre quanta bagagem levar podem estragar os dias que antecedem as tão esperadas férias. É aqui que um <strong>gerador de lista para a mala</strong> se torna o seu melhor aliado." },
  {
    type: "summary",
    title: "Benefícios de usar o nosso criador de listas",
    items: [
      "Personalização absoluta adaptada ao clima do seu destino (praia, montanha, cidade ou neve).",
      "Cálculo automático de roupa com base na duração da sua escapadinha.",
      "Redução drástica do stress logístico com uma lista interativa que pode marcar.",
      "Otimização do espaço na bagagem, evitando a síndrome do 'se for preciso'."
    ]
  },
  { type: "title", text: "Porque é que o planeamento da bagagem é fundamental?", level: 3 },
  { type: "paragraph", html: "Viajar é uma experiência transformadora, mas um mau planeamento pode trazer dores de cabeça desnecessárias. Ao usar a nossa ferramenta inteligente, automatiza um processo que de outra forma levaria horas de cálculo e memorização. Uma organização eficiente é a base de qualquer aventura de sucesso." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Posso guardar a lista gerada?", answer: "Pode marcar e desmarcar itens na sua lista, bem como usar o botão para a imprimir ou guardar como um ficheiro PDF no seu dispositivo." },
  { question: "Como são calculadas as quantidades de roupa?", answer: "A nossa ferramenta estima conjuntos de roupa com base na duração da viagem selecionada, promovendo uma viagem leve e otimizando a sua bagagem." },
  { question: "Funciona para clima frio e neve?", answer: "Sim, pode selecionar o destino de clima frio para que a lista de verificações inclua automaticamente itens indispensáveis para essas condições." },
  { question: "A ferramenta é gratuita?", answer: "Sim, o nosso gerador de lista para mala de viagem é 100% gratuito e não requer registo ou downloads de aplicações adicionais." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Defina a sua viagem", text: "Selecione o clima, o motivo e a duração da sua escapadinha." },
  { name: "Gere a lista", text: "Pressione o botão e obtenha instantaneamente todos os itens necessários, de cosméticos a tecnologia." },
  { name: "Prepare a mala", text: "Marque os itens enquanto os guarda para não esquecer nada essencial." }
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Perguntas Frequentes",
  bibliography: "Fontes e Referências",
  howTo,
  howToTitle: "Como preparar a sua mala",
  schemas: [faqSchema, howToSchema, appSchema],
};
