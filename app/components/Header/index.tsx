import { Link } from 'remix'
import { Route } from '~/lib/config'
import * as Icons from '~/components/Icon'
import { Button } from '~/components/Button'

export function Header({
  title,
  Icon,
  desc,
  prevRoute,
  cover,
  date,
}: Route & { prevRoute: string | undefined, cover?: JSX.Element, date?: JSX.Element }) {
  return (
    <div className='bx-header'>
      <div className='bx-mobile-nav'>
        <div className='bx-mobile-home'>
          <Link to='/'>
            <Icons.Home />
          </Link>
        </div>
        <div className='bx-mobile-logo'>
          <Link to='/'>
            <Icons.Logo className='w-16 h-10' />
          </Link>
        </div>
        <div className='bx-mobile-settings'>
          <Link to='/settings'>
            <Icons.Settings />
          </Link>
        </div>
      </div>
      <div className='bx-header-section'>
        {cover && <div className='bx-cover'>{cover}</div>}
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
            <div className='bx-header-desc'>{date}</div>
          </div>
          <div className='bx-header-icon'>{Icon && typeof Icon === 'function' ? <Icon /> : Icon}</div>
        </div>
      </div>
    </div>
  )
}
