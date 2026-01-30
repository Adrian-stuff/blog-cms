import { motion } from 'framer-motion'
import { FiShield, FiShare2, FiHeart, FiEye, FiLock, FiMessageCircle } from 'react-icons/fi'

const PrincipleCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-default"
    >
      <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
        {Icon ? <Icon size={24} /> : <div className="w-6 h-6 bg-current rounded-full" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

const PrinciplesSection = () => {
    const principles = [
        {
            title: "Protect Your Identity",
            description: "Safeguard personal information. Use strong passwords and two-factor authentication.",
            icon: FiShield
        },
        {
            title: "Think Before You Share",
            description: "Consider the potential impact of your posts on yourself and others before hitting send.",
            icon: FiShare2
        },
        {
            title: "Practice Digital Empathy",
            description: "Treat others with respect and kindness. Remember there is a real person behind every screen.",
            icon: FiHeart
        },
        {
            title: "Stay Informed",
            description: "Critically evaluate information sources and verify facts before spreading them.",
            icon: FiEye
        },
        {
            title: "Respect Privacy",
            description: "Do not share others' private information or photos without their consent.",
            icon: FiLock
        },
        {
            title: "Engage Constructively",
            description: "Participate in meaningful discussions and avoid feeding trolls or spreading hate.",
            icon: FiMessageCircle
        }
    ]

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Becoming a <span className="text-brand-secondary">Responsible</span> Digital Citizen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Digital citizenship encompasses the norms of appropriate, responsible behavior regarding technology use.
          Here are the core principles to guide your online life.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <PrincipleCard key={index} {...principle} index={index} />
        ))}
      </div>
    </section>
  )
}

export default PrinciplesSection
