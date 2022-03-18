import { json, useLoaderData } from 'remix'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lottie from 'lottie-react'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Button } from '~/components/Button'
import * as Icons from '~/components/Icon'
import cowboyHatFace from '~/lotties/cowboy-hat-face.json'

declare global {
  interface Window {
    Kakao: any;
  }
}

export async function loader() {
  return json({
    env: {
      KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
    },
  });
}


export default function Contact() {
  const data = useLoaderData()
  const { pathname } = useLocation()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  const handleClickChatChannel = () => {
    window.Kakao.Channel.chat({
      channelPublicId: '_qwsxeb',
    })
  }
  const handleClickAddChannel = () => {
    window.Kakao.Channel.addChannel({
      channelPublicId: '_qwsxeb',
    })
  }
  useEffect(() => {
    if (!window.Kakao || window?.Kakao?.Channel) return
    window.Kakao.init(data.env.KAKAO_APP_KEY)
  }, [data])
  return (
    <>
      <Layout {...{ title, Icon, desc, prevRoute }}>
        <div className='bx-section-row pb-20'>
          <div className='w-40 pt-20'>
            <Lottie loop autoplay animationData={cowboyHatFace} />
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-5xl md:text-7xl font-thin mb-5 text-slate-600 dark:text-slate-200'>1588-9999</span>
            <span className='text-sm md:text-base opacity-80'>평일 10:00 - 18:00</span>
            <span className='text-xs md:text-sm opacity-50'>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</span>
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <div>
              <Button icon={<Icons.Kakao />} onClick={handleClickAddChannel}>카카오톡 채널 추가</Button>
            </div>
            <div>
              <Button icon={<Icons.Kakao />} onClick={handleClickChatChannel}>카카오톡 채팅 시작</Button>
            </div>
          </div>
        </div>
      </Layout>
      <script async src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
    </>
  )
}
