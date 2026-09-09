import type { ToolLocaleContent } from '../../../types';
import type { AirportConnectionBufferUI } from '../ui';
import { createAirportContent } from './shared';

const ui: AirportConnectionBufferUI = {
  flightDataHeading: 'Entrada rápida de datos del vuelo', flightNumberLabel: 'Número de vuelo',
  flightNumberHint: 'Vuelo de llegada: escribe el código o escanea el primer tramo de la tarjeta', connectionFlightLabel: 'Vuelo de conexión',
  connectionFlightHint: 'Opcional: añade el siguiente vuelo por separado', scanFileButton: 'Escanear imagen o PDF', scanCameraButton: 'Escanear con cámara',
  stopCameraButton: 'Detener cámara', scannerStatus: 'Escáner local: elige una imagen o permite el acceso a la cámara.', airportLabel: 'Aeropuerto de conexión (IATA)',
  arrivalAirportLabel: 'Aeropuerto de llegada', departureAirportLabel: 'Aeropuerto de salida', terminalLabel: 'Terminal', arrivalTerminalLabel: 'Terminal de llegada',
  departureTerminalLabel: 'Terminal de salida', airportManualHint: 'Usa el catálogo local cuando tenga un traslado documentado; si no, verifica la ruta.', arrivalLabel: 'Hora de llegada',
  arrivalHint: 'Cuándo está previsto que aterrice el vuelo de entrada', departureLabel: 'Siguiente salida', departureHint: 'Cuándo sale el vuelo de conexión', baggageHeading: 'Equipaje y tipo de billete',
  baggageHand: 'Solo equipaje de mano', baggageChecked: 'Equipaje facturado hasta destino', baggageSelfTransfer: 'Billetes separados / self-transfer', routeRuleHeading: 'Reglas de la ruta',
  routeDomestic: 'Nacional a nacional', routeSchengen: 'No Schengen a Schengen', routeUsInternational: 'Conexión internacional en EE. UU.', routeCustom: 'Personalizada',
  deplaningLabel: 'Salir del avión de llegada', deplaningHint: 'Desembarque, pasarela y salida', transferLabel: 'Traslado de terminal', transferHint: 'A pie, bus, tren o cambio de puerta',
  controlLabel: 'Seguridad o control de pasaportes', controlHint: 'Incluye cada control obligatorio', baggageLabel: 'Equipaje y facturación', baggageHint: 'Usa cero si tu maleta va facturada hasta destino',
  personalBufferLabel: 'Tu margen personal', personalBufferHint: 'Tiempo que quieres tener antes del embarque', gateCloseLabel: 'Cierre de puerta antes de salir', gateCloseHint: 'Compara con este límite, no con el despegue', mctLabel: 'MCT para comparar',
  mctHint: 'Introduce un valor oficial; 0 lo deja como desconocido', localDataLabel: 'Datos locales de traslado', localDataKnown: 'Estimación local documentada', localDataUnknown: 'Hace falta verificación manual', sourceLabel: 'Fuentes y límites',
  advancedSettingsLabel: 'Ajustes avanzados', advancedSettingsHint: 'Afina los supuestos de pasos, controles, equipaje, puerta y MCT', delayHeading: 'Simulador de retrasos en cascada', delayLabel: 'Prueba de retraso', delayHint: 'Retraso adicional de llegada que quieres probar', delayZero: '+0 min', delayFifteen: '+15 min', delayThirty: '+30 min', delayFortyFive: '+45 min',
  presetsLabel: 'Empieza con un tipo de ruta', presetShort: 'Conexión corta', presetStandard: 'Conexión típica', presetLong: 'Conexión larga', resultHeading: 'Margen de conexión', windowLabel: 'Ventana entre vuelos', plannedLabel: 'Pasos previstos', gateWindowLabel: 'Hasta el cierre de puerta', mctLabelResult: 'Comprobación MCT',
  mctUnknown: 'No has introducido un MCT oficial; esto no es un aprobado o suspenso documentado.', stressLabel: 'Con el retraso de prueba', marginLabel: 'Margen con estrés', statusComfortable: 'Margen positivo', statusTight: 'Margen justo', statusMissed: 'No hay tiempo suficiente', timelineArrival: 'Aterrizar', timelineExit: 'Salir del avión', timelineTransfer: 'Desplazarse', timelineControl: 'Pasar control', timelineGate: 'Límite de puerta', timelineDeparture: 'Despegar',
  marginStatement: 'Quedan {minutes} tras los pasos previstos de conexión.', stressStatement: 'Quedan {minutes} después de sumar el retraso de prueba.', invalidStatement: 'Introduce horas de llegada y salida válidas y distintas para ver la ventana de conexión.', mctStatement: 'La ventana introducida se compara con el MCT que has indicado.', sourceStatement: 'Los tiempos de traslado son estimaciones locales; controles, colas, cambios de puerta y límites de la aerolínea pueden cambiar el resultado.', sampleButton: 'Cargar conexión típica', resetButton: 'Restablecer', minuteUnit: 'min',
};

