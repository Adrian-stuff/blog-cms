
import Link from 'next/link'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'

const BlogSection = ({ posts }) => {
  if (!posts || posts.length === 0) return null

  return (
    <section id="blog" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">LATEST UPDATES</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Insights & Articles
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deep dives into media literacy, digital ethics, and the evolving landscape of information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={post.id} href={`/${post.slug}`} className="group relative block h-full">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={{
                 hidden: { opacity: 0, y: 20 },
                 show: { opacity: 1, y: 0 }
              }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative"
            >
               {/* Background Gradient Effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 -translate-x-full transition-transform z-0 pointer-events-none" />

              {/* Image Placeholder */}
              <div className="h-52 bg-gray-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-700" />
                 {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-10">
                        {post.tags[0]}
                    </div>
                 )}
              </div>

              <div className="p-8 flex-1 flex flex-col z-10 relative">
                <div className="overflow-hidden mb-3">
                    <motion.div
                        variants={{
                            hidden: { y: "100%" },
                            show: { y: 0 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex items-center gap-2 text-xs text-gray-500 font-medium"
                    >
                        <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
                    </motion.div>
                </div>
                
                <div className="overflow-hidden mb-4">
                     <motion.h3 
                        variants={{
                            hidden: { y: "100%" },
                            show: { y: 0 }
                        }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors"
                     >
                      {post.title}
                    </motion.h3>
                </div>
                
                <div className="overflow-hidden flex-1 mb-6">
                    <motion.p 
                        variants={{
                            hidden: { y: "100%", opacity: 0 },
                            show: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-gray-600 text-base leading-relaxed line-clamp-3"
                    >
                      {post.summary}
                    </motion.p>
                </div>

                <div className="overflow-hidden mt-auto">
                    <motion.div 
                        variants={{
                            hidden: { y: "100%" },
                            show: { y: 0 }
                        }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="pt-4 border-t border-gray-50 flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                    >
                        Read Article 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link href="/page/1" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition-colors">
            View All Posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
      </div>
    </section>
  )
}

export default BlogSection
