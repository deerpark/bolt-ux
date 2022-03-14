import { Links, LiveReload, Meta, Form, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { metaTagsFragment } from './lib/fragments'
import { datoQuerySubscription } from './lib/datocms'

import appStyles from './styles/app.css'
import globalStyles from './styles/global.css'

export function links() {
  return [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: globalStyles },
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

  const previewEnabled = datoQuerySubscription.enabled === undefined || datoQuerySubscription.enabled === true

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png?v=20220313' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png?v=20220313' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png?v=20220313' />
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
          <div className='bx-section'>dd</div>
          <div className='bx-section'>
            <div className='preview'>
              {previewEnabled ? (
                <Form method='post' action='/preview/stop'>
                  This is page is showing draft content. <button>Click here</button> to exit preview mode.
                </Form>
              ) : (
                <Form method='post' action='/preview/start'>
                  This is page is showing published content. <button>Click here</button> to enter preview mode!
                </Form>
              )}
            </div>
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
