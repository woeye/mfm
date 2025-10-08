import { Post } from '@/payload-types'
import { LuClock } from 'react-icons/lu'
import Date from '@/components/Date'

type Props = {
  post: Post,
  format?: 'compact' | 'normal'
}
export const PublishedAt: React.FC<Props> = ({ post, format = 'normal' }) => {
  return (
    <div className="flex items-center center-items content-stretch">
      { format === 'normal' && (
        <LuClock className="text-rose-gold mr-1" size={16} />
      )}
      <p className={`font-nunito text ${format === 'normal' ? 'text-sm' : 'text-xs'} text-rose-gold`}>
        <Date value={post.publishedAt} /> ago
      </p>
    </div>
  )
}
