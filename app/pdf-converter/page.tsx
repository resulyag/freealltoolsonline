import { Metadata } from 'next'
import PdfConverterPageClient from '@/components/PdfConverterPageClient'

export const metadata: Metadata = {
  title: 'PDF to JPG Converter | Free All Tools Online',
  description: 'PDF dosyalarını JPG görsellerine dönüştürün. Ücretsiz, hızlı ve güvenli PDF converter.',
  keywords: 'pdf to jpg, pdf converter, pdf to image, online converter, free pdf converter',
}

export default function PdfConverterPage() {
  return <PdfConverterPageClient />
}
