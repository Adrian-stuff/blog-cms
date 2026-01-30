import { config } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import { motion } from 'framer-motion'

const Page = ({ postsToShow, page, showNext, navItems }) => {
  return (
    <Container navItems={navItems}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {postsToShow &&
          postsToShow.map(post => <BlogPost key={post.id} post={post} />)}
      </motion.div>
      <Pagination page={page} showNext={showNext} />
    </Container>
  )
}

export async function getStaticProps (context) {
  const { page } = context.params // Get Current Page No.
  const allPosts = await getAllPosts({ includePages: true })
  const posts = allPosts.filter(post => post.type?.[0] === 'Post')
  const navItems = allPosts.filter(post => post.type?.[0] === 'Page')
  
  const postsToShow = posts.slice(
    config.postsPerPage * (page - 1),
    config.postsPerPage * page
  )
  const totalPosts = posts.length
  const showNext = page * config.postsPerPage < totalPosts
  return {
    props: {
      page, // Current Page
      postsToShow,
      showNext,
      navItems
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / config.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
  }
}

export default Page
