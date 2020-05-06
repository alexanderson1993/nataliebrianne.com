module.exports = {
  siteMetadata: {
    title: `Natalie Brianne Books`,
    description: `Words are the threads that weave the tapestries of life.`,
    author: `@NatalieBriBooks`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/NatalieBriBooks`,
      },
    ],
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
        ],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
