import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'PDF dosyası yüklenmelidir' },
        { status: 400 }
      )
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Lütfen PDF dosyası yükleyin' },
        { status: 400 }
      )
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Dosya boyutu 50MB\'den büyük olamaz' },
        { status: 400 }
      )
    }

    // Mock: Simulating PDF conversion
    // In production, use a PDF library like pdf-lib or pdfjs
    const mockPages = 3 // Simulate 3 pages
    const images: string[] = []

    // Generate mock JPG images (base64 encoded placeholder)
    for (let i = 0; i < mockPages; i++) {
      // Placeholder image - in production, actual PDF pages will be converted
      const placeholderImage = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q==`
      images.push(placeholderImage)
    }

    return NextResponse.json({
      success: true,
      message: `${mockPages} sayfa başarıyla JPG\'ye dönüştürüldü`,
      images: images,
    })
  } catch (error) {
    console.error('PDF conversion error:', error)
    return NextResponse.json(
      { error: 'PDF dönüştürme sırasında hata oluştu' },
      { status: 500 }
    )
  }
}
