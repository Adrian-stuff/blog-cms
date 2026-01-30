import { motion } from 'framer-motion'
import Link from 'next/link'

const FeatureSection = ({ title, description, cards, align = 'left', eyebrow }) => {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className={`mb-16 ${align === 'right' ? 'text-right' : 'text-left'}`}>
        {eyebrow && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3"
            >
                {eyebrow}
            </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, x: align === 'right' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h2>
        
        {description && (
           <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl"
           >
             {description}
           </motion.p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <FeatureCard key={card.id || index} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                {index + 1}
            </span>
             {card.icon && <span className="text-2xl text-gray-600">{card.icon}</span>}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {card.summary || card.description}
        </p>
        
        {card.slug && (
            <Link href={`/${card.slug}`} className="inline-flex items-center text-sm font-bold text-gray-900 uppercase tracking-wider hover:text-gray-600 transition-colors">
              Read More
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
        )}
      </div>
    </motion.div>
  )
}

export default FeatureSection
