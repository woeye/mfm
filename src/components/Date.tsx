import { formatDistanceToNow } from 'date-fns'

type DateParams = {
  value?: string | undefined | null
}
export default function Date({ value }: DateParams) {
  if (!value) return null

  const formattedDate = formatDistanceToNow(value)
  return (
    <time>{formattedDate}</time>
  )
}
