import { graphql } from "gatsby"
import BooksPage from "../components/books"

export default BooksPage

export const query = graphql`
  query BooksQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/works/**" } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            progress
            published
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 500, webpQuality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
