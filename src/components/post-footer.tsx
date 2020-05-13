import React from "react"
import { Link } from "gatsby"
import { FaTwitter, FaFacebook } from "react-icons/fa"
import Bio from "./bio"
import { css } from "@emotion/core"

const Footer = ({ previous, next, post, siteUrl }) => {
  return (
    <footer className={`mt-4 pt-3`}>
      <hr />
      <div
        css={css`
          margin: 2rem 0;
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          * {
            margin: 0 0.25rem;
          }
        `}
      >
        <p>Share:</p>
        <a
          href={`http://twitter.com/share?text=${post.frontmatter.title}&url=${siteUrl}${post.fields.slug}`}
          target="_blank"
          onClick={e => {
            e.preventDefault()
            const windowFeatures =
              "height=250,width=520,menubar=no,location=no,resizable=no,scrollbars=no,status=no"
            window.open(
              `http://twitter.com/share?text=${post.frontmatter.title}&url=${siteUrl}${post.fields.slug}`,
              "_blank",
              windowFeatures
            )
          }}
        >
          <FaTwitter />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${post.fields.slug}`}
          target="_blank"
          onClick={e => {
            e.preventDefault()
            const windowFeatures =
              "height=463,width=526,menubar=no,location=no,resizable=no,scrollbars=no,status=no"
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${post.fields.slug}`,
              "_blank",
              windowFeatures
            )
          }}
        >
          <FaFacebook />
        </a>
      </div>
      {/* <Bio /> */}
      {(previous || next) && (
        <ul className={`flex flex-wrap justify-between list-none p-0`}>
          <li
            className={`text-2xl transform transition-transform duration-200 origin-right hover:scale-110`}
          >
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            className={`text-2xl transform transition-transform duration-200 origin-left hover:scale-110`}
          >
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      )}
    </footer>
  )
}

export default Footer
