import { /* Link, */ useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import invariant from 'tiny-invariant'
import { StructuredText, Image, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { responsiveImageFragment, metaTagsFragment } from '~/lib/fragments'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'
import { Layout } from '~/components/Layout'

export const loader = async ({ request, params }: any) => {
  invariant(params.slug, 'expected params.slug')

  return datoQuerySubscription({
    request,
    query: `
      query PostBySlug($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          excerpt
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
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
        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
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
      ${metaTagsFragment}
    `,
    variables: {
      slug: params.slug,
    },
  })
}

export const meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { post },
    },
  },
}: any) => {
  return toRemixMeta(post.seo)
}

export default function PostSlug() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, desc }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { post, /* morePosts, */ promotion },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout
      {...{
        title: post?.title || title,
        Icon: <Avatar name={post.author.name} picture={post.author.picture} />,
        desc: post?.excerpt || desc,
        promotion,
        prevRoute,
        cover: <Image data={post.coverImage.responsiveImage} />,
        date: <Date dateString={post.date} />,
      }}
    >
      <div className='bx-article'>
        <div className='bx-article-body'>
          <div className='prose prose-slate dark:prose-invert'>
            <StructuredText
              data={post.content}
              renderBlock={({ record }: any) => {
                if (record.__typename === 'ImageBlockRecord') {
                  return <Image className='bx-article-image' data={record.image.responsiveImage} />
                }

                return (
                  <>
                    <p>Don't know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                )
              }}
            />
          </div>
        </div>
      </div>
      {/* <section className='section'>
        <div className='section__title'>More posts</div>
        <ul className='grid'>
          {morePosts.map((post: any) => (
            <li key={post.slug} className='grid__item'>
              <Link to={`/posts/${post.slug}`} className='grid__link'>
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
      </section> */}
    </Layout>
  )
}
