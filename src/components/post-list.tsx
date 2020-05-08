import React from "react"

import PostLink from "./post-link"
import { Global, css } from "@emotion/core"

const PostList = ({ posts }) => (
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
      <section className={`m-auto grid grid-cols-12 gap-8`}>
        {posts.map(({ node }, i) => (
          <PostLink
            key={node.fields.slug}
            span={i % 5 <= 1 ? 6 : 4}
            {...node}
          />
        ))}
      </section>
    </div>
  </div>
)

export default PostList
