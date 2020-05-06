import Img from "gatsby-image"
import tw from "twin.macro"
import { css } from "@emotion/core"

const PostImage = ({ src }) => {
  if (!src) return null
  return (
    <div
      css={[
        tw`my-16`,
        css`
          width: 100vw;
          position: relative;
          z-index: -1;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          &,
          * {
            height: 500px;
          }
        `,
      ]}
    >
      <Img fluid={src}></Img>
    </div>
  )
}

export default PostImage
