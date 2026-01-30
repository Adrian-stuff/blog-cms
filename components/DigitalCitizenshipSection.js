import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiEye, FiHeart, FiBookOpen, FiLock, FiMessageCircle, FiCheckCircle } from 'react-icons/fi'

const DigitalCitizenshipSection = () => {
    const principles = [
        {
            icon: <FiShield />,
            title: "Protect Your Identity",
            desc: "Use strong, unique passwords, enable two-factor authentication, and be cautious about sharing personal information online.",
            checklist: ["Use a password manager", "Review privacy settings regularly", "Be wary of phishing attempts"]
        },
        {
            icon: <FiEye />,
            title: "Think Before You Share",
            desc: "Consider the accuracy, impact, and permanence of content before posting or sharing. Your digital footprint matters.",
            checklist: ["Verify information sources", "Consider how others might interpret your post", "Remember that posts can be permanent"]
        },
        {
            icon: <FiHeart />,
            title: "Practice Digital Empathy",
            desc: "Remember that real people are behind screens. Communicate with the same respect you would show in person.",
            checklist: ["Pause before responding in anger", "Consider different perspectives", "Stand up against cyberbullying"]
        },
        {
            icon: <FiBookOpen />,
            title: "Stay Informed",
            desc: "Continuously develop your media literacy skills. Learn to identify bias, misinformation, and manipulation.",
            checklist: ["Follow credible news sources", "Cross-reference information", "Understand how algorithms work"]
        },
        {
            icon: <FiLock />,
            title: "Respect Privacy",
            desc: "Honor others' privacy just as you would want yours respected. Ask permission before sharing content about others.",
            checklist: ["Don't share others' personal info", "Ask before tagging people", "Respect confidential conversations"]
        },
        {
            icon: <FiMessageCircle />,
            title: "Engage Constructively",
            desc: "Contribute positively to online discussions. Disagree respectfully and focus on ideas rather than personal attacks.",
            checklist: ["Stay on topic in discussions", "Acknowledge valid points", "Report harmful content"]
        }
    ]

    const [assessmentAnswers, setAssessmentAnswers] = useState({
        q1: null, q2: null, q3: null, q4: null, q5: null
    })

    const handleAnswer = (q, val) => {
        setAssessmentAnswers(prev => ({ ...prev, [q]: val }))
    }

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">DIGITAL CITIZENSHIP</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Becoming a responsible digital citizen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Digital citizenship encompasses the norms of appropriate, responsible behavior regarding technology use. Here are the core principles to guide your online life.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {principles.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                    <div className="text-3xl text-gray-900 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    
                    <ul className="space-y-2">
                        {item.checklist.map((check, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                <FiCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{check}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>

        {/* Self Assessment Box */}
        <div className="bg-black text-white p-10 md:p-12 max-w-4xl mx-auto rounded-none">
            <div className="flex items-center gap-4 mb-6">
                <FiCheckCircle className="text-3xl" />
                <h3 className="text-2xl font-bold">Quick Self-Assessment</h3>
            </div>
            <p className="text-gray-400 mb-8">Rate your digital citizenship practices. Be honest – this is for your own reflection.</p>
            
            <div className="space-y-6">
                <AssessmentQuestion 
                    id="q1"
                    text="I verify information before sharing it online"
                    value={assessmentAnswers.q1}
                    onChange={handleAnswer}
                />
                 <AssessmentQuestion 
                    id="q2"
                    text="I use strong, unique passwords for my accounts"
                    value={assessmentAnswers.q2}
                    onChange={handleAnswer}
                />
                 <AssessmentQuestion 
                    id="q3"
                    text="I think about how my posts might affect others"
                     value={assessmentAnswers.q3}
                    onChange={handleAnswer}
                />
                 <AssessmentQuestion 
                    id="q4"
                    text="I understand copyright and fair use basics"
                     value={assessmentAnswers.q4}
                    onChange={handleAnswer}
                />
                 <AssessmentQuestion 
                    id="q5"
                    text="I regularly review my privacy settings"
                     value={assessmentAnswers.q5}
                    onChange={handleAnswer}
                />
            </div>
        </div>
    </section>
  )
}

const AssessmentQuestion = ({ id, text, value, onChange }) => (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-800">
        <span className="text-lg font-medium text-gray-200 mb-4 md:mb-0 text-center md:text-left">{text}</span>
        <div className="flex gap-2">
            <button 
                onClick={() => onChange(id, 'yes')}
                className={`px-4 py-1 text-sm font-bold border border-gray-600 transition-colors
                    ${value === 'yes' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}
                `}
            >
                Yes
            </button>
            <button 
                onClick={() => onChange(id, 'no')}
                className={`px-4 py-1 text-sm font-bold border border-gray-600 transition-colors
                     ${value === 'no' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}
                `}
            >
                No
            </button>
        </div>
    </div>
)

export default DigitalCitizenshipSection
