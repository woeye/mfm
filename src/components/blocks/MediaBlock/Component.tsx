import { Media } from '@/payload-types'
import { ImageMedia } from '@/components/ImageMedia'

type Props = {
  media: Media
}
export const MediaBlock: React.FC<Props> = ({ media }) => {
  return <ImageMedia className="my-6" size="original" media={media} />
}
