'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import VideoDownloader from './VideoDownloader'
import { Zap, Lock, Download, Clock } from 'lucide-react'

export default function VideoDownloaderPageClient() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Decorative blur circles */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-4 bg-red-100 text-red-700 rounded-full text-xs font-bold">
            🎥 {language === 'tr' ? 'Hızlı İndirme' : 'Fast Download'}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            {language === 'tr' ? 'Videoları' : 'Download'}{' '}
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              {language === 'tr' ? 'Ücretsiz İndir' : 'Videos Free'}
            </span>
          </h1>

          <p className="text-xl text-slate-700 mb-8 max-w-2xl leading-relaxed">
            {t.videoDownloader.description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">1000+</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'Günlük Video' : 'Videos/Day'}</div>
            </div>
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">4K</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'En Yüksek Kalite' : 'Max Quality'}</div>
            </div>
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">100%</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'Güvenli' : 'Secure'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <VideoDownloader />
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            ✨ {language === 'tr' ? 'Özellikler' : 'Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? 'Hızlı İndirme' : 'Fast Download'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'Videoları saniyeler içinde indirin. Hiç beklemek yok.'
                  : 'Download videos in seconds. No waiting.'}
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? 'Güvenli & Gizli' : 'Secure & Private'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'Tüm işlemler şifreli ve gizlidir. Verileriniz güvende.'
                  : 'All operations are encrypted and private. Your data is safe.'}
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? 'Tüm Platformlar' : 'All Platforms'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'YouTube, TikTok, Instagram ve daha pek çok platform destekleniyor.'
                  : 'YouTube, TikTok, Instagram and many more platforms supported.'}
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? '24/7 Kullanılabilir' : '24/7 Available'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'İstediğiniz zaman, kayıt gerekmez.'
                  : 'Anytime you want. No registration required.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            🌐 {language === 'tr' ? 'Desteklenen Siteler' : 'Supported Sites'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'YouTube', emoji: '▶️' },
              { name: 'TikTok', emoji: '🎵' },
              { name: 'Instagram', emoji: '📸' },
              { name: 'Facebook', emoji: '👥' },
              { name: 'Twitter/X', emoji: '𝕏' },
              { name: 'Vimeo', emoji: '🎬' },
              { name: 'SoundCloud', emoji: '🔊' },
              { name: 'Reddit', emoji: '🤖' },
            ].map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl border-2 border-slate-200 p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{platform.emoji}</div>
                <div className="font-bold text-sm text-slate-900">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            ❓ {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: language === 'tr' ? 'Video indirmek legal mi?' : 'Is downloading videos legal?',
                a: language === 'tr'
                  ? 'Kişisel kullanım için orijinal kaynağın koşullarına bağlıdır. Telif hakkı olan içerikleri indirmekten kaçının.'
                  : 'It depends on the original source\'s terms for personal use. Avoid downloading copyrighted content.',
              },
              {
                q: language === 'tr' ? 'Kaç video indirebilirim?' : 'How many videos can I download?',
                a: language === 'tr'
                  ? 'İstediğiniz kadar video indirebilirsiniz. Hiçbir sınır yoktur.'
                  : 'You can download as many videos as you want. No limits.',
              },
              {
                q: language === 'tr' ? 'En yüksek kalite nedir?' : 'What is the highest quality?',
                a: language === 'tr'
                  ? 'Platformun sunduğu en yüksek kaliteyi indirebilirsiniz. Çoğu zaman 4K veya 1080p.'
                  : 'You can download the highest quality the platform offers. Usually 4K or 1080p.',
              },
              {
                q: language === 'tr' ? 'Dosyalarım güvende mi?' : 'Are my files safe?',
                a: language === 'tr'
                  ? 'Evet! Tüm işlemler tarayıcınızda gerçekleşir. Sunucumuza hiçbir veri yüklenmez.'
                  : 'Yes! All operations happen in your browser. No data is uploaded to our server.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
