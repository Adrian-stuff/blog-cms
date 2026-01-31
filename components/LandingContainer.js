import LandingNavbar from '@/components/LandingNavbar'
import LandingFooter from '@/components/LandingFooter'
import { useConfig } from '@/lib/config'
import Head from 'next/head'
import PropTypes from 'prop-types'
import cn from 'classnames'

const LandingContainer = ({ children, navItems, ...customMeta }) => {
  const BLOG = useConfig()

  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link
  const meta = {
    title: BLOG.title,
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${url}/${meta.slug}` : url}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
      </Head>
      <div
        className={`wrapper ${BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
          } bg-brand-dark min-h-screen text-gray-100 selection:bg-brand-primary selection:text-white flex flex-col`}
      >
        <LandingNavbar navItems={navItems} />
        <main className="flex-grow w-full">
          {children}
        </main>
        <LandingFooter navItems={navItems} />
      </div>
    </div>
  )
}

LandingContainer.propTypes = {
  children: PropTypes.node
}

export default LandingContainer
