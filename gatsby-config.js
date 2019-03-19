module.exports = {
  siteMetadata: {
    title: `Japanese Woodblock Prints`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/prints.json`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134428657-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ukiyoe`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/wave.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
