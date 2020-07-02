/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'My portfolio',
    description: 'This is WebDev Portfolio Site',
    author: 'Nithish',
    twitterUsername: '@nithishravindra',
    siteUrl: 'http://nithishravindra.com',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nithish`,
        short_name: `***`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      },
    },
  ],
}
