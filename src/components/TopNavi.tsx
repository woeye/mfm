//import { Divider } from '@/icons/divider'
import Link from 'next/link'
import { Divider } from './Divider'

export const TopNavi = () => {
  return (
    <header className="mt-8">
      <nav className="grid grid-cols-7 gap-6">
        <div className="col-span-1 text-right">
          <span className="font-bold font-serif xl:text-3xl/6 text-xl/6 md:inline hidden">musings<br/>from<br/>munich</span>
          <span className="font-bold font-serif md:hidden inline">mfm</span>
        </div>
        <div className="col-span-2 text-left">
          <span className="text-sm md:text-base sm:text-sm text-gray-500">random thoughts about photography,<br/>coffee and food</span>
        </div>
        <div className="col-span-4 flex flex-row gap-6 justify-end">
          <Link className="text-xl font-bold text-gray-600 hover:underline" href="/posts">
            blog
          </Link>
          <Link className="text-xl text-gray-600 hover:underline" href="/contact">
            contact
          </Link>
          <Link className="text-xl text-gray-600 hover:underline" href="/imprint">
            imprint
          </Link>
        </div>
        {/* <div className="col-span-3 flex flex-row gap-6 justify-start">
          <Link className="font-serif text-base text-gray-600" href="/about">
            about
          </Link>
        </div>
        <div className="col-span-3 flex flex-row gap-6 justify-end">
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
          <Divider icon='camera' />
        </div> */}
      </nav>
    </header>
  )
}
