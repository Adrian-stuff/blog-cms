import { Text } from 'react-notion-x'
import { motion } from 'framer-motion'
import cn from 'classnames'

const MotionText = ({ block, children }) => {
  if (!block.properties && !children) return null
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn('notion-text', 'nobelium-block')}
    >
      {block.properties?.title && (
        <Text value={block.properties.title} block={block} />
      )}
      {children && (
        <div className='notion-text-children'>{children}</div>
      )}
    </motion.div>
  )
}

export default MotionText
