import { Link } from 'remix'
import * as Icon from '~/components/Icon'

export type Route = {
  route?: string,
  name: string,
  desc?: string,
  icon?: () => JSX.Element,
}

export type Routes = Route & {
  children?: Route[],
}

type NavProps = {
  nav?: Routes[],
}

export function Nav({ nav }: NavProps) {
  return (
    <ul className='bx-nav'>
      {nav ? (
        nav.map(navItem => {
          return (
            <li key={navItem.name}>
              <h3 className='bx-nav-category'>{navItem.name}</h3>
              {navItem?.children && (
                <ul className='bx-nav-children'>
                  {navItem.children.map(navSubItem => {
                    return (
                      <li key={navSubItem.name}>
                        {navSubItem.route ? (
                          <Link className='bx-nav-item' to={navSubItem.route}>
                            {navSubItem?.icon && (
                              <span className='bx-nav-icon'>
                                <navSubItem.icon />
                              </span>
                            )}
                            <span className='bx-nav-label'>
                              <span className='bx-nav-name'>{navSubItem.name}</span>
                              {navSubItem?.desc && <span className='bx-nav-desc'>{navSubItem.desc}</span>}
                            </span>
                            <span className='bx-nav-arrow'>
                              <Icon.ArrowRight />
                            </span>
                          </Link>
                        ) : (
                          <span className='bx-nav-item'>
                            {navSubItem?.icon && (
                              <span className='bx-nav-icon'>
                                <navSubItem.icon />
                              </span>
                            )}
                            <span className='bx-nav-label'>
                              <span className='bx-nav-name'>{navSubItem.name}</span>
                              {navSubItem?.desc && <span className='bx-nav-desc'>{navSubItem.desc}</span>}
                            </span>
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })
      ) : (
        <li>등록된 라우트 목록이 존재하지 않습니다.</li>
      )}
    </ul>
  )
}
