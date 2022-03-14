import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'

import styles from './styles/app.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => {
  return { title: 'BOLT UX' }
}

export default function App() {
  return (
    <html lang='ko'>
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
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
