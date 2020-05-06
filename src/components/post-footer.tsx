import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

import Bio from "./bio"

const Footer = ({ previous, next }) => {
  return (
    <footer css={tw`mt-4 pt-3`}>
      <hr />
      <Bio />
      {(previous || next) && (
        <ul css={tw`flex flex-wrap justify-between list-none p-0`}>
          <li
            css={tw`text-2xl transform transition-transform duration-200 origin-right hover:scale-110`}
          >
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            css={tw`text-2xl transform transition-transform duration-200 origin-left hover:scale-110`}
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
