"use client";

import { cn } from "@/utilities/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  href: string;
  onClick: MouseEventHandler;
};
export const TopMenuItem: React.FC<Props> = ({ title, href, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      onClick={onClick}
      className={cn("text-base hover:underline", isActive ? "font-bold text-fawn" : "text-wenge")}
      href={href}
    >
      {title}
    </Link>
  );
};
