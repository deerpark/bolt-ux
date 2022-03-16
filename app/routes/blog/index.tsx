import { useLocation } from 'react-router-dom'
import { Link, useLoaderData, Outlet } from 'remix'
import { Image, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { responsiveImageFragment } from '~/lib/fragments'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'

export const loader = async ({ request }: any) => {
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
  const prevRoute = usePrevRoute(pathname)

  const {
    data: {
      posts: [firstPost, ...otherPosts],
    },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title, Icon, desc, prevRoute }}>
      <section className='bx-post aspect-video'>
        <Link className='bx-post-link' to={`/blog/posts/${firstPost.slug}`}>
          <Image className='bx-post-thumb' data={firstPost.coverImage.responsiveImage} />
          <div className='bx-post-info'>
            <div className='bx-post-meta'>
              <h5 className='bx-post-title'>{firstPost.title}</h5>
              <div className='bx-post-date'>
                <Date dateString={firstPost.date} />
              </div>
            </div>
            <div className='bx-post-avatar'>
              <Avatar name={firstPost.author.name} picture={firstPost.author.picture} />
            </div>
          </div>
        </Link>
        <span className='bx-post-background'></span>
      </section>
      <ul className='bx-other-posts'>
        {otherPosts.map((post: any) => (
          <li key={post.slug}>
            <section className='bx-post aspect-video'>
              <Link className='bx-post-link' to={`/blog/posts/${post.slug}`}>
                <Image className='bx-post-thumb' data={post.coverImage.responsiveImage} />
                <div className='bx-post-info'>
                  <div className='bx-post-meta'>
                    <h5 className='bx-post-title'>{post.title}</h5>
                    <div className='bx-post-date'>
                      <Date dateString={post.date} />
                    </div>
                  </div>
                  <div className='bx-post-avatar'>
                    <Avatar name={post.author.name} picture={post.author.picture} />
                  </div>
                </div>
              </Link>
              <span className='bx-post-background'></span>
            </section>
          </li>
        ))}
      </ul>
      <Outlet />
    </Layout>
  )
}
