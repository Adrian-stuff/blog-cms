import { clientConfig } from '@/lib/server/config'
import LandingContainer from '@/components/LandingContainer'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import ContentSection from '@/components/ContentSection'
import PrinciplesSection from '@/components/PrinciplesSection'
import ResourcesSection from '@/components/ResourcesSection'
import Accordion from '@/components/Accordion'
import EthicalDilemmasSection from '@/components/EthicalDilemmasSection'
import CreativitySection from '@/components/CreativitySection'
import SocietalImpactSection from '@/components/SocietalImpactSection'
import EquitableFutureSection from '@/components/EquitableFutureSection'
import DigitalCitizenshipSection from '@/components/DigitalCitizenshipSection'
import PhishingQuizSection from '@/components/PhishingQuizSection'
import { getAllPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'
import { FiBook, FiLock, FiGlobe, FiCpu, FiShare2, FiShield, FiAlertTriangle, FiUsers, FiActivity } from 'react-icons/fi'

import BlogSection from '@/components/BlogSection'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: true })
  
  // Categorize content
  const navItems = posts.filter(post => post.type?.[0] === 'Page')
  const blogPosts = posts.filter(post => post.type?.[0] === 'Post')

  return {
    props: {
        navItems,
        blogPosts: blogPosts.slice(0, 3) // Only take the first 3 posts
    },
    revalidate: 1
  }
}

