import { cache } from "react"
import { draftMode } from "next/headers"
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from "payload"
import { notFound } from "next/navigation"
import { Content } from "@/components/Content"

type Args = {
  params:Promise<{
    slug?: string
  }>
}

export default async function Page() {
  return (
    <div>not the right one</div>
  )
}

// export default async function Page({ params: paramsPromise }: Args) {
//   const { slug = 'about' } = await paramsPromise
//   const url = '/' + slug

//   let page: RequiredDataFromCollectionSlug<'pages'> | null

//   page = await queryPageBySlug({
//     slug,
//   })

//   if (!page) {
//     notFound()
//   }

//   return (
//     <article className="col-span-6 grid grid-cols-6 gap-8 mb-8">
//       <div className="col-span-4 col-start-2">
//         <h1>
//           {page.title}
//         </h1>
//         <Content className="mt-10 article-content" content={page?.content}/>
//       </div>
//     </article>
//   )
// }

// const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
//   const { isEnabled: draft } = await draftMode()

//   const payload = await getPayload({ config: configPromise })

//   const result = await payload.find({
//     collection: 'pages',
//     draft,
//     limit: 1,
//     pagination: false,
//     overrideAccess: draft,
//     where: {
//       slug: {
//         equals: slug,
//       },
//     },
//   })

//   return result.docs?.[0] || null
// })
