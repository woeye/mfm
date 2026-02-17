'use client'

import { cn } from '@/utilities/ui'
import { useMediaQuery } from '@/utilities/hooks/useMediaQuery'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LuAlignJustify, LuX } from 'react-icons/lu'

export const TopNavi = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [transitionFinished, setTransitionFinished] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 48rem)')

  useEffect(() => {
    setTransitionFinished(true)
    setShowOverlay(false)
  }, [isDesktop])

  const handleClick = () => {
    console.log('handle click -> transitionFinished: ', transitionFinished)
    setTransitionFinished(false)
    setShowOverlay(!showOverlay)
  }

  const onTransitionEnd = () => {
    console.log('transition ended -> setShowOverlay: ', showOverlay)
    setTransitionFinished(true)
  }

  const menuCSS = isDesktop
    ? 'col-span-3 flex-row gap-6 justify-end hidden md:flex'
    : cn(
      'p-4 flex flex-col gap-3 border-t-1 mt-18 absolute top-0 bottom-0 left-0 right-0 z-40 bg-white transition-opacity duration-200',
      showOverlay ? 'opacity-100 visible' : 'opacity-0',
      !showOverlay && transitionFinished ? 'invisible' : '',
    )

  const handleMenuClick = () => {
    setTransitionFinished(false)
    setShowOverlay(false)
  }

  return (
    <header className="mt-4 mb-16">
      <nav className="grid grid-cols-7 md:gap-6 gap-1">
        <div className="md:col-span-1 col-span-6 text-left content-center md:text-right text-fawn">
          <Link href="/" title="Back to home page">
            <span className="font-bold font-serif lg:text-2xl/4 text-xl/2 hidden md:inline">musings<br/>from<br/>munich</span>
            <span className="font-bold font-serif text-xl/6 md:hidden">musings from munich</span>
          </Link>
        </div>
        <div className="col-span-1 content-center justify-self-end md:hidden">
          <button className="hover:bg-neutral-100 p-2" onClick={handleClick}>
            {!showOverlay && (
              <LuAlignJustify className="text-wenge text-2xl" />
            )}
            {showOverlay && (
              <LuX className="text-wenge text-2xl" />
            )}
          </button>
        </div>
        <div className="md:col-span-3 col-span-7 text-left md:mt-0 mt-2">
          <span className="text-base font-medium text-wenge">random thoughts about photography,<br/>coffee and food</span>
        </div>

        {/* Top Navigation menu items */}
        <div className={menuCSS} onTransitionEnd={onTransitionEnd}>
          <Link onClick={handleMenuClick} className="text-xl font-bold text-fawn hover:underline" href="/posts">
            blog
          </Link>
          <Link onClick={handleMenuClick} className="text-xl text-wenge hover:underline" href="/privacy">
            privacy
          </Link>
          <Link onClick={handleMenuClick} className="text-xl text-wenge hover:underline" href="/imprint">
            imprint
          </Link>
        </div>
      </nav>
    </header>
  )
}
