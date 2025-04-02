import { getPayload } from 'payload'
import { LuClock } from 'react-icons/lu'
import configPromise from '@payload-config'
// import { RichText } from '@payloadcms/richtext-lexical/react'
import Date from '@/components/Date'
// import Heading from '@/components/Heading'
import Link from 'next/link'
import Content from '@/components/Content'
import { ImageMedia } from '@/components/ImageMedia'
import { Media } from '@/payload-types'

export default async function PostsPage() {
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

  console.log('posts: ', posts)

  // first post goes on top
  const allPosts = posts.docs
  if (allPosts.length == 0) return // TODO we might to handle this better

  const firstPost = allPosts.shift()!

  allPosts.push(allPosts[0])
  allPosts.push(allPosts[0])

  return (
    <div className="grid grid-cols-6 gap-8 mb-16">
      <h1 className="text-center mb-16 col-span-6">my recent posts</h1>

      {/* treat first post special */}
      <div className="col-span-6 grid grid-cols-6 gap-8 mb-16">
        <div className="col-span-4 max-h-92">
          <ImageMedia height='h-80' media={firstPost.featuredPhoto as Media} />
        </div>

        <div key={firstPost.id} className="col-span-2">
          <h2>
            <Link className="hover:text-black" href={`/blog/${firstPost.slug}`}>{firstPost.title}</Link>
          </h2>
          <div className="flex items-center center-items content-stretch">
            <LuClock className="text-mediumgray mr-1" size={16} />
            <p className="font-nunito text text-sm text-mediumgray"><Date value={firstPost.publishedAt}/> ago</p>
          </div>
          <div className="mt-6">
            <p>{firstPost.abstract}</p>
          </div>
          {/* <Content content={firstPost?.content}/> */}
        </div>
      </div>

      {/* put remaining posts on a list of tiles */}
      {allPosts.map(post => {
        return (
          <div key={post.id} className="col-span-3 grid grid-cols-6 gap-8">
            <div className="col-span-2 mt-8">
              <ImageMedia height='h-32' media={post.featuredPhoto as Media} />
            </div>
            <div className="col-span-4 pr-10 mt-8">
              <h3>
                <Link className="hover:text-black" href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="flex items-center center-items content-stretch">
                <LuClock className="text-mediumgray mr-1" size={16} />
                <p className="font-nunito text text-sm text-mediumgray"><Date value={post.publishedAt}/> ago</p>
              </div>
              <div className="mt-2">
                <p>{post.abstract}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
