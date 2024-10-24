import { NextResponse } from 'next/server'
import { Storage } from '@google-cloud/storage'
import path from 'path'

export async function POST(request: Request): Promise<NextResponse> {
  const key = process.env.STORAGE_KEY
  if (!key) {
    return NextResponse.json({ success: false, error: 'No key found' })
  }
  const storage = new Storage({ credentials: JSON.parse(key) })

  const prefix = 'stomp-the-world-images/gallery'

  const files = (
    await storage.bucket('stomp-the-world').getFiles({ prefix: prefix })
  )[0]

  const galleryItems = await Promise.all(
    files.map(async (file) => {
      if (!file.name.endsWith('.jpg')) return null
      const [url] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60,
      })
      return url
    }),
  )

  const filteredGalleryItems = galleryItems.filter((item) => item !== null)

  return NextResponse.json({
    success: true,
    galleryItems: filteredGalleryItems,
  })
}
