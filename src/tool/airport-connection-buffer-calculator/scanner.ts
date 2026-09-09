export interface ScannedBarcode {
  format: string;
  rawValue: string;
}

interface DetectorResult {
  rawValue?: string;
  format?: string;
}

interface Detector {
  detect(source: CanvasImageSource): Promise<DetectorResult[]>;
}

interface DetectorConstructor {
  new (options?: { formats: string[] }): Detector;
  getSupportedFormats?: () => Promise<string[]>;
}

function detectorConstructor(): DetectorConstructor | null {
  const candidate = (globalThis as typeof globalThis & { BarcodeDetector?: DetectorConstructor }).BarcodeDetector;
  return candidate ?? null;
}

async function createDetector(): Promise<Detector | null> {
  const Constructor = detectorConstructor();
  if (!Constructor) return null;
  const supported = Constructor.getSupportedFormats ? await Constructor.getSupportedFormats() : ['pdf417', 'aztec', 'qr_code'];
  const formats = supported.filter((format) => ['pdf417', 'aztec', 'qr_code'].includes(format));
  return formats.length ? new Constructor({ formats }) : null;
}

export async function scanImageFile(file: File): Promise<ScannedBarcode> {
  if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
    throw new Error('PDF files need a browser that exposes a decoded page to BarcodeDetector. Try an image export of the boarding pass.');
  }
  const detector = await createDetector();
  if (!detector) throw new Error('This browser does not expose a local barcode scanner.');
  const bitmap = await createImageBitmap(file);
  try {
    const result = (await detector.detect(bitmap)).find((item) => item.rawValue);
    if (!result?.rawValue) throw new Error('No boarding-pass barcode was found in that file.');
    return { format: result.format ?? 'unknown', rawValue: result.rawValue };
  } finally {
    bitmap.close();
  }
}

export async function scanVideoFrame(video: HTMLVideoElement): Promise<ScannedBarcode | null> {
  const detector = await createDetector();
  if (!detector || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return null;
  const result = (await detector.detect(video)).find((item) => item.rawValue);
  return result?.rawValue ? { format: result.format ?? 'unknown', rawValue: result.rawValue } : null;
}
