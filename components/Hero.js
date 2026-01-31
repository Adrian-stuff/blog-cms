
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (

    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cross-pattern">
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm md:text-base font-bold tracking-[0.2em] text-gray-400 uppercase"
        >
          Legal, Ethical & Societal Issues
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-1.1"
        >
          Media & Information <br /> 
          <span className="text-green-500">Literacy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Understanding the legal, ethical, and societal challenges of the digital
          world empowers us to become responsible digital citizens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <div className="flex justify-center gap-4">
            <a 
              href="#overview" 
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Explore Topics
            </a>
            <a 
              href="#resources" 
              className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View Resources
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
