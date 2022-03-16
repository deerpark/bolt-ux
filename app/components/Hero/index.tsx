import { Link } from 'remix'
import { Button, ButtonGroup } from '~/components/Button'
import { HeroString } from '~/lib/config'
import * as Icon from '~/components/Icon'

type HeroProps = {
  heroString: HeroString,
  desc?: string,
  links?: { url?: string, label: string, handler?: () => void | undefined }[],
}

export function Hero({ heroString = [['', '']], desc, links }: HeroProps) {
  return (
    <div className='bx-hero'>
      <div className='bx-hero-logo'>
        <Link to='/'>
          <Icon.Logo />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        {heroString.map(heading => (
          <div
            key={heading[0]}
            className='inline-flex gap-x-0.5 text-2xl leading-tight text-slate-700 dark:text-slate-200 even:ml-5'
          >
            <span className='font-black'>{heading[0]}</span>
            <span className='font-thin'>{heading[1]}</span>
          </div>
        ))}
      </div>
      {desc && <div className='inline-flex max-w-[200px] text-xs mt-3 text-center'>{desc}</div>}
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
  )
}
