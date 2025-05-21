import { Post } from "@/payload-types"
import { LuClock } from "react-icons/lu"
import Date from '@/components/Date'

type Props = {
  post: Post
}
export const PublishedAt: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex items-center center-items content-stretch">
      <LuClock className="text-gray-400 mr-1" size={16} />
      <p className="font-nunito text text-sm text-gray-400">
        <Date value={post.publishedAt} /> ago
      </p>
    </div>
  )
}
