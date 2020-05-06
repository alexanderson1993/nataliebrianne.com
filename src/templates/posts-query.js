import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
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
            tags
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
