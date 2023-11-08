'use client';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { NavItemsProps } from '@models';

export default function NavItems({ items: { categories } }: NavItemsProps) {
  return (
    <nav className="hidden pl-8 pt-3 md:flex md:flex-1 md:items-center">
      {/** Each Popover(aka menu item) is a client component since it's not designer to be a server component
       * Hence, why we're wrapping with a nav instead of leverage Popover's prop "as" set to "nav"
       */}
      <div className="flex">
        {categories.map((item, key) => (
          <Popover key={key}>
            <Popover.Button className="focus:ring-offset-2' group mx-5 mb-3 inline-flex items-center rounded-md text-base font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600">
              {item.name}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              {/* <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                Panel
              </Popover.Panel> */}
              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                <div
                  className="absolute inset-0 top-1/2 bg-white shadow"
                  aria-hidden="true"
                />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12">
                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                        {categories[key]?.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-base sm:text-sm"
                          >
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                        {categories[key]?.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${section.name}-heading`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${section.name}-heading`}
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flex">
                                  <a
                                    href={item.href}
                                    className="hover:text-gray-800"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        ))}
      </div>
    </nav>
  );
}