const content: ToolLocaleContent<AirportConnectionBufferUI> = createAirportContent({
  locale: 'es', slug: 'calculadora-margen-conexion-aeroportuaria', title: 'Calculadora del margen para conexiones de aeropuerto',
  description: 'Calcula una conexión de aeropuerto con escaneo local de tarjetas de embarque, traslados entre terminales, equipaje, cierre de puerta, controles de ruta, retrasos y comprobación MCT.', ui,
  seo: [
    { type: 'title', text: 'Qué mide esta calculadora de conexiones', level: 2 },
    { type: 'paragraph', html: 'Una conexión ofrece una ventana de tiempo, no una garantía. La calculadora resta tus pasos previstos desde la llegada programada hasta el cierre de la puerta.' },
    { type: 'paragraph', html: 'Puedes escanear una imagen de la tarjeta si el navegador ofrece un detector local PDF417 o Aztec, o seleccionar manualmente el aeropuerto IATA y las terminales.' },
    { type: 'title', text: 'Cómo preparar una estimación útil', level: 2 },
    { type: 'list', items: ['Introduce las horas programadas de llegada y salida.', 'Añade el traslado real entre terminales o puertas.', 'Incluye controles, equipaje y facturación cuando correspondan.', 'Reserva un margen personal para encontrar la puerta y embarcar.', 'Usa la prueba de retraso para ver cómo desaparece el margen.'] },
    { type: 'tip', title: 'Un margen positivo no garantiza la conexión', html: 'Comprueba siempre las instrucciones de la aerolínea y del aeropuerto, los controles, el equipaje y el límite de embarque. La herramienta no conoce las colas ni los cambios de puerta en directo.' },
  ],
  faq: [
    { question: '¿La calculadora conoce el tiempo mínimo oficial de conexión?', answer: 'Solo si introduces tú el valor oficial. El MCT depende del aeropuerto, terminal, aerolínea, ruta, billete y controles. Un campo vacío aparece como desconocido.' },
    { question: '¿Qué incluyo en el traslado de terminal?', answer: 'Incluye el camino, tren, bus, lanzadera y desplazamiento hasta la puerta de continuación. Si no conoces la ruta, usa una estimación prudente y consulta las indicaciones del aeropuerto.' },
    { question: '¿Para qué sirve la prueba de retraso?', answer: 'Es un escenario transparente: añade un retraso de llegada y compara el margen restante con y sin él. No predice la probabilidad de retraso.' },
    { question: '¿Qué cambia con vuelos separados?', answer: 'Añade una previsión más exigente para recoger maletas, volver a facturar y desplazarte con billetes separados. Verifica siempre los pasos exactos de tu itinerario.' },
  ],
  howTo: [
    { name: 'Introduce la ventana de vuelo', text: 'Añade la hora de llegada y la salida del vuelo siguiente. Si la salida es más temprana en el reloj, se interpreta como el día siguiente.' },
    { name: 'Añade los pasos de conexión', text: 'Indica el traslado, los controles, el equipaje, la facturación y el margen personal que quieres antes de embarcar.' },
    { name: 'Prueba un retraso', text: 'Selecciona un retraso de llegada y compara el margen normal con el margen bajo estrés.' },
    { name: 'Verifica los supuestos', text: 'Consulta las instrucciones oficiales sobre terminales, controles, equipaje, cierre de embarque y condiciones del billete.' },
  ],
  howToTitle: 'Cómo calcular el margen de una conexión aérea',
});

export { content };
