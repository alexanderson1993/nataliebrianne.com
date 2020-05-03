import React from "react"
import tw from "twin.macro"

const PostTitle = props => (
  <h1 css={tw`text-6xl font-bold text-center`} {...props} />
)

export default PostTitle
