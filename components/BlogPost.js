import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        key={post.id}
        className="group relative flex flex-col p-6 mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full duration-1000 -translate-x-full transition-transform z-0 pointer-events-none" />
        
        {(post.thumbnail || post.Thumbnail) && (
             <div className="relative w-full h-64 overflow-hidden -mt-6 -mx-6 mb-6 rounded-t-2xl bg-gray-100 dark:bg-gray-900">
                 <img 
                    src={post.thumbnail || post.Thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
             </div>
         )}

        <header className="flex flex-col justify-between mb-4 z-10 relative">
          <div className="overflow-hidden">
            <motion.h2 
              variants={{
                hidden: { y: "100%" },
                show: { y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300"
            >
              {post.title}
            </motion.h2>
          </div>
          <div className="overflow-hidden mt-3">
            <motion.time 
              variants={{
                hidden: { y: "100%" },
                show: { y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="block text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium"
            >
              <FormattedDate date={post.date} />
            </motion.time>
          </div>
        </header>

        <main className="z-10 relative">
          <div className="overflow-hidden">
            <motion.p 
              variants={{
                hidden: { y: "100%", opacity: 0 },
                show: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light line-clamp-3"
            >
              {post.summary}
            </motion.p>
          </div>
        </main>

        <div className="overflow-hidden mt-6">
            <motion.div 
               variants={{
                hidden: { y: "100%" },
                show: { y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex items-center text-base font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                Read full article <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </motion.div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogPost;
