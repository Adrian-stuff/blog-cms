import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const PhishingQuizSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3"
                >
                    TEST YOUR SKILLS
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                >
                    Can you spot the fake?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-3xl"
                >
                    Phishing attacks are getting more sophisticated. Take this quiz by Google to see if you can distinguish between a legitimate email and a phishing attempt.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100"
                style={{ height: '600px' }}
            >
                <iframe
                    src="https://phishingquiz.withgoogle.com/"
                    title="Google Phishing Quiz"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
                 {/* Fallback overlay / external link button for mobile or if iframe has issues */}
                <div className="absolute bottom-4 right-4 z-10 md:hidden">
                     <a
                        href="https://phishingquiz.withgoogle.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        Open in New Tab <FiExternalLink />
                    </a>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 justify-center hidden md:flex"
            >
                <a
                    href="https://phishingquiz.withgoogle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                    Having trouble viewing the quiz? Open in a new tab <FiExternalLink />
                </a>
            </motion.div>
        </section>
    )
}

export default PhishingQuizSection
