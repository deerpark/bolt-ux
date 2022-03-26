import type { LoaderFunction } from 'remix'
import { json, useLoaderData, useOutletContext } from 'remix'
import { Contents } from '~/components/Posts'
import { TabContextType } from '~/types'

type LoaderData = {
  tab?: string,
}

export const loader: LoaderFunction = async ({ params }) => {
  const data: LoaderData = {
    tab: params.tab,
  }
  return json(data)
}

export default function PostTab() {
  const { tab } = useLoaderData<LoaderData>()
  const { post } = useOutletContext<TabContextType>()
  const data = post.tabs ? post.tabs.find(t => t.tabid === tab)?.tabcontents : null
  return data ? <Contents data={data} /> : <div className='bx-error'>
    <h1>페이지를 찾을 수 없습니다.</h1>
    <p>이전으로 돌아 가시거나 다시 시도해 주세요.</p>
  </div>
}
