import { parseISO, format } from 'date-fns'

type DateProps = {
  dateString: string,
}

export function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)
  return (
    <time className='bx-post-image' dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
