import React from "react"
import tw from "twin.macro"
import { css, keyframes } from "@emotion/core"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
import { Link } from "gatsby"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGoodreadsG,
  FaPinterestP,
} from "react-icons/all"
import IndexBackground from "../components/index-background"
import SignupForm from "../components/signupForm"

const icons = {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGoodreadsG,
  FaPinterestP,
}
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
      <section
        css={css`
          margin-top: -137px;
          height: 95vh;
        `}
        className={`relative flex flex-col justify-center items-center text-center pb-40 h-screen`}
      >
        <IndexBackground />

        <div
          className="z-0"
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
        <div className={`text-xl font-semibold mt-4 mb-8 z-0`}>
          {front.frontmatter.descriptions}
        </div>
        <div className={`text-2xl flex justify-between`}>
          {front.frontmatter.social.map(s => (
            <SocialLink key={s.link} {...s} />
          ))}
        </div>
      </section>
      <section
        css={css`
          margin-top: -100px;
        `}
      >
        <SignupForm />
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
