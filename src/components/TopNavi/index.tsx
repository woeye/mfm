import { Divider } from '@/icons/divider'
import Link from 'next/link'

export const TopNavi = () => {
  return (
    <header className="grid grid-cols-6 gap-4 mt-4">
      <div className="col-span-3 flex flex-row gap-6 justify-start">
        <Link className="font-serif text-base text-darkgray" href="/pages/about">about</Link>
        <Link className="font-serif text-base text-darkgray" href="/blog">blog</Link>
      </div>
      <div className="col-span-3 flex flex-row gap-6 justify-end">
        <Link className="font-serif text-base text-darkgray" href="/pages/contact">contact</Link>
        <Link className="font-serif text-base text-darkgray" href="/pages/imprint">imprint</Link>
      </div>
      <div className="col-span-6 text-center">
        <Link href="/blog">
          <p className="font-serif text-darkgray text-3xl">musings from munich</p>
          <p className="font-sans-serif text-darkgray text-sm">
            random thoughts about photography, coffee and food
          </p>
        </Link>
      </div>
      <div className="col-span-6 m-auto mt-4 mb-16">
        <Divider color={'var(--color-gray-500)'} />
      </div>
    </header>
  )
}
