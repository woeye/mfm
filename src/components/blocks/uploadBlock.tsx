import { Media } from '@/payload-types'
import Image from 'next/image'

type Props = {
  media: Media
}
export const UploadBlock: React.FC<Props> = (props) => {
  const { media } = props
  console.log('rendering media: ', media)
  return (
    <div className="drop-shadow-md my-4">
      <Image
        src={media.url!}
        alt={media.alt}
        width={media.width!}
        height={media.height!}
        style={{ width: '100%', height: 'auto' }}
        //loading='lazy'
        //fill={true}
        //style={{ objectFit: 'cover' }}
        //objectFit='cover'
      />
    </div>
  )
}
