import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'remix'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import * as query from '~/queries'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Posts } from '~/components/Posts'

type Params = {
  category: 'news' | 'notices',
}

export const loader = async ({ request, params }: any) => {
  const { category }: Params = params
  console.log(query[category])
  const querySubscription = await datoQuerySubscription({
    request,
    query: query[category],
    params,
  })
  return {
    ...querySubscription,
  }
}

export default function Index() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: {
      posts: [firstPost, ...otherPosts],
      params: { category },
    },
  } = useQuerySubscription(datoQuerySubscription)

  console.log(pathname)

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      {firstPost && <Posts {...{ firstPost, otherPosts, category }} />}
    </Layout>
  )
}
