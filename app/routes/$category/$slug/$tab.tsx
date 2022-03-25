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
  return <Contents data={data} />
}
