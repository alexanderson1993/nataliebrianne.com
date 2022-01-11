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
        `}
        className="relative"
      >
        <IndexBackground />
        <div className="h-screen pt-16 flex items-center justify-center space-x-0 sm:space-x-8 md:space-x-16 lg:space-x-32 xl:space-x-48 flex-wrap md:flex-no-wrap">
          <Link to="/works/2020-05-06-constantine-capers-pennington-perplexity/">
            <div className="z-0">
              <Img
                css={css`
                  width: 34vh;
                  height: 50vh;
                  z-index: 0;
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75);
                `}
                objectFit="cover"
                {...data.cover.childImageSharp}
              />
              <h3 className="text-white z-0  relative text-2xl font-semibold text-center">
                Out Now!
              </h3>
              <div className="flex flex-col z-0 relative items-center justify-center">
                <a
                  href="https://www.amazon.com/Constantine-Capers-Pennington-Natalie-Brianne-ebook/dp/B08WS31F6L/ref=sr_1_1?dchild=1&keywords=Constantine+capers&qid=1614893154&sr=8-1"
                  target="_blank"
                  className="text-2xl font-bold w-full bg-pink-700 hover:bg-pink-800 active:bg-pink-900 text-center rounded shadow-md mb-4 px-4"
                >
                  EBook Edition
                </a>
                <a
                  href="https://www.amazon.com/dp/1953491138/ref=sr_1_2?dchild=1&keywords=Constantine+capers&qid=1614893154&sr=8-2"
                  target="_blank"
                  className="text-2xl font-bold w-full bg-pink-700 hover:bg-pink-800 active:bg-pink-900 text-center rounded shadow-md px-4"
                >
                  Paperback Edition
                </a>
              </div>
            </div>
          </Link>
          <div
            className={`flex flex-col justify-center items-center text-center`}
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
      <section className="md:-mt-48 mt-0">
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
