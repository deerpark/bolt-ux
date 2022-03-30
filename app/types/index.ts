export type CategorySlug = 'notices' | 'news' | 'dev' | 'design' | 'uiux' | 'badminton'

export type Params = {
  category: CategorySlug,
}

export type Theme = 'light' | 'dark' | null

export type Settings = {
  theme: Theme
  collapse: boolean
}

export type Author = {
  name: string,
  picture: {
    url: string,
  },
}

export type Tab = {
  tabid: string,
  tabname: string,
  url?: string,
  tabcontents?: any,
}

export type Service = {
  list?: PostListItem[],
  techList?: PostListItem[],
}

export type ListItem = {
  title?: string | JSX.Element,
  thumb?: string | JSX.Element,
  contents?: (string | JSX.Element)[],
}

export type TabContextType = {
  post: Post,
  tabId?: string | null,
}

export type CoverImage = {
  srcSet: string,
  webpSrcSet: string,
  sizes: string,
  src: string,
  width: number,
  height: number,
  aspectRatio: number,
  alt: string,
  title: string,
  base64: string,
}

export type PostListItem = {
  title: string,
  url?: string,
  desc?: string,
  isdisplay: boolean,
  thumb?: {
    responsiveImage: CoverImage,
  },
}

export type Post = {
  id: string,
  title: string,
  slug: string,
  excerpt: string,
  aftercontent?: any,
  beforecontent?: any,
  content?: any,
  date: string,
  coverImage: {
    responsiveImage: CoverImage,
  },
  author: Author,
  category?: {
    id?: string,
    name: string,
    slug: string,
  },
  tags: string | null,
  tabhometext?: string,
  tabs?: Tab[],
  listsize?: 'small' | 'default' | 'large',
  listgroup?: {
    title: string
    listblock: PostListItem[]
  }[],
}

export type PostsProps = {
  firstPost?: Post,
  otherPosts?: Post[],
  category?: string,
}
