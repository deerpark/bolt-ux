import { Button, ButtonGroup } from 'bolt-ui'
import { HeroString } from '~/lib/config'

type HeroProps = {
  heroString: HeroString,
  desc?: string,
  links?: { url?: string, label: string, handler?: () => void | undefined }[],
  className?: string,
}

export function Hero({ heroString = [['', '']], desc, links, className }: HeroProps) {
  return (
    <div className={`bx-hero ${className ? className : ''}`}>
      <div className='bx-hero-promotion'>
        <div className='bx-hero-heading'>
          {heroString.map(heading => (
            <div key={heading[0]} className='bx-hero-heading-text'>
              <span className='font-black'>{heading[0]}</span>
              <span className='font-thin'>{heading[1]}</span>
            </div>
          ))}
        </div>
        {desc && <div className='bx-hero-desc'>{desc}</div>}
        {links && (
          <div className='bx-hero-links'>
            <ButtonGroup className='flex'>
              {links.map(link =>
                link.url ? (
                  <Button key={link.url} href={link.url} size='large'>
                    {link.label}
                  </Button>
                ) : (
                  <Button key={link.label} onClick={link.handler} size='large'>
                    {link.label}
                  </Button>
                )
              )}
            </ButtonGroup>
          </div>
        )}
      </div>
    </div>
  )
}
