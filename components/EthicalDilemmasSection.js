import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEye, FiAlertOctagon, FiMessageSquare, FiCamera, FiServer, FiShare2 } from 'react-icons/fi'

const EthicalDilemmasSection = () => {
    const [activeTab, setActiveTab] = useState('privacy')

    const tabs = [
        { id: 'privacy', label: 'Digital Privacy', icon: <FiEye /> },
        { id: 'misinformation', label: 'Misinformation & Truth', icon: <FiAlertOctagon /> },
        { id: 'communication', label: 'Online Communication Ethics', icon: <FiMessageSquare /> },
        { id: 'creation', label: 'Digital Content Creation', icon: <FiCamera /> },
        { id: 'ai', label: 'AI & Automation Ethics', icon: <FiServer /> },
        { id: 'social', label: 'Social Responsibility', icon: <FiShare2 /> },
    ]

    const content = {
        privacy: {
            title: "Digital Privacy",
            icon: <FiEye />,
            description: "The ethical implications of data collection, surveillance, and personal information sharing.",
            points: [
                "Right to be forgotten and data minimization",
                "Informed consent for data collection",
                "Balance between security and privacy",
                "Transparency in algorithmic decision-making"
            ],
            consider: "Should companies be allowed to sell your browsing history to advertisers without explicit consent?"
        },
        misinformation: {
            title: "Misinformation & Truth",
            icon: <FiAlertOctagon />,
            description: "The responsibility to verify information before sharing and the impact of spreading falsehoods.",
            points: [
                "Verifying sources before sharing",
                "Understanding deepfakes and manipulation",
                "The role of platforms in moderation",
                "Combating echo chambers"
            ],
            consider: "Is it ethical to share a headline that confirms your bias without reading the full article?"
        },
        communication: {
            title: "Online Communication",
            icon: <FiMessageSquare />,
            description: "Maintaining civility and respect in digital interactions.",
            points: [
                "Cyberbullying and harassment",
                "Anonymous speech accountability",
                "Respecting diverse viewpoints",
                "Digital empathy"
            ],
            consider: "Does anonymity empower free speech or encourage toxic behavior?"
        },
        creation: {
            title: "Content Creation",
            icon: <FiCamera />,
            description: "Ethical standards for creators, influencers, and artists.",
            points: [
                "Attribution and copyright",
                "Disclosing sponsorships",
                "Representation and stereotypes",
                "Authenticity vs. curation"
            ],
            consider: "Where is the line between inspiration and plagiarism in digital art?"
        },
        ai: {
            title: "AI & Automation",
            icon: <FiServer />,
            description: "The moral questions surrounding artificial intelligence and automated systems.",
            points: [
                "Bias in AI algorithms",
                "Job displacement ethics",
                "AI-generated content rights",
                "Accountability for AI decisions"
            ],
            consider: "Who is responsible when an AI makes a harmful decision?"
        },
        social: {
            title: "Social Responsibility",
            icon: <FiShare2 />,
            description: "Our collective duty to foster a healthy digital society.",
            points: [
                "Digital inclusion and access",
                "Environmental impact of tech",
                "Supporting open source",
                "Digital activism ethics"
            ],
            consider: "How does your digital footprint affect the wider community?"
        }
    }

    return (
        <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-gray-50">
            <div className="text-center mb-16">
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">ETHICAL CONSIDERATIONS</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Navigating moral <br /> dilemmas in the digital age
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ethics in media and information goes beyond legal compliance. It involves making thoughtful decisions about how we create, consume, and share digital content.
                </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                            ${activeTab === tab.id 
                                ? 'bg-black text-white shadow-lg' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Content Card (Left) */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-10 rounded-none border border-gray-100 shadow-sm flex flex-col h-full"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gray-100 rounded-lg text-2xl text-gray-800">
                            {content[activeTab].icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{content[activeTab].title}</h3>
                    </div>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {content[activeTab].description}
                    </p>

                    <div className="space-y-6 mb-8 flex-grow">
                        {content[activeTab].points.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-sm group-hover:bg-orange-100 transition-colors">
                                    {index + 1}
                                </span>
                                <span className="text-lg text-gray-700 font-medium pt-1">
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-6 border-l-4 border-black mt-auto">
                        <p className="text-gray-600 italic text-lg">
                            <span className="font-bold not-italic text-gray-900 block mb-2 text-sm uppercase tracking-wider">Consider:</span> 
                            {content[activeTab].consider}
                        </p>
                    </div>
                </motion.div>

                {/* Framework Card (Right) */}
                <div className="bg-black p-10 rounded-none text-white flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-10">Ethical Decision Framework</h3>
                    
                    <div className="space-y-8">
                        <FrameworkStep 
                            number="1" 
                            title="Identify" 
                            desc="Recognize the ethical dimensions of the situation" 
                        />
                        <FrameworkStep 
                            number="2" 
                            title="Research" 
                            desc="Gather relevant facts and perspectives" 
                        />
                        <FrameworkStep 
                            number="3" 
                            title="Consider" 
                            desc="Evaluate potential consequences for all stakeholders" 
                        />
                        <FrameworkStep 
                            number="4" 
                            title="Decide" 
                            desc="Make a choice aligned with ethical principles" 
                        />
                        <FrameworkStep 
                            number="5" 
                            title="Reflect" 
                            desc="Review outcomes and learn from the experience" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const FrameworkStep = ({ number, title, desc }) => (
    <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
        <span className="text-4xl font-bold text-gray-700 font-serif leading-none group-hover:text-white transition-colors">
            {number}
        </span>
        <div>
            <h4 className="text-xl font-bold mb-1">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
)

export default EthicalDilemmasSection
