import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import cn from 'classnames'
import { FiMenu, FiX } from 'react-icons/fi'

const LandingNavbar = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200',
          'bg-gray-100 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-black flex items-center gap-2 z-50 relative">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            MediaLiteracy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems && navItems.map(item => (
              <Link 
                key={item.id} 
                href={`/${item.slug}`} 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-100 pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems && navItems.map(item => (
                <Link 
                  key={item.id} 
                  href={`/${item.slug}`} 
                  className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-200">
                <button className="w-full px-6 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LandingNavbar
