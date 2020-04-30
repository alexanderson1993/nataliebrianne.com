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
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
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
            ${tw`mb-4`}
          }
          li {
            ${tw`list-disc ml-4 mb-4`}
          }
        }
      `}
    />
    <Layout>
      <main>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  </>
)

export default Post
