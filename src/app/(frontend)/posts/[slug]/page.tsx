import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function PostPage() {
  const payload = await getPayload({ config: configPromise })

  return <div></div>
}
