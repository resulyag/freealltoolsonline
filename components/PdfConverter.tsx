'use client'

import { useState, useRef } from 'react'
import { Loader2, Upload, Download, AlertCircle, CheckCircle2, X } from 'lucide-react'

interface ConversionResult {
  success: boolean
  message: string
  images?: string[]
  error?: string
}

export default function PdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      const dropped = files[0]
      if (dropped.type === 'application/pdf') {
        setFile(dropped)
        setError('')
      } else {
        setError('Lütfen PDF dosyası yükleyin')
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      if (files[0].type === 'application/pdf') {
        setFile(files[0])
        setError('')
      } else {
        setError('Lütfen PDF dosyası yükleyin')
      }
    }
  }

  const handleConvert = async () => {
    if (!file) {
      setError('Lütfen bir PDF dosyası seçin')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/pdf/convert', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Dönüştürme başarısız')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Dönüştürme sırasında hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (imageUrl: string, index: number) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `page-${index + 1}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClear = () => {
    setFile(null)
    setResult(null)
    setError('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full">
      {/* Upload Section */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative bg-white rounded-2xl border-2 p-8 transition-all mb-6 cursor-pointer ${
          dragActive
            ? 'border-red-600 bg-red-50'
            : 'border-slate-200 hover:shadow-md hover:border-slate-300'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="text-center" onClick={() => fileInputRef.current?.click()}>
          <Upload className="w-12 h-12 text-red-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">PDF Dosyası Yükleyin</h3>
          <p className="text-sm text-slate-600 mb-4">
            veya sürükleyip bırakın
          </p>
          {file && (
            <p className="text-sm font-medium text-green-600 mb-4">
              📄 {file.name}
            </p>
          )}
          <button
            className="inline-block bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
            onClick={(e) => {
              e.stopPropagation()
              fileInputRef.current?.click()
            }}
          >
            Dosya Seçin
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4 mt-6">
          <p className="text-sm text-slate-700 flex items-start gap-2">
            <span className="text-xl">📌</span>
            <span>
              <strong>Desteklenen Format:</strong> Sadece PDF dosyaları. Maksimum dosya boyutu: 50MB
            </span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      {file && !result && (
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleConvert}
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Dönüştürülüyor...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                PDF'i JPG'ye Dönüştür
              </>
            )}
          </button>
          <button
            onClick={handleClear}
            className="px-6 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 flex items-start gap-4 mb-6">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900">Hata</h3>
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && result.images && (
        <div className="space-y-4">
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-green-900">Başarılı!</h3>
              <p className="text-green-800 text-sm">{result.message}</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.images.map((imageUrl, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <button
                    onClick={() => handleDownload(imageUrl, index)}
                    className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Sayfa {index + 1} İndir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleClear}
            className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all"
          >
            Başka PDF Yükle
          </button>
        </div>
      )}
    </div>
  )
}
