import { useLocation } from 'react-router-dom'
import { Link, useLoaderData, Outlet } from 'remix'
import { Image, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { responsiveImageFragment } from '~/lib/fragments'
import { useNav, Route } from '~/lib/config'
import { Header } from '~/components/Header'
import { Avatar, links as avatarLinks } from '~/components/Avatar'
import { Date, links as dateLinks } from '~/components/Date'
import { Banner } from '~/components/Banner'

export function links() {
  return [...avatarLinks(), ...dateLinks()]
}

export const loader = async ({ request, params }: any) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query: `
      {
        posts: allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
        promotion: promotion(orderBy: expiredat_ASC, locale: ko_KR) {
          title(locale: ko_KR)
          url
          color {
            red
            green
            blue
          }
          textcolor {
            hex
          }
          label(locale: ko_KR)
        }
      }
      ${responsiveImageFragment}
    `,
  })
  return {
    ...querySubscription,
  }
}

export default function Index() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc }: Route = useNav(pathname)

  const {
    data: {
      posts: [firstPost, ...otherPosts],
      promotion,
    },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <>
      <div className='bx-section'>
        {/* <div className='preview'>
          {previewEnabled ? (
            <Form method='post' action='/blog/preview/stop'>
              This is page is showing draft content. <button>Click here</button> to exit preview mode.
            </Form>
          ) : (
            <Form method='post' action='/blog/preview/start'>
              This is page is showing published content. <button>Click here</button> to enter preview mode!
            </Form>
          )}
        </div> */}
        <Header {...{ title, Icon, desc }} />
        <Banner {...promotion} />
        <section className='section'>
          <Image className='grid__image' data={firstPost.coverImage.responsiveImage} />
          <Link to={`/blog/posts/${firstPost.slug}`}>
            <h5 className='grid__title'>{firstPost.title}</h5>
          </Link>

          <Date dateString={firstPost.date} />
          <Avatar name={firstPost.author.name} picture={firstPost.author.picture} />
        </section>
        <section className='section'>
          <ul className='grid'>
            {otherPosts.map((post: any) => (
              <li key={post.slug} className='grid__item'>
                <Link to={`/blog/posts/${post.slug}`} className='grid__link'>
                  <div>
                    <Image className='grid__image' data={post.coverImage.responsiveImage} />
                    <p className='grid__title'>{post.title}</p>
                    <Date dateString={post.date} />
                    <p className='date'>{post.excerpt}</p>
                    <Avatar name={post.author.name} picture={post.author.picture} />
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
