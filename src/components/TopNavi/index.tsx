//import { Divider } from '@/icons/divider'
import Link from 'next/link'
import { Divider } from '../Divider'

export const TopNavi = () => {
  return (
    <header className="mt-4">
      <nav className="grid grid-cols-6 gap-4">
        <div className="col-span-3 flex flex-row gap-6 justify-start">
          <Link className="font-serif text-base text-gray-600" href="/pages/about">
            about
          </Link>
          <Link className="font-serif text-base text-gray-600" href="/posts">
            blog
          </Link>
        </div>
        <div className="col-span-3 flex flex-row gap-6 justify-end">
          <Link className="font-serif text-base text-gray-600" href="/pages/contact">
            contact
          </Link>
          <Link className="font-serif text-base text-gray-600" href="/pages/imprint">
            imprint
          </Link>
        </div>
        <div className="col-span-6 text-center">
          <Link href="/posts">
            <p className="font-serif text-gray-600 text-3xl">musings from munich</p>
            <p className="font-sans-serif text-gray-500 text-sm">
              random thoughts about photography, coffee and food
            </p>
          </Link>
        </div>
        <div className="col-span-6 mt-6 mb-12">
          {/* <Divider color={'var(--color-gray-500)'} /> */}
          <Divider icon='camera' />
        </div>
      </nav>
    </header>
  )
}
