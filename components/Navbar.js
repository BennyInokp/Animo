import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#0a192f] border-b border-gray-700 h-16 sm:h-20'>
      <div className='flex items-center justify-between h-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto'>
        
        {/* Logo */}
        <span className="flex">
          <Image
            src="/images/logo1.png"
            alt="Animo Logo"
            width={180}
            height={72}
            className="block sm:hidden"
          />
          <Image
            src="/images/logo1.png"
            alt="Animo Logo"
            width={250}
            height={100}
            className="hidden sm:block"
          />
        </span>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-200 hover:text-[#B8E68C] transition-colors z-50"
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg'>
          <li>
            {isHomePage ? (
              <a href="#home" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Home</a>
            ) : (
              <Link href="/#home" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Home</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#about" className="text-gray-200 hover:text-[#B8E68C] transition-colors">About</a>
            ) : (
              <Link href="/#about" className="text-gray-200 hover:text-[#B8E68C] transition-colors">About</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#features" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Features</a>
            ) : (
              <Link href="/#features" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Features</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#packages" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Packages</a>
            ) : (
              <Link href="/#packages" className="text-gray-200 hover:text-[#B8E68C] transition-colors">Packages</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#faq" className="text-gray-200 hover:text-[#B8E68C] transition-colors">FAQs</a>
            ) : (
              <Link href="/#faq" className="text-gray-200 hover:text-[#B8E68C] transition-colors">FAQs</Link>
            )}
          </li>
          <li>
            <Link href="/dashboard">
              <button className="bg-green-600 px-4 xl:px-5 py-2 rounded-lg text-base xl:text-lg text-black font-semibold hover:bg-green-700 transition-colors">
                Join Animo
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 sm:top-20 left-0 w-full bg-[#0a192f] border-b border-gray-700 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className='flex flex-col py-4 px-4 sm:px-6 space-y-4'>
            <li>
              {isHomePage ? (
                <a 
                  href="#home" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Home
                </a>
              ) : (
                <Link 
                  href="/#home" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#about" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  About
                </a>
              ) : (
                <Link 
                  href="/#about" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  About
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#features" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Features
                </a>
              ) : (
                <Link 
                  href="/#features" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Features
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#packages" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Packages
                </a>
              ) : (
                <Link 
                  href="/#packages" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  Packages
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#faq" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  FAQs
                </a>
              ) : (
                <Link 
                  href="/#faq" 
                  className="block text-gray-200 hover:text-[#B8E68C] transition-colors text-base sm:text-lg py-2"
                  onClick={closeMenu}
                >
                  FAQs
                </Link>
              )}
            </li>
            <li className="pt-2">
              <Link href="/dashboard">
                <button 
                  className="w-full bg-green-600 px-4 py-3 rounded-lg text-base sm:text-lg text-black font-semibold hover:bg-green-700 transition-colors"
                  onClick={closeMenu}
                >
                  Join Animo
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar