import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FiHexagon } from 'react-icons/fi'

const LandingFooter = ({ navItems }) => {
  const router = useRouter()
  const currentYear = new Date().getFullYear()

  const handleLogoClick = (e) => {
    if (router.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & Description */}
        <div className="space-y-6">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight flex items-center gap-2"
            onClick={handleLogoClick}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHexagon className="w-6 h-6" />
              MediaLiteracy
            </motion.div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Empowering individuals with the knowledge and skills to navigate the digital world responsibly and ethically.
          </p>
          <p className="text-gray-500 text-xs mt-8">
            © {currentYear} MediaLiteracy. Educational resource.
          </p>
        </div>

        {/* Column 2: Topics */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Topics</h4>
          <nav className="flex flex-col space-y-2 text-sm text-gray-400">
            <Link href="/#legal-issues" className="hover:text-white transition-colors">Legal Issues</Link>
            <Link href="/#ethical-issues" className="hover:text-white transition-colors">Ethical Issues</Link>
            <Link href="/#creativity" className="hover:text-white transition-colors">Creativity & Expression</Link>
            <Link href="/#societal-impact" className="hover:text-white transition-colors">Societal Impact</Link>
            <Link href="/#digital-citizenship" className="hover:text-white transition-colors">Digital Citizenship</Link>
             {navItems && navItems.map(item => (
              <Link 
                key={item.id} 
                href={`/${item.slug}`} 
                className="hover:text-white transition-colors"
                target={item.target}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Resources */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Resources</h4>
          <nav className="flex flex-col space-y-2 text-sm text-gray-400">
            <Link href="/#resources" className="hover:text-white transition-colors">Educational Materials</Link>
          </nav>
        </div>

        {/* Column 4: About */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">About</h4>
          <nav className="flex flex-col space-y-2 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">Our Mission</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
