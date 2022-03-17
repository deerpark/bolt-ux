import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { Image, useQuerySubscription } from 'react-datocms'
import { homepage as query } from '~/queries'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Banner } from '~/components/Banner'

export const loader = async ({ request, params }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Homepage() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { promotion, photo },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <Banner {...promotion} />
      <div className='bx-contents-row bx-contents-row-extend'>
        <div className='bx-contents-row pb-1 md:4'>
          <h2 className='bx-contents-h2'>이런분께 추천 드려요!</h2>
        </div>
        <div className='bx-list bx-list-extend'>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[0].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>인테리어 가게 사장님</div>
              <div className='bx-contents-card-desc'>
                간단히 사업을 소개하고 홍보하고 싶은 사장님들을 위한 웹페이지 제작
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[1].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>중소기업 대표님</div>
              <div className='bx-contents-card-desc'>기업을 소개하고 정보를 제공하기 위한 홈페이지 맞춤 제작</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[2].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>식당 사장님</div>
              <div className='bx-contents-card-desc'>
                새로운 가게 또는 법인을 시작하기 전 간판, 로고, 메뉴판등의 브랜딩 디자인 컨설팅 서비스를 제공
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend bx-contents-row-bg'>
        <div className='bx-contents-row pb-1 md:4'>
          <h2 className='bx-contents-h2'>항상 최신의 기술을 선도해요.</h2>
        </div>
        <div className='bx-list bx-list-extend'>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[3].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>최신 테크 트리</div>
              <div className='bx-contents-card-desc'>
                NextJS/Remix React 프레임워크, NodeJS, PostgreSQL기반 최신 기술로 개발 함으로써 빠르고 가벼운 서비스를
                제공합니다.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[4].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>SEO 도입</div>
              <div className='bx-contents-card-desc'>
                구글, 네이버 검색엔진에 최적화하여 작업해 드립니다. 검색은 어디에서나 쉽고 빠르고 가장 상위에 랭크될 수
                있도록 해 드립니다.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[5].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>반응형 페이지로 제작</div>
              <div className='bx-contents-card-desc'>
                다양한 PC 크로스, 모던 브라우저, 모바일에서 각각 크기에 최적화 되도록 맞춤 제작 해 드립니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend'>
        <div className='bx-contents-row pb-1 md:4'>
          <h2 className='bx-contents-h2'>저희 팀은 전문가들로 구성 되어있어요.</h2>
        </div>
        <div className='bx-list bx-list-extend'>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[6].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>디자인/개발 "용용"</div>
              <div className='bx-contents-card-desc'>현재 대기업 재직중</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[7].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>프론트엔드/백엔드 개발 "뚜식이"</div>
              <div className='bx-contents-card-desc'>현재 대기업 재직중</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <p className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[8].responsiveImage} />
            </p>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>데이터/인프라 개발 "명자"</div>
              <div className='bx-contents-card-desc'>현재 대기업 재직중</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend'></div>
    </Layout>
  )
}
