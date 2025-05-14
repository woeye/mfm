import { Media } from '@/payload-types'
import { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import { ImageMedia } from '@/components/ImageMedia'

type Props = {
  upload: SerializedUploadNode
}
export const MediaBlock: React.FC<Props> = ({ upload }) => {
  const media = upload.value as Media
  return <ImageMedia media={media} />
}
