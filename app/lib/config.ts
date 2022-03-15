import * as Icon from '~/components/Icon'

export type Route = {
  pathname?: string,
  title: string,
  desc?: string,
  Icon?: () => JSX.Element,
}

export type Routes = {
  title: string,
  children: Route[],
}

export const nav: Routes[] = [
  {
    title: '블로그',
    children: [
      {
        pathname: '/blog',
        title: '공지사항',
        desc: '알려드립니다.',
        Icon: Icon.notice,
      },
      {
        pathname: '/blog/news',
        title: '새소식',
        desc: '새로운 소식',
        Icon: Icon.news,
      },
    ],
  },
  {
    title: '서비스',
    children: [
      {
        pathname: '/service/homaepage',
        title: '홈페이지 제작',
        desc: '홍보를 위한 웹사이트 구축',
        Icon: Icon.homepage,
      },
      {
        pathname: '/service/singlepage',
        title: '싱글 페이지 제작',
        desc: '이벤트, 랜딩 단일 페이지 구축',
        Icon: Icon.singlepage,
      },
      {
        pathname: '/service/publishing',
        title: '퍼블리싱 개발',
        desc: '마크업 개발',
        Icon: Icon.publishing,
      },
      {
        pathname: '/service/appdesign',
        title: '앱 디자인',
        desc: '모바일 어플리케이션 디자인',
        Icon: Icon.appdesign,
      },
      {
        pathname: '/service/consulting',
        title: '디자인 컨설팅',
        desc: '로고 명함 간판 메뉴판 템플릿 컨설팅',
        Icon: Icon.consulting,
      },
    ],
  },
]

export function useNav(pathname?: string): Route {
  const matchedRoute = nav.reduce<Route[]>((acc, cur) => acc.concat(cur.children), []).find(route => route.pathname === pathname)
  return matchedRoute || nav[0].children[0]
}
