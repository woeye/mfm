"use client";

import { useMediaQuery } from "@/utilities/hooks/useMediaQuery";
import Link from "next/link";
import { MouseEventHandler, useEffect, useEffectEvent, useState } from "react";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { motion } from "motion/react";
import { TopMenuItem } from "./TopMenuItem";

export const TopNavi = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  // see: https://medium.com/@maroobsyed/error-calling-setstate-synchronously-within-an-effect-can-trigger-cascading-renders-7e6fb9d971b2
  const updateShowOverlay = useEffectEvent(() => {
    if (isDesktop) {
      setShowOverlay(false);
    }
  });

  useEffect(() => {
    updateShowOverlay();
  }, [isDesktop]);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  const handleMenuClick = () => {
    setShowOverlay(false);
  };

  const variants = {
    // define different animation states
    hidden: {
      opacity: 0,
      //visibility: "hidden",
      display: "none",
    },
    visible: {
      opacity: 1,
      //visibility: "visible",
      display: "flex",
    },
  };

  return (
    <header className="mt-4 mb-16">
      <nav className="grid grid-cols-7 md:gap-6 gap-1">
        <div className="md:col-span-1 col-span-6 text-left content-center md:text-right text-fawn">
          <Link href="/" title="Back to home page">
            <span className="font-bold font-serif lg:text-2xl/4 text-xl/2 hidden md:inline">
              musings
              <br />
              from
              <br />
              munich
            </span>
            <span className="font-bold font-serif text-xl/6 md:hidden">musings from munich</span>
          </Link>
        </div>
        <div className="col-span-1 content-center justify-self-end md:hidden">
          <button className="hover:bg-neutral-100 p-2" onClick={handleClick}>
            {!showOverlay && <LuAlignJustify className="text-wenge text-2xl" />}
            {showOverlay && <LuX className="text-wenge text-2xl" />}
          </button>
        </div>
        <motion.div
          initial="visible"
          animate={showOverlay ? "hidden" : "visible"}
          variants={variants}
          className="md:col-span-3 col-span-7 text-left md:mt-0 -mt-2"
        >
          <span className="text-base font-medium text-wenge">
            random thoughts about photography,
            <br />
            coffee and food
          </span>
        </motion.div>

        {isDesktop && (
          <div className="col-span-3 flex flex-row gap-6 justify-end bg-gray-50">
            <MenuLinks handler={handleMenuClick} />
          </div>
        )}
        {!isDesktop && (
          <motion.div
            initial="hidden"
            animate={showOverlay ? "visible" : "hidden"}
            variants={variants}
            onAnimationComplete={(latest) => console.log(latest)}
            className="absolute bg-gray-50  border-t p-4 flex flex-col gap-3 mt-17 top-0 bottom-0 left-0 right-0 z-40"
          >
            <MenuLinks handler={handleMenuClick} />
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const MenuLinks = ({ handler }: { handler: MouseEventHandler }) => {
  return (
    <>
      <TopMenuItem onClick={handler} title="blog" href="/posts" />
      <TopMenuItem onClick={handler} title="privacy" href="/privacy" />
      <TopMenuItem onClick={handler} title="imprint" href="/imprint" />
    </>
  );
};
