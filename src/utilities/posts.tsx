import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'

export const fetchRecentPosts = cache(async function() {
  console.log('fetching recent posts ...')
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 10,
    overrideAccess: false,
  })
  return posts.docs
})
