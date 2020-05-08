import Img from "gatsby-image"
import { css } from "@emotion/core"

const PostImage = ({ src }) => {
  if (!src) return null
  return (
    <div
      className={`my-16`}
      css={css`
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
      `}
    >
      <Img fluid={src}></Img>
    </div>
  )
}

export default PostImage
