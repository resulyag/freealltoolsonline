'use client'

import { useState } from 'react'
import { Loader2, Download, AlertCircle, CheckCircle2 } from 'lucide-react'

interface VideoFormat {
  quality: string
  size: string
  bitrate?: string
  format?: string
  fps?: number | null
  url?: string
}

interface DownloadResult {
  title: string
  url: string
  duration: string
  thumbnail: string
  uploader?: string
  uploadDate?: string
  viewCount?: string
  formats: VideoFormat[]
}

export default function VideoDownloader() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DownloadResult | null>(null)
  const [error, setError] = useState('')

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      if (!url.trim()) {
        throw new Error('Please enter a video URL')
      }

      // Call backend API
      const response = await fetch('/api/video/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch video information')
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to process video')
      }

      setResult(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadFormat = (format: VideoFormat) => {
    // If we have a real download URL from the API, use it
    if (format.url && format.url.trim()) {
      // Open in new tab or trigger download
      window.open(format.url, '_blank')
      return
    }
    
    // Fallback message if URL not available yet
    alert(`📦 ${format.quality} (${format.size}) - Download linki yakında hazır olacak!\n\nAPI'den gerçek link gelince otomatik indirilecek.`)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleDownload} className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow mb-6">
        <label className="block mb-4">
          <span className="text-slate-900 font-bold mb-3 block text-lg">Video URL Girin</span>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=dQw4w9WgXcQ"
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-slate-50 font-medium transition-all"
            required
          />
        </label>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-slate-700 flex items-start gap-2">
            <span className="text-xl">📌</span>
            <span>
              <strong>Desteklenen Siteler:</strong> YouTube, TikTok, Instagram, Dailymotion, Vimeo, SoundCloud ve daha fazlası
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Video Analiz Ediliyor...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Video Bilgisini Getir
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 flex items-start gap-4 mb-6">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 mb-1">Hata Oluştu</h3>
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {/* Video Info Header */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b-2 border-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2">{result.title}</h3>
                <div className="space-y-2">
                  <p className="text-slate-600 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600"></span>
                    ⏱️ Süre: <strong>{result.duration}</strong>
                  </p>
                  {result.uploader && (
                    <p className="text-slate-600">
                      📺 <strong>{result.uploader}</strong>
                    </p>
                  )}
                  {result.viewCount && (
                    <p className="text-slate-600">
                      👁️ <strong>{result.viewCount}</strong> views
                    </p>
                  )}
                </div>
              </div>
              {result.thumbnail && (
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-24 h-24 rounded-lg object-cover shadow-md flex-shrink-0"
                />
              )}
            </div>
          </div>

          {/* Formats Section */}
          <div className="p-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg flex items-center gap-2">
              <Download className="w-5 h-5 text-red-600" />
              İndirme Seçenekleri
            </h4>

            <div className="space-y-3">
              {result.formats.map((format, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDownloadFormat(format)}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-between shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 flex-1 text-left">
                    <Download className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-bold">{format.quality}</p>
                      {format.bitrate && <p className="text-xs opacity-90">{format.bitrate}</p>}
                    </div>
                  </div>
                  <span className="text-sm opacity-90 font-semibold bg-white/20 px-3 py-1 rounded-lg">
                    {format.size}
                  </span>
                </button>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Hızlı İpuçları</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>✓ Kalite ve boyut arasından seçim yapın</li>
                    <li>✓ Müzik için MP3 seçeneğini kullanın</li>
                    <li>✓ İndirme doğrudan tarayıcınızda başlayacak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!result && !loading && !error && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600">Video bilgisini almak için yukarıya bir URL girin</p>
        </div>
      )}
    </div>
  )
}
