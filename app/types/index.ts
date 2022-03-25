export type Author = {
  name: string,
  picture: {
    url: string,
  },
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

export type Tab = {
  tabid: string,
  tabname: string,
  tabcontents: any,
}

export type ListItem = {
  title: string,
  url?: string,
  desc?: string,
  isdisplay: boolean,
  thumb?: {
    responsiveImage: CoverImage,
  },
}

export type Post = {
  title: string,
  slug: string,
  excerpt: string,
  content: any,
  date: string,
  coverImage: {
    responsiveImage: CoverImage,
  },
  author: Author,
  category?: {
    id?: string,
    name: string,
  },
  tags: string | null,
  tabhometext?: string,
  tabs?: Tab[],
  listsize?: 'small' | 'default' | 'large',
  listgroup?: {
    title: string
    listblock: ListItem[]
  }[],
}

export type PostsProps = {
  firstPost?: Post,
  otherPosts?: Post[],
  category?: string,
}
