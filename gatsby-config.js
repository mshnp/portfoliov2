require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'MISHEAN',
    description: 'misheans portfolio',
    author: 'Mishean Peiris', 
    siteUrl: `https://www.mishean.com`,
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },},
      {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `7ye7xk0ybk6d`,
      accessToken: process.env.CONTENTFUL_API_KEY,
    },},]
}
