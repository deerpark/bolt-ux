import { ReactElement } from 'react'
import { Route, heroString, nav } from '~/lib/config'
import { Header } from '~/components/Header'
import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'
import { Banner, Promotion } from '~/components/Banner'

type LayoutProps = Route & {
  children: ReactElement | ReactElement[],
  promotion?: Promotion,
  prevRoute?: string,
}

type RootLayoutProps = {
  children: ReactElement | ReactElement[],
  isRoot: boolean,
}

export function SiteMeta() {
  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <link rel='manifest' href='/site.webmanifest?v=20220313' />
      <link rel='mask-icon' href='/images/safari-pinned-tab.svg?v=20220313' color='#2563eb' />
      <link rel='shortcut icon' href='/favicon.ico?v=20220313' />
      <meta name='apple-mobile-web-app-title' content='BOLT UX' />
      <meta name='application-name' content='BOLT UX' />
      <meta name='msapplication-TileColor' content='#2563eb' />
      <meta name='theme-color' content='#f8fafc' />
    </>
  )
}

export function Layout({ children, title, Icon, desc, promotion, prevRoute }: LayoutProps) {
  return (
    <div className='bx-section'>
      {/* <div className='preview'>
          {previewEnabled ? (
            <Form method='post' action='/blog/preview/stop'>
              This is page is showing draft content. <button>Click here</button> to exit preview mode.
            </Form>
          ) : (
            <Form method='post' action='/blog/preview/start'>
              This is page is showing published content. <button>Click here</button> to enter preview mode!
            </Form>
          )}
        </div> */}
      <Header {...{ title, Icon, desc, prevRoute }} />
      {promotion && <Banner {...promotion} />}
      {children}
      <section className='section flex md:hidden'>
        <Footer />
      </section>
    </div>
  )
}

export function RootLayout({ isRoot, children }: RootLayoutProps) {
  return (
    <div className='bx-container'>
      <div className={`bx-section ${isRoot ? '' : 'hidden md:flex'}`}>
        <Hero
          heroString={heroString}
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
        <div className={`${isRoot ? 'hidden md:flex' : ''}`}>
          <Footer />
        </div>
      </div>
      {children}
    </div>
  )
}
