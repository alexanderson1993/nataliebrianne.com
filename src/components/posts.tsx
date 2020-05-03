import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <PostList posts={posts} />
  </Layout>
)

export default Posts
