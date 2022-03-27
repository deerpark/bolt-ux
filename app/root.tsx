import { useLocation } from 'react-router-dom'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useCatch } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { root as query } from '~/queries'
import { usePrevRoute, useNav, Route } from '~/lib/config'
import { RootLayout, Layout, SiteMeta } from '~/components/Layout'
import * as Icons from '~/components/Icon'

import boltUIStyles from 'bolt-ui/dist/index.css'
import appStyles from './styles/app.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
    },
    { rel: 'stylesheet', href: boltUIStyles },
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
      initialData: { blog, site, ...data },
    },
  },
}: any) => {
  return toRemixMeta([...blog.seo, ...site.favicon])
}

export function CatchBoundary() {
  const { pathname } = useLocation()
  const { status, statusText } = useCatch()
  const prevRoute = usePrevRoute(pathname)
  const { sidebar = true }: Route = useNav(pathname)
  const isRoot = pathname === '/'

  return (
    <html>
      <head>
        <SiteMeta />
        <Links />
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname, sidebar }}>
          <Layout
            {...{ title: status.toString(), Icon: Icons.NotFound, desc: statusText, prevRoute, pathname, sidebar }}
          >
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

type Category = {
  order: number,
  id: string,
  name: string,
  slug: 'notices' | 'news' | 'dev' | 'design' | 'uiux' | 'badminton',
  desc: string,
  display: boolean,
  sidebar: boolean,
  icon: {
    url: string,
  },
}

export default function App() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { sidebar }: Route = useNav(pathname)
  const isRoot = pathname === '/'

  const {
    data: { site, allCategories},
  } = useQuerySubscription(datoQuerySubscription)

  const categories: Route[] = (allCategories as Category[])
    .sort((a, b) => a.order - b.order)
    .map((category) => {
      return {
        pathname: `/${category.slug}`,
        title: category.name,
        sidebar: category.sidebar,
        id: category.id,
        display: category.display,
        desc: category.desc,
        Icon: Icons[category.slug || 'NotFound'],
      }
    })

  return (
    <html lang='en'>
      <head>
        <SiteMeta />
        <Meta />
        <Links />
        {renderMetaTags([...site.favicon])}
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname, sidebar, categories }}>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
