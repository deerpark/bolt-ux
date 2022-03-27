import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

const news = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "120193012"}}, first: 20) {
      title
      slug
      excerpt
      date
      ${coverImage}
      ${author}
    }
  }
  ${responsiveImageFragment}
`

export default news
