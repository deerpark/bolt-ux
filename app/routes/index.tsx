import { Link, useLoaderData, Outlet } from 'remix'
import { datoQuerySubscription } from '~/lib/datocms'
import { Image, useQuerySubscription } from 'react-datocms'
import { responsiveImageFragment } from '~/lib/fragments'
import { Footer } from '~/components/Footer'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query: `
      {
        promotions: allPromotions(orderBy: expiredat_ASC, first: 20) {
          title
          color {
            blue
            green
            red
          }
          url
          expiredat
          banner {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 776, h: 726 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ${responsiveImageFragment}
    `,
  })
}

export default function Index() {
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { promotions },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <>
      <div className='bx-section'>
        <section className='bx-section-row'>
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
        <section className='bx-section-row flex md:hidden items-start'>
          <Footer />
        </section>
      </div>
      <Outlet />
    </>
  )
}
