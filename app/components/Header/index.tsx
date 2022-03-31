import { Link } from 'remix'
import { Route } from '~/lib/config'
import * as Icons from '~/components/Icon'

type HeaderProps = Route & {
  prevRoute: string | undefined,
  cover?: JSX.Element,
  date?: JSX.Element,
  sidebar?: boolean,
  isWide?: boolean,
}

export function Header({ title, Icon, desc, prevRoute, date, sidebar, isWide }: HeaderProps) {
  return (
    <div className='bx-header'>
      {(isWide || !sidebar) && (
        <div className='bx-pc-nav'>
          <div className='bx-mobile-home'>
            {prevRoute && prevRoute !== '/' ? (
              <Link to={prevRoute}>
                <Icons.ArrowLeftLight />
              </Link>
            ) : (
              <Link to='/'>
                <Icons.HomeLight />
              </Link>
            )}
          </div>
        </div>
      )}
      <div className='bx-mobile-nav'>
        <div className='bx-mobile-home'>
          {prevRoute && prevRoute !== '/' ? (
            <Link to={prevRoute}>
              <Icons.ArrowLeftLight />
            </Link>
          ) : (
            <Link to='/'>
              <Icons.HomeLight />
            </Link>
          )}
        </div>
        <div className='bx-mobile-logo'>
          <Link to='/'>
            <Icons.Logo className='w-16 h-10' />
          </Link>
        </div>
        <div className='bx-mobile-settings'>
          <Link to='/settings'>
            <Icons.SettingsLight />
          </Link>
        </div>
      </div>
      <div className='bx-header-section'>
        <div className='bx-header-content'>
          <div className='bx-header-meta'>
            <div className='bx-header-title'>
              <span>{title}</span>
            </div>
            {desc && <div className='bx-header-desc'>{desc}</div>}
            {date && <div className='bx-header-desc bx-header-date'>{date}</div>}
          </div>
          {Icon && <div className='bx-header-icon'>{typeof Icon === 'function' ? <Icon /> : Icon}</div>}
        </div>
      </div>
    </div>
  )
}
