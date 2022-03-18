import * as Icon from '~/components/Icon'

export type Route = {
  pathname?: string,
  title: string,
  id?: string,
  display?: boolean,
  desc?: string,
  Icon?: JSX.Element | (() => JSX.Element),
}

export type Routes = {
  title: string,
  display?: boolean,
  children: Route[],
}

export const nav: Routes[] = [
  {
    title: '블로그',
    display: true,
    children: [
      {
        pathname: '/notices',
        title: '공지사항',
        id: '116676845',
        display: true,
        desc: '알려드립니다.',
        Icon: Icon.notice,
      },
      {
        pathname: '/news',
        title: '새소식',
        id: '116679079',
        display: true,
        desc: '새로운 소식',
        Icon: Icon.news,
      },
    ],
  },
  {
    title: '서비스',
    display: true,
    children: [
      {
        pathname: '/services/homepage',
        title: '홈페이지 제작',
        display: true,
        desc: '홍보를 위한 웹사이트 구축',
        Icon: Icon.Homepage,
      },
      {
        pathname: '/services/singlepage',
        title: '싱글 페이지 제작',
        display: true,
        desc: '이벤트, 랜딩 단일 페이지 구축',
        Icon: Icon.Singlepage,
      },
      {
        pathname: '/services/publishing',
        title: '퍼블리싱 개발',
        display: true,
        desc: '마크업 개발',
        Icon: Icon.Publishing,
      },
      {
        pathname: '/services/appdesign',
        title: '앱 디자인',
        display: true,
        desc: '모바일 어플리케이션 디자인',
        Icon: Icon.appdesign,
      },
      {
        pathname: '/services/consulting',
        title: '디자인 컨설팅',
        display: true,
        desc: '로고 명함 간판 메뉴판 템플릿 컨설팅',
        Icon: Icon.consulting,
      },
    ],
  },
  {
    title: '기타',
    display: false,
    children: [
      {
        pathname: '/contact',
        title: '무료 상담',
        display: true,
        desc: '무엇이든 알려드립니다.',
        Icon: Icon.Contact,
      },
      {
        pathname: '/plan',
        title: '서비스 요금표',
        display: true,
        desc: '서비스 별 가격을 안내해 드려요.',
        Icon: Icon.Price,
      },
      {
        pathname: '/privacy',
        title: '개인정보 보호정책',
        display: true,
        desc: '개인정보 처리방침을 수립·공개합니다.',
        Icon: Icon.Privacy,
      },
    ]
  },
  {
    title: '설정',
    display: true,
    children: [
      {
        pathname: '/settings',
        title: '환경설정',
        display: true,
        desc: '개인화 설정을 변경하실 수 있습니다.',
        Icon: Icon.Settings,
      }
    ],
  },
]

const exceptRoute = ['posts', 'services', 'events']

export function useNav(pathname?: string): Route {
  const matchedRoute = nav.reduce<Route[]>((acc, cur) => acc.concat(cur.children), []).find(route => route.pathname === pathname)
  return matchedRoute || nav[0].children[0]
}

export function usePrevRoute(pathname : string): string {
  if (!pathname) return '/'
  const paths = pathname.split('/')
  paths.pop()
  const prevRoute = paths.filter(p => !exceptRoute.includes(p)).join('/')
  return !prevRoute || prevRoute === '' ? '/' : prevRoute
}

export type HeroString = [string, string][]

export const heroString: HeroString = [
  ['홈페이지 제작', '부터'],
  ['디자인 컨설팅', '까지'],
]