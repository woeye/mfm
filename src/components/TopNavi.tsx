//import { Divider } from '@/icons/divider'
import Link from 'next/link'

export const TopNavi = () => {
  return (
    <header className="mt-8">
      <nav className="grid grid-cols-7 md:gap-6 gap-1">
        <div className="md:col-span-1 col-span-7 text-left md:text-right text-fawn">
          <Link href="/" title="Back to home page">
            <span className="font-bold font-serif lg:text-2xl/4 text-xl/2 hidden md:inline">musings<br/>from<br/>munich</span>
            <span className="font-bold font-serif text-xl/6 md:hidden">musings from munich</span>
          </Link>
        </div>
        <div className="md:col-span-3 col-span-7 text-left">
          <span className="text-base font-medium text-wenge">random thoughts about photography,<br/>coffee and food</span>
        </div>
        <div className="col-span-3 flex-row gap-6 justify-end hidden md:flex">
          <Link className="text-xl font-bold text-fawn hover:underline" href="/posts">
            blog
          </Link>
          <Link className="text-xl text-wenge hover:underline" href="/contact">
            contact
          </Link>
          <Link className="text-xl text-wenge hover:underline" href="/imprint">
            imprint
          </Link>
        </div>
      </nav>
    </header>
  )
}
