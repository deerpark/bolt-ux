import { ReactElement } from 'react'
import { Link } from 'remix'

type ButtonProps = {
  icon?: string,
  href?: string,
  children: ReactElement[] | string,
  size?: 'small' | 'default' | 'large',
  type?: 'submit' | 'button',
  onClick?: () => void,
}

type ButtonGroupProps = {
  children: ReactElement | ReactElement[] | string,
  className?: string,
}

const sizes = {
  minWidth: {
    small: 'min-w-[24px]',
    default: 'min-w-[32px]',
    large: 'min-w-[40px]',
  },
  height: {
    small: 'h-6',
    default: 'h-8',
    large: 'h-10',
  },
  fontSize: {
    small: 'text-xs',
    default: 'text-sm',
    large: 'text-base',
  },
}

export function Button({ type = 'button', size = 'default', href, onClick, icon, children }: ButtonProps) {
  return href ? (
    <Link key={href} to={href}>
      <button type={type} className={`bx-button ${sizes.height[size]} ${sizes.minWidth[size]}}`}>
        <span className={`bx-button-label ${sizes.fontSize[size]}`}>
          {icon && <span className='bx-button-icon'>{icon}</span>}
          <span>{children}</span>
        </span>
        <span className='bx-button-background'></span>
      </button>
    </Link>
  ) : onClick ? (
    <button type={type} className='bx-button' onClick={onClick}>
      {icon && <span className='bx-button-icon'>{icon}</span>}
      <span className={`bx-button-label ${sizes.fontSize[size]}`}>{children}</span>
      <span className='bx-button-background'></span>
    </button>
  ) : (
    <button type={type} className='bx-button'>
      {icon && <span className='bx-button-icon'>{icon}</span>}
      <span className={`bx-button-label ${sizes.fontSize[size]}`}>{children}</span>
      <span className='bx-button-background'></span>
    </button>
  )
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <div className={`bx-button-group ${className}`}>{children}</div>
}
