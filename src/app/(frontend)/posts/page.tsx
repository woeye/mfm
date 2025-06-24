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

export default async function PostsPage() {
  //const payload = await getPayload({ config: configPromise })
  const posts = await fetchRecentPosts()
  console.log('posts: ', posts)

  if (posts.length == 0) return // TODO we might to handle this better

  // first post goes on top
  const firstPost = posts.shift()!

  return (
    <div className="grid grid-cols-6 gap-10 mb-10">
      <h1 className="hidden">recent postings on musings from munich</h1>

      {/* treat first post special */}
      <article className="col-span-6 grid grid-cols-6 gap-8 mb-8">
        <div className="col-span-3 max-h-92">
          <ImageMedia
            size='wide'
            className="h-72"
            media={firstPost.featuredPhoto as Media} />
        </div>

        <div key={firstPost.id} className="col-span-3">
          <PublishedAt post={firstPost} />
          <h2>
            <Link className="hover:text-black" href={`/posts/${firstPost.slug}`}>
              {firstPost.title}
            </Link>
          </h2>
          <div className="mt-6">
            <p>{firstPost.abstract}</p>
          </div>
          {/* <Content content={firstPost?.content}/> */}
        </div>
      </article>

      <div className="col-span-6">
        <Divider icon='coffee' />
      </div>

      {/* put remaining posts on a list of tiles */}
      {posts.map((post) => {
        console.log(post.slug)
        return (
          <article key={post.id} className="col-span-2">
            <div className="">
              <PublishedAt post={firstPost} />
              <h2>
                <Link className="hover:text-black" href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <ImageMedia size='wide' className="h-40 mt-4" media={post.featuredPhoto as Media} />
              <div className="mt-4">
                <p>{post.abstract}</p>
              </div>
            </div>
          </article>
        )
      })}
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

