module.exports = {
  siteMetadata: {
    title: `Ukiyo-e - Japanese Woodblock Prints`,
    description: `Japanese Woodblock Prints from the collection of the Metropolitan Museaum of Art`,
    keywords: "ukiyo-e,japan,woodblock prints,edo period,metropolitan museum",
    author: `@adamwatters`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
