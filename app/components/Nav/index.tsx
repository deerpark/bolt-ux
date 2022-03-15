import { Link } from 'remix'
import { Routes } from '~/lib/config'
import * as Icon from '~/components/Icon'

type NavProps = {
  nav?: Routes[],
}

export function Nav({ nav }: NavProps) {
  return (
    <ul className='bx-nav'>
      {nav ? (
        nav.map(navItem => {
          return (
            <li key={navItem.title}>
              <h3 className='bx-nav-category'>{navItem.title}</h3>
              {navItem?.children && (
                <ul className='bx-nav-children'>
                  {navItem.children.map(navSubItem => {
                    return (
                      <li key={navSubItem.title}>
                        {navSubItem.pathname ? (
                          <Link className='bx-nav-item' to={navSubItem.pathname}>
                            {navSubItem?.Icon && (
                              <span className='bx-nav-icon'>
                                <navSubItem.Icon />
                              </span>
                            )}
                            <span className='bx-nav-label'>
                              <span className='bx-nav-name'>{navSubItem.title}</span>
                              {navSubItem?.desc && <span className='bx-nav-desc'>{navSubItem.desc}</span>}
                            </span>
                            <span className='bx-nav-arrow'>
                              <Icon.ArrowRight />
                            </span>
                          </Link>
                        ) : (
                          <span className='bx-nav-item'>
                            {navSubItem?.Icon && (
                              <span className='bx-nav-icon'>
                                <navSubItem.Icon />
                              </span>
                            )}
                            <span className='bx-nav-label'>
                              <span className='bx-nav-name'>{navSubItem.title}</span>
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
