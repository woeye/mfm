import { getPayload } from 'payload'
import configPromise from '@payload-config'
// import { RichText } from '@payloadcms/richtext-lexical/react'
// import Heading from '@/components/Heading'
import Link from 'next/link'
import { ImageMedia } from '@/components/ImageMedia'
import { Media } from '@/payload-types'
import { Divider } from '@/components/Divider'
import { PublishedAt } from '@/components/PublishedAt'
import { cache } from 'react'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'recent posts',
  description: 'Random musings from munich',
}

export default async function PostsPage() {
  //const payload = await getPayload({ config: configPromise })
  const posts = await fetchRecentPosts()
  console.log('posts: ', posts)

  if (posts.length === 0) return // TODO we might to handle this better

  // first post goes on top
  const firstPost = posts.shift()!

  return (
    <div className="grid grid-cols-7 gap-6">
      <h1 className="hidden">recent postings on musings from munich</h1>

      {/* treat first post special */}
      <article className="col-span-7 col-start-1 md:col-start-2 gap-6 mt-16 mb-8 grid grid-cols-3">
        <div className="col-span-3">
          <PublishedAt post={firstPost} />
          <h2 className="text-xl md:text-2xl text-wenge">
            <Link className="hover:text-black" href={`/posts/${firstPost.slug}`}>
              {firstPost.title}
            </Link>
          </h2>
        </div>
        <div className="md:col-span-2 col-span-3">
          <ImageMedia
            size="wide"
            className="md:h-96 h-64"
            media={firstPost.featuredPhoto as Media} />
        </div>
        <div key={firstPost.id} className="col-span-2 md:col-span-1 mt-1">
          <p>{firstPost.abstract}</p>
          {/* <Content content={firstPost?.content}/> */}
        </div>
      </article>

      <div className="col-span-7 md:col-span-6 col-start-1 md:col-start-2">
        <Divider icon="coffee" />
      </div>

      <div className="col-span-7 col-start-1 md:col-span-6 md:col-start-2 grid grid-cols-3 gap-6 mt-6">

        {/* put remaining posts on a list of tiles */}
        {posts.map((post) => {
          console.log(post.slug)
          return (
            <article key={post.id} className="col-span-3 md:col-span-1">
              <div className="">
                <PublishedAt post={firstPost} />
                <h2>
                  <Link className="hover:text-black" href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <ImageMedia size="wide" className="h-40 mt-4" media={post.featuredPhoto as Media} />
                <div className="mt-4">
                  <p>{post.abstract}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

const fetchRecentPosts = cache(async function() {
  console.log('fetching recent posts ...')
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 10,
    overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   categories: true,
    //   meta: true,
    // },
  })


  // first post goes on top
  return posts.docs
})

