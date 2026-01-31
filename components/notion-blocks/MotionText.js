import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import cn from 'classnames'
import Link from 'next/link'

// Helper to check formatting
const hasFormat = (format, type) => {
    return format?.some(f => f[0] === type)
}

// Helper to get format value (e.g. link url)
const getFormatValue = (format, type) => {
    const found = format?.find(f => f[0] === type)
    return found ? found[1] : null
}

const AnimatedSpan = ({ children, delay }) => (
    <motion.span
        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ 
            duration: 0.8, 
            delay: delay, 
            ease: [0.2, 0.65, 0.3, 0.9] 
        }}
        viewport={{ once: true, margin: "-10%" }} // trigger every time it enters
        className="inline-block whitespace-pre"
    >
        {children}
    </motion.span>
)

const MotionText = ({ block, children }) => {
  if (!block.properties && !children) return null
  const content = block.properties?.title

  // If no content (just children), render normally or animate children container
  if (!content) {
      if (!children) return null
      return <div className={cn('notion-text', 'nobelium-block')}>{children}</div>
  }

  // Flatten text into words with their formatting
  let wordCounter = 0
  
  return (
    <span className={cn('notion-text', 'nobelium-block', 'my-2 leading-relaxed block')}>
      {content.map((segment, i) => {
        const [text, format] = segment
        // ... (rest is same)
        const words = text.split(/(\s+)/)
        
        // Check formats
        const isBold = hasFormat(format, 'b')
        const isItalic = hasFormat(format, 'i')
        const isCode = hasFormat(format, 'c')
        const isStrike = hasFormat(format, 's')
        const isUnderline = hasFormat(format, '_')
        // const link = getFormatValue(format, 'a') // Disable links to prevent nesting issues
        const link = null 

        const Wrapper = 'span'
        const wrapperProps = {}

        return (
            <Wrapper key={i} {...wrapperProps} className={cn(
                isBold && 'font-bold',
                isItalic && 'italic',
                isCode && 'font-mono bg-gray-100 dark:bg-gray-800 rounded px-1 text-red-500',
                isStrike && 'line-through',
                isUnderline && 'underline',
                link && 'cursor-pointer'
            )}>
                {words.map((word, wIndex) => {
                    if (word === '') return null
                    const isSpace = /^\s+$/.test(word)
                    const currentDelay = wordCounter * 0.015
                    if (!isSpace) wordCounter++

                    return (
                        <AnimatedSpan key={wIndex} delay={currentDelay}>
                            {word}
                        </AnimatedSpan>
                    )
                })}
            </Wrapper>
        )
      })}
      {children && (
        <span className='notion-text-children block'>{children}</span>
      )}
    </span>
  )
}

export default MotionText
