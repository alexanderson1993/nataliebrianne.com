/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <div className="mb-4 items-center flex">
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          className="mr-2 mb-0 w-12 rounded-full"
        />
      ) : (
        <div className="mr-2 mb-0 w-12 rounded-full" role="presentation" />
      )}
      <div>
        <BioContent />
      </div>
    </div>
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
