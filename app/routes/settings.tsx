import { useLocation } from 'react-router-dom'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'

export default function Settings() {
  const { pathname } = useLocation()
  const { title, Icon, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <div className='bx-page-row'></div>
    </Layout>
  )
}
