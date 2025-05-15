import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'

type SizesKey = keyof NonNullable<Media['sizes']>
//type SizesKey = keyof NonNullable<Media['sizes']>
type Props = {
  media: Media
  className?: string
  size?: SizesKey
}
export const ImageMedia: React.FC<Props> = ({ media, className, size = 'wide'}: Props) => {
  console.log('rendering media: ', media)
  if (!media.sizes) {
    return <div>wrong image size</div>
  }

  const image = media.sizes[size]
  if (!image) {
    return <div>image in requested size not found</div>
  }

  console.log('using image: ', image)
  return (
    <div className={cn('drop-shadow-md relative', className)}>
      <Image
        src={image.url!}
        alt={media.alt}
        //width={media.width!}
        //height={media.height!}
        //style={{ width: '100%', height: 'auto' }}
        //loading='lazy'
        fill={true}
        style={{ objectFit: 'cover' }}
        //objectFit='cover'
      />
    </div>
  )
}
