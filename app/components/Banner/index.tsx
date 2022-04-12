import { Button } from 'bolt-ui'
import * as Icon from '~/components/Icon'

export type Promotion = {
  title: string,
  url?: string,
  label?: string,
  color: {
    red: number,
    blue: number,
    green: number,
  },
  textcolor: {
    hex: string,
  },
}

export function Banner({ title, url, label }: Promotion) {
  return (
    <div className='bx-banner bg-yellow-400 shadow-lg shadow-yellow-100 dark:shadow-yellow-400/40'>
      <div className='bx-banner-icon'>
        <Icon.Banner />
      </div>
      <div className='bx-banner-title'>
        <span>{title}</span>
      </div>
      {url && (
        <div className='bx-banner-link'>
          <Button size='small' href={url}>
            {label || '바로가기'}
          </Button>
        </div>
      )}
    </div>
  )
}
