import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'

type Props = {
  media: Media
  className?: string
}
export const ImageMedia: React.FC<Props> = ({ media, className}: Props) => {
  console.log('rendering media: ', media)
  return (
    <div className={cn('drop-shadow-md relative', className)}>
      <Image
        src={media.url!}
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
