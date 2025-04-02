import { Media } from '@/payload-types'
import { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import { ImageMedia } from '../ImageMedia'

type Props = {
  upload: SerializedUploadNode
}
export const UploadBlock: React.FC<Props> = ({ upload }) => {
  const media = upload.value as Media
  return <ImageMedia media={media} />
}