export default function Blog ({ navItems, blogPosts }) {
  const { title, description } = useConfig()

  const coreFocusCards = [
    {
      title: "Legal Issues",
      description: "Understand copyright, intellectual property, cybercrime laws, and your digital rights.",
      slug: "legal-issues",
      icon: <FiScaleIcon />,
      image: "https://www.offthepagecreations.com/wp-content/uploads/2021/08/Gavel-on-keyboard-5323118.jpg"
    },
    {
      title: "Ethical Issues",
      description: "Navigate moral dilemmas in digital communication, privacy, and online behavior.",
      slug: "ethical-issues",
      icon: <FiHeartIcon />,
      image: "https://editor.analyticsvidhya.com/uploads/11565BBVA-OpenMind-Etica-9-Robert-Schultz-etica-e-internet.jpg"
    },
    {
      title: "Societal Impact",
      description: "Explore how media shapes culture, politics, and interpersonal relationships.",
      slug: "societal-impact",
      icon: <FiUsersIcon />,
      image: "https://jgpr.iledu.in/wp-content/uploads/2023/03/V1I12P.jpeg"
    },
    {
      title: "Digital Literacy",
      description: "Develop critical thinking skills to evaluate and create media responsibly.",
      slug: "digital-literacy",
      icon: <FiBookOpenIcon />,
      image: "https://news.miami.edu/dcie/_assets/images/images-stories/2016/06/digital-literacy-lg.png"
    }
  ]
  
  const legalAccordionItems = [
    {
      title: "Copyright & Intellectual Property",
      icon: <FiCpu />,
      content: (
        <div className="space-y-4">
            <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">What is Copyright?</h4>
                <p className="text-sm">Copyright is a legal right that grants creators exclusive control over the use and distribution of their original works, including text, images, music, videos, and software.</p>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Fair Use Doctrine</h4>
                <p className="text-sm">Fair use allows limited use of copyrighted material without permission for purposes such as criticism, commentary, news reporting, teaching, and research. However, fair use is determined case-by-case.</p>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Creative Commons</h4>
                <p className="text-sm">Creative Commons licenses provide a flexible range of protections and freedoms for authors and artists. They allow creators to specify which rights they reserve and which rights they waive.</p>
            </div>
        </div>
      )
    },
    {
        title: "Cybercrime & Digital Laws",
        icon: <FiAlertTriangle />,
        content: (
            <div className="space-y-4">
               <div className="relative w-full rounded-lg overflow-hidden shadow-md mb-4" style={{ paddingBottom: '56.25%' }}>
                   <iframe 
                       className="absolute top-0 left-0 w-full h-full"
                       src="https://www.youtube.com/embed/_vsAJBtKGtg?si=HL0ZBITWKqVdjk5U" 
                       title="Cybercrime Video"
                       frameBorder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       allowFullScreen 
                   ></iframe>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Types of Cybercrime</h4>
                    <p className="text-sm">Cybercrime includes hacking, identity theft, phishing, cyberstalking, online fraud, and distribution of illegal content. These offenses carry serious legal consequences.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Cyberbullying Laws</h4>
                    <p className="text-sm">Many jurisdictions have enacted specific laws against cyberbullying, which can include criminal charges for harassment, threats, or defamation conducted through digital platforms.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Digital Evidence</h4>
                    <p className="text-sm">Digital footprints, including social media posts, emails, and browsing history, can be used as evidence in legal proceedings. Understanding this helps promote responsible online behavior.</p>
                </div>
            </div>
        )
    },
    {
        title: "Data Privacy Regulations",
        icon: <FiShield />,
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">GDPR & Global Standards</h4>
                    <p className="text-sm">The General Data Protection Regulation (GDPR) sets strict standards for data collection and processing. Similar laws exist worldwide, protecting individuals&apos; personal information.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Data Subject Rights</h4>
                    <p className="text-sm">Individuals have rights including access to their data, correction of inaccuracies, deletion requests, and the ability to object to certain types of processing.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Consent & Transparency</h4>
                    <p className="text-sm">Organizations must obtain clear consent before collecting personal data and must be transparent about how data will be used, stored, and shared.</p>
                </div>
            </div>
        )
    },
    {
        title: "Defamation & Online Speech",
        icon: <FiScaleIcon />,
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Understanding Defamation</h4>
                    <p className="text-sm">Defamation occurs when false statements harm someone&apos;s reputation. Online defamation (libel) can result in civil lawsuits and significant damages.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Freedom vs. Responsibility</h4>
                    <p className="text-sm">While free speech is protected, it has limits. Threats, incitement to violence, and knowingly false statements can have legal consequences.</p>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Platform Liability</h4>
                    <p className="text-sm">Different jurisdictions have varying rules about whether platforms are liable for user-generated content. Section 230 in the US provides significant immunity, while other countries take different approaches.</p>
                </div>
            </div>
        )
    }
  ]

  return (
    <LandingContainer title={title} description={description} navItems={navItems}>
      
      <Hero />

      <BlogSection posts={blogPosts} />
      
      <div id="overview" className="bg-gray-50 relative z-10">
        <FeatureSection 
          title="A comprehensive approach to media and information literacy" 
          description="In an era of rapid information exchange, understanding the complexities of media consumption and creation is essential for every individual."
          cards={coreFocusCards}
          eyebrow="OUR CORE FOCUS"
        />

        <div id="legal-issues" className="scroll-mt-24">
            <ContentSection
              title="Understanding your rights and responsibilities online"
              eyebrow="LEGAL FRAMEWORKS"
              content={
                <>
                  <p className="mb-8 text-gray-600">
                    The digital world operates within legal frameworks designed to
                    protect creators, consumers, and society. Knowledge of these laws is
                    essential for navigating the internet safely and responsibly.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <FiCpu className="text-lg"/> Copyright Laws
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <FiShield className="text-lg" /> Data Protection
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <FiGlobe className="text-lg" /> Digital Rights
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <FiAlertTriangle className="text-lg" /> Cybercrime Acts
                      </div>
                  </div>
                </>
              }
              sideContent={
                <div className="pl-0 md:pl-10">
                    <Accordion items={legalAccordionItems} />
                </div>
              }
            />
        </div>

        <PhishingQuizSection />

        <div id="ethical-issues" className="scroll-mt-24">
            <EthicalDilemmasSection />
        </div>

        <div id="creativity" className="scroll-mt-24">
            <CreativitySection />
        </div>

        <div id="societal-impact" className="scroll-mt-24">
             <SocietalImpactSection />
        </div>

       <div id="digital-citizenship" className="scroll-mt-24">
            <DigitalCitizenshipSection />
       </div>

        <div id="resources" className="scroll-mt-24">
            <ResourcesSection />
        </div>

        <EquitableFutureSection />

      </div>

    </LandingContainer>
  )
}

// Simple Icon Components for the Feature Cards
const FiScaleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
)
const FiHeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.28 3.6-2.34 3.6-4.96C22.6 5.11 19.5 2 16 2c-2.3 0-4.07.82-5.38 2.06C9.28 2.82 7.5 2 5.2 2 1.7 2 2 5.11 2 9.04c0 2.62 1.8 3.96 3.6 4.96"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
) // Actually using a standard heart might be better or import from react-icons/fi if available
const FiUsersIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
const FiBookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
)
