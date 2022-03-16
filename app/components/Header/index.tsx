import { Link } from 'remix'
import { Route } from '~/lib/config'
import * as Icons from '~/components/Icon'

export function Header({ title, Icon, desc }: Route) {
  return (
    <div>
      <div className='bx-mobile-nav'>
        <div className='bx-mobile-home'>
          <Link to='/'>
            <Icons.Home />
          </Link>
        </div>
        <div className='bx-mobile-logo'>
          <Icons.Logo className='w-16 h-10' />
        </div>
        <div className='bx-mobile-settings'>
          <Link to='/settings'>
            <Icons.Settings />
          </Link>
        </div>
      </div>
      <div className='bx-header'>
        <div className='bx-header-meta'>
          <div className='bx-header-title'>{title}</div>
          <div className='bx-header-desc'>{desc}</div>
        </div>
        <div className='bx-header-icon'>{Icon && <Icon />}</div>
      </div>
    </div>
  )
}
