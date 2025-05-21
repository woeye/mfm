import { Post } from '@/payload-types'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { MediaBlock } from './blocks/MediaBlock/Component'
import type {
  Media,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  blocks: {
    mediaBlock: ({ node }) => {
      const media = node.fields.media as Media
      return <MediaBlock media={media} />
    },
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
