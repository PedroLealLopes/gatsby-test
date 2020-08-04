/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    tittle: "Gatsby Tutorial",
    description: "Some Description",
    author: "@johndoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: "22" },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`, 
    "gatsby-plugin-breakpoints",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4xwvfy4xf533`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
