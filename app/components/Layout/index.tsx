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
  pathname?: string,
  cover?: JSX.Element,
  date?: JSX.Element,
  categoryId?: string,
}

type RootLayoutProps = {
  children: ReactElement | ReactElement[],
  pathname?: string,
  isRoot: boolean,
  categoryId?: string,
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
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1315238860718549'
        crossOrigin='anonymous'
      ></script>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <script async src='https://www.googletagmanager.com/gtag/js?id=G-NTZDCTHDX5'></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTZDCTHDX5');
      `,
        }}
      ></script> */}
      {/* <!-- Google Tag Manager --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M6T8P2R');`,
        }}
      ></script>
      {/* <!-- End Google Tag Manager --> */}
    </>
  )
}

export function Layout({ children, title, Icon, desc, promotion, prevRoute, cover, date }: LayoutProps) {
  return (
    <div className='bx-section'>
      {/* <div className='preview'>
          {previewEnabled ? (
            <Form method='post' action='/posts/preview/stop'>
              This is page is showing draft content. <button>Click here</button> to exit preview mode.
            </Form>
          ) : (
            <Form method='post' action='/posts/preview/start'>
              This is page is showing published content. <button>Click here</button> to enter preview mode!
            </Form>
          )}
        </div> */}
      <Header {...{ title, Icon, desc, prevRoute, cover, date }} />
      {promotion && <Banner {...promotion} />}
      <div className='bx-contents'>{children}</div>
      <section className='section flex md:hidden'>
        <Footer />
      </section>
    </div>
  )
}

export function RootLayout({ isRoot, children, pathname }: RootLayoutProps) {
  return (
    <div className='bx-container'>
      <div className={`bx-section ${isRoot ? '' : 'hidden md:flex'}`}>
        <Hero
          heroString={heroString}
          desc='더 나은 사용자 경험을 생각하며 꼼꼼하게 만들어 드려요.'
          links={[
            { url: '/contact', label: '무료 상담' },
            {
              url: '/plan',
              label: '요금표 확인',
            },
          ]}
        />
        <Nav {...{ nav, pathname }} />
        <div className={`${isRoot ? 'px-3 md:px-0' : ''}`}>
          <Footer />
        </div>
      </div>
      {children}
    </div>
  )
}
