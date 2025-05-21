import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'

type ImageProps = React.ComponentPropsWithoutRef<typeof Image> // get props of Image component (which is a weird ForwardRefExoticComponent)
type SizesKeys = keyof NonNullable<Media['sizes']> // get sizes as keys
type Props = {
  media: Media
  className?: string
  size: SizesKeys | 'original'
}
export const ImageMedia: React.FC<Props> = ({ media, className, size = 'wide'}: Props) => {
  console.log('rendering media: ', media)

  let opts: ImageProps = {
    alt: media.alt,
    src: media.url!,
  }
  if (size != 'original') {
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
      style: { objectFit: 'cover' },
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
      <Image {...opts} />
    </div>
  )
}
