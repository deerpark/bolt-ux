import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

const notice = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "116676845"}}, first: 20) {
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

export default notice
