import { Link } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const PostLink = ({
  frontmatter: { title, date, thumbnail },
  fields: { slug },
  excerpt,
  span = 6,
}) => {
  const src = thumbnail?.childImageSharp?.fluid

  return (
    <Link
      className={`block relative no-underline p-4 flex flex-col justify-end transition-color duration-500 ${
        span === 6 ? `col-span-6 h-64 ` : `col-span-4 h-56 `
      } ${!src ? `bg-backgroundOff` : ""}`}
      css={css`
        &:hover > div > div {
          filter: saturate(1) blur(0);
        }
      `}
      to={slug}
    >
      {src && (
        <div
          css={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: var(--color-background);
            overflow: hidden;
            z-index: 1;
            & > div {
              height: 100%;
              opacity: 0.2;
              transform: scale(1.2);
              filter: saturate(0.3) blur(2px);
              transition: all 0.2s ease;
            }
          `}
        >
          <Img fluid={src}></Img>
        </div>
      )}
      <h2
        css={css`
          z-index: 2;
        `}
        className={`text-2xl`}
      >
        {title || slug}
      </h2>
      <small
        css={css`
          z-index: 2;
        `}
      >
        {date}
      </small>
      <p
        css={css`
          z-index: 2;
        `}
      >
        {excerpt}
      </p>
    </Link>
  )
}

export default PostLink
