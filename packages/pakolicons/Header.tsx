'use client';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image, { StaticImageData } from 'next/image';
import Nav from './Nav';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

export function Header({
  logoImage,
  logoText,
}: {
  logoImage: StaticImageData;
  logoText: StaticImageData;
}) {
  return (
    <header className="relative border-b border-gray-200">
      <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <div className="flex items-center justify-between border-l px-8 py-5 sm:h-16">
        {/* <div className="flex items-center"> */}
        <a href="#" className="flex h-10 w-36 shrink-0 items-center">
          <span className="sr-only">Pakoli Logo</span>
          <div className="relative h-full w-1/2">
            <Image fill={true} alt="Pakoli Logo" src={logoImage}></Image>
          </div>
          <div className="relative ml-2 h-full w-full">
            <Image fill={true} alt="Pakoli Logo Text" src={logoText}></Image>
          </div>
        </a>
        {/* </div> */}

        <Nav
          items={[
            'Shop',
            'Sustainability',
            'Community',
            'Resources',
            'Explore',
          ]}
        />

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
              <span className="ml-3 block  font-medium">ENG</span>
              <span className="sr-only">, change currency</span>
            </a>
            {/* <a
              href="#"
              className="mx-5 font-medium text-gray-700 hover:text-gray-800"
            >
              <span className="sr-only">Account</span>
              <UserIcon
                className="h-6 w-6 text-gray-700 hover:text-gray-800"
                aria-hidden="true"
              />
            </a> */}
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
