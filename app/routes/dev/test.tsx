import Lottie from 'lottie-react'
import { Background } from '~/components/shared/Background'
import { Divider } from '~/components/shared/Divider'
import intro from '~/lotties/intro.json'

export default function TestPage() {
  return (
    <section className='bx-page relative min-h-screen overflow-hidden'>
      <div className='relative z-20'>
        <div className='intro-header'>
          <Lottie className='intro-lottie' loop autoplay animationData={intro} />
          <div className='intro-text'>
            <h1 className='intro-heading'>
              <div>타 서비스와 차별화된</div>
              <div>
                <b>홈페이지 제작 서비스</b>를 만나보세요!
              </div>
            </h1>
            <div className='intro-desc'>
              <div>BOLT UX는 사용자 경험을 아주 중요시하는 전문가들로 구성되어 있으며</div>
              <div>최신 트렌드 기술을 바탕으로 완벽하고 깔끔한 홈페이지를 제작해 드립니다.</div>
            </div>
          </div>
        </div>
        <div className='intro-divider'>
          <Divider />
        </div>
        <div className=''>TEST</div>
      </div>
      <Background />
    </section>
  )
}
