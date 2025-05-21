import { Media } from '@/payload-types'
import { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import { ImageMedia } from '@/components/ImageMedia'

type Props = {
  media: Media
}
export const MediaBlock: React.FC<Props> = ({ media }) => {
  return <ImageMedia size='original' media={media} />
}
