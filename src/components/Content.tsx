import { Post } from '@/payload-types'
import { DefaultNodeTypes } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { UploadBlock } from './blocks/UploadBlock'

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  upload:({ node }) => {
    return <UploadBlock upload={node} />
  },
})

type ContentParams = {
  content: Post['content']
}
export default function Content({ content }: ContentParams) {
  return <RichText data={content} converters={jsxConverters} />
}
