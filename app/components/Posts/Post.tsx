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

export function Post({ post, morePosts , outlet, tabId }: PostProps) {
  const tabs = post?.tabs?.length ? [{
    tabid: post.slug,
    tabname: post.tabhometext || '',
    url: `/${post.category?.slug}/${post.slug}`,
  }, ...post.tabs.map(tab => {
    tab.url = `/${post.category?.slug}/${post.slug}/${tab.tabid}`
    return tab
  })] : []
  const tabcontents = tabId && post.tabs?.length ? post.tabs.find(tab => tab.tabid === tabId)?.tabcontents : null
  const toc = tabcontents ? [...tabcontents.value.document.children.filter((item: any) => item.type === 'heading')] : [...post.beforecontent.value.document.children.filter((item: any) => item.type === 'heading'),...post.aftercontent.value.document.children.filter((item: any) => item.type === 'heading'),...post.content.value.document.children.filter((item: any) => item.type === 'heading')]
  return (
    <div className='bx-sections'>
      <div className='bx-section bx-article'>
        <div className='bx-article-header'>
          {post.beforecontent && <Contents data={post.beforecontent} />}
          {!!post?.tabs?.length && <Tabs currentId={tabId || post.slug} tabs={tabs} />}
        </div>
        {!!toc?.length && <div className='bx-toc'><h2 title='Table of Content'><span>목차</span></h2><ul>
          {toc.map(heading => <li key={heading.children[0].value}><span>{heading.children[0].value}</span></li>)}
        </ul></div>}
        {post.aftercontent && <Contents data={post.aftercontent} />}
        {post.listsize &&
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
        <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1315238860718549"
            crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-format="fluid"
            data-ad-layout-key="-6k+cw+58-14-6a"
            data-ad-client="ca-pub-1315238860718549"
            data-ad-slot="9419847376"></ins>
        <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }}></script>
        <div className='bx-article-body'>
          {tabId === post.slug ? post.content && <Contents data={post.content} /> : outlet}
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
      <section className='bx-section'>
        <h5 className='bx-h5 mx-5 md:mx-8'>More posts</h5>
        <ul>
          {morePosts && !!morePosts.length && morePosts.map((post: any) => (
            <li className='bx-post bx-other-post' key={post.slug}>
                <Link className='bx-post-link' to={`/${post.category?.slug || 'posts'}/${post.slug}`}>
                  <div className='bx-post-thumb'>
                    <Image className='bx-thumbnail' data={post.coverImage.responsiveImage} />
                  </div>
                  <div className='bx-post-info'>
                    <div className='bx-post-meta'>
                      <h5 className='bx-post-title'>
                        <span className='bx-post-title-text'>{post.title}</span>
                        <span className='bx-post-comments-count'>
                          <Icon.Comments />
                          <span className='disqus-comment-count' data-disqus-identifier={post.id}>
                            0
                          </span>
                        </span>
                      </h5>
                      <div className='bx-post-desc'>{post.excerpt}</div>
                    </div>
                  </div>
                </Link>
              </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
