import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPenTool, FiRefreshCw, FiUserCheck, FiShare2, FiCheckCircle, FiXCircle, FiInfo, FiCpu, FiSliders } from 'react-icons/fi'

const CreativitySection = () => {
  const [activeTab, setActiveTab] = useState('cc')

  const rightsCards = [
    {
      id: '01',
      title: 'Right to Create',
      description: 'Everyone has the right to express themselves creatively using available tools and media.',
      icon: <FiPenTool />
    },
    {
      id: '02',
      title: 'Right to Remix',
      description: 'Building on existing culture is fundamental to human creativity and should be protected.',
      icon: <FiRefreshCw />
    },
    {
      id: '03',
      title: 'Right to Attribution',
      description: 'Creators deserve recognition for their work and protection against plagiarism.',
      icon: <FiUserCheck />
    },
    {
      id: '04',
      title: 'Right to Share',
      description: 'Creative works gain value through sharing and should be accessible to all.',
      icon: <FiShare2 />
    }
  ]

  const tabs = [
    { id: 'cc', label: 'Creative Commons Licensing' },
    { id: 'remix', label: 'Remix Culture & Derivative Works' },
    { id: 'ai', label: 'AI-Generated Creative Content' },
    { id: 'balance', label: 'Balancing Protection & Expression' }
  ]

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">CREATIVITY & EXPRESSION</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Fostering creativity while respecting rights
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The digital age offers unprecedented opportunities for creative expression. Understanding how to create, share, and build upon others&apos; work ethically is essential for responsible digital citizenship.
        </p>
      </div>

      {/* Intro Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {rightsCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4 text-gray-400">
               <div className="bg-black text-white p-2 rounded-lg text-xl">
                 {card.icon}
               </div>
               <span className="text-sm font-mono">{card.id}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Tabs Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border
              ${activeTab === tab.id 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
          >
            {activeTab === tab.id && <span className="text-brand-primary">●</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm min-h-[400px]">
         <AnimatePresence mode="wait">
            {activeTab === 'cc' && (
                <motion.div
                    key="cc"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-8"
                >
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-black text-white p-4 rounded-xl text-3xl">
                            <FiShare2 />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Creative Commons Licensing</h3>
                            <p className="text-xl text-gray-600">Creative Commons provides a flexible framework for sharing creative work while maintaining certain rights.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LicenseCard 
                            code="CC BY" 
                            title="Attribution" 
                            desc="Share and adapt with credit" 
                            icon={<FiCheckCircle className="text-green-500" />} 
                        />
                        <LicenseCard 
                            code="CC BY-SA" 
                            title="Attribution-ShareAlike" 
                            desc="Share alike under same license" 
                            icon={<FiCheckCircle className="text-green-500" />} 
                        />
                        <LicenseCard 
                            code="CC BY-NC" 
                            title="Attribution-NonCommercial" 
                            desc="Non-commercial use only" 
                            icon={<FiCheckCircle className="text-green-500" />} 
                        />
                         <LicenseCard 
                            code="CC BY-ND" 
                            title="Attribution-NoDerivs" 
                            desc="No modifications allowed" 
                            icon={<FiXCircle className="text-gray-400" />} 
                            bg="bg-gray-50"
                        />
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg flex gap-4 mt-6">
                        <FiInfo className="text-2xl flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Pro Tip</h4>
                            <p className="text-gray-400 text-sm">Always check the license before using Creative Commons content. Some require attribution, while others prohibit commercial use or modifications.</p>
                        </div>
                    </div>
                </motion.div>
            )}
            {activeTab === 'remix' && (
                <motion.div
                    key="remix"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-8"
                >
                     <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-black text-white p-4 rounded-xl text-3xl">
                            <FiRefreshCw />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Remix Culture & Derivative Works</h3>
                            <p className="text-xl text-gray-600">The digital age has enabled unprecedented creative reuse, raising questions about originality and ownership.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
                        <RemixItem number="01" title="Transformative Use" desc="Works that add new meaning or expression may qualify as fair use" />
                        <RemixItem number="02" title="Sampling & Mashups" desc="Combining existing works to create something new" />
                        <RemixItem number="03" title="Fan Art & Fiction" desc="Creative works based on existing media properties" />
                        <RemixItem number="04" title="Memes & Viral Content" desc="Cultural artifacts that evolve through sharing and modification" />
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg flex gap-4 mt-6">
                        <FiInfo className="text-2xl flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Pro Tip</h4>
                            <p className="text-gray-400 text-sm">Transformative works that add new meaning, message, or expression are more likely to be considered fair use than simple copies.</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'ai' && (
                <motion.div
                    key="ai"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-8"
                >
                     <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-black text-white p-4 rounded-xl text-3xl">
                            <FiCpu />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">AI-Generated Creative Content</h3>
                            <p className="text-xl text-gray-600">Artificial intelligence is reshaping creative industries, raising new questions about authorship and ownership.</p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-8">
                        <AICard question="Who owns AI-generated art?" answer="Copyright law typically requires human authorship, leaving AI works in a legal gray area." />
                        <AICard question="Is training on copyrighted data fair use?" answer="Courts are still deciding whether AI training on existing works constitutes infringement." />
                        <AICard question="Should AI content be labeled?" answer="Growing calls for transparency about AI involvement in creative works." />
                        <AICard question="What about artist compensation?" answer="Debates continue about whether artists should be compensated when their styles are replicated." />
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg flex gap-4 mt-6">
                        <FiInfo className="text-2xl flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Pro Tip</h4>
                            <p className="text-gray-400 text-sm">When using AI tools for creativity, be transparent about AI involvement and respect the rights of artists whose work may have influenced the training data.</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'balance' && (
                 <motion.div
                    key="balance"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-8"
                >
                     <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-black text-white p-4 rounded-xl text-3xl">
                            <FiSliders />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Balancing Protection & Expression</h3>
                            <p className="text-xl text-gray-600">Finding the right balance between protecting creators and enabling new creative expression is a central challenge.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <BalanceCard title="Incentivize Creation" tag="Protection" desc="Copyright should encourage new works by protecting creators' investments" />
                        <BalanceCard title="Enable Building Upon" tag="Expression" desc="All creativity builds on what came before; overly restrictive rules stifle innovation" />
                        <BalanceCard title="Public Domain" tag="Expression" desc="Works eventually enter public domain, enriching our shared cultural heritage" />
                        <BalanceCard title="Moral Rights" tag="Protection" desc="Creators deserve attribution and protection against misrepresentation of their work" />
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg flex gap-4 mt-6">
                        <FiInfo className="text-2xl flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Pro Tip</h4>
                            <p className="text-gray-400 text-sm">The best creative policies balance rewarding creators with enabling cultural participation and innovation.</p>
                        </div>
                    </div>
                </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Numbered Steps - Displayed only for CC tab */}
      <AnimatePresence>
        {activeTab === 'cc' && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
            >
                <StepItem number="1" title="Attribute Properly" desc="Always credit original creators when building upon their work, even when not legally required." />
                <StepItem number="2" title="Understand Licenses" desc="Before using any content, check its license terms and ensure your use is permitted." />
                <StepItem number="3" title="Share Your Work" desc="Consider using Creative Commons licenses for your own work to contribute to the creative commons." />
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const LicenseCard = ({ code, title, desc, icon, bg = "bg-gray-50" }) => (
    <div className={`${bg} p-6 rounded-lg flex items-start gap-4 hover:bg-gray-100 transition-colors`}>
        <div className="text-xl mt-1">{icon}</div>
        <div>
            <div className="font-bold text-gray-900 mb-1">{code}</div>
            <div className="text-sm font-medium text-gray-600">{title}</div>
            <div className="text-sm text-gray-500">{desc}</div>
        </div>
    </div>
)

const StepItem = ({ number, title, desc }) => (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md">
            {number}
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{desc}</p>
    </div>
)

const RemixItem = ({ number, title, desc }) => (
    <div className="flex gap-4">
        <span className="text-4xl font-bold text-gray-200">{number}</span>
        <div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
)

const AICard = ({ question, answer }) => (
    <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-bold text-gray-900 mb-2">{question}</h4>
        <p className="text-gray-600 text-sm">{answer}</p>
    </div>
)

const BalanceCard = ({ title, tag, desc }) => (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
        <div className="flex items-center gap-3 mb-2">
            <h4 className="font-bold text-gray-900">{title}</h4>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
)

export default CreativitySection
