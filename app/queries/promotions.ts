import { responsiveImageFragment } from '~/lib/fragments'

export const promotions = `
  {
    promotions: allPromotions(orderBy: expiredat_ASC, first: 20) {
      title
      color {
        blue
        green
        red
      }
      url
      expiredat
      banner {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 776, h: 726 }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`
