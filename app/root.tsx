import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useCatch } from 'remix'
import { useLocation } from 'react-router-dom'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { metaTagsFragment } from '~/lib/fragments'
import { usePrevRoute } from '~/lib/config'
import { RootLayout, Layout, SiteMeta } from '~/components/Layout'
import * as Icon from '~/components/Icon'

import appStyles from './styles/app.css'
import blogStyles from './styles/blog.css'

export function links() {
  return [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: blogStyles },
  ]
}

export const loader = async ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query: `
        {
          site: _site {
            favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
              ...metaTagsFragment
            }
          }
          blog {
            seo: _seoMetaTags {
              ...metaTagsFragment
            }
          }
        }
        ${metaTagsFragment}
      `,
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
  const caught = useCatch()
  const prevRoute = usePrevRoute(pathname)
  const isRoot = pathname === '/'
  return (
    <html>
      <head>
        <SiteMeta />
        <Links />
      </head>
      <body>
        <RootLayout {...{ isRoot }}>
          <Layout {...{ title: caught.status.toString(), Icon: Icon.NotFound, desc: caught.statusText, prevRoute }}>
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

  return (
    <html lang='en'>
      <head>
        <SiteMeta />
        <Meta />
        <Links />
        {renderMetaTags([...site.favicon])}
      </head>
      <body>
        <RootLayout {...{ isRoot }}>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
