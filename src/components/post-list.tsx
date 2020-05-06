import React from "react"

import PostLink from "./post-link"
import tw from "twin.macro"
import { Global, css } from "@emotion/core"

const PostList = ({ posts }) => (
  <div css={tw`flex justify-center`}>
    <div
      css={css`
        max-width: 960px;
        margin: 0 2rem;
      `}
    >
      <h1
        css={[
          tw`text-4xl mb-4`,
          css`
            &::first-letter {
              border-bottom: #d27375 1px solid;
            }
          `,
        ]}
      >
        Blog
      </h1>
      <section css={tw`m-auto grid grid-cols-12 gap-8`}>
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
