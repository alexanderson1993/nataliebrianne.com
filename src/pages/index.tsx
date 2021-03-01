import React from "react"
import tw from "twin.macro"
import { css, keyframes } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
      className={`z-0 mx-4 p-2 border border-current rounded transition duration-200 hover:bg-gray-800 opacity-75 hover:opacity-100`}
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
        className="relative"
      >
        <IndexBackground />
        <div className="pb-40 h-screen flex items-center justify-between px-96">
          <div className="z-0">
            <Img
              css={css`
                width: 400px;
                z-index: 0;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75);
              `}
              objectFit="contain"
              {...data.cover.childImageSharp}
            />
            <h3 className="text-white z-0  relative text-2xl font-semibold text-center">
              Coming: March 2021
            </h3>
          </div>
          <div
            className={`flex flex-col justify-center items-center text-center h-full`}
          >
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
          </div>
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
    cover: file(relativePath: { eq: "c-cover.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
