import { useLocale } from '@/lib/locale'
import Container from '@/components/Container'
import { getAllPosts } from '@/lib/notion'

export default function Page404 ({ navItems }) {
  const locale = useLocale()

  return (
    <Container navItems={navItems}>
      <h1 className="text-5xl text-black dark:text-white text-center">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center">{locale.PAGE.ERROR_404.MESSAGE}</p>
    </Container>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: true })
  const navItems = posts.filter(post => post.type?.[0] === 'Page')
  return {
    props: {
      navItems
    },
    revalidate: 1
  }
}
