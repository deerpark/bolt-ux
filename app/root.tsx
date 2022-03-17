import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useCatch } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { root as query } from '~/queries'
import { usePrevRoute } from '~/lib/config'
import { GA } from '~/lib/ga'
import { RootLayout, Layout, SiteMeta } from '~/components/Layout'
import * as Icon from '~/components/Icon'

import appStyles from './styles/app.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css',
    },
    { rel: 'stylesheet', href: appStyles },
  ]
}

export const loader = async ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export const meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { blog, site },
    },
  },
}: any) => {
  return toRemixMeta([...blog.seo, ...site.favicon])
}

export function CatchBoundary() {
  const { pathname } = useLocation()
  const { status, statusText } = useCatch()
  const prevRoute = usePrevRoute(pathname)
  const isRoot = pathname === '/'

  useEffect(() => {
    GA.trackPageView({ path: pathname })
    GA.trackErrorEvent({ action: status.toString() })
  }, [pathname, status])

  return (
    <html>
      <head>
        <SiteMeta />
        <Links />
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname }}>
          <Layout {...{ title: status.toString(), Icon: Icon.NotFound, desc: statusText, prevRoute, pathname }}>
            <div className='bx-error'>
              <h1>페이지를 찾을 수 없습니다.</h1>
              <p>이전으로 돌아 가시거나 다시 시도해 주세요.</p>
            </div>
          </Layout>
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const isRoot = pathname === '/'

  const {
    data: { site },
  } = useQuerySubscription(datoQuerySubscription)

  useEffect(() => {
    GA.trackPageView({ path: pathname })
    console.log(pathname)
  }, [pathname])

  return (
    <html lang='en'>
      <head>
        <SiteMeta />
        <Meta />
        <Links />
        {renderMetaTags([...site.favicon])}
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname }}>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
