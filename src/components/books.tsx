import { css } from "@emotion/core"
import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Img from "gatsby-image"
import { Socket } from "dgram"

const Posts = ({ location, data }) => {
  const { allMarkdownRemark, site } = data
  const books = allMarkdownRemark.edges
  const siteTitle = site.siteMetadata.title
  return (
    <Layout>
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
            Current Works
          </h1>
          <section className={`m-auto grid grid-cols-1 lg:grid-cols-12 gap-8`}>
            {books
              .filter(({ node }) => node.frontmatter.published)
              .map(({ node }, i) => (
                <Link
                  key={node.id}
                  className={`relative no-underline p-4 flex flex-col justify-end transition-color duration-500 col-span-1 lg:col-span-3
          } ${
            !node.frontmatter.thumbnail?.childImageSharp?.fluid
              ? `bg-backgroundOff`
              : ""
          }`}
                  to={node.fields.slug}
                >
                  {node.frontmatter.thumbnail?.childImageSharp?.fluid && (
                    <Img
                      css={css`
                        z-index: 0;
                        width: 300px;
                      `}
                      objectFit="cover"
                      {...node.frontmatter.thumbnail?.childImageSharp}
                    />
                  )}

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
      </div>
    </Layout>
  )
}

export default Posts
