import clsx from 'clsx'

import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import { BrandHeader } from '../BrandHeader/BrandHeader'

export const Header = () => {
  return (
    <nav
      className={clsx(`
      h-[76px]
      flex
      justify-between
      items-center
      w-full
    `)}
    >
      <div className="flex">
        <div className="flex mr-[48px]">
          <BrandHeader text="🙄 Gamblah" />
        </div>
      </div>
      <div className="hidden lg:flex grow items-center">
        <Nav />
      </div>
      <div className="flex lg:hidden grow items-center justify-end">
        <MobileNav />
      </div>
    </nav>
  )
}
