import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug: 'suitcase-checklist-generator',
  title: 'Suitcase Checklist Generator | Create your packing list',
  description: 'The ultimate online tool to organize your luggage based on trip type, destination, and duration. Never forget your travel essentials again.',
  ui: {
    title: "Packing Planner",
    form: {
      destTitle: "Destination & Climate",
      destTypes: [
        { id: "playa", name: "Beach / Coast", icon: "mdi:beach" },
        { id: "ciudad", name: "City / Urban", icon: "mdi:city" },
        { id: "montana", name: "Mountain / Rural", icon: "mdi:pine-tree" },
        { id: "frio", name: "Cold / Snow", icon: "mdi:snowflake" }
      ],
      daysTitle: "How many days?",
      intlTitle: "International Trip?",
      intlLabel: "Yes, crossing borders",
      reasonTitle: "Travel Purpose",
      reasons: [
        { id: "ocio", name: "Leisure / Pleasure", icon: "mdi:party-popper" },
        { id: "negocios", name: "Business", icon: "mdi:tie" }
      ],
      submitBtn: "Configure Ideal Bag"
    },
    results: {
      title: "Your Packing List",
      editBtn: "Edit",
      printBtn: "Save PDF",
      tipsTitle: "Travel Tips",
      progressText: "Completed"
    },
    itemsDb: {
      essentials: {
        id: "essentials",
        title: "Docs & Basics",
        icon: "mdi:passport",
        items: [
          { label: "ID / Passport" },
          { label: "Bank cards" },
          { label: "Cash" },
          { label: "Tickets (Flight/Train)" },
          { label: "Booking confirmations" },
          { label: "House keys" },
          { label: "International docs", dynamicId: "item-internacional" }
        ]
      },
      technology: {
        id: "technology",
        title: "Technology",
        icon: "mdi:laptop",
        items: [
          { label: "Mobile phone" },
          { label: "Phone charger" },
          { label: "Headphones" },
          { label: "Power bank" },
          { label: "Power adapter", dynamicId: "item-adaptador" }
        ]
      },
      toiletries: {
        id: "toiletries",
        title: "Toiletries",
        icon: "mdi:toothbrush",
        items: [
          { label: "Toothbrush & paste" },
          { label: "Deodorant" },
          { label: "Gel & shampoo" },
          { label: "Comb / Brush" },
          { label: "Mini first-aid kit" },
          { label: "Personal medication" }
        ]
      },
      clothing_base: {
        id: "clothing_base",
        title: "Daily Clothing",
        icon: "mdi:tshirt-crew",
        items: [
          { label: "Underwear", dynamicId: "qty-ropa-interior" },
          { label: "T-shirts / Tops", dynamicId: "qty-camisetas" },
          { label: "Pants / Bottoms", dynamicId: "qty-pantalones" },
          { label: "Socks", dynamicId: "qty-calcetines" },
          { label: "Pajamas" },
          { label: "Light jacket" },
          { label: "Comfortable daily shoes" }
        ]
      }
    },
    specificItems: {
      destType: {
        playa: {
          id: "dest-playa",
          title: "For the Coast",
          icon: "mdi:beach",
          items: [
            { label: "Swimwear" },
            { label: "Beach towel" },
            { label: "Sunscreen" },
            { label: "Sunglasses" },
            { label: "Flip-flops" },
            { label: "Hat or Cap" }
          ]
        },
        ciudad: {
          id: "dest-ciudad",
          title: "Urban",
          icon: "mdi:city",
          items: [
            { label: "Walking sneakers" },
            { label: "Small secure backpack" },
            { label: "Compact umbrella" },
            { label: "City guide" }
          ]
        },
        montana: {
          id: "dest-montana",
          title: "Mountain",
          icon: "mdi:pine-tree",
          items: [
            { label: "Hiking boots" },
            { label: "Windbreaker" },
            { label: "Trekking pants" },
            { label: "Water bottle" },
            { label: "Mountain backpack" }
          ]
        },
        frio: {
          id: "dest-frio",
          title: "Cold Climate",
          icon: "mdi:snowflake",
          items: [
            { label: "Heavy coat" },
            { label: "Hats & gloves" },
            { label: "Winter footwear" },
            { label: "Thermal shirts" },
            { label: "Scarf" }
          ]
        }
      },
      travelType: {
        negocios: {
          id: "travel-negocios",
          title: "Business",
          icon: "mdi:tie",
          items: [
            { label: "Suit / Formal wear" },
            { label: "Dress shirts" },
            { label: "Formal shoes" },
            { label: "Laptop" },
            { label: "Laptop charger" },
            { label: "Work documents" }
          ]
        },
        ocio: {
          id: "travel-ocio",
          title: "Leisure",
          icon: "mdi:camera",
          items: [
            { label: "Nightlife clothes" },
            { label: "Camera (Optional)" },
            { label: "Book / Entertainment" }
          ]
        }
      }
    },
    tips: {
      military: "Rolling clothes 'military style' helps a lot with wrinkles and saves space.",
      longTravel: "You're going for more than a week. Plan to wash your basics halfway through.",
      intlPassport: "International Trip: Check today if your passport is valid for at least 6 months.",
      intlBank: "Check for necessary visas or if your bank charges foreign fees.",
      intlAdapter: "Don't forget your universal adapter if the destination's plugs are different!",
      coldLayers: "For cold weather, dress in layers: base thermal, insulation, and waterproof outer.",
      coldHeavyOn: "Wear your bulkiest/heaviest items on the plane to save cabin space.",
      beachWet: "Pack more than one swimsuit; humidity can prevent them from drying overnight."
    }
  },
  seo: [
    { type: "title", text: "Suitcase Checklist Generator: Your Ideal Travel Companion", level: 2 },
    { type: "paragraph", html: "Packing your suitcase is often one of the most stressful moments before a trip. The fear of forgetting something important, doubting the weather at your destination, or uncertainty about how much luggage to bring can dampen the days before your long-awaited vacation. This is where a <strong>suitcase checklist generator</strong> becomes your best ally." },
    {
      type: "summary",
      title: "Benefits of using our list creator",
      items: [
        "Absolute personalization adapted to your destination's climate (beach, mountain, city, or snow).",
        "Automatic calculation of clothing based on the duration of your getaway.",
        "Drastic reduction of logistical stress with an interactive checklist you can check off.",
        "Luggage space optimization, avoiding the 'just in case' syndrome."
      ]
    },
    { type: "title", text: "Why is luggage planning fundamental?", level: 3 },
    { type: "paragraph", html: "Travel is a transformative experience, but poor planning can bring unnecessary headaches. By using our smart tool, you automate a process that would otherwise take hours of calculation and memorization. Efficient organization is the foundation of any successful adventure." },
    {
      type: "grid",
      columns: 2
    },
    { type: "card", icon: "mdi:check-all", title: "Efficient Organization", html: "By having a visual list segmented by categories, you reduce to zero the chances of forgetting underwear, chargers, or medication, which are the most common oversights." },
    { type: "card", icon: "mdi:cash-multiple", title: "Economic Savings", html: "Forgetting sunscreen or a charger forces you to buy it at airports or tourist areas where the price is often up to three times higher than in your city." },
    { type: "title", text: "Essentials You Should Never Forget", level: 3 },
    {
      type: "summary",
      title: "Pillar of peace and security",
      items: [
        "<strong>Documentation and Visas:</strong> Verify passports and IDs and carry digital copies on your mobile phone or online in the cloud.",
        "<strong>Critical technology:</strong> Universal plug adapters and an external battery are modern lifesavers.",
        "<strong>Health and First Aid:</strong> Your personal medication always in carry-on luggage. A small first aid kit is never extra.",
        "<strong>Travel Insurance:</strong> Especially outside your region, insurance is vital. Keep the policy always accessible."
      ]
    },
    { type: "title", text: "Packing Techniques: The Rolling Method", level: 3 },
    { type: "paragraph", html: "When packing the items indicated by our checklist, use the military rolling method. Clothes take up less space, a more compact structure is created that protects fragile items, and surprisingly, they wrinkle much less than with traditional folding." },
    { type: "title", text: "Travel by Climate Type", level: 3 },
    { type: "paragraph", html: "Needs vary radically depending on the environment. Our calculator takes this into account to suggest precisely what is vital. For <strong>beach destinations</strong>, the emphasis is on light textiles, microfiber towels, several swimsuits (to allow drying), and UV protection. In contrast, for <strong>mountain or cold climate destinations</strong>, it's about layering: thermal clothing, windbreakers, and raincoats take center stage." },
    { type: "title", text: "Avoid Excess Baggage Fees", level: 3 },
    { type: "paragraph", html: "Airlines, especially low-cost ones, have increasingly strict policies regarding the volume and weight of cabin bags. Traveling light is no longer just a trend, it's a financial necessity. Always make sure to prioritize and not exceed your checked limit based on the list generated here." }
  ],
  faq: [
    { question: "Can I save the generated list?", answer: "You can check and uncheck items on your list, as well as use the button to print it or save it as a PDF file on your device." },
    { question: "How are clothing quantities calculated?", answer: "Our tool estimates sets of clothes based on the selected trip duration, promoting traveling light and optimizing your luggage." },
    { question: "Does it work for cold weather and snow?", answer: "Yes, you can select the cold climate destination so that the checklist automatically includes indispensable items for those conditions." },
    { question: "Is the tool free?", answer: "Yes, our luggage checklist generator is 100% free and requires no registration or additional app downloads." }
  ],
  bibliography: [
    { name: "KonMari - How to KonMari a Suitcase", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
    { name: "Eagle Creek - What to Pack: Ultimate Travel Packing Checklist", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
  ],
  howTo: [
    { name: "Define your trip", text: "Select the climate, reason, and duration of your getaway." },
    { name: "Generate list", text: "Press the button and instantly get all necessary items, from cosmetics to technology." },
    { name: "Pack your bag", text: "Check off items as you pack them so you don't forget anything essential." }
  ],
  schemas: []
};
