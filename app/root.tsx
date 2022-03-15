import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { metaTagsFragment } from '~/lib/fragments'
import { nav } from '~/lib/config'
import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'

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

export default function App() {
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { site },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='manifest' href='/site.webmanifest?v=20220313' />
        <link rel='mask-icon' href='/images/safari-pinned-tab.svg?v=20220313' color='#2563eb' />
        <link rel='shortcut icon' href='/favicon.ico?v=20220313' />
        <meta name='apple-mobile-web-app-title' content='BOLT UX' />
        <meta name='application-name' content='BOLT UX' />
        <meta name='msapplication-TileColor' content='#2563eb' />
        <meta name='theme-color' content='#f8fafc' />
        <Meta />
        <Links />
        {renderMetaTags([...site.favicon])}
      </head>
      <body>
        <div className='bx-container'>
          <div className='bx-section'>
            <Hero
              heroString={[
                ['홈페이지 제작', '부터'],
                ['디자인 컨설팅', '까지'],
              ]}
              desc='더 나은 사용자 경험을 생각하며 꼼꼼하게 만들어 드려요.'
              links={[
                { url: '/blog', label: '무료 상담' },
                {
                  handler: () => {},
                  label: '요금표 확인',
                },
              ]}
            />
            <Nav nav={nav} />
            <Footer />
          </div>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
