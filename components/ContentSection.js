import { motion } from 'framer-motion'
import { useState } from 'react'

const ContentSection = ({ title, subtitle, content, sideContent, align = 'left', className = '', eyebrow }) => {
  return (
    <section className={`py-20 px-6 md:px-12 w-full max-w-7xl mx-auto ${className}`}>
      <div className={`flex flex-col md:flex-row gap-12 items-start ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Main Text Content */}
        <div className="flex-1">
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
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-gray-600 mb-6"
            >
              {subtitle}
            </motion.h3>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 space-y-4 leading-relaxed text-lg"
          >
            {content}
          </motion.div>
        </div>

        {/* Side Content (List, Grid, or Image) */}
        {sideContent && (
          <div className="flex-1 w-full">
            {sideContent}
          </div>
        )}
      </div>
    </section>
  )
}

export const HoverCard = ({ title, description, icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                {icon && <span className="text-brand-primary">{icon}</span>}
                {title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}

export default ContentSection
