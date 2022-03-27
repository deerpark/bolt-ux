import { useLoaderData, Outlet } from 'remix'
import { useLocation } from 'react-router-dom'
import invariant from 'tiny-invariant'
import { Image, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { post as query } from '~/queries/post'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'
import { Layout } from '~/components/Layout'
import { Post } from '~/components/Posts'
import { TabContextType } from '~/types'
import * as Icons from '~/components/Icon'

export const loader = async ({ request, params }: any) => {
  invariant(params.slug, 'expected params.slug')

  return datoQuerySubscription({
    request,
    query,
    variables: {
      slug: params.slug,
    },
  })
}

export const meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { post },
    },
  },
}: any) => {
  return post?.seo ? toRemixMeta(post.seo) : []
}

export default function Category() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { post },
  } = useQuerySubscription(datoQuerySubscription)

  const paths = pathname ? pathname.split('/') : [null]
  const tabId = paths[paths.length - 1]
  const context: TabContextType = { post, tabId }
  const outlet = <Outlet context={context} />
  const props = {
    title: post?.title || title,
    Icon: post?.author ? <Avatar name={post.author.name} picture={post.author.picture} /> : <></>,
    desc: post?.excerpt || desc,
    prevRoute,
    cover: post?.coverImage ? <Image data={post.coverImage.responsiveImage} /> : <></>,
    date: post?.date ? <Date dateString={post.date} /> : <></>,
    categoryId: post?.category?.id,
    sidebar,
  }

  if (!post) {
    props.title = '404'
    props.desc = 'Page Not Found'
    props.Icon = <Icons.NotFound />
  }
  return (
    <Layout {...props}>
      {post ? (
        <Post {...{ post, outlet, tabId, pathname }} />
      ) : (
        <div className='bx-error'>
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>이전으로 돌아 가시거나 다시 시도해 주세요.</p>
        </div>
      )}
    </Layout>
  )
}
