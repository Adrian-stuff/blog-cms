import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function search ({ tags, posts, navItems }) {
  return <SearchLayout tags={tags} posts={posts} navItems={navItems} />
}
export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: true })
  const tags = getAllTagsFromPosts(posts)
  const navItems = posts.filter(post => post.type?.[0] === 'Page')
  return {
    props: {
      tags,
      posts,
      navItems
    },
    revalidate: 1
  }
}
