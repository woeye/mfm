import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { PublishedAt } from '@/components/PublishedAt'
import { ImageMedia } from '@/components/ImageMedia'
import { Content } from '@/components/Content'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchRecentPosts } from '@/utilities/posts'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PostDetails } from '../../[slug]/page'

//import './divider.css'

type Args = {
  params: Promise<{
    id: string,
  }>
}
export default async function PostPage({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise

  const post = await queryPostByID({ id })
  if (!post) return <div>not found</div>

  return <PostDetails post={post} />
}

const queryPostByID = cache(async ({ id }: { id: string }) => {
  console.log(`fetching post by ID: ${id}`)
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const post = await payload.findByID({
    collection: 'posts',
    draft,
    overrideAccess: draft,
    id: id,
  })
  return post
})
