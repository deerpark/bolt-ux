import { useLocation } from 'react-router-dom'
import Lottie from 'lottie-react'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import cowboyHatFace from '~/lotties/cowboy-hat-face.json'

export default function Contact() {
  const { pathname } = useLocation()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <div className='bx-section-row pb-20'>
        <div className='w-40 pt-20'>
          <Lottie loop autoplay animationData={cowboyHatFace} />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-5xl md:text-7xl font-thin mb-5'>1588-9999</span>
          <span className='text-sm md:text-base opacity-80'>평일 10:00 - 18:00</span>
          <span className='text-xs md:text-sm opacity-50'>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</span>
        </div>
      </div>
    </Layout>
  )
}
