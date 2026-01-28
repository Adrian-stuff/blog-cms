import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import App from 'next/app'
import '@/styles/globals.css'
import '@/styles/notion.css'
import dynamic from 'next/dynamic'
import loadLocale from '@/assets/i18n'
import { ConfigProvider } from '@/lib/config'
import { LocaleProvider } from '@/lib/locale'
import { prepareDayjs } from '@/lib/dayjs'
import { ThemeProvider } from '@/lib/theme'
import Scripts from '@/components/Scripts'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

export default function MyApp ({ Component, pageProps, config, locale }) {
  const router = useRouter()

  return (
    <ConfigProvider value={config}>
      <Scripts />
      <LocaleProvider value={locale}>
        <ThemeProvider>
          <AnimatePresence mode='wait'>
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen"
            >
              {process.env.VERCEL_ENV === 'production' && config?.analytics?.provider === 'ackee' && (
                <Ackee
                  ackeeServerUrl={config.analytics.ackeeConfig.dataAckeeServer}
                  ackeeDomainId={config.analytics.ackeeConfig.domainId}
                />
              )}
              {process.env.VERCEL_ENV === 'production' && config?.analytics?.provider === 'ga' && <Gtag />}
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </LocaleProvider>
    </ConfigProvider>
  )
}

MyApp.getInitialProps = async ctx => {
  const config = typeof window === 'object'
    ? await fetch('/api/config').then(res => res.json())
    : await import('@/lib/server/config').then(module => module.clientConfig)

  prepareDayjs(config.timezone)

  return {
    ...App.getInitialProps(ctx),
    config,
    locale: await loadLocale('basic', config.lang)
  }
}
