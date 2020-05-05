import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"

const Posts = ({ location, data }) => {
  const { allBlogPost, site } = data
  const posts = allBlogPost.edges
  const siteTitle = site.siteMetadata.title
  const socialLinks = site.siteMetadata.social
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <PostList posts={posts} />
    </Layout>
  )
}

export default Posts
