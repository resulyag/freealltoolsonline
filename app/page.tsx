'use client'

import Link from 'next/link'
import { Download, FileJson, Image, Sparkles, ArrowRight, Github, Twitter, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { translations, Language } from '@/lib/translations'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const tools = [
  {
    id: 'video-downloader',
    key: 'tools.videoDownloader',
    icon: Download,
    gradient: 'from-red-600 to-rose-600',
  },
  {
    id: 'pdf-converter',
    key: 'tools.pdfConverter',
    icon: FileJson,
    gradient: 'from-blue-600 to-blue-600',
  },
  {
    id: 'image-compressor',
    key: 'tools.imageCompressor',
    icon: Image,
    gradient: 'from-emerald-600 to-green-600',
  },
  {
    id: 'ai-image-generator',
    key: 'tools.aiImageGenerator',
    icon: Sparkles,
    gradient: 'from-purple-600 to-indigo-600',
  },
]

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Free All Tools
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors">Docs</button>
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              Get Started
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <ClientContent tools={tools} />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <StatSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <FooterSection />
      </footer>
    </>
  )
}

function ClientContent({ tools }: { tools: any[] }) {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { label: t.home.features.free, icon: '💰' },
    { label: t.home.features.ads, icon: '📢' },
    { label: t.home.features.fast, icon: '⚡' },
    { label: t.home.features.noSignup, icon: '🔓' },
  ]

  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-red-100 to-purple-100 text-red-600">
          {t.home.badge}
        </span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        {t.home.hero} <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">{t.home.heroHighlight}</span>
      </h1>
      
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        {t.home.description}
      </p>

      {/* Features Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-slate-50 rounded-lg py-3 px-4">
            <div className="text-2xl mb-1">{feature.icon}</div>
            <p className="text-sm font-semibold text-slate-900">{feature.label}</p>
          </div>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {tools.map((tool) => {
          const IconComponent = tool.icon
          const toolKey = tool.key.split('.')[1] as keyof typeof t.tools
          const toolInfo = translations[language].tools[toolKey]
          
          return (
            <Link href={`/${tool.id}`} key={tool.id}>
              <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {toolInfo?.badge && (
                      <span className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700">
                        {toolInfo.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {toolInfo?.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {toolInfo?.description}
                  </p>

                  <div className={`flex items-center gap-2 font-semibold bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                    {language === 'tr' ? 'Başla' : 'Start'}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function StatSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="grid grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold mb-2">1M+</div>
        <p className="text-slate-400">{t.home.stats.users}</p>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">4</div>
        <p className="text-slate-400">{t.home.stats.tools}</p>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">∞</div>
        <p className="text-slate-400">{t.home.stats.free}</p>
      </div>
    </div>
  )
}

function FooterSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-bold text-slate-900 mb-4">{t.home.footer.title}</h4>
          <p className="text-slate-600 text-sm">{t.home.footer.description}</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">{t.home.footer.tools}</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/video-downloader" className="hover:text-slate-900">{t.tools.videoDownloader.name}</Link></li>
            <li><Link href="/pdf-converter" className="hover:text-slate-900">{t.tools.pdfConverter.name}</Link></li>
            <li><Link href="/image-compressor" className="hover:text-slate-900">{t.tools.imageCompressor.name}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">{t.home.footer.legal}</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">{t.home.footer.privacy}</a></li>
            <li><a href="#" className="hover:text-slate-900">{t.home.footer.terms}</a></li>
            <li><a href="#" className="hover:text-slate-900">{t.home.footer.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">{t.home.footer.social}</h4>
          <div className="flex gap-4">
            <a href="#" className="text-slate-600 hover:text-slate-900"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-600 hover:text-slate-900"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
        <p>{t.home.footer.copyright}</p>
      </div>
    </div>
  )
}
