import { metaTagsFragment } from '~/lib/fragments'

export const root = `
  {
    site: _site {
      favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allCategories {
      order
      id
      name
      slug
      desc
      display
      sidebar
      icon {
        url
      }
    }
  }
  ${metaTagsFragment}
`
