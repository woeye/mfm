import { getPayload } from 'payload'
import { LuClock } from 'react-icons/lu'
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Date from '@/components/Date'
import Heading from '@/components/heading'
import Link from 'next/link'
import Content from '@/components/content'

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

  console.log(posts)

  // first post goes on top
  const allPosts = posts.docs
  if (allPosts.length == 0) return // TODO we might to handle this better

  const firstPost = allPosts.shift()!

  return (
    <div>
      <h1 className="text-center my-24">My recent postings</h1>

      {/* treat first post special */}
      <div key={firstPost.id} className="mb-16">
        <h2>
          <Link className="hover:text-black" href={`/blog/${firstPost.slug}`}>{firstPost.title}</Link>
        </h2>
        <div className="flex items-center center-items content-stretch mb-4">
          <LuClock className="text-mediumgray mr-1" size={16} />
          <p className="font-nunito text text-mediumgray"><Date value={firstPost.publishedAt}/> ago</p>
        </div>
        {/* <SanityImage image={firstPost.coverImage?.asset} className="mb-4" /> */}
        <Content content={firstPost?.content}/>
      </div>

      {/* <Posts posts={posts} /> */}
    </div>
  )
}
