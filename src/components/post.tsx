import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostFooter from "./post-footer"
import { Global, css } from "@emotion/core"
import tw from "twin.macro"

const Post = ({
  data: {
    blogPost: post,
    site: {
      siteMetadata: { title },
    },
  },
  data,
  location,
  previous,
  next,
}) => {
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
      />
      <Global
        styles={css`
          /* Styles for blog paragraph tags */
          main {
            p {
              ${tw`mb-8 text-xl leading-9`}
            }
            li {
              ${tw`list-disc ml-4 mb-4`}
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
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <article css={tw`mt-24`}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </article>
            <PostFooter {...{ previous, next }} />
          </section>
        </div>
      </Layout>
    </>
  )
}
export default Post
