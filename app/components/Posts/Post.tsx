import { Link } from 'remix'
import { StructuredText, Image } from 'react-datocms'
import { Post as PostType } from '~/types'
import * as Icon from '~/components/Icon'

type PostProps = {
  post: PostType,
  morePosts?: PostType[],
  categoryId?: string,
  tabId?: string | null,
  outlet?: any,
}

type ContentsProps = {
  data: any,
  children?: any,
}

export function Contents({ data }: ContentsProps) {
  return (
    <div className='prose-sm prose-slate dark:prose-invert'>
      {!!data && (
        <StructuredText
          data={data}
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
      )}
    </div>
  )
}

export function Post({ post /* , morePosts  */, outlet, tabId }: PostProps) {
  console.log(tabId, post)
  return (
    <>
      <div className='bx-article'>
        <div className='bx-article-header'>
          <ul className='bx-tabs'>
            {!!post.tabhometext && (
              <li key={post.tabhometext} className={tabId === post.slug ? 'bx-tab-active' : ''}>
                <Link to={`/${post.category?.name.toLocaleLowerCase()}/${post.slug}`}>{post.tabhometext}</Link>
              </li>
            )}
            {post.tabs &&
              post.tabs.map(tab => (
                <li key={tab.tabid} className={tabId === tab.tabid ? 'bx-tab-active' : ''}>
                  <Link to={`/${post.category?.name.toLocaleLowerCase()}/${post.slug}/${tab.tabid}`}>
                    {tab.tabname}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className='bx-article-body'>{tabId === post.slug ? <Contents data={post.content} /> : outlet}</div>
        <div className='bx-article-footer'>
          {post.tags && (
            <div className='bx-tags'>
              {post.tags.split(',').map(tag => (
                <Link className='bx-tag' key={tag.trim()} to={`/posts/${tag.trim()}`}>
                  <Icon.TagLight />
                  <span>{tag.trim()}</span>
                </Link>
              ))}
            </div>
          )}
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
    </>
  )
}
