const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  pathPrefix: `/physio`,
  siteMetadata: {
    title: `Interactive Physio`,
    description: `Interactive Physiotherapy service for Your recovery Home`,
    author: `@rebeccathephysio`,
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
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "j2xr2f1tr781",
        accessToken: "zv__7iM1jXwF7NB2YNPmKVFj68ZJ2fWA4-UKiOKL514",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Interactive Physio`,
        short_name: `iP`,
        start_url: `/physio`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
};
