import { graphql } from "gatsby"
import BookPage from "../components/book"

export default BookPage

export const query = graphql`
  query BookPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        progress
        keywords
        links {
          name
          description
        }
        bios {
          description
          name
        }
        art {
          description
          title
        }
        thumbnail {
          childImageSharp {
            fluid(maxHeight: 500, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
