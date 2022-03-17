import { useLocation } from 'react-router-dom'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'

export default function Plan() {
  const { pathname } = useLocation()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <div className='bx-section-row'></div>
    </Layout>
  )
}
