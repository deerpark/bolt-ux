import { Link, useLoaderData, Outlet } from 'remix'
import { datoQuerySubscription } from '~/lib/datocms'
import { Image, useQuerySubscription } from 'react-datocms'
import { promotion as query } from '~/queries'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Index() {
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { promotions },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <>
      <div className='bx-section max-w-112'>
        <section className='bx-section-row hidden md:flex'>
          <ul className='bx-promotions'>
            {promotions.map((promotion: any) => (
              <li key={promotion.title} className='bx-promotion-item'>
                <Link to={promotion.url || './'} className='bx-promotion-link'>
                  <div>
                    <Image
                      className='bx-promotion-image'
                      data={promotion.banner.responsiveImage}
                      style={{
                        '--tw-shadow-color': `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
                        '--tw-shadow': 'var(--tw-shadow-colored)',
                      } as React.CSSProperties}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Outlet />
    </>
  )
}
