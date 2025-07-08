import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { getServerSideURL } from '@/utilities/getURL'
import { Page, Post } from '@/payload-types'
import { Plugin } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
]
