import { motion, useSpring, useTransform, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FiGlobe, FiRadio, FiUsers, FiMessageSquare, FiLock, FiTrendingUp } from 'react-icons/fi'

const AnimatedStat = ({ value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Parse the input string (e.g., "$4.9 trillion")
  // Regex groups: 1: Prefix, 2: Number, 3: Suffix
  const match = value.match(/^([^\d\.]*?)([\d\.]+)([^\d\.]*?)$/)
  
  const prefix = match ? match[1] : ""
  const numberValue = match ? parseFloat(match[2]) : 0
  const suffix = match ? match[3] : ""
  
  // Determine decimals based on input string
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 60 })
  const displayValue = useTransform(springValue, (latest) => latest.toFixed(decimals))

  useEffect(() => {
    if (isInView) {
      motionValue.set(numberValue)
    }
  }, [isInView, numberValue, motionValue])

  // Fallback for non-matching strings (though our data matches)
  if (!match) return <span ref={ref}>{value}</span>

  return (
    <span ref={ref} className="flex items-baseline justify-end">
      <span>{prefix}</span>
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  )
}

const SocietalImpactSection = () => {
    const stats = [
        {
            icon: <FiGlobe />,
            stat: "2.6 billion",
            sub: "People still offline globally",
            title: "Digital Divide",
            desc: "The gap between those with access to digital technology and those without creates significant inequalities in education, employment, and civic participation."
        },
        {
            icon: <FiRadio />,
            stat: "68%",
            sub: "Of adults get news from social media",
            title: "Journalism & Democracy",
            desc: "The decline of traditional journalism and rise of social media as news sources affects the quality of public discourse and democratic processes."
        },
        {
            icon: <FiUsers />,
            stat: "4.9 billion",
            sub: "Social media users worldwide",
            title: "Social Relationships",
            desc: "Digital communication transforms how we form and maintain relationships, with both positive connections and concerns about isolation."
        },
        {
            icon: <FiMessageSquare />,
            stat: "56%",
            sub: "Believe social media divides us",
            title: "Public Discourse",
            desc: "Online platforms shape political debate, sometimes enabling diverse voices while also creating echo chambers and polarization."
        },
        {
            icon: <FiLock />,
            stat: "1 billion+",
            sub: "Surveillance cameras globally",
            title: "Surveillance Society",
            desc: "The expansion of digital surveillance by governments and corporations raises questions about freedom, security, and civil liberties."
        },
        {
            icon: <FiTrendingUp />,
            stat: "$4.9 trillion",
            sub: "Global e-commerce market",
            title: "Economic Transformation",
            desc: "The digital economy creates new opportunities while disrupting traditional industries, requiring adaptation in education and workforce development."
        }
    ]

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">SOCIETAL IMPACT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How digital media shapes our world
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Media and information technology profoundly influence culture, politics, economics, and human relationships. Understanding these impacts helps us make informed choices.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="text-2xl text-gray-800">{item.icon}</div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-gray-900 leading-none mb-1 flex justify-end">
                                <AnimatedStat value={item.stat} />
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">{item.sub}</div>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default SocietalImpactSection
