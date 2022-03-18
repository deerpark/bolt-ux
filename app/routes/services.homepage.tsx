import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { Image, useQuerySubscription } from 'react-datocms'
import { homepage as query } from '~/queries'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Banner } from '~/components/Banner'
import * as Icons from '~/components/Icon'

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
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>이런분께 추천 드려요!</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[0].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>인테리어 가게 사장님</div>
              <div className='bx-contents-card-desc'>
                간단히 사업을 소개하고 홍보하고 싶은 사장님들을 위한 웹페이지 제작
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[1].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>중소기업 대표님</div>
              <div className='bx-contents-card-desc'>기업을 소개하고 정보를 제공하기 위한 홈페이지 맞춤 제작</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[2].responsiveImage} />
            </div>
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
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>항상 최신의 기술을 선도해요.</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[3].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>최신 테크 트리</div>
              <div className='bx-contents-card-desc'>
                NextJS/Remix React 프레임워크, NodeJS, PostgreSQL기반 최신 기술로 개발 함으로써 빠르고 가벼운 서비스를
                제공합니다.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[4].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>SEO 도입</div>
              <div className='bx-contents-card-desc'>
                구글, 네이버 검색엔진에 최적화하여 작업해 드립니다. 검색은 어디에서나 쉽고 빠르고 가장 상위에 랭크될 수
                있도록 해 드립니다.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[5].responsiveImage} />
            </div>
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
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>서비스 제공은 다음과 같이 이뤄져요.</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>1</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>계약금 10% 입금</div>
              <div className='bx-contents-card-desc'>프로젝트가 시작되기 전 미리 계약금을 받고 시작해요.</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>2</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>기초 상담</div>
              <div className='bx-contents-card-desc'>
                홈페이지 컨셉, 원하는 기능들을 고객님들과 함께 사전에 주고 받아요.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>3</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>의뢰에 관련된 자료 수신</div>
              <div className='bx-contents-card-desc'>
                홈페이지 구축 전 필요한 자료들을 넘겨받아요. (로고, 아이디어, 제품 정보관련 사진)
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>4</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>디자인 시안 검토</div>
              <div className='bx-contents-card-desc'>디자인 컨셉의 시안을 미리 고객님들과 협의해요.</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>5</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>수정사항 반영 및 개발 진행</div>
              <div className='bx-contents-card-desc'>빠르게 개발 해 드립니다.</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>6</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>데모</div>
              <div className='bx-contents-card-desc'>첫 시연 후 수정사항 반영</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>7</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>최종 서비스 오픈</div>
              <div className='bx-contents-card-desc'>오픈 후 모니터링</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <span className='bx-contents-card-icon'>8</span>
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>잔금 90% 입금</div>
              <div className='bx-contents-card-desc'>프로젝트 완료</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend bx-contents-row-bg'>
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>저희 팀은 전문가들로 구성 되어있어요.</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[6].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>디자인/개발 "용용"</div>
              <div className='bx-contents-card-desc'>IT최전선에서 싸워온 경력 10년 이상의 전문가</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[7].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>프론트엔드/백엔드 개발 "뚜식이"</div>
              <div className='bx-contents-card-desc'>IT최전선에서 싸워온 경력 10년 이상의 전문가</div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-thumbnail'>
              <Image data={photo.homepage[8].responsiveImage} />
            </div>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>데이터/인프라 개발 "명자"</div>
              <div className='bx-contents-card-desc'>IT최전선에서 싸워온 경력 10년 이상의 전문가</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend'>
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>취소 및 환불규정을 알려드릴게요.</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>기본 환불 규정</div>
              <div className='bx-contents-card-desc'>
                전문가와 의뢰인의 상호 협의하에 청약 철회 및 환불이 가능합니다.
              </div>
              <div className='bx-contents-card-desc'>
                작업이 완료된 이후 또는 자료, 프로그램 등 서비스가 제공된 이후에는 환불이 불가합니다. ( 소비자보호법
                17조 2항의 5조. 용역 또는 「문화산업진흥 기본법」 제2조 제5호의 디지털콘텐츠의 제공이 개시된 경우에
                해당)
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>전문가 책임 사유</div>
              <div className='bx-contents-card-desc'>
                전문가의 귀책사유로 당초 약정했던 서비스 미이행 혹은 보편적인 관점에서 심각하게 잘못 이행한 경우 결제
                금액 전체 환불이 가능합니다.
              </div>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>의뢰인 책임 사유</div>
              <div className='bx-contents-card-desc'>
                서비스 진행 도중 의뢰인의 귀책사유로 인해 환불을 요청할 경우, 사용 금액을 아래와 같이 계산 후 총 금액의
                10%를 공제하여 환불합니다.
              </div>
              <ul className='bx-contents-card-list'>
                <li>총 작업량의 1/3 경과 전 : 이미 납부한 요금의 2/3해당액</li>
                <li>총 작업량의 1/2 경과 전 : 이미 납부한 요금의 1/2해당액</li>
                <li>총 작업량의 1/2 경과 후 : 반환하지 않음</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend'>
        <div className='bx-contents-row pb-1 md:pb-4'>
          <h2 className='bx-contents-h2'>
            <span className='transform -translate-y-px'>
              <Icons.BulletSolid />
            </span>
            <span>자주있는 질문들이예요.</span>
          </h2>
        </div>
        <div className='bx-list'>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>작업 기간은 보통 얼마나 걸리나요?</div>
              <ul className='bx-contents-card-list'>
                <li>홍보용 웹페이지는 3일</li>
                <li>기업 홈페이지는 5일</li>
                <li>브랜딩 컨설팅은 10일</li>
              </ul>
            </div>
          </div>
          <div className='bx-contents-card'>
            <div className='bx-contents-card-body'>
              <div className='bx-contents-card-title'>1년 무상 A/S의 범위는 어디까지 인가요?</div>
              <ul className='bx-contents-card-list'>
                <li>텍스트 수정</li>
                <li>이미지 교체 및 추가, 삭제</li>
                <li>브랜딩 컬러 변경</li>
                <li>페이지 추가 작업은 추가 요금이 발생 합니다.(별도 협의)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bx-contents-row bx-contents-row-extend'></div>
    </Layout>
  )
}
