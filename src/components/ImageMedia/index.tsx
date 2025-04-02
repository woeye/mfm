import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Image from 'next/image'

type Props = {
  media: Media
  height?: 'h-64' | 'h-96' | 'h-40' | 'h-32' | 'h-24' | 'h-80'
}
export const ImageMedia: React.FC<Props> = ({ media, height = 'h-64'}: Props) => {
  console.log('rendering media: ', media)
  return (
    <div className={cn('drop-shadow-md relative', height)}>
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
