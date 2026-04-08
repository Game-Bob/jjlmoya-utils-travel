import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug: 'international-tip-calculator',
  title: 'International Tip Calculator',
  description: 'Calculate how much to tip on your trips. Includes percentage guide and etiquette rules for more than 50 countries. Don\'t mess up when paying!',
  ui: {
    title: "Tip Calculator",
    badge: "International Tip Tool",
    billLabel: "Bill Amount",
    countryLabel: "Country / Local Custom",
    tipLabel: "Tip Percentage",
    splitLabel: "Split Bill",
    summaryTip: "Total Tip",
    summarySubtotal: "Subtotal",
    summaryTotalPerson: "Total per Person",
    protocolTitle: "Protocol",
    placeholderAmount: "0.00",
    placeholderFilter: "Search country...",
    placeholderSelect: "Select a country",
    countries: [
        {
            id: "usa",
            name: "USA & Canada",
            min: 18,
            max: 25,
            default: 20,
            culture: "Tipping is essential for waiter salaries. Between 18% and 25% is expected. Not leaving it is considered a serious breach of North American culture.",
        },
        {
            id: "esp",
            name: "Spain",
            min: 0,
            max: 10,
            default: 5,
            culture: "Optional. It is common to round up the change or leave 5-10% on dinners if the service has been of quality.",
        },
        {
            id: "jpn",
            name: "Japan",
            min: 0,
            max: 0,
            default: 0,
            culture: "No tipping. It is considered an insult to professionalism. If you leave money, they will likely follow you to return it.",
        },
        {
            id: "ita",
            name: "Italy",
            min: 0,
            max: 10,
            default: 0,
            culture: "The 'coperto' is a charge for table service, bread, and cover, it is not the tip itself. Leaving an extra 5-10% is an appreciated but entirely optional gesture.",
        },
        {
            id: "fra",
            name: "France",
            min: 0,
            max: 10,
            default: 5,
            culture: "Service is included by law. Leave the 'pourboire' (small extra) only for exceptional treatment.",
        },
        {
            id: "gbr",
            name: "United Kingdom",
            min: 0,
            max: 12.5,
            default: 10,
            culture: "An optional 12.5% is often added to the bill. If it's not there, 10% is the standard in restaurants.",
        },
        {
            id: "mex",
            name: "Mexico",
            min: 10,
            max: 15,
            default: 12,
            culture: "A 10-15% 'propina' is expected. It is a vital part of the economy for workers in the sector.",
        },
        {
            id: "arg",
            name: "Argentina",
            min: 0,
            max: 10,
            default: 10,
            culture: "The standard is 10%. It is almost always left if the service has been normal or good.",
        },
        {
            id: "bra",
            name: "Brazil",
            min: 0,
            max: 10,
            default: 10,
            culture: "Normally a 10% charge is included in the bill as 'Serviço'. It is optional but most pay it.",
        },
        {
            id: "deu",
            name: "Germany",
            min: 5,
            max: 10,
            default: 7,
            culture: "It is common to round up or add 5-10%. Tell the waiter the total including the tip when paying.",
        },
        {
            id: "tur",
            name: "Turkey",
            min: 5,
            max: 10,
            default: 10,
            culture: "In tourist areas, 10% in cash is expected. It can't usually be added to the credit card.",
        },
        {
            id: "aus",
            name: "Australia",
            min: 0,
            max: 10,
            default: 0,
            culture: "Not expected. Salaries are high. In fine dining, 10% can be left.",
        },
        {
            id: "chn",
            name: "China",
            min: 0,
            max: 0,
            default: 0,
            culture: "Historically, no tipping is left and in many places it is prohibited or considered strange.",
        },
        {
            id: "prt",
            name: "Portugal",
            min: 0,
            max: 10,
            default: 5,
            culture: "It is customary to leave the change or round up. In tourist areas, 5-10% is common.",
        },
        {
            id: "grc",
            name: "Greece",
            min: 0,
            max: 10,
            default: 5,
            culture: "It is usually enough to round up the bill. An extra 5-10% is much appreciated but not mandatory.",
        },
    ]
  },
  seo: [
    {
      type: "title",
      text: "International Tipping Guide: Etiquette and Percentages 2026",
      level: 2,
    },
    {
      type: "summary",
      title: "Learn to tip like a local anywhere in the world",
      items: [
        "Complete guide on the expected tip percentage in major tourist destinations.",
        "How to quickly calculate the tip starting from the subtotal or the total including taxes.",
        "Difference between service charges, cover (coperto), and voluntary tipping.",
        "Etiquette rules for special situations: taxis, hotels, and tour guides.",
      ],
    },
    {
      type: "paragraph",
      html: "One of the most stressful moments of any international trip occurs when the bill arrives at the table. Should I leave extra money? How much is normal? Will they be offended if I leave too little or too much? Our <strong>international tip calculator</strong> is designed to eliminate that uncertainty, providing you with not only the mathematical calculation but also the necessary cultural guide for each destination.",
    },
    {
      type: "title",
      text: "Why do tips vary so much between countries?",
      level: 3,
    },
    {
      type: "paragraph",
      html: "The short answer is: base salary and labor legislation. In countries like the United States, the minimum wage for tipped workers can be as low as a few dollars per hour, on the premise that the customer will complete their income. In contrast, in much of Europe and Oceania, waiters have contracts with comprehensive salaries that do not depend on the customer's generosity.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Expected Tipping Culture (USA, Canada, Mexico)",
          description: "In these countries, tipping is not a reward for exceptional service but a fundamental part of the worker's salary.",
          icon: "mdi:currency-usd",
          points: [
            "USA: The standard is 18% to 25% in restaurants.",
            "Mexico: Between 10% and 15% is expected (the 'propina').",
            "Not leaving a tip can lead to confrontation or visible discomfort.",
            "Usually calculated on the total before taxes.",
          ],
        },
        {
          title: "Rounding Culture (Europe, Australia)",
          description: "Service is usually included in the price, so the tip is an extra for excellent treatment.",
          icon: "mdi:currency-eur",
          highlight: true,
          points: [
            "Spain/Italy: Round up to the nearest euro or leave 5-10%.",
            "UK: An optional 12.5% service charge is often included.",
            "Australia: Not expected due to high local minimum wages.",
            "France: The 'service compris' is already on your bill by law.",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Tipping Table by Region",
      level: 3,
    },
    {
        type: "table",
        headers: ["Region", "Usual Percentage", "Is it mandatory?"],
        rows: [
            ["<strong>North America (USA/Canada)</strong>", "18% - 25%", "Practically mandatory"],
            ["<strong>Western Europe</strong>", "5% - 10% / Rounding", "Optional and voluntary"],
            ["<strong>Southeast Asia</strong>", "0% - 10%", "Only in very touristy areas"],
            ["<strong>Latin America</strong>", "10% - 15%", "Socially expected"],
            ["<strong>Japan / South Korea</strong>", "0%", "Can be offensive"],
        ]
    },
    {
        type: "tip",
        title: "The 10% Trick",
        html: "<p>If you are in a country where you don't know the norm and the service has been good, leaving 10% is usually a safe bet almost everywhere in the world (except Japan). It is a figure that is internationally recognized as a standard gesture of thanks.</p>"
    },
    {
      type: "title",
      text: "Etiquette: Beyond restaurants",
      level: 3,
    },
    {
        type: "list",
        icon: "mdi:check-circle-outline",
        items: [
            "<strong>Bellboys and Porters:</strong> In mid/high-end hotels, usually give between 1 and 2 dollars/euros per bag.",
            "<strong>Room cleaning:</strong> Leaving a couple of coins each morning (not all at the end) ensures better service during the stay.",
            "<strong>Free tour guides:</strong> Here the tip IS their salary. The default is between €10 and €20 per person depending on duration and quality.",
            "<strong>Cruises:</strong> Most automatically charge a daily 'service fee' per passenger. Check your contract before adding more.",
        ]
    },
    {
      type: "title",
      text: "Final Tips for the Expert Traveler",
      level: 3,
    },
    {
        type: "paragraph",
        html: "The golden rule is to observe what the locals do. If you notice people getting up without leaving a coin, don't feel pressured to do so. However, remember that as tourists we often move in a parallel economy where our tip can make a big difference in the worker's household economy.",
    },
    {
        type: "list",
        icon: "mdi:lightbulb-on-outline",
        items: [
            "<strong>Careful with 'Coperto':</strong> In Italy, the charge for cover and bread is fixed and is NOT the waiter's tip.",
            "<strong>Cash vs. Card:</strong> In many European countries, a tip left on a card rarely reaches the waiter in full. Prioritize cash coins.",
            "<strong>Taxis and Porters:</strong> Don't forget auxiliary services. In the USA, $1-2 per bag and 15% to the taxi driver are expected.",
            "<strong>Japan: The total exception:</strong> Never leave coins on the table in Japan; they will see it as if you forgotten money and will follow you to return it.",
        ]
    },
    {
      type: "title",
      text: "Conclusion",
      level: 3,
    },
    {
        type: "paragraph",
        html: "Our <strong>International Tipping Guide</strong> is not just a mathematical tool, it is a cultural bridge. Traveling with respect implies understanding how the social norms of the place that welcomes us work. Use this calculator to budget your meals out and travel with the peace of mind that you will always be doing the right thing.",
    }
  ],
  faq: [
      {
          question: "Is it mandatory to leave a tip in the United States?",
          answer: "Legally no, but socially it is mandatory. Waiters depend on tips to reach minimum wage. It is normal to leave between 18% and 25%.",
      },
      {
          question: "In which countries is it offensive to leave a tip?",
          answer: "Mainly in Japan and South Korea. Good service is considered part of the duty and does not require extra compensation. Trying to leave money can cause discomfort.",
      },
      {
          question: "Should I tip if the service was bad?",
          answer: "In countries where it is optional (Europe, Australia), the most correct thing is to leave nothing to signal your dissatisfaction. In the USA, it is customary to lower the percentage to 10-15% and talk to the manager to explain why.",
      },
      {
          question: "Is the tip calculated before or after taxes?",
          answer: "In North America it is usually calculated on the subtotal (before taxes), although many payment terminals suggest percentages on the final total. In Europe and Latin America, it is always calculated on the total of the bill.",
      },
  ],
  bibliography: [
    {
        name: "Condé Nast Traveler: Tipping Etiquette Guide",
        url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
    },
    {
        name: "Lonely Planet: Tipping and Etiquette in Europe",
        url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
    },
    {
        name: "Western Union: Global Gratuity Guide",
        url: "https://www.westernunion.com/blog/global-gratuity-guide/",
    },
  ],
  howTo: [
      {
          name: "Enter the bill total",
          text: "Type the total amount that appears on your invoice before applying the tip.",
      },
      {
          name: "Select the country",
          text: "Choose your destination to automatically load the cultural recommendation and standard percentage.",
      },
      {
          name: "Adjust and split",
          text: "If there are several of you, indicate the number of people to know how much each should pay including the tip.",
      },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "International Tip Calculator",
      "description": "Calculate tips according to the local custom of each country.",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "All"
    }
  ]
};
