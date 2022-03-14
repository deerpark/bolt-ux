import styles from './styles.css'

type AvatarProps = {
  name: string,
  picture: {
    url?: string,
  },
}

export const links = () => [{ rel: 'stylesheet', href: styles }]

export function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className='avatar__container'>
      <img src={picture.url} className='avatar__picture' alt={name} />
      <div className='avatar__name'>{name}</div>
    </div>
  )
}
