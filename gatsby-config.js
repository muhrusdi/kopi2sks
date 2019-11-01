const modifyVars = require("./src/utils/modify-vars");

module.exports = {
  siteMetadata: {
    title: `Kopi 2 sks`,
    description: `Minuman kuliah wajib buat kamu yang selalu berharap wisudah`,
    author: `@muhrusdiid`,
    siteUrl: "https://muhrusdi.com",
    twitter: "@muhrusdiid"
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
    {
      resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
      },
    },
    {
    resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: modifyVars,
        javascriptEnabled: true,
      },
    },
    'gatsby-plugin-antd',
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: "antd",
        style: true,
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-boilerplate`,
        short_name: `muhrusdi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
