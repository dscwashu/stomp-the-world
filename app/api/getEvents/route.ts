import { NextResponse } from 'next/server'
import { Storage } from '@google-cloud/storage'
import path from 'path'

export async function POST(request: Request): Promise<NextResponse> {
  const key = process.env.STORAGE_KEY
  if (!key) {
    return NextResponse.json({ success: false, error: 'No key found' })
  }
  const storage = new Storage({ credentials: JSON.parse(key) })

  const prefix = 'stomp-the-world-images/gallery/'

  const files = (
    await storage.bucket('stomp-the-world').getFiles({ prefix: prefix })
  )[0]

  const galleryItems = files.map((file) => {
    if (!file.name.endsWith('.jpg')) return null
    const s = file.name.split('/')
    return s[s.length - 2]
  })

  const filteredGalleryItems = galleryItems.filter((item) => item !== null)

  const galleryItemsSet = new Set(filteredGalleryItems)

  console.log(galleryItems)

  return NextResponse.json({
    success: true,
    galleryItems: Array.from(galleryItemsSet),
  })
}
