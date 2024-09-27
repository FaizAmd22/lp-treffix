import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getScrollbarWidth = (cssVariableName = '--twcb-scrollbar-width') => {
  const prevWidth = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(cssVariableName);
  const newWidth = `${window.innerWidth - document.body.clientWidth}px`;

  if (newWidth !== prevWidth) {
    document.documentElement.style.setProperty(cssVariableName, newWidth);
  }
};

export const setScrollbarWidth = () => {
  window.addEventListener('load', () => getScrollbarWidth());
  window.addEventListener('resize', () => getScrollbarWidth);
  getScrollbarWidth();
};

export const number = "6285155252814";