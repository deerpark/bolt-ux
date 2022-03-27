import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

const posts = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, first: 20) {
      title
      slug
      excerpt
      date
      category {
        name
        slug
      }
      ${coverImage}
      ${author}
    }
  }
  ${responsiveImageFragment}
`

export default posts
