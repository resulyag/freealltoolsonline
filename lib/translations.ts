export type Language = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      docs: 'Dokümantasyon',
      getStarted: 'Başla',
    },
    home: {
      badge: '✨ Hep buradayız',
      hero: 'Tüm Araçlar Bir Yerde',
      heroHighlight: 'Araçlar',
      description: 'Video indir, PDF dönüştür, görüntü sıkıştır, AI ile görüntü oluştur. Tüm araçlar ücretsiz, kayıt gereksiz, reklam destekli.',
      features: {
        free: '100% Ücretsiz',
        ads: 'Reklam Destekli',
        fast: 'Hızlı & Güvenli',
        noSignup: 'Kayıt Gereksiz',
      },
      stats: {
        users: 'Kullanıcı',
        tools: 'Popüler Araç',
        free: 'Ücretsiz Kullanım',
      },
      footer: {
        title: 'Free All Tools',
        description: 'Ücretsiz çevrimiçi araçlar platformu',
        tools: 'Araçlar',
        legal: 'Hukuki',
        social: 'Sosyal',
        privacy: 'Gizlilik',
        terms: 'Şartlar',
        contact: 'İletişim',
        copyright: '© 2025 Free All Tools Online. Tüm araçlar ücretsiz ve reklam desteklidir.',
      },
    },
    videoDownloader: {
      name: 'Video Downloader',
      backBtn: 'Geri Dön',
      description: 'YouTube, TikTok, Instagram ve daha pek çok platformdan en yüksek kalitede videoları indirin.',
      badge: '⚡ Hızlı & Güvenli',
      title: 'Videoları Ücretsiz İndir',
      urlLabel: 'Video URL Girin',
      urlPlaceholder: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      supportedSites: 'Desteklenen Siteler',
      supportedSitesDesc: 'YouTube, TikTok, Instagram, Dailymotion, Vimeo, SoundCloud ve daha fazlası',
      getInfo: 'Video Bilgisini Getir',
      analyzing: 'Video Analiz Ediliyor...',
      features: '✨ Özellikler',
      featuresList: [
        'YouTube videoları indir',
        'TikTok videoları indir',
        'Instagram reel ve videoları',
        '4K ve 1080p kalitesi',
        'MP3 audio çıkartma',
        'Tamamen ücretsiz',
        'Kayıt gereksiz',
        'Hızlı indirme',
      ],
      supportedList: [
        { name: 'YouTube', emoji: '🎥' },
        { name: 'TikTok', emoji: '📱' },
        { name: 'Instagram', emoji: '📸' },
        { name: 'Dailymotion', emoji: '🎞️' },
        { name: 'Vimeo', emoji: '🎬' },
        { name: 'SoundCloud', emoji: '🎵' },
        { name: 'Twitter/X', emoji: '𝕏' },
        { name: 'Reddit', emoji: '🤖' },
      ],
      faq: '❓ Sıkça Sorulan Sorular',
      faqItems: [
        {
          q: 'Videoları indirmek legal mi?',
          a: 'Kişisel kullanım için orijinal kaynağın koşullarına bağlıdır. Telif hakkı olan içerikleri indirmekten kaçının.',
        },
        {
          q: 'Kaç video indirebilirim?',
          a: 'İstediğiniz kadar video indirebilirsiniz. Hiçbir sınır yoktur.',
        },
        {
          q: 'Videomu nereden indir?',
          a: 'Video bilgisini getirdikten sonra, istediğiniz kalitedeki download butonu ile doğrudan tarayıcınızdan indirebilirsiniz.',
        },
        {
          q: 'Verilerim güvende mi?',
          a: 'Evet! Tüm işlemler tarayıcınızda gerçekleşir. Sunucumuza hiçbir veri yüklenmez. Tamamen güvenli ve özel.',
        },
      ],
      formats: '📊 Format Seçenekleri',
      formatsList: [
        {
          label: '4K',
          title: '2160p (4K) - ~850MB',
          desc: 'En yüksek kalite, büyük dosya boyutu',
        },
        {
          label: 'HD',
          title: '1080p - ~320MB',
          desc: 'Kalite ve boyut arasında iyi denge',
        },
        {
          label: 'SD',
          title: '720p - ~180MB',
          desc: 'Mobil cihazlar için uygun',
        },
        {
          label: 'MP3',
          title: 'Audio Only - ~45MB',
          desc: 'Müzik videoları için ideal',
        },
      ],
      downloadOptions: 'İndirme Seçenekleri',
      tips: 'Hızlı İpuçları',
      tipsList: [
        'Kalite ve boyut arasından seçim yapın',
        'Müzik için MP3 seçeneğini kullanın',
        'İndirme doğrudan tarayıcınızda başlayacak',
      ],
      error: 'Hata Oluştu',
      emptyState: 'Video bilgisini almak için yukarıya bir URL girin',
      duration: 'Süre',
    },
    tools: {
      videoDownloader: {
        name: 'Video Downloader',
        description: 'YouTube, TikTok, Instagram ve daha pek çok sitelerden videoları MP4 olarak indirin.',
        badge: 'Popüler',
      },
      pdfConverter: {
        name: 'PDF ⟷ JPG',
        description: 'PDF dosyalarını JPG\'ye dönüştürün veya tersi işlemi yapın.',
        badge: 'Yeni',
      },
      imageCompressor: {
        name: 'Image Compressor',
        description: 'Görüntüleri kalitesini koruyarak sıkıştırın ve dosya boyutunu azaltın.',
        badge: null,
      },
      aiImageGenerator: {
        name: 'AI Image Generator',
        description: 'Metinsel açıklamalardan yapay zeka ile yüksek kaliteli görseller oluşturun.',
        badge: 'Beta',
      },
    },
  },
  en: {
    nav: {
      docs: 'Documentation',
      getStarted: 'Get Started',
    },
    home: {
      badge: '✨ Always Here For You',
      hero: 'All Tools in One Place',
      heroHighlight: 'Tools',
      description: 'Download videos, convert PDFs, compress images, generate AI images. All tools are free, no signup required, ad-supported.',
      features: {
        free: '100% Free',
        ads: 'Ad Supported',
        fast: 'Fast & Secure',
        noSignup: 'No Sign Up',
      },
      stats: {
        users: 'Users',
        tools: 'Popular Tools',
        free: 'Free Usage',
      },
      footer: {
        title: 'Free All Tools',
        description: 'Free online tools platform',
        tools: 'Tools',
        legal: 'Legal',
        social: 'Social',
        privacy: 'Privacy',
        terms: 'Terms',
        contact: 'Contact',
        copyright: '© 2025 Free All Tools Online. All tools are free and ad-supported.',
      },
    },
    videoDownloader: {
      name: 'Video Downloader',
      backBtn: 'Back',
      description: 'Download videos in the highest quality from YouTube, TikTok, Instagram and many more platforms.',
      badge: '⚡ Fast & Secure',
      title: 'Download Videos For Free',
      urlLabel: 'Enter Video URL',
      urlPlaceholder: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      supportedSites: 'Supported Sites',
      supportedSitesDesc: 'YouTube, TikTok, Instagram, Dailymotion, Vimeo, SoundCloud and more',
      getInfo: 'Get Video Info',
      analyzing: 'Analyzing Video...',
      features: '✨ Features',
      featuresList: [
        'Download YouTube videos',
        'Download TikTok videos',
        'Download Instagram reels and videos',
        '4K and 1080p quality',
        'MP3 audio extraction',
        'Completely free',
        'No signup required',
        'Fast download',
      ],
      supportedList: [
        { name: 'YouTube', emoji: '🎥' },
        { name: 'TikTok', emoji: '📱' },
        { name: 'Instagram', emoji: '📸' },
        { name: 'Dailymotion', emoji: '🎞️' },
        { name: 'Vimeo', emoji: '🎬' },
        { name: 'SoundCloud', emoji: '🎵' },
        { name: 'Twitter/X', emoji: '𝕏' },
        { name: 'Reddit', emoji: '🤖' },
      ],
      faq: '❓ Frequently Asked Questions',
      faqItems: [
        {
          q: 'Is it legal to download videos?',
          a: 'For personal use it depends on the original source terms. Avoid downloading copyrighted content.',
        },
        {
          q: 'How many videos can I download?',
          a: 'You can download as many videos as you want. There is no limit.',
        },
        {
          q: 'Where do I download from?',
          a: 'After getting the video info, click the quality button you want and download directly from your browser.',
        },
        {
          q: 'Is my data safe?',
          a: 'Yes! Everything happens in your browser. No data is uploaded to our server. Completely safe and private.',
        },
      ],
      formats: '📊 Format Options',
      formatsList: [
        {
          label: '4K',
          title: '2160p (4K) - ~850MB',
          desc: 'Highest quality, large file size',
        },
        {
          label: 'HD',
          title: '1080p - ~320MB',
          desc: 'Good balance between quality and size',
        },
        {
          label: 'SD',
          title: '720p - ~180MB',
          desc: 'Suitable for mobile devices',
        },
        {
          label: 'MP3',
          title: 'Audio Only - ~45MB',
          desc: 'Ideal for music videos',
        },
      ],
      downloadOptions: 'Download Options',
      tips: 'Quick Tips',
      tipsList: [
        'Choose between quality and file size',
        'Use MP3 option for music',
        'Download starts directly in your browser',
      ],
      error: 'Error Occurred',
      emptyState: 'Enter a URL above to get video information',
      duration: 'Duration',
    },
    tools: {
      videoDownloader: {
        name: 'Video Downloader',
        description: 'Download videos from YouTube, TikTok, Instagram and many other sites as MP4.',
        badge: 'Popular',
      },
      pdfConverter: {
        name: 'PDF ⟷ JPG',
        description: 'Convert PDF files to JPG or do the reverse conversion.',
        badge: 'New',
      },
      imageCompressor: {
        name: 'Image Compressor',
        description: 'Compress images while preserving quality and reduce file size.',
        badge: null,
      },
      aiImageGenerator: {
        name: 'AI Image Generator',
        description: 'Generate high-quality images with AI from text descriptions.',
        badge: 'Beta',
      },
    },
  },
}

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split('.')
  let value: any = translations[lang]
  for (const k of keys) {
    value = value[k]
  }
  return value
}
