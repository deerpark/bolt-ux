import { useRecoilState } from 'recoil'
import { useLocation } from 'react-router-dom'
import { settingsState } from '~/stores/root'
import { storage } from '~/lib/storage'
import { Settings as SettingsType } from '~/types'
import { setTheme } from '~/lib/util'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Button, ButtonGroup } from 'bolt-ui'

export default function Settings() {
  const [settings, setSettings] = useRecoilState(settingsState)
  const { pathname } = useLocation()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  const handleClearCache = () => {
    storage.clear()
  }
  const handleChangeSetting = (data: Partial<SettingsType>) => {
    const settingsData = { ...settings, ...data }
    if (data?.theme === null || ['light', 'dark'].includes(data?.theme || '')) {
      setTheme(data?.theme || null)
    }
    storage.set('settings', settingsData)
    setSettings(settingsData)
  }
  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      <div className='bx-settings'>
        <div className='bx-settings-group'>
          <h2 className='bx-settings-group-title'>시스템</h2>
          <ul className='bx-settings-group-items'>
            <li className='bx-settings-item'>
              <div className='bx-settings-items-label'>
                <h4 className='bx-settings-items-title'>캐시 삭제</h4>
                <div className='bx-settings-items-desc'>현재 인터페이스 캐시만 삭제 할수 있습니다.</div>
              </div>
              <div className='bx-settings-items-control'>
                <Button size='small' onClick={handleClearCache}>
                  캐시 삭제
                </Button>
              </div>
            </li>
          </ul>
        </div>
        <div className='bx-settings-group'>
          <h2 className='bx-settings-group-title'>인터페이스</h2>
          <ul className='bx-settings-group-items'>
            <li className='bx-settings-item'>
              <div className='bx-settings-items-label'>
                <h4 className='bx-settings-items-title'>테마</h4>
                <div className='bx-settings-items-desc'>취향에 따라 라이트, 다크모드를 선택해 주세요.</div>
              </div>
              <div className='bx-settings-items-control'>
                <ButtonGroup>
                  <Button
                    size='small'
                    isActive={settings?.theme === 'light'}
                    onClick={() => {
                      handleChangeSetting({ theme: 'light' })
                    }}
                  >
                    라이트
                  </Button>
                  <Button
                    size='small'
                    isActive={settings?.theme === 'dark'}
                    onClick={() => {
                      handleChangeSetting({ theme: 'dark' })
                    }}
                  >
                    다크
                  </Button>
                  <Button
                    size='small'
                    isActive={!settings?.theme}
                    onClick={() => {
                      handleChangeSetting({ theme: null })
                    }}
                  >
                    시스템 설정
                  </Button>
                </ButtonGroup>
              </div>
            </li>
            <li className='bx-settings-item'>
              <div className='bx-settings-items-label'>
                <h4 className='bx-settings-items-title'>컨텐츠 넓게보기</h4>
                <div className='bx-settings-items-desc'>메뉴영역을 좁게보고 컨텐츠를 넓게 보실 수 있습니다.</div>
              </div>
              <div className='bx-settings-items-control'>
                <ButtonGroup>
                  <Button
                    size='small'
                    isActive={settings.collapse === false}
                    onClick={() => {
                      handleChangeSetting({ collapse: false })
                    }}
                  >
                    넓게
                  </Button>
                  <Button
                    size='small'
                    isActive={settings.collapse !== false || settings.collapse}
                    onClick={() => {
                      handleChangeSetting({ collapse: true })
                    }}
                  >
                    좁게
                  </Button>
                </ButtonGroup>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
