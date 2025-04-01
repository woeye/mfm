import { Media, Post } from '@/payload-types'
import { DefaultNodeTypes } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { UploadBlock } from './blocks/uploadBlock'

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  upload:({ node }) => {
    return <UploadBlock media={node.value as Media} />
  },
})

type ContentParams = {
  content: Post['content']
}
export default function Content({ content }: ContentParams) {
  return <RichText data={content} converters={jsxConverters} />
}
