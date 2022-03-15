import { Link, Form, useLoaderData, Outlet } from 'remix'
import { datoQuerySubscription } from '~/lib/datocms'
import { Image, useQuerySubscription } from 'react-datocms'
import { responsiveImageFragment } from '~/lib/fragments'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query: `
      {
        promotions: allPromotions(orderBy: expiredat_DESC, first: 20) {
          title
          color {
            hex
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

  const previewEnabled = datoQuerySubscription.enabled === undefined || datoQuerySubscription.enabled === true

  const {
    data: { promotions },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <>
      <div className='bx-section'>
        {/* {previewEnabled ? (
          <Form method='post' action='/preview/stop'>
            This is page is showing draft content. <button>Click here</button> to exit preview mode.
          </Form>
        ) : (
          <Form method='post' action='/preview/start'>
            This is page is showing published content. <button>Click here</button> to enter preview mode!
          </Form>
        )} */}
        <section className='bx-section-row'>
          <ul className='promotions'>
            {promotions.map((promotion: any) => (
              <li key={promotion.title} className='promotion_item'>
                <Link to={promotion.url || './'} className='promotion_link'>
                  <div>
                    <Image className='promotion_image' data={promotion.banner.responsiveImage} />
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
