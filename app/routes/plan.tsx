import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { ShadowCard, ShadowCardItem } from '~/components/Card'
import { plan as query } from '~/queries'
import * as Icons from '~/components/Icon'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Plan() {
  const { pathname } = useLocation()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { photo },
  } = useQuerySubscription(datoQuerySubscription)

  const list: ShadowCardItem[] = [
    {
      title: '홈페이지 제작',
      icon: <Icons.Homepage />,
      photo: photo.plan[0],
      contents: [
        'PC, 모바일 반응형으로 제작',
        '검색엔진 최적화 대응',
        '1년간 도메인 / 호스팅 무료 제공',
        '5페이지 초과시 요금 별도',
      ],
      extra: (
        <span className='bx-shadow-card-badge'>
          <span>50만원</span>
        </span>
      ),
    },
    {
      title: '싱글페이지 제작',
      icon: <Icons.Singlepage />,
      photo: photo.plan[1],
      contents: ['PC, 모바일 반응형으로 제작', '검색엔진 최적화 대응', '1년간 도메인 / 호스팅 무료 제공'],
      extra: (
        <span className='bx-shadow-card-badge'>
          <span>20만원</span>
        </span>
      ),
    },
    {
      title: '퍼블리싱 개발',
      icon: <Icons.Publishing />,
      photo: photo.plan[2],
      contents: [
        'PC, 모바일 반응형으로 개발',
        '웹 접근성 준수',
        '10페이지 이상 요금 별도',
        '웹 접근성 인증 마크 획득 가능 (요금 별도)',
      ],
      extra: (
        <span className='bx-shadow-card-badge'>
          <span>50만원</span>
        </span>
      ),
    },
    {
      title: '앱 디자인',
      icon: <Icons.Appdesign />,
      photo: photo.plan[3],
      contents: ['UX 가이드라인 준수', '유니버셜 디자인', '디자인 시스템 구축', '5페이지 초과시 요금 별도'],
      extra: (
        <span className='bx-shadow-card-badge'>
          <span>50만원</span>
        </span>
      ),
    },
    {
      title: '브랜드 가이드',
      icon: <Icons.Branding />,
      photo: photo.plan[4],
      contents: ['브랜딩 전략 수립 및 컨설팅', '로고, 컬러, 타이포, 앱 디지털 디자인', '명함, 메뉴판 오프라인 디자인'],
      extra: (
        <span className='bx-shadow-card-badge'>
          <span>100만원</span>
        </span>
      ),
    },
  ]

  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <div className='bx-section-row pt-3'>
        {list.map(listItem => (
          <ShadowCard key={listItem.title} item={listItem} />
        ))}
      </div>
    </Layout>
  )
}
