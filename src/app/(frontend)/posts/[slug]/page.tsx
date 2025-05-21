import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { PublishedAt } from '@/components/PublishedAt'
import { ImageMedia } from '@/components/ImageMedia'
import { Content } from '@/components/Content'

type Args = {
  params: Promise<{
    slug?: string,
  }>
}
export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    depth: 2,
    draft: false,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: {
      slug: {
        equals: slug,
      }
    }
    // select: {
    //   title: true,
    //   slug: true,
    //   categories: true,
    //   meta: true,
    // },
  })

  console.log(result.docs)

  //if (result.docs)
  const post = result.docs[0]

  return (
  <div>
      <article className="col-span-6 grid grid-cols-6 gap-8 mb-8">
        <div className="col-span-4 col-start-2">
          <h1>
            <Link className="hover:text-black" href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <PublishedAt post={post} />
          <ImageMedia
            size="original"
            className="mt-6"
            media={post.featuredPhoto as Media}
          />
          <Content className="mt-10 article-content" content={post?.content}/>
        </div>
      </article>
  </div>
  )
}
