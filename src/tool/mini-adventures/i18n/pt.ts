import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'gerador-mini-aventuras-sair-da-rotina';
const title = 'Gerador de Mini Aventuras: Saia da Rotina';
const description = 'Gerador aleatório de desafios diários para quebrar a monotonia e explorar o que está ao seu redor.';

const ui: MiniAdventuresUI = {
  title: "Mini Aventuras",
  homeTitle: "Mini Aventuras",
  homeDesc: "Torne o dia de hoje um pouco diferente. Está pronto para explorar?",
  generateBtn: "GERAR AVENTURA",
  anotherBtn: "OUTRA",
  doneBtn: "CONCLUÍDO",
  shareBtn: "PARTILHAR",
  categories: {
    exploration: { id: "exploration", label: "Exploração", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomia", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Aprendizagem", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Criatividade", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Social", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observação", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Bem-estar", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Experimente um café ou bebida num local onde nunca tenha entrado antes.", categoryId: "food" },
    { id: 2, text: "Caminhe por 10 minutos numa direção que não costuma tomar ao sair de casa.", categoryId: "exploration" },
    { id: 3, text: "Aprenda a dizer 'Obrigado' em três línguas diferentes que não conhece.", categoryId: "learning" },
    { id: 4, text: "Tire uma foto de um detalhe arquitetónico que lhe chame a atenção na sua rua.", categoryId: "creativity" },
    { id: 5, text: "Compre uma fruta que nunca tenha provado e descubra o seu sabor.", categoryId: "food" },
    { id: 6, text: "Procure uma placa comemorativa no seu bairro e leia a história que ela conta.", categoryId: "exploration" },
    { id: 7, text: "Desenhe algo que tenha à sua frente em menos de 60 segundos.", categoryId: "creativity" },
    { id: 8, text: "Cumprimente um vizinho com quem normalmente não fala.", categoryId: "social" },
    { id: 9, text: "Ouça um género musical de que normalmente não gosta durante 5 minutos.", categoryId: "learning" },
    { id: 10, text: "Visite uma loja de antiguidades ou de segunda mão e encontre o objeto mais estranho.", categoryId: "exploration" },
    { id: 11, text: "Sente-se num parque e conte quantos tipos diferentes de aves consegue ver.", categoryId: "observation" },
    { id: 12, text: "Escreva uma nota positiva e deixe-a dentro de um livro numa biblioteca pública.", categoryId: "social" },
    { id: 13, text: "Faça uma lista de 5 coisas pelas quais está grato hoje.", categoryId: "wellness" },
    { id: 14, text: "Tente cozinhar uma nova receita usando apenas o que tem na despensa.", categoryId: "food" },
    { id: 15, text: "Passe 20 minutos sem olhar para nenhum ecrã (telemóvel, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Encontre uma árvore perto de sua casa e tente identificar a sua espécie.", categoryId: "learning" },
    { id: 300, text: "Faça um plano para visitar uma localidade próxima este fim de semana.", categoryId: "exploration" },
    { id: 301, text: "Aprenda como se chamam os dedos da mão em latim.", categoryId: "learning" },
    { id: 302, text: "Encontre uma rima para cada palavra desta frase.", categoryId: "creativity" },
    { id: 303, text: "Agradeça a um amigo por algo que aconteceu há muito tempo.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "O Despertar", categoryId: "global", icon: "mdi:footprint", description: "A sua primeira mini aventura concluída." },
    { id: "g10", milestone: 10, label: "Hábito do Espanto", categoryId: "global", icon: "mdi:sparkles", description: "Quebrou a rotina 10 vezes." },
    { id: "g50", milestone: 50, label: "Colecionador de Dias", categoryId: "global", icon: "mdi:calendar-star", description: "50 dias a tornar o ordinário extraordinário." },
    { id: "g150", milestone: 150, label: "Mestre do Acaso", categoryId: "global", icon: "mdi:trophy-variant", description: "Concluiu metade do catálogo de aventuras." },
    { id: "g300", milestone: 300, label: "Espírito Livre", categoryId: "global", icon: "mdi:ghost", description: "Dominou a arte da aventura diária." },
    { id: "e3", milestone: 3, label: "Turista em Casa", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 novos recantos descobertos." },
    { id: "e15", milestone: 15, label: "Cartógrafo Urbano", categoryId: "exploration", icon: "mdi:map-check", description: "Conhece o seu código postal melhor do que ninguém." },
    { id: "f3", milestone: 3, label: "Paladar Inquieto", categoryId: "food", icon: "mdi:silverware-clean", description: "Provou 3 sabores que não conhecia." },
    { id: "f15", milestone: 15, label: "Alquimista Gourmet", categoryId: "food", icon: "mdi:silverware-variant", description: "A sua despensa é um passaporte para o mundo." },
    { id: "l3", milestone: 3, label: "Aprendiz de Tudo", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Aprendeu 3 curiosidades do mundo." },
    { id: "l15", milestone: 15, label: "Biblioteca Viva", categoryId: "learning", icon: "mdi:head-cog", description: "A sua curiosidade não tem limites." },
    { id: "c3", milestone: 3, label: "Mão de Desenho", categoryId: "creativity", icon: "mdi:palette-outline", description: "Deixou a sua marca em 3 pequenos desafios." },
    { id: "c15", milestone: 15, label: "Vanguarda Local", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Vê arte onde os outros só veem a rua." },
    { id: "s3", milestone: 3, label: "Ponte Humana", categoryId: "social", icon: "mdi:account-voice", description: "Conectou-se com 3 pessoas hoje." },
    { id: "s15", milestone: 15, label: "Alma da Rua", categoryId: "social", icon: "mdi:account-group", description: "Transformou estranhos em histórias." },
    { id: "o3", milestone: 3, label: "Atento aos Detalhes", categoryId: "observation", icon: "mdi:magnify", description: "Viu 3 coisas que mais ninguém percebe." },
    { id: "o15", milestone: 15, label: "Olho de Realizador", categoryId: "observation", icon: "mdi:telescope", description: "O seu olhar é a lente de um grande filme." },
    { id: "w3", milestone: 3, label: "Pausa Consciente", categoryId: "wellness", icon: "mdi:leaf", description: "Dedicou 3 momentos à sua paz mental." },
    { id: "w15", milestone: 15, label: "Equilíbrio Total", categoryId: "wellness", icon: "mdi:spa", description: "O seu corpo e a sua mente agradecem." }
  ],
  stats: {
    adventures: "Aventuras",
    badges: "Emblemas",
    progress: "O Seu Progresso",
    trophies: "Coleção de Troféus"
  },
  shareTemplate: "Acabei de obter uma Mini Aventura!\n\n\"{text}\"\n\nAtreves-te? Gera a tua aqui: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Aventuras: A Arte do Quotidiano", level: 2 },
  { type: "paragraph", html: "Descubra como as micro-aventuras podem reprogramar o seu cérebro, combater a rotina e despertar a sua curiosidade inata. A rotina é a inimiga da criatividade. Ao introduzir pequenas variações na nossa vida quotidiana, forçamos o nosso cérebro a forjar novas conexões neurais." },
  { type: "title", text: "Neuroplasticidade em Ação", level: 3 },
  { type: "paragraph", html: "A rotina é a inimiga da criatividade. Ao introduzir pequenas variações na nossa vida quotidiana — como provar um novo sabor ou caminhar por uma rua desconhecida — forçamos o nosso cérebro a forjar novas conexões neurais. Estas micro-aventuras agem como um ginásio mental que mantém a mente ágil e aberta a novas possibilidades." },
  { type: "title", text: "Bem-estar Emocional", level: 3 },
  { type: "paragraph", html: "A sensação de estagnação provém frequentemente da previsibilidade absoluta. A aleatoriedade controlada de um gerador de aventuras introduz o elemento da 'surpresa positiva', libertando dopamina e melhorando o humor naturalmente. Não precisa de uma viagem transoceânica para sentir a emoção da descoberta." },
  { type: "title", text: "Explore o que já conhece: Filosofia Local", level: 2 },
  { type: "paragraph", html: "Vivemos rodeados de histórias e detalhes que passam despercebidos. O objetivo desta previsão é treinar o seu olhar para ver o extraordinário no ordinário. Não procure o momento perfeito; procure o momento possível." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Sem Desculpas", html: "Aventuras que requerem menos de 15 minutos e zero euros. O tempo não é uma barreira para a curiosidade." },
  { type: "card", icon: "mdi:lock-outline", title: "Privacidade Total", html: "Não precisa de se registar ou partilhar os seus dados. O seu progresso e as aventuras concluídas são guardados apenas no seu dispositivo." },
  { type: "card", icon: "mdi:share-variant", title: "Viralidade Saudável", html: "Partilhe desafios que inspirem outros a sair da sua bolha, em vez de alimentar a constante comparação nas redes sociais." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamificação", html: "Colecione emblemas exclusivos por cada categoria de desafio concluída." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "O que é uma micro-aventura?", answer: "É uma aventura curta, local, barata e simples. O termo (popularizado por Alastair Humphreys) procura mostrar que não precisa de ir para o outro lado do mundo para viver experiências emocionantes." },
  { question: "Para que serve este gerador?", answer: "Serve para combater a paralisia por análise. Às vezes queremos fazer algo diferente mas não sabemos o quê. Este simulador escolhe um desafio aleatório para si, retirando a carga mental de decidir." },
  { question: "Tenho de registar as minhas aventuras?", answer: "Não. Esta é uma ferramenta de privacidade total. Os desafios são gerados aleatoriamente no seu navegador e não guardamos qualquer tipo de registo do que faz ou para onde vai." },
  { question: "Posso propor novas aventuras?", answer: "Claro! O código para esta ferramenta é aberto. Se tem ideias para desafios divertidos que não requerem muito orçamento ou tempo, pode sugeri-los através do repositório no GitHub." }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Gerar", text: "Pressione o botão gerar para receber um desafio aleatório." },
  { name: "Fazer", text: "Tente concluir o desafio antes do final do dia." },
  { name: "Concluir", text: "Marque o desafio como feito para ganhar emblemas e progredir." }
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Perguntas Frequentes",
  bibliography: "Fontes e Referências",
  howTo,
  howToTitle: "Como funciona",
  schemas: [faqSchema, howToSchema, appSchema],
};
