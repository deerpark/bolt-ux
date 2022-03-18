import { Image } from 'react-datocms'

export type ShadowCardItem = {
  icon?: JSX.Element,
  title: string,
  photo: any,
  contents?: string[] | JSX.Element[],
  extra?: JSX.Element,
}

type ShadowCardProps = {
  item: ShadowCardItem,
}

export function ShadowCard({ item }: ShadowCardProps) {
  const { title, icon, photo, contents, extra } = item
  return (
    <div className='bx-shadow-card'>
      <div className='bx-shadow-card-container'>
        <div className='bx-shadow-card-body'>
          <div className='bx-shadow-card-thumb'>
            <div className='bx-shadow-card-thumb-cover'>
              <Image className='bx-shadow-card-thumb-img' data={photo.responsiveImage} />
            </div>
          </div>
          <div className='bx-shadow-card-contents'>
            <div className='bx-shadow-card-title'>
              {icon && icon}
              <span>{title}</span>
            </div>
            {contents && (
              <ul className='bx-list-items'>
                {contents.map((content, index) => (
                  <li key={index.toString()}>{content}</li>
                ))}
              </ul>
            )}
            <div className='bx-shadow-card-desc-extra'>{extra}</div>
          </div>
          <div className='bx-shadow-card-extra'>{extra}</div>
        </div>
        <div className='bx-shadow-card-shadow1'></div>
        <div className='bx-shadow-card-shadow2'></div>
      </div>
    </div>
  )
}
