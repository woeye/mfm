import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig, ImageUploadFormatOptions } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const webPFormatOptions: ImageUploadFormatOptions = {
  format: 'webp',
  options: {
    quality: 75,
  }
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  folders: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../../public/media'),
    focalPoint: true,
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        formatOptions: webPFormatOptions,
      },
      {
        name: 'wide',
        width: 496,
        height: 288,
        formatOptions: webPFormatOptions,
      },
    ],
  },
}
