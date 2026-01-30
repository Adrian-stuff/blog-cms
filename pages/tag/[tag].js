import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function Tag ({ tags, posts, currentTag, navItems }) {
  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} navItems={navItems} />
}

export async function getStaticProps ({ params }) {
  const currentTag = params.tag
  const allPosts = await getAllPosts({ includePages: true })
  const posts = allPosts.filter(post => post.type?.[0] === 'Post')
  const navItems = allPosts.filter(post => post.type?.[0] === 'Page')
  
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag,
      navItems
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}
