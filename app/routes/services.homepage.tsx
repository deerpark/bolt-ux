import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { useQuerySubscription } from 'react-datocms'
import { promotion as query } from '~/queries'
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
    data: { promotion },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <Banner {...promotion} />
      <div className='bx-section-row'></div>
    </Layout>
  )
}
