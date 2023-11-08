import { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import NavLogo from './NavLogo';
import NavItems from './NavItems';
import NavActions from './NavActions';
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CADCurrency from './public/flag-canada.svg';
import { Navigation } from '@models';

// const navItems = ['Shop', 'Community', 'About'];

type NavChildren = typeof NavLogo | typeof NavItems | typeof NavActions;
type NavBarProps = {
  children: Array<ReactElement<NavChildren>> | ReactElement<NavChildren>;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <header className="relative border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center justify-between border-l px-8 py-5 sm:h-16">
        {children}

        {/* Header Actions */}
        <div className="flex lg:justify-end">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:space-x-6">
            <div className="flex w-full grow justify-end">
              <div className="relative flex w-1/2 items-center">
                {/* <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                /> */}
                <button className="">
                  {/* <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"> */}
                  <MagnifyingGlassIcon
                    className="mr-6 h-7 w-7 text-gray-400 hover:text-teal-600"
                    aria-hidden="true"
                  />
                  {/* </div> */}
                </button>
              </div>
            </div>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          </div>

          {/* Cart */}
          <div className="ml-4 flex items-center justify-between lg:ml-6">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-800"
            >
              {/** american flag? */}
              <Image src={CADCurrency} height={20} width={20} alt=""></Image>
              <span className="ml-2 block  font-medium">CAD</span>
              <span className="sr-only">, change currency</span>
            </a>

            <a href="#" className="mx-5 p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Account</span>
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            <a href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
