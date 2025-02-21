import Image from "next/image"
import { useState } from "react"
import logo from "../public/logo.png"

export default function Header() {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className="bg-red-850">
      <div className="w-full flex flex-row bg-white">
        <div className="flex-1 md:text-4xl text-xs justify-center pl-8  my-6 flex items-center font-black text-red-850 ">
          SIR SYED GLOBAL SCHOLAR AWARD
        </div>
        <div className="mr-3 flex-2">
          <Image width={93} height={93} src={logo} alt="SSGSA Logo" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-4 px-2 text-white text-sm hover:bg-red-500"
              >
                Home
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm "
              >
                About SSGSA
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                Members
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                Scholars&apos; profiles
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                Resources
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                Newsletters
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                FAQs
              </a>
              <a
                href="#"
                className="py-4 px-2 text-white hover:bg-red-500 text-sm"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-4 px-1 text-white hover:bg-red-500 text-sm"
            >
              International Summer Research Award(ISRA)
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button hover:bg-red-500"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${active ? "" : "hidden md:hidden"}`}>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Features
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          About SSGSA
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Members
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Scholars&apos; profiles
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Resources
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Newsletters
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          FAQs
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-red-500"
        >
          Contact us
        </a>
        <a
          href="#"
          className="block text-white py-1 px-4 text-xs hover:bg-white"
        >
          International Summer Research Award(ISRA)
        </a>
      </div>
    </nav>
  )
}
