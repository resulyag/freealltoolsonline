import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Free All Tools Online - Ücretsiz Çevrimiçi Araçlar',
  description: 'Video downloader, PDF converter, image compressor, AI image generator ve daha fazlası. Tüm araçlar tamamen ücretsiz!',
  keywords: 'free tools, video downloader, pdf converter, image compressor, ai tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-slate-50">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
