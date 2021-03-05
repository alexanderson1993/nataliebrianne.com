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

const Post = ({
  data: {
    markdownRemark: post,
    site: {
      siteMetadata: { title, siteUrl },
    },
    previous,
    next,
  },
  location,
}) => {
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={post.frontmatter.keywords}
        image={`${siteUrl}${post.fields.slug}twitter-card.jpg`}
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
              max-width: 960px;
              margin: 0 2rem;
            `}
          >
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDate>{post.frontmatter.date}</PostDate>
            <PostImage
              src={post.frontmatter.thumbnail?.childImageSharp?.fluid}
            ></PostImage>
            <article
              css={[
                tw`mt-12 mx-auto`,
                css`
                  max-width: 700px;
                `,
              ]}
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></article>
            <SignupForm />
            <PostFooter siteUrl={siteUrl} post={post} {...{ previous, next }} />
          </section>
        </div>
      </Layout>
    </>
  )
}
export default Post
