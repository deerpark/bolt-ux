import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'remix'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import * as query from '~/queries'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Posts } from '~/components/Posts'
import * as Icons from '~/components/Icon'

type Params = {
  category: 'news' | 'notices',
}

export const loader = async ({ request, params }: any) => {
  const { category }: Params = params
  const querySubscription = await datoQuerySubscription({
    request,
    query: query[category] || query.root,
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
  const { data } = useQuerySubscription(datoQuerySubscription)
  const { posts, params } = data
  const props = { posts, params, title, Icon, desc, sidebar, prevRoute, pathname }

  let firstPost = null
  let otherPosts = []
  if (!posts) {
    props.title = '404'
    props.desc = 'Page Not Found'
    props.Icon = Icons.NotFound
    props.pathname = pathname
  } else {
    ;[firstPost, ...otherPosts] = posts
  }
  return (
    <Layout {...props}>
      {posts ? (
        <Posts {...{ firstPost, otherPosts, category: params?.category }} />
      ) : (
        <div className='bx-error'>
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>이전으로 돌아 가시거나 다시 시도해 주세요.</p>
        </div>
      )}
    </Layout>
  )
}
