import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiBarChart2 } from 'react-icons/fi'

const PollCard = () => {
    const [selected, setSelected] = useState(null)
    const [hasVoted, setHasVoted] = useState(false)

    // Simulated results
    const results = {
        0: 45, // Yes
        1: 25, // No
        2: 20, // Maybe
        3: 10  // Not sure
    }

    const options = [
        "Yes, it would make social media platforms safer and more accountable.",
        "No, it would compromise freedom of speech and privacy.",
        "Maybe, but only if strong privacy protections are in place.",
        "I'm not sure."
    ]

    const handleVote = (index) => {
        if (hasVoted) return
        setSelected(index)
        setHasVoted(true)
    }

    return (
        <div className="max-w-3xl mx-auto mt-12 bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden">
            <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <FiBarChart2 className="text-xl" />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">COMMUNITY POLL</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
                    Should social media platforms be legally required to verify the identity of all users, even if it means potentially compromising anonymity?
                </h3>

                <div className="space-y-4">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleVote(index)}
                            disabled={hasVoted}
                            className={`w-full relative overflow-hidden group transition-all duration-300
                                ${hasVoted 
                                    ? 'cursor-default' 
                                    : 'hover:border-blue-300 hover:shadow-md cursor-pointer'
                                }
                                rounded-lg border-2 text-left
                                ${selected === index 
                                    ? 'border-blue-600 bg-blue-50' 
                                    : 'border-gray-100 bg-white'
                                }
                            `}
                        >
                            <div className="relative z-10 p-5 flex justify-between items-center gap-4">
                                <span className={`font-medium text-lg ${selected === index ? 'text-blue-700' : 'text-gray-700'}`}>
                                    {option}
                                </span>
                                {hasVoted && (
                                    <span className="font-bold text-gray-900 bg-white/80 px-2 py-1 rounded shadow-sm text-sm">
                                        {results[index]}%
                                    </span>
                                )}
                            </div>
                            
                            {/* Progress Bar Background */}
                            {hasVoted && (
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${results[index]}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`absolute inset-0 h-full opacity-20 
                                        ${index === selected ? 'bg-blue-500' : 'bg-gray-300'}
                                    `}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence>
                    {hasVoted && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-6 pt-6 border-t border-gray-100 text-center"
                        >
                           <p className="text-gray-500 text-sm">
                                Thanks for voting! This poll is for educational purposes to spark discussion.
                           </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default PollCard
