import { GenerateURL } from '@payloadcms/plugin-seo/types'
import { getServerSideURL } from '@/utilities/getURL'
import { Page, Post } from '@/payload-types'
import { Plugin } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'
//import { s3Storage } from '@payloadcms/storage-s3'

// const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
//   return doc?.title ? `${doc.title} | musings from munich` : 'musings from munich'
// }

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    //generateTitle,
    generateURL,
  }),
  // s3Storage({
  //   enabled: true,
  //   collections: {
  //     media: true,

  //   },
  //   bucket: process.env.S3_BUCKET!,
  //   config: {
  //     credentials: {
  //       accessKeyId: process.env.S3_ACCESS_KEY_ID!,
  //       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  //     },
  //     region: process.env.S3_REGION,
  //   }
  // })
]
