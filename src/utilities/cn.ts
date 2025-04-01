import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// const cn = function(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// };

// export { cn };
