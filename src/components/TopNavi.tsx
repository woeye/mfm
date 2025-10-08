//import { Divider } from '@/icons/divider'
import { Grid, GridCol, Text } from '@mantine/core'
import Link from 'next/link'
import { LuAlignJustify } from 'react-icons/lu'

import classes from './TopNavi.module.css'

export const TopNavi = () => {
  return (
    <header>
      <nav>
        <Grid>
          <GridCol span={2}><span className={classes.title}>musings<br />from<br />munich</span></GridCol>
          <GridCol span={8}>
            <span>random thoughts about photography,<br/>coffee and food</span>
          </GridCol>
        </Grid>
      </nav>
      <nav className="grid grid-cols-7 md:gap-6 gap-1">
        <div className="md:col-span-1 col-span-6 text-left content-center md:text-right text-fawn">
          <Link href="/" title="Back to home page">
            <span className="font-bold font-serif lg:text-2xl/4 text-xl/2 hidden md:inline">musings<br/>from<br/>munich</span>
            <span className="font-bold font-serif text-xl/6 md:hidden">musings from munich</span>
          </Link>
        </div>
        <div className="col-span-1 content-center justify-self-end md:hidden">
          <button className="hover:bg-neutral-100 p-2">
            <LuAlignJustify className="text-wenge text-2xl" />
          </button>
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
