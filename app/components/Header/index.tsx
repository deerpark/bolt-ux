import { Link } from 'remix'
import { Route } from '~/lib/config'
import * as Icons from '~/components/Icon'
import { Button } from '~/components/Button'

export function Header({ title, Icon, desc, prevRoute }: Route & { prevRoute: string | undefined }) {
  return (
    <div className='bx-header'>
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
      <div className='bx-header-section'>
        {prevRoute && prevRoute !== '/' && (
          <div className='bx-header-history-back'>
            <Button href={prevRoute} icon={<Icons.ArrowLeft />}></Button>
          </div>
        )}
        <div className='bx-header-content'>
          <div className='bx-header-meta'>
            <div className='bx-header-title'>
              <span>{title}</span>
            </div>
            <div className='bx-header-desc'>{desc}</div>
          </div>
          <div className='bx-header-icon'>{Icon && <Icon />}</div>
        </div>
      </div>
    </div>
  )
}
