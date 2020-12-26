import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import tw from "twin.macro"

const AboutPage =({data}) => {
  const { about, site } = data
  return (
    <Layout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />    
        <div css={tw`flex justify-center`}>
          <section
            css={css`
              max-width: 1200px;
              margin: 0 2rem;
            `}
          >
        <div className="flex flex-wrap lg:flex-no-wrap" css={css`
         p {
                ${tw`mb-8 text-2xl leading-10`}
              }
        `}>
      <Img
      className="lg:mr-4 lg:mt-0 m-auto" css={css`min-width:400px;`}
        {...about.frontmatter.image.childImageSharp}
        alt={about.frontmatter.title}
      />        
      <div >
          <h2 className="text-4xl">{about.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{__html:about.html}}/>
        </div>

      </div>
      </section>
      </div>
    </Layout>
  )
}

export default AboutPage
export const query = graphql`
query About {
  about: markdownRemark(fileAbsolutePath: {glob: "**/about.md"}) {
    id
    html
    frontmatter {
      title
      image {
        childImageSharp {
          fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
        }
      }
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}

`
