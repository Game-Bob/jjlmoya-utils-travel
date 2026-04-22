import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-adventure-forecast';
const title = 'Mini Adventure Forecast : Get Out of the Rut';
const description = 'Random daily challenge generator to break monotony and explore your surroundings.';

const ui: MiniAdventuresUI = {
  title: "Mini Adventures",
  homeTitle: "Mini Adventures",
  homeDesc: "Make today a little different. Are you ready to explore?",
  generateBtn: "GENERATE ADVENTURE",
  anotherBtn: "ANOTHER",
  doneBtn: "DONE",
  shareBtn: "SHARE",
  categories: {
    exploration: { id: "exploration", label: "Exploration", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomy", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Learning", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Creativity", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Social", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observation", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Wellness", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Try a coffee or drink in a place you've never entered before.", categoryId: "food" },
    { id: 2, text: "Walk for 10 minutes in a direction you don't normally take when leaving home.", categoryId: "exploration" },
    { id: 3, text: "Learn how to say 'Thank you' in three different languages you don't know.", categoryId: "learning" },
    { id: 4, text: "Take a photo of an architectural detail that catches your eye in your street.", categoryId: "creativity" },
    { id: 5, text: "Buy a fruit you've never tried and discover its flavor.", categoryId: "food" },
    { id: 6, text: "Look for a commemorative plaque in your neighborhood and read the story it tells.", categoryId: "exploration" },
    { id: 7, text: "Draw something you have in front of you in less than 60 seconds.", categoryId: "creativity" },
    { id: 8, text: "Greet a neighbor you don't normally talk to.", categoryId: "social" },
    { id: 9, text: "Listen to a musical genre you don't normally enjoy for 5 minutes.", categoryId: "learning" },
    { id: 10, text: "Visit an antique or second-hand store and find the weirdest object.", categoryId: "exploration" },
    { id: 11, text: "Sit in a park and count how many different types of birds you see.", categoryId: "observation" },
    { id: 12, text: "Write a positive note and leave it inside a book in a public library.", categoryId: "social" },
    { id: 13, text: "Make a list of 5 things you're grateful for today.", categoryId: "wellness" },
    { id: 14, text: "Try cooking a new recipe using only what you have in the pantry.", categoryId: "food" },
    { id: 15, text: "Spend 20 minutes without looking at any screen (mobile, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Find a tree near your house and try to identify its species.", categoryId: "learning" },
    { id: 300, text: "Make a plan to visit a nearby town this weekend.", categoryId: "exploration" },
    { id: 301, text: "Learn what the fingers of the hand are called in Latin.", categoryId: "learning" },
    { id: 302, text: "Find a rhyme for each word in this sentence.", categoryId: "creativity" },
    { id: 303, text: "Thank a friend for something that happened a long time ago.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "The Awakening", categoryId: "global", icon: "mdi:footprint", description: "Your first mini adventure completed." },
    { id: "g10", milestone: 10, label: "Wonder Habit", categoryId: "global", icon: "mdi:sparkles", description: "You've broken the rut 10 times." },
    { id: "g50", milestone: 50, label: "Day Collector", categoryId: "global", icon: "mdi:calendar-star", description: "50 days making the ordinary extraordinary." },
    { id: "g150", milestone: 150, label: "Master of Chance", categoryId: "global", icon: "mdi:trophy-variant", description: "You've completed half of the adventure catalog." },
    { id: "g300", milestone: 300, label: "Free Spirit", categoryId: "global", icon: "mdi:ghost", description: "You've mastered the art of daily adventure." },
    { id: "e3", milestone: 3, label: "Tourist at Home", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 new corners discovered." },
    { id: "e15", milestone: 15, label: "Urban Cartographer", categoryId: "exploration", icon: "mdi:map-check", description: "You know your zip code better than anyone." },
    { id: "f3", milestone: 3, label: "Restless Palate", categoryId: "food", icon: "mdi:silverware-clean", description: "You've tried 3 flavors you didn't know." },
    { id: "f15", milestone: 15, label: "Gourmet Alchemist", categoryId: "food", icon: "mdi:silverware-variant", description: "Your pantry is a passport to the world." },
    { id: "l3", milestone: 3, label: "Apprentice of Everything", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "You've learned 3 world curiosities." },
    { id: "l15", milestone: 15, label: "Walking Library", categoryId: "learning", icon: "mdi:head-cog", description: "Your curiosity knows no bounds." },
    { id: "c3", milestone: 3, label: "Drawing Hand", categoryId: "creativity", icon: "mdi:palette-outline", description: "You've left your mark on 3 small challenges." },
    { id: "c15", milestone: 15, label: "Local Avant-Garde", categoryId: "creativity", icon: "mdi:palette-swatch", description: "You see art where others only see street." },
    { id: "s3", milestone: 3, label: "Human Bridge", categoryId: "social", icon: "mdi:account-voice", description: "You've connected with 3 people today." },
    { id: "s15", milestone: 15, label: "Soul of the Street", categoryId: "social", icon: "mdi:account-group", description: "You've turned strangers into stories." },
    { id: "o3", milestone: 3, label: "Detail Oriented", categoryId: "observation", icon: "mdi:magnify", description: "You've seen 3 things no one else notices." },
    { id: "o15", milestone: 15, label: "Filmmaker's Eye", categoryId: "observation", icon: "mdi:telescope", description: "Your gaze is the lens of a great movie." },
    { id: "w3", milestone: 3, label: "Mindful Pause", categoryId: "wellness", icon: "mdi:leaf", description: "You've dedicated 3 moments to your mental peace." },
    { id: "w15", milestone: 15, label: "Total Balance", categoryId: "wellness", icon: "mdi:spa", description: "Your body and mind thank you." }
  ],
  stats: {
    adventures: "Adventures",
    badges: "Badges",
    progress: "Your Progress",
    trophies: "Trophy Collection"
  },
  shareTemplate: "I just got a Mini Adventure!\n\n\"{text}\"\n\nDo you dare? Generate yours here: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Adventures: The Art of the Everyday", level: 2 },
  { type: "paragraph", html: "Discover how micro-adventures can rewire your brain, combat routine, and awaken your innate curiosity. Routine is the enemy of creativity. By introducing small variations into our daily lives, we force our brain to forge new neural connections." },
  { type: "title", text: "Neuroplasticity in Action", level: 3 },
  { type: "paragraph", html: "Routine is the enemy of creativity. By introducing small variations into our daily lives —like trying a new flavor or walking down an unknown street— we force our brain to forge new neural connections. These micro-adventures act as a mental gym that keeps the mind agile and open to new possibilities." },
  { type: "title", text: "Emotional Well-being", level: 3 },
  { type: "paragraph", html: "The feeling of stagnation often comes from absolute predictability. The controlled randomness of an adventure generator introduces the element of 'positive surprise', releasing dopamine and improving mood naturally. You don't need a transoceanic trip to feel the thrill of discovery." },
  { type: "title", text: "Explore what you already know: Local Philosophy", level: 2 },
  { type: "paragraph", html: "We live surrounded by stories and details that go unnoticed. The goal of this forecast is to train your eye to see the extraordinary in the ordinary. Don't look for the perfect moment; look for the possible moment." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "No Excuses", html: "Adventures that require less than 15 minutes and zero euros. Time is not a barrier to curiosity." },
  { type: "card", icon: "mdi:lock-outline", title: "Total Privacy", html: "You don't need to register or share your data. Your progress and completed adventures are saved only on your device." },
  { type: "card", icon: "mdi:share-variant", title: "Healthy Virality", html: "Share challenges that inspire others to step out of their bubble, instead of fueling constant social media comparison." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamification", html: "Collect exclusive badges for each completed challenge category." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "What is a micro-adventure?", answer: "It's a short, local, cheap, and simple adventure. The term (popularized by Alastair Humphreys) seeks to show that you don't need to go to the other side of the world to live exciting experiences." },
  { question: "What is this generator for?", answer: "It serves to combat analysis paralysis. Sometimes we want to do something different but don't know what. This simulator chooses a random challenge for you, taking away the mental burden of deciding." },
  { question: "Do I have to register my adventures?", answer: "No. This is a total privacy tool. Challenges are generated randomly in your browser and we don't save any kind of record of what you do or where you go." },
  { question: "Can I propose new adventures?", answer: "Of course! The code for this tool is open. If you have ideas for fun challenges that don't require much budget or time, you can suggest them through the repository on GitHub." }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Generate", text: "Press the generate button to receive a random challenge." },
  { name: "Do it", text: "Try to complete the challenge before the end of the day." },
  { name: "Complete", text: "Mark the challenge as done to earn badges and progress." }
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Frequently Asked Questions",
  bibliography: "Sources and References",
  howTo,
  howToTitle: "How it works",
  schemas: [faqSchema, howToSchema, appSchema],
};
