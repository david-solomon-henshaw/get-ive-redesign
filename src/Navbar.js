import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import ivalogo from './getiva-logo.png'
const navigation = [
  { name: 'Pricing', href: '/pricing', current: true },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Contact Us', href: 'contact-us', current: false },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Iva</span>
              <img
                className="h-8 w-auto"
                src={ivalogo}
                alt=""
              /> 
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 px-6 py-2 text-gray-900 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/waitlist-form" className="text-sm font-semibold leading-6 text-center px-6 py-2 min-w-[120px] text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
              Join Waitlist<span aria-hidden="true">&rarr;</span>
            </Link>

          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">GetIva AI</span>
                <img
                  className="h-8 w-auto"
                  src={ivalogo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <Link to="/waitlist-form" className="text-sm font-semibold leading-6 text-center px-6 py-2 min-w-[120px] text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
              Join Waitlist<span aria-hidden="true">&rarr;</span>
            </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
  )
} 
 