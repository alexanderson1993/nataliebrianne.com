import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

import Bio from "./bio"

const Footer = ({ previous, next }) => (
  <footer css={tw`mt-4 pt-3`}>
    <hr />
    <Bio />
    {(previous || next) && (
      <ul css={tw`flex flex-wrap justify-between list-none p-0`}>
        <li>
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </li>
      </ul>
    )}
  </footer>
)

export default Footer
