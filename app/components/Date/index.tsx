import { parseISO, format } from 'date-fns'
import styles from './styles.css'

type DateProps = {
  dateString: string,
}

export const links = () => [{ rel: 'stylesheet', href: styles }]

export function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)
  return (
    <time className='bx-post-image' dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
