import { Link } from 'remix'
import { Image } from 'react-datocms'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'
import { PostsProps } from '~/types'

export function Posts({ firstPost, otherPosts }: PostsProps) {
  return (
    <>
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
    </>
  )
}
