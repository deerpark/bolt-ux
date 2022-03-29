import { useState, useEffect, ReactElement, useCallback, useMemo } from 'react'
import { Route, heroString, routes } from '~/lib/config'
import { Nav } from 'bolt-ui'
import { Settings } from '~/types'
import { Header } from '~/components/Header'
import { Hero } from '~/components/Hero'
import { Footer } from '~/components/Footer'
import { Banner, Promotion } from '~/components/Banner'
import * as Icons from '~/components/Icon'

type LayoutProps = Route & {
  children: ReactElement | ReactElement[],
  promotion?: Promotion,
  prevRoute?: string,
  pathname?: string,
  cover?: JSX.Element,
  date?: JSX.Element,
  categoryId?: string,
  isWide?: boolean,
}

type RootLayoutProps = {
  children: ReactElement | ReactElement[],
  pathname?: string,
  isRoot: boolean,
  sidebar: boolean,
  categoryId?: string,
  categories?: Route[],
}

export function SiteMeta() {
  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='keyword'
        content='홈페이지, 제작, 웹사이트, BOLT UX, BOLT UI, 프론트엔드, 개발, 디자인, 웹디자인, 싱글페이지, 이벤트 페이지, 브랜드 가이드, 앱디자인, UX, UX 엔지니어, FrontEnd, Developer, Website'
      />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <link rel='manifest' href='/site.webmanifest?v=20220313' />
      <link rel='mask-icon' href='/images/safari-pinned-tab.svg?v=20220313' color='#2563eb' />
      <link rel='shortcut icon' href='/favicon.ico?v=20220313' />
      <meta name='apple-mobile-web-app-title' content='BOLT UX' />
      <meta name='application-name' content='BOLT UX' />
      <meta name='msapplication-TileColor' content='#2563eb' />
      <meta name='theme-color' content='#f8fafc' />
      <meta name='naver-site-verification' content='7a408e59ed0578ac277fa7130f830fcde8adef72' />
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1315238860718549'
        crossOrigin='anonymous'
      ></script>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src='https://www.googletagmanager.com/gtag/js?id=G-NTZDCTHDX5'></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTZDCTHDX5');
      `,
        }}
      ></script>
      {/* <!-- Channel Plugin Scripts --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
          var w = window;
          if (w.ChannelIO) {
            return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
          }
          var ch = function() {
            ch.c(arguments);
          };
          ch.q = [];
          ch.c = function(args) {
            ch.q.push(args);
          };
          w.ChannelIO = ch;
          function l() {
            if (w.ChannelIOInitialized) {
              return;
            }
            w.ChannelIOInitialized = true;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
            s.charset = 'UTF-8';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
          if (document.readyState === 'complete') {
            l();
          } else if (window.attachEvent) {
            window.attachEvent('onload', l);
          } else {
            window.addEventListener('DOMContentLoaded', l, false);
            window.addEventListener('load', l, false);
          }
        })();
        ChannelIO('boot', {
          "pluginKey": "baffea9f-5cfd-4d5d-935a-73409641e1f6"
        });`,
        }}
      ></script>
      {/* <!-- End Channel Plugin --> */}
      <script async src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
    </>
  )
}

export function Layout({
  children,
  title,
  Icon,
  desc,
  promotion,
  prevRoute,
  cover,
  date,
  isWide,
  sidebar,
}: LayoutProps) {
  return (
    <div className={`bx-page ${isWide ? 'bx-page-wide' : ''}`}>
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
      <Header {...{ title, Icon, desc, prevRoute, cover, date, isWide, sidebar }} />
      {promotion && <Banner {...promotion} />}
      <div className='bx-contents'>{children}</div>
      <section className='section flex md:hidden'>
        <Footer />
      </section>
    </div>
  )
}

export function RootLayout({ isRoot, children, pathname, sidebar, categories }: RootLayoutProps) {
  const InitialSettings: Settings = useMemo(
    () => ({
      collapse: !isRoot,
    }),
    [isRoot]
  )
  const [settings, setSettings] = useState(InitialSettings)
  const collapse = settings?.collapse !== false ? true : false
  const handleToggleCollapse = useCallback(() => {
    const tempSettings = { collapse: !settings?.collapse }
    setSettings(tempSettings)
    if (window?.localStorage) localStorage.setItem('settings', JSON.stringify(tempSettings))
  }, [settings])
  let newRoutes
  if (categories) {
    const [_, r2, ..._2] = routes
    r2.children = categories
    newRoutes = [_, r2, ..._2]
  }
  useEffect(() => {
    const initialCollapse = window?.localStorage
      ? JSON.parse(localStorage.getItem('settings') || 'null')
      : InitialSettings
    setSettings(initialCollapse)
  }, [InitialSettings])
  return (
    <div className={`bx-container ${collapse && !isRoot ? 'bx-collapse' : ''}`}>
      {sidebar && (
        <section className={`bx-page bx-page-root ${isRoot ? '' : 'hidden md:flex'}`}>
          <Hero
            isRoot={isRoot}
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
          <Nav {...{ routes: newRoutes || routes, pathname }} />
          <div className={`${isRoot ? 'px-3 md:px-0' : ''}`}>
            <Footer />
          </div>
          {!isRoot && (
            <button className='bx-collapse-button' type='button' onClick={handleToggleCollapse}>
              {collapse ? <Icons.LeftToLineSolid /> : <Icons.RightToLineSolid />}
            </button>
          )}
        </section>
      )}
      {children}
    </div>
  )
}
