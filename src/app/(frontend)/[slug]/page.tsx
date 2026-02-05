import { Content } from '@/components/Content'
import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'


type Args = {
  params:Promise<{
    slug?: string
  }>
}

// export default async function Page() {
//   return (
//     <div>not the right one</div>
//   )
// }

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  //const url = '/' + slug

  if (!slug) {
    redirect('/posts')
  }

  const page = await queryPageBySlug({ slug })

  if (!page) {
    notFound()
  }

  return (
    <div className="grid grid-cols-7 gap-6 mb-8">
      <article className="col-span-7 col-start-1 md:col-span-5 md:col-start-2">
        <h1>
          {page.title}
        </h1>
        <Content className="mt-4 article-content" content={page?.content}/>
      </article>
    </div>
  )
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
