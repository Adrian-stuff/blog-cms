import { motion } from 'framer-motion'

const EquitableFutureSection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Building a more <br/>
                    equitable digital future
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Addressing societal challenges requires collective action from individuals, organizations, and governments. By understanding these issues, we can advocate for policies and practices that promote digital equity, protect democratic values, and foster healthy online communities.
                </p>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
                <GridItem 
                    title="Digital Inclusion" 
                    desc="Expanding access for all" 
                />
                 <GridItem 
                    title="Media Literacy" 
                    desc="Critical thinking skills" 
                />
                 <GridItem 
                    title="Ethical Tech" 
                    desc="Responsible innovation" 
                />
                 <GridItem 
                    title="Policy Reform" 
                    desc="Updated regulations" 
                />
            </div>

        </div>
    </section>
  )
}

const GridItem = ({ title, desc }) => (
    <div className="bg-gray-900 p-8 hover:bg-gray-800 transition-colors duration-300">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
    </div>
)

export default EquitableFutureSection
