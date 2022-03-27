import { Link } from 'remix'
import { Tab } from '~/types'

type TabsProps = {
  tabs: Tab[],
  currentId: string,
}

export function Tabs({ tabs, currentId }: TabsProps) {
  return (
    <ul className='bx-tabs'>
      {tabs &&
        tabs.map(tab => (
          <li key={tab.tabid} className={currentId === tab.tabid ? 'bx-tab-active' : ''}>
            {tab.url.includes('://') ? (
              <Link to={tab.url}>
                <span>{tab.tabname}</span>
              </Link>
            ) : (
              <a href={tab.url}>
                <span>{tab.tabname}</span>
              </a>
            )}
          </li>
        ))}
    </ul>
  )
}
