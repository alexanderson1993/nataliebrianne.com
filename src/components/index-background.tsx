import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import tw from "twin.macro"
import { useTheme } from "emotion-theming"
const IndexBackground = () => {
  const data = useStaticQuery(graphql`
    query IndexBackground {
      light: file(relativePath: { eq: "background-light.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      dark: file(relativePath: { eq: "background-dark.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const theme = useTheme<{ colorMode: string }>()

  return (
    <div
      css={[
        tw`fixed inset-0 z-0 bg-background transition-colors duration-500`,
        css`
          div,
          picture {
            height: 100%;
          }
        `,
      ]}
    >
      <Img
        css={[
          css`
            opacity: var(--bg-opacity-dark);
          `,
          tw`transition-opacity duration-500 absolute! inset-0`,
        ]}
        {...data.dark.childImageSharp}
      />
      <Img
        css={[
          css`
            opacity: var(--bg-opacity-light);
          `,
          tw`transition-opacity duration-500 absolute! inset-0`,
        ]}
        {...data.light.childImageSharp}
      />
    </div>
  )
}

export default IndexBackground
