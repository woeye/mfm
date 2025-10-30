import { Post } from '@/payload-types'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { MediaBlock } from './../blocks/MediaBlock/Component'
import type {
  Media,
  MediaBlock as MediaBlockProps,
  GalleryBlock as GalleryBlockProps,
} from '@/payload-types'
import { GalleryBlock } from '../blocks/GalleryBlock/Component'

//import './style.scss'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps>
  | SerializedBlockNode<GalleryBlockProps>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  blocks: {
    mediaBlock: ({ node }) => {
      const media = node.fields.media as Media
      return <MediaBlock media={media} />
    },
    galleryBlock: ({ node }) => {
      const images = node.fields.images
      if (images) {
        return <GalleryBlock images={images} />
      }
      return <div data-no-gallery-images></div>
    }
  }
})

type Props = {
  content: Post['content']
  className?: string
}
export const Content: React.FC<Props> = ({ content, className }: Props) => {
  return <RichText
    className={className}
    data={content}
    converters={jsxConverters}
  />
}
