import { motion } from 'framer-motion'
import { FiBook, FiVideo, FiExternalLink, FiCheckCircle, FiFileText, FiAward, FiGlobe } from 'react-icons/fi'

const ResourcesSection = () => {
    return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">RESOURCES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Continue your learning journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore these curated resources to deepen your understanding of media literacy, digital rights, and responsible technology use.
            </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ResourceColumn 
                icon={<FiAward />} 
                title="Educational" 
                items={[
                    { title: "Media Literacy Now", tag: "Organization", desc: "Advocating for media literacy education in schools across all states.", link: "https://medialiteracynow.org/" },
                    { title: "Common Sense Media", tag: "Website", desc: "Independent reviews, age ratings, and guidance for families on media content.", link: "https://www.commonsensemedia.org/" },
                    { title: "News Literacy Project", tag: "Curriculum", desc: "Resources to help students develop critical thinking skills for news consumption.", link: "https://newslit.org/" }
                ]}
            />
            <ResourceColumn 
                icon={<FiFileText />} 
                title="Legal Resources" 
                items={[
                    { title: "Electronic Frontier Foundation", tag: "Organization", desc: "Defending civil liberties in the digital world through litigation and advocacy.", link: "https://www.eff.org/" },
                    { title: "Creative Commons", tag: "Guide", desc: "Learn about open licensing and how to properly use and share creative works.", link: "https://creativecommons.org/" },
                    { title: "Privacy Rights Clearinghouse", tag: "Resource", desc: "Information on privacy rights and how to protect personal information.", link: "https://privacyrights.org/" }
                ]}
            />
             <ResourceColumn 
                icon={<FiGlobe />} 
                title="Fact-Checking" 
                items={[
                    { title: "Snopes", tag: "Website", desc: "The internet's definitive fact-checking resource since 1994.", link: "https://www.snopes.com/" },
                    { title: "FactCheck.org", tag: "Website", desc: "Nonpartisan fact-checking of U.S. political claims.", link: "https://www.factcheck.org/" },
                    { title: "Reuters Fact Check", tag: "News", desc: "Investigates and debunks viral claims and misinformation.", link: "https://www.reuters.com/" }
                ]}
            />
        </div>

        {/* Books and Docs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiBook className="text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Recommended Books</h3>
                </div>
                <ul className="space-y-4">
                    <BookItem number="1" title="The Age of Surveillance Capitalism" author="Shoshana Zuboff" />
                    <BookItem number="2" title="Weapons of Math Destruction" author="Cathy O'Neil" />
                    <BookItem number="3" title="The Filter Bubble" author="Eli Pariser" />
                    <BookItem number="4" title="Digital Minimalism" author="Cal Newport" />
                </ul>
            </div>
            
             <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                    <FiVideo className="text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Documentaries</h3>
                </div>
                 <ul className="space-y-4">
                    <BookItem number="1" title="The Social Dilemma" author="(2020)" />
                    <BookItem number="2" title="The Great Hack" author="(2019)" />
                    <BookItem number="3" title="Coded Bias" author="(2020)" />
                    <BookItem number="4" title="The Cleaners" author="(2018)" />
                </ul>
            </div>
        </div>
    </section>
    )
}

const ResourceColumn = ({ icon, title, items }) => (
    <div>
        <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold text-lg">
            {icon}
            <h3>{title}</h3>
        </div>
        <div className="space-y-4">
            {items.map((item, idx) => {
                const CardContent = () => (
                    <>
                        <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h4>
                            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md shrink-0 ml-2">{item.tag}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-auto">{item.desc}</p>
                        {item.link && (
                             <div className="mt-3 text-xs font-medium text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Visit Resource <FiExternalLink />
                             </div>
                        )}
                    </>
                )

                return item.link ? (
                    <a 
                        key={idx} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all rounded-xl h-full flex flex-col group"
                    >
                       <CardContent />
                    </a>
                ) : (
                    <div key={idx} className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all rounded-xl h-full flex flex-col group">
                        <CardContent />
                    </div>
                )
            })}
        </div>
    </div>
)

const BookItem = ({ number, title, author }) => (
    <li className="flex gap-4">
        <span className="font-bold text-gray-400">{number}.</span>
        <div>
            <span className="font-medium text-gray-800">&quot;{title}&quot;</span>
            <span className="text-gray-500 text-sm ml-1">by {author}</span>
        </div>
    </li>
)

export default ResourcesSection
