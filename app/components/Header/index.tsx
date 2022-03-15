import { Route } from '~/lib/config'

export function Header({ title, Icon, desc }: Route) {
  return (
    <div className='bx-header'>
      <div className='bx-header-meta'>
        <div className='bx-header-title'>{title}</div>
        <div className='bx-header-desc'>{desc}</div>
      </div>
      <div className='bx-header-icon'>{Icon && <Icon />}</div>
    </div>
  )
}
