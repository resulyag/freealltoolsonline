'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import PdfConverter from './PdfConverter'
import { FileText, Zap, Lock, Clock } from 'lucide-react'

export default function PdfConverterPageClient() {
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
            📄 {language === 'tr' ? 'Ücretsiz Dönüştürme' : 'Free Conversion'}
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            PDF'den{' '}
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              JPG'ye
            </span>
            <br />
            {language === 'tr' ? 'Anında Dönüştür' : 'Instantly Convert'}
          </h1>

          <p className="text-xl text-slate-700 mb-8 max-w-2xl leading-relaxed">
            {language === 'tr'
              ? 'PDF dosyalarınızı yüksek kaliteli JPG görsellerine dönüştürün. Kişisel kullanımdan profesyonel projelere kadar.'
              : 'Convert your PDF files to high-quality JPG images. From personal use to professional projects.'}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">10MB</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'Hızlı İşlem' : 'Fast Processing'}</div>
            </div>
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">100%</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'Güvenli' : 'Secure'}</div>
            </div>
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border-2 border-slate-200 p-4">
              <div className="text-2xl font-black text-red-600">∞</div>
              <div className="text-xs text-slate-600">{language === 'tr' ? 'Sınırsız' : 'Unlimited'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <PdfConverter />
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
                  {language === 'tr' ? 'Hızlı İşlem' : 'Fast Processing'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'PDF\'leriniz saniyeler içinde JPG\'ye dönüştürülür.'
                  : 'Your PDFs are converted to JPG in seconds.'}
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? 'Güvenli' : 'Secure'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'Dosyalarınız hiçbir sunucuda saklanmaz. Tamamen gizli ve güvenli.'
                  : 'Your files are not stored on any server. Completely private and secure.'}
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-slate-900">
                  {language === 'tr' ? 'Kalite Koruması' : 'Quality Preserved'}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {language === 'tr'
                  ? 'Orijinal kalite korunarak dönüştürme yapılır.'
                  : 'Conversion preserves original quality.'}
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
                  ? 'İstediğiniz zaman kullanabilirsiniz, kayıt gerekmez.'
                  : 'Available anytime, no registration needed.'}
              </p>
            </div>
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
                q: language === 'tr' ? 'Dosya boyutu sınırı nedir?' : 'What is the file size limit?',
                a: language === 'tr'
                  ? '50MB\'ye kadar PDF dosyaları dönüştürebilirsiniz.'
                  : 'You can convert PDF files up to 50MB.',
              },
              {
                q: language === 'tr' ? 'Kaç sayfalı PDF dönüştürebilirim?' : 'How many pages can I convert?',
                a: language === 'tr'
                  ? 'Sınırsız sayfa dönüştürebilirsiniz. Tüm sayfalar JPG\'ye çevrilir.'
                  : 'You can convert unlimited pages. All pages will be converted to JPG.',
              },
              {
                q: language === 'tr' ? 'Dosyalarım nereden silinir?' : 'Where are my files deleted?',
                a: language === 'tr'
                  ? 'Dönüştürme tamamlandıktan sonra sunucumuzdan otomatik olarak silinir.'
                  : 'They are automatically deleted from our server after conversion is complete.',
              },
              {
                q: language === 'tr' ? 'JPG kalitesi ayarlanabilir mi?' : 'Can I adjust JPG quality?',
                a: language === 'tr'
                  ? 'Şu anda varsayılan yüksek kaliteyle dönüştürülür. Yakında ayarlama seçeneği eklenecektir.'
                  : 'Currently, it is converted with default high quality. Quality adjustment will be added soon.',
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
