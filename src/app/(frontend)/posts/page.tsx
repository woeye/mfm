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
import { Divider } from '@/components/Divider'

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

  //allPosts.push(allPosts[0])
  //allPosts.push(allPosts[0])

  return (
    <div className="grid grid-cols-6 gap-10">
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
          <h2>
            <Link className="hover:text-black" href={`/posts/${firstPost.slug}`}>
              {firstPost.title}
            </Link>
          </h2>
          <div className="flex items-center center-items content-stretch">
            <LuClock className="text-mediumgray mr-1" size={16} />
            <p className="font-nunito text text-sm text-mediumgray">
              <Date value={firstPost.publishedAt} /> ago
            </p>
          </div>
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
      {allPosts.map((post) => {
        return (
          <article key={post.id} className="col-span-2">
            <div className="">
              <h2>
                <Link className="hover:text-black" href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <div className="flex items-center center-items content-stretch mt-1">
                <LuClock className="text-mediumgray mr-1" size={16} />
                <p className="font-nunito text text-sm text-mediumgray">
                  <Date value={post.publishedAt} /> ago
                </p>
              </div>
              <ImageMedia className="h-40 mt-4" media={post.featuredPhoto as Media} />
              <div className="mt-2">
                <p>{post.abstract}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
