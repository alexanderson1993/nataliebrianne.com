import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Img from "gatsby-image"

const Posts = ({ location, data }) => {
  const { allMarkdownRemark, site } = data
  const books = allMarkdownRemark.edges
  const siteTitle = site.siteMetadata.title
  return (
    <Layout >
      <SEO title="Books" />
      <div className={`flex justify-center`}>
    <div
      css={css`
        max-width: 960px;
        margin: 0 2rem;
      `}
    >
      <h1
        className={`text-4xl mb-4`}
        css={[
          css`
            &::first-letter {
              border-bottom: #d27375 1px solid;
            }
          `,
        ]}
      >
        Blog
      </h1>
      <section className={`m-auto grid grid-cols-1 lg:grid-cols-12 gap-8`}>
        {books.map(({ node }, i) => (
          <Link
          key={node.id}
          className={`block relative no-underline p-4 flex flex-col justify-end transition-color duration-500 col-span-1 lg:col-span-3 h-56
          } ${!node.frontmatter.thumbnail?.childImageSharp?.fluid ? `bg-backgroundOff` : ""}`}
          css={css`
            &:hover > div > div {
              filter: saturate(1) blur(0);
            }
          `}
          to={node.fields.slug}
        >
<h2
        css={css`
          z-index: 2;
        `}
        className={`text-2xl`}
      >
              <small
        css={css`
          z-index: 2;
        `}
      >
        {node.frontmatter.date}
      </small>
      </h2>
          </Link>
        ))}
      </section>
    </div>
  </div>    </Layout>
  )
}

export default Posts
