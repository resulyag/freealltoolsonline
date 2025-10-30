import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import VideoDownloaderPageClient from '@/components/VideoDownloaderPageClient'

export const metadata: Metadata = {
  title: 'YouTube ve TikTok Video İndir | Free All Tools Online',
  description: 'YouTube, TikTok, Instagram ve diğer sitelerden videoları ücretsiz indirin. En yüksek kalitede MP4 ve MP3 formatında video indirme.',
  keywords: 'youtube indir, video indir, tiktok indir, instagram indir, video downloader, free video download',
}

export default function VideoDownloaderPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            Video Downloader
          </h1>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Client Content */}
      <VideoDownloaderPageClient />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>© 2025 Free All Tools Online. All tools are free and ad-supported.</p>
        </div>
      </footer>
    </>
  )
}
