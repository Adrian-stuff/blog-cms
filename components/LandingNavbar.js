
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import cn from 'classnames'

const LandingNavbar = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200',
        'bg-gray-100 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-black flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          MediaLiteracy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#overview" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Overview
          </Link>
          <Link href="#legal-issues" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Legal Issues
          </Link>
          <Link href="#ethical-issues" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Ethical Issues
          </Link>
           <Link href="#creativity" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Creativity
          </Link>
           <Link href="#societal-impact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Societal Impact
          </Link>
           <Link href="#digital-citizenship" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Digital Citizenship
          </Link>
           <Link href="#resources" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Resources
          </Link>
        </div>

        <div>
          <button className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavbar
