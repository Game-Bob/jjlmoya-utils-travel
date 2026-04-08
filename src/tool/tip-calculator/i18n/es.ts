import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug: 'calculadora-propinas-internacional',
  title: 'Calculadora de Propinas Internacional',
  description: 'Viaja con confianza sabiendo exactamente cuánto dejar de propina. Guía actualizada de etiqueta y porcentajes recomendados para restaurantes, taxis y hoteles en todo el mundo.',
  ui: {
    title: "Calculadora de Propinas",
    badge: "International Tip Tool",
    billLabel: "Importe de la Factura",
    countryLabel: "País / Costumbre Local",
    tipLabel: "Porcentaje Propina",
    splitLabel: "Dividir Cuenta",
    summaryTip: "Propina Total",
    summarySubtotal: "Subtotal",
    summaryTotalPerson: "Total por Persona",
    protocolTitle: "Protocolo",
    placeholderAmount: "0.00",
    placeholderFilter: "Buscar país...",
    placeholderSelect: "Selecciona un país",
    countries: [
        {
            id: "usa",
            name: "EE.UU. y Canadá",
            min: 18,
            max: 25,
            default: 20,
            culture: "La propina es fundamental para el salario de los camareros. Se espera entre un 18% y 25%. No dejarla se considera una falta grave en la cultura norteamericana.",
        },
        {
            id: "esp",
            name: "España",
            min: 0,
            max: 10,
            default: 5,
            culture: "Opcional. Se suele redondear el cambio o dejar un 5-10% en cenas si el servicio ha sido de calidad.",
        },
        {
            id: "jpn",
            name: "Japón",
            min: 0,
            max: 0,
            default: 0,
            culture: "No se deja propina. Se considera un insulto a la profesionalidad. Si dejas dinero, es probable que te sigan para devolvértelo.",
        },
        {
            id: "ita",
            name: "Italia",
            min: 0,
            max: 10,
            default: 0,
            culture: "El 'coperto' es un cargo por el servicio de mesa, pan y mantel, no es la propina en sí. Dejar un extra del 5-10% es un gesto apreciado pero totalmente opcional.",
        },
        {
            id: "fra",
            name: "Francia",
            min: 0,
            max: 10,
            default: 5,
            culture: "El servicio está incluido por ley. Se deja el 'pourboire' (pequeño extra) solo por un trato excepcional.",
        },
        {
            id: "gbr",
            name: "Reino Unido",
            min: 0,
            max: 12.5,
            default: 10,
            culture: "A menudo se añade un 12.5% opcional en la factura. Si no está, un 10% es lo estándar en restaurantes.",
        },
        {
            id: "mex",
            name: "México",
            min: 10,
            max: 15,
            default: 12,
            culture: "Se espera 'la propina' del 10 al 15%. Es una parte vital de la economía de los trabajadores del sector.",
        },
        {
            id: "arg",
            name: "Argentina",
            min: 0,
            max: 10,
            default: 10,
            culture: "El estándar es un 10%. Casi siempre se deja si el servicio ha sido normal o bueno.",
        },
        {
            id: "bra",
            name: "Brasil",
            min: 0,
            max: 10,
            default: 10,
            culture: "Normalmente se incluye un cargo del 10% en la cuenta como 'Serviço'. Es opcional pero la mayoría lo paga.",
        },
        {
            id: "deu",
            name: "Alemania",
            min: 5,
            max: 10,
            default: 7,
            culture: "Se suele redondear o añadir un 5-10%. Se le dice al camarero el total incluyendo propina al pagar.",
        },
        {
            id: "tur",
            name: "Turquía",
            min: 5,
            max: 10,
            default: 10,
            culture: "En sitios turísticos se espera un 10% en efectivo. No se suele poder añadir a la tarjeta.",
        },
        {
            id: "aus",
            name: "Australia",
            min: 0,
            max: 10,
            default: 0,
            culture: "No es esperada. Los salarios son altos. En cenas de lujo se puede dejar un 10%.",
        },
        {
            id: "chn",
            name: "China",
            min: 0,
            max: 0,
            default: 0,
            culture: "Históricamente no se deja propina y en muchos sitios está prohibido o se considera raro.",
        },
        {
            id: "prt",
            name: "Portugal",
            min: 0,
            max: 10,
            default: 5,
            culture: "Se acostumbra dejar el cambio o redondear. En zonas turísticas un 5-10% es común.",
        },
        {
            id: "grc",
            name: "Grecia",
            min: 0,
            max: 10,
            default: 5,
            culture: "Suele bastar con redondear la cuenta. Un 5-10% extra es muy apreciado pero no obligatorio.",
        },
    ]
  },
  seo: [
    {
      type: "title",
      text: "Guía Internacional de Propinas: Etiqueta y Porcentajes 2026",
      level: 2,
    },
    {
      type: "summary",
      title: "Aprende a dar propina como un local en cualquier parte del mundo",
      items: [
        "Guía completa sobre el porcentaje de propina esperado en los principales destinos turísticos.",
        "Cómo calcular la propina de forma rápida partiendo del subtotal o del total con impuestos.",
        "Diferencia entre cargos por servicio, cubierto (coperto) y propina voluntaria.",
        "Reglas de etiqueta para situaciones especiales: taxis, hoteles y guías turísticos.",
      ],
    },
    {
      type: "paragraph",
      html: "Uno de los momentos más estresantes de cualquier viaje internacional ocurre cuando llega la cuenta a la mesa. ¿Debo dejar dinero extra? ¿Cuánto es lo normal? ¿Se ofenderán si dejo poco o si dejo demasiado? Nuestra <strong>calculadora de propina internacional</strong> está diseñada para eliminar esa incertidumbre, proporcionándote no solo el cálculo matemático, sino la guía cultural necesaria para cada destino.",
    },
    {
      type: "title",
      text: "¿Por qué varían tanto las propinas entre países?",
      level: 3,
    },
    {
      type: "paragraph",
      html: "La respuesta corta es: el salario base y la legislación laboral. En países como Estados Unidos, el salario mínimo para trabajadores que reciben propinas puede ser de apenas unos pocos dólares por hora, bajo la premisa de que el cliente completará sus ingresos. En cambio, en gran parte de Europa y Oceanía, los camareros tienen contratos con salarios integrales que no dependen de la generosidad del comensal.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Cultura de Propina Esperada (EE.UU., Canadá, México)",
          description: "En estos países, la propina no es una recompensa al servicio excepcional, sino una parte fundamental del salario del trabajador.",
          icon: "mdi:currency-usd",
          points: [
            "EE.UU.: El estándar es del 18% al 25% en restaurantes.",
            "México: Se espera entre un 10% y un 15% (la 'propina').",
            "No dejar propina puede acarrear una confrontación o malestar visible.",
            "Suele calcularse sobre el total antes de impuestos.",
          ],
        },
        {
          title: "Cultura de Redondeo (Europa, Australia)",
          description: "El servicio suele estar incluido en el precio, por lo que la propina es un extra por un trato excelente.",
          icon: "mdi:currency-eur",
          highlight: true,
          points: [
            "España/Italia: Redondear al euro más cercano o dejar un 5-10%.",
            "Reino Unido: A menudo se incluye un cargo por servicio del 12.5% de forma opcional.",
            "Australia: No es esperada debido a los altos salarios mínimos locales.",
            "Francia: El 'service compris' ya está en tu factura por ley.",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Tabla de Propinas por Región",
      level: 3,
    },
    {
        type: "table",
        headers: ["Región", "Porcentaje Habitual", "¿Es obligatoria?"],
        rows: [
            ["<strong>Norteamérica (EE.UU./Canadá)</strong>", "18% - 25%", "Prácticamente obligatoria"],
            ["<strong>Europa Occidental</strong>", "5% - 10% / Redondeo", "Opcional y voluntaria"],
            ["<strong>Sudeste Asiático</strong>", "0% - 10%", "Solo en zonas muy turísticas"],
            ["<strong>Latinoamérica</strong>", "10% - 15%", "Socialmente esperada"],
            ["<strong>Japón / Corea del Sur</strong>", "0%", "Puede ser ofensiva"],
        ]
    },
    {
        type: "tip",
        title: "El Truco del 10%",
        html: "<p>Si estás en un país donde no conoces la norma y el servicio ha sido bueno, dejar un 10% suele ser una apuesta segura en casi todo el mundo (excepto Japón). Es una cifra que se reconoce internacionalmente como un gesto de agradecimiento estándar.</p>"
    },
    {
      type: "title",
      text: "Etiqueta: Más allá de los restaurantes",
      level: 3,
    },
    {
        type: "list",
        icon: "mdi:check-circle-outline",
        items: [
            "<strong>Botones y Maleteros:</strong> En hoteles de gama media/alta, se suelen dar entre 1 y 2 dólares/euros por maleta.",
            "<strong>Limpieza de habitación:</strong> Dejar un par de monedas cada mañana (no todo al final) asegura un mejor servicio durante la estancia.",
            "<strong>Guías de tours gratuitos:</strong> Aquí la propina ES su salario. Lo normal es entre 10€ y 20€ por persona dependiendo de la duración y calidad.",
            "<strong>Cruceros:</strong> La mayoría cargan automáticamente una 'cuota de servicio' diaria por pasajero. Revisa tu contrato antes de añadir más.",
        ]
    },
    {
      type: "title",
      text: "Consejos Finales para el Viajero Experto",
      level: 3,
    },
    {
        type: "paragraph",
        html: "La regla de oro es observar qué hacen los locales. Si notas que la gente se levanta sin dejar ni una moneda, no te sientas presionado a hacerlo. Sin embargo, recuerda que como turista a menudo nos movemos en una economía paralela donde nuestra propina puede marcar una gran diferencia en la economía doméstica del trabajador.",
    },
    {
        type: "list",
        icon: "mdi:lightbulb-on-outline",
        items: [
            "<strong>Cuidado con el 'Coperto':</strong> En Italia, el cargo por cubierto y pan es fijo y NO es la propina del camarero.",
            "<strong>Efectivo vs. Tarjeta:</strong> En muchos países europeos, la propina dejada en tarjeta rara vez llega íntegra al camarero. Prioriza las monedas en efectivo.",
            "<strong>Taxis y Maleteros:</strong> No olvides a los servicios auxiliares. En EE.UU., se esperan 1-2$ por maleta y un 15% al taxista.",
            "<strong>Japón: La excepción total:</strong> Nunca dejes monedas sobre la mesa en Japón; lo verán como si hubieras olvidado dinero y te perseguirán para devolvértelo.",
        ]
    },
    {
      type: "title",
      text: "Conclusión",
      level: 3,
    },
    {
        type: "paragraph",
        html: "Nuestra <strong>Guía Internacional de Propinas</strong> no es solo una herramienta matemática, es un puente cultural. Viajar con respeto implica entender cómo funcionan las normas sociales del lugar que nos acoge. Usa esta calculadora para presupuestar tus comidas fuera y viaja con la tranquilidad de que siempre estarás haciendo lo correcto.",
    }
  ],
  faq: [
    {
        question: "¿Es obligatorio dejar propina en Estados Unidos?",
        answer: "Legalmente no, pero socialmente es obligatorio. Los camareros dependen de las propinas para alcanzar el salario mínimo. Lo normal es dejar entre el 18% y el 25%.",
    },
    {
        question: "¿En qué países es ofensivo dejar propina?",
        answer: "Principalmente en Japón y Corea del Sur. Se considera que el buen servicio es parte del deber y no requiere compensación extra. Intentar dejar dinero puede causar incomodidad.",
    },
    {
        question: "¿Debo dar propina si el servicio fue malo?",
        answer: "En países donde es opcional (Europa, Australia), lo más correcto es no dejar nada para señalar tu disconformidad. En EE.UU., se acostumbra bajar el porcentaje al 10-15% y hablar con el responsable para explicar el motivo.",
    },
    {
        question: "¿La propina se calcula antes o después de impuestos?",
        answer: "En Norteamérica se suele calcular sobre el subtotal (antes de impuestos), aunque muchos terminales de pago sugieren porcentajes sobre el total final. En Europa y Latinoamérica, se calcula siempre sobre el total de la factura.",
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
        name: "Introduce el total de la cuenta",
        text: "Escribe el importe total que aparece en tu factura antes de aplicar la propina.",
    },
    {
        name: "Selecciona el país",
        text: "Elige tu destino para cargar automáticamente la recomendación cultural y el porcentaje estándar.",
    },
    {
        name: "Ajusta y divide",
        text: "Si sois varios, indica el número de personas para saber cuánto debe pagar cada uno incluyendo la propina.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Calculadora de Propinas Internacional",
      "description": "Calcula propinas según la costumbre local de cada país.",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "All"
    }
  ]
};
