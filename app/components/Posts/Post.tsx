import {createRef, useEffect} from 'react'
import { Link } from 'remix'
import { StructuredText, Image } from 'react-datocms'
import { Post as PostType } from '~/types'
import * as Icon from '~/components/Icon'
import { Tabs } from '~/components/Tabs'

type PostProps = {
  post: PostType,
  morePosts?: PostType[],
  categoryId?: string,
  tabId?: string | null,
  outlet?: any,
  pathname: string,
}

type ContentsProps = {
  data: any,
  children?: any,
}

const disqusSettings = {
  src: 'https://bolt-ux.disqus.com/embed.js',
  'data-timestamp': (+new Date()).toString(),
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

declare global {
  interface Window {
    disqus_config: () => void;
    page: {
      url: string,
      identifier: string,
      title: string,
      category_id: string | undefined,
    };
  }
}

const bxListSize = {
  small: 'bx-list-small',
  default: 'bx-list-default',
  large: 'bx-list-large',
}

export function Post({ post /* , morePosts  */, outlet, tabId, pathname }: PostProps) {
  const ref = createRef<HTMLDivElement>()
  const tabs = post?.tabs?.length ? [{
    tabid: post.slug,
    tabname: post.tabhometext || '',
    url: `/${post.category?.name.toLocaleLowerCase()}/${post.slug}`,
  }, ...post.tabs.map(tab => {
    tab.url = `/${post.category?.name.toLocaleLowerCase()}/${post.slug}/${tab.tabid}`
    return tab
  })] : []
  useEffect(() => {
    const disqus = document.createElement('script')
    Object.entries(disqusSettings).forEach(([key, value]) => {
      disqus.setAttribute(key, value)
    })
    ref?.current?.appendChild(disqus)
    if (window) {
      window.disqus_config = function () {
        const identifier = pathname || `${post.category?.slug} || 'posts'}/${post.slug}`
        this.page = this.page || {}
        this.page.url = 'https://www.bolt-ux.com' + identifier
        this.page.identifier = post.id || identifier 
        this.page.title = post.title
        this.page.category_id = post.category?.id || undefined
      }
      window.disqus_config()
    }
  }, [ref, pathname, post])
  return (
    <>
      <div className='bx-article'>
        <div className='bx-article-header'>
          {!!post.beforecontent && <Contents data={post.beforecontent} />}
          {!!post?.tabs?.length && <Tabs currentId={tabId || post.slug} tabs={tabs} />}
        </div>
        {!!post.aftercontent && <Contents data={post.aftercontent} />}
        {!!post.listsize &&
          !!post.listgroup?.length &&
          post.listgroup.map(group => (
            <div key={group.title} className=''>
              <h5 className='bx-h5'>{group.title}</h5>
              {!!group.listblock.length && (
                <ul className={`bx-list ${bxListSize[post.listsize || 'default']}`}>
                  {group.listblock.map(item => {
                    const itemContents = (
                      <div className='bx-contents-card'>
                        {item?.thumb && (
                          <div className='bx-contents-card-thumbnail'>
                            <Image className='bx-thumbnail' data={item?.thumb?.responsiveImage} />
                          </div>
                        )}
                        <div className='bx-contents-card-body'>
                          <div className='bx-contents-card-title'>{item.title}</div>
                          {!!item.desc && <div className='bx-contents-card-desc'>{item.desc}</div>}
                        </div>
                      </div>
                    )
                    return (
                      <li key={item.title} className={item.isdisplay ? '' : 'hidden'}>
                        {!item.url ? (
                          itemContents
                        ) : item.url?.includes('://') ? (
                          <a className='bx-contents-card-link' href={item.url} target='_blank' rel='noreferrer'>
                            {itemContents}
                          </a>
                        ) : (
                          <Link className='bx-contents-card-link' to={item.url}>
                            {itemContents}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          ))}
        <div className='bx-article-body'>
          {tabId === post.slug ? !!post.content && <Contents data={post.content} /> : outlet}
        </div>
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
      <div id="disqus_thread" ref={ref} />
    </>
  )
}
