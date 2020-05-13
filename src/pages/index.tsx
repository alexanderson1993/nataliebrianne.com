import React from "react"
import tw from "twin.macro"
import { css, keyframes } from "@emotion/core"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import { Link } from "gatsby"
import * as icons from "react-icons/all"
import IndexBackground from "../components/index-background"

const SocialLink = ({ icon, label, link }) => {
  const Icon = icons[icon]
  if (!Icon) return null
  return (
    <a
      href={link}
      target="_blank"
      title={label}
      className={`mx-4 p-2 border border-current rounded transition duration-200 hover:bg-gray-800 opacity-75 hover:opacity-100`}
    >
      <Icon aria-label={label} />
    </a>
  )
}
const IndexPage = ({ data }) => {
  const { front, site } = data
  return (
    <Layout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <IndexBackground />
      <section
        className={`flex-grow flex flex-col justify-center items-center text-center pb-40 z-10`}
      >
        <div
          css={css`
            p {
              ${tw`text-3xl font-thin`}
            }
            h1 {
              ${tw`text-6xl font-extrabold`}
            }
          `}
          dangerouslySetInnerHTML={{ __html: front.html }}
        ></div>
        <div className={`text-xl font-semibold mt-4 mb-8`}>
          {front.frontmatter.descriptions}
        </div>
        <div className={`text-2xl flex justify-between`}>
          {front.frontmatter.social.map(s => (
            <SocialLink key={s.link} {...s} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Front {
    front: markdownRemark(fileAbsolutePath: { glob: "**/front.md" }) {
      id
      html
      frontmatter {
        social {
          icon
          label
          link
        }
        descriptions
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
