import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'remix'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { tagPosts as query } from '~/queries'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Posts } from '~/components/Posts'
import * as Icon from '~/components/Icon'

export const loader = async ({ request, params }: any) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query,
    variables: {
      tag: params.tag,
    },
  })
  return {
    ...querySubscription,
  }
}

export default function Index() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  const tag = decodeURI(pathname.split('/posts/')[1])

  const {
    data: {
      posts: [firstPost, ...otherPosts],
    },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title: tag, Icon: <Icon.Tags />, desc: '관련글 목록', sidebar, prevRoute }}>
      <div className='bx-sections'>
        <Posts {...{ firstPost, otherPosts }} />
      </div>
    </Layout>
  )
}
