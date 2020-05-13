module.exports = {
  siteMetadata: {
    siteUrl: "https://nataliebrianne.com",
    title: `Natalie Brianne Books`,
    description: `Words are the threads that weave the tapestries of life.`,
    author: `@NatalieBriBooks`,
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        pedantic: false,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false, // Defaults to false
            },
          },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["image", "cover", "thumbnail"],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-slug`,
          process.env.NODE_ENV === "production" && {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "Natalie Brianne Books", // website title
              separator: " ", // default
              author: "",
              background: require.resolve("./src/images/background-tw.jpg"), // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: "#F48588", // defaults to white (#ffffff)
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: "sans-serif",
              fontFile: require.resolve("./src/fonts/SukhumvitSet-Light.ttf"), // will override fontStyle - path to custom TTF font
            },
          },
        ].filter(Boolean),
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natalie Brianne`,
        short_name: `Natalie`,
        start_url: `/`,
        background_color: `#FBD5D7`,
        theme_color: `#FBD5D7`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        /**
         * no need to specify the other options, since they will be merged with this
         */
        feeds: [
          {
            serialize: ({ query: { site, posts } }) => {
              return posts.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                }
              })
            },
            query: `
            {
              posts:allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {glob: "**/posts/**"}}) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                    excerpt
                    html
                  }
                }
              }
            }
            
          `,
            output: `rss.xml`,
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
