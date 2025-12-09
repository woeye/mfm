'use client'

import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image, { ImageLoader } from 'next/image'

type ImageProps = React.ComponentPropsWithoutRef<typeof Image> // get props of Image component (which is a weird ForwardRefExoticComponent)
type SizesKeys = keyof NonNullable<Media['sizes']> // get sizes as keys
type Props = {
  media: Media
  className?: string
  size: SizesKeys | 'original'
}
export const ImageMedia: React.FC<Props> = ({ media, className, size = 'wide'}: Props) => {
  //
  // console.log('rendering media: ', media)

  const imageLoader: ImageLoader = ({ width }) => {
    //console.log('src: ', src)
    console.log('=================================')
    console.log('width: ', width)
    //return ''

    if (!media) return ''

    let size = 'large'
    if (width <= 384) {
      size = 'very_small'
    }
    else if (width <= 640) {
      size ='small'
    }
    else if (width <= 900) {
      size = 'medium'
    }

    const image = media.sizes![size as SizesKeys]
    console.log('returning url: ', image?.url)

    return image?.url || ''
  }

  let opts: ImageProps = {
    alt: media?.alt || 'missing alt text',
    src: media?.url || '',
  }

  if (size !== 'original') {
    if (!media.sizes) {
      return <div>wrong image size</div>
    }

    const image = media.sizes[size]
    if (!image) {
      return <div>image in requested size not found</div>
    }
    opts = {
      ...opts,
      src: image.url!,
      fill: true,
      style: { objectFit: 'contain' },
    }
  } else {
    opts = {
      ...opts,
      width: media.width!,
      height: media.height!,
    }
  }

  return (
    <div className={cn('drop-shadow-md relative', className)}>
      <Image
        sizes="(max-width: 400px) 384px, (max-width: 1050px) 640px, 1080px"
        loader={imageLoader}
        {...opts}
      />
    </div>
  )
}
