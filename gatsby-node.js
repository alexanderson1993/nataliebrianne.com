const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { urlResolve } = require(`gatsby-core-utils`)

const debug = Debug(`nataliebrianne.com`)

const withDefaults = themeOptions => {
  const blogPath = themeOptions.basePath || `/blog`
  const booksPath = themeOptions.booksPath || `/books`
  const contentPath = themeOptions.contentPath || `content/posts`
  const assetPath = themeOptions.assetPath || `content/assets`

  return {
    blogPath,
    booksPath,
    contentPath,
    assetPath,
  }
}
// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/templates/post-query`)
const PostsTemplate = require.resolve(`./src/templates/posts-query`)
const BookTemplate = require.resolve(`./src/templates/book-query`)
const BooksTemplate = require.resolve(`./src/templates/books-query`)

exports.createPages = async (
  { graphql, actions, reporter, getNode },
  themeOptions
) => {
  const { createPage } = actions
  const { blogPath, booksPath,contentPath } = withDefaults(themeOptions)

  const result = await graphql(`
    {
      postQuery: allMarkdownRemark(
        sort: { fields: [frontmatter___date, frontmatter___title] }
        filter: { fileAbsolutePath: { glob: "**/posts/**" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      bookQuery: allMarkdownRemark(
        sort: { fields: [frontmatter___date, frontmatter___title] }
        filter: { fileAbsolutePath: { glob: "**/works/**" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  // Create Posts and Post pages.
  const { postQuery, bookQuery } = result.data
  const posts = postQuery.edges
  const books = bookQuery.edges
  
  // Create a page for each Post
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    createPage({
      path: post.fields.slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })
  books.forEach(({ node: book }) => {
    createPage({
      path: book.fields.slug,
      component: BookTemplate,
      context: {
        id: book.id,
      },
    })
  })

  // Create the Posts page
  createPage({
    path: blogPath,
    component: PostsTemplate,
    context: {},
  })
  // Create the Books page
  createPage({
    path: booksPath,
    component: BooksTemplate,
    context: {},
  })
}
