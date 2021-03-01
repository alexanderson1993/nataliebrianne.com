import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostFooter from "./post-footer"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"
import PostImage from "./post-image"
import SignupForm from "./signupForm"
import Img from "gatsby-image"
const Book = ({
  data: {
    markdownRemark: post,
    site: {
      siteMetadata: { title, siteUrl },
    },
  },
}) => {
  console.log(post)
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
        image={``}
      />
      <Global
        styles={css`
          /* Styles for blog paragraph tags */
          main {
            article {
              h1 {
                ${tw`text-5xl font-bold`}
              }
              h2 {
                ${tw`text-4xl font-bold`}
              }
              h3 {
                ${tw`text-3xl font-bold`}
              }
              h4 {
                ${tw`text-2xl font-bold`}
              }
              h5 {
                ${tw`text-xl font-bold`}
              }
              h6 {
                ${tw`text-xl`}
              }
              strong {
                ${tw`font-bold`}
              }

              p {
                ${tw`mb-8 text-2xl leading-10`}
              }
              li {
                ${tw`text-2xl list-disc ml-4 mb-4`}
              }
              ul {
                ${tw`mb-8`}
              }
              img {
                width: 100%;
                border-radius: 1rem;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                  0 10px 10px -5px rgba(0, 0, 0, 0.04);

                transition: box-shadow 0.2s ease;
                &:hover {
                  box-shadow: 0 20px 20px -5px rgba(0, 0, 0, 0.2),
                    0 10px 5px -5px rgba(0, 0, 0, 0.08);
                }
              }
            }
          }
        `}
      />
      <Layout>
        <div css={tw`flex justify-center`}>
          <section
            css={css`
              max-width: 100%;
              width: 1200px;
              margin: 0 2rem;
            `}
          >
            <Img
              className="w-96 m-auto shadow-2xl"
              fluid={post.frontmatter.thumbnail?.childImageSharp?.fluid}
            ></Img>
            <h1 className={`text-6xl font-bold text-center`}>
              {post.frontmatter.title}
            </h1>
            <hr className="w-1/3 m-auto my-8" />
            <article
              css={css`
                max-width: 80ch;
              `}
              className="prose m-auto pt-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></article>
            <SignupForm />
          </section>
        </div>
      </Layout>
    </>
  )
}
export default Book
