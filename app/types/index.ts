export type Author = {
  name: string,
  picture: {
    url: string,
  },
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

export type Post = {
  title: string,
  slug: string,
  excerpt: string,
  date: string,
  coverImage: {
    responsiveImage: CoverImage,
  },
  author: Author,
}

export type PostsProps = {
  firstPost: Post,
  otherPosts: Post[],
}
