import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { metaTagsFragment } from '~/lib/fragments'

import appStyles from './styles/app.css'
import blogStyles from './styles/blog.css'

export function links() {
  return [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: blogStyles },
  ]
}

export const loader = async ({ request }) => {
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
}) => {
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
        <link rel='mask-icon' href='/safari-pinned-tab.svg?v=20220313' color='#2563eb' />
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
            <Link to='/'>
              <p>BOLT UX</p>
            </Link>
            <Link to='/blog'>
              <p>BLOG</p>
            </Link>
          </div>
          <div className='bx-section'>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
