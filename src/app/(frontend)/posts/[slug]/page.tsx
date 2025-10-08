import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media, Post } from '@/payload-types'
import { PublishedAt } from '@/components/PublishedAt'
import { ImageMedia } from '@/components/ImageMedia'
import { Content } from '@/components/Content'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchRecentPosts } from '@/utilities/posts'
import { LivePreviewListener } from '@/components/LivePreviewListener'

//import './divider.css'

type Args = {
  params: Promise<{
    slug: string,
  }>
}
export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  //const url = '/posts/' + slug

  const post = await queryPostBySlug({ slug })
  if (!post) return <div>not found</div>

  return <PostDetails post={post} />
}

export const PostDetails = async ({ post }: { post: Post }) => {
  const { isEnabled: draft } = await draftMode()
  //const recentPosts = await fetchRecentPosts()

  return (
    <div className="col-span-7 grid grid-cols-7 gap-6 mt-16 mb-8">
      {draft && <LivePreviewListener/>}
      <article className="col-span-7 col-start-1 md:col-span-5 md:col-start-2">
        <PublishedAt post={post} />
        <h1>{post.title}</h1>
        <ImageMedia
          size="original"
          className="mt-6"
          media={post.featuredPhoto as Media}
        />
        <Content className="mt-10 article-content" content={post?.content}/>
      </article>
      {/* <aside className="col-span-2 pt-4">
        <h2>recent posts</h2>
        {recentPosts.map((rp) => {
          // if (rp.id == post.id) return -> might cause confusion
          return (
            <article key={rp.id} className="grid grid-cols-3 gap-6 mt-8">
              <ImageMedia size="wide" className="col-span-1 h-16" media={rp.featuredPhoto as Media} />
              <div className="col-span-2">
                <PublishedAt post={rp} format="compact" />
                <h2 className="text-sm font-normal">
                  <Link className="hover:text-black" href={`/posts/${rp.slug}`}>
                    {rp.title}
                  </Link>
                </h2>
              </div>
            </article>
          )
        })}
      </aside> */}
      <div className=""></div>
    </div>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  console.log(`fetching post by slug: ${slug}`)
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
