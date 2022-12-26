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
  plugins: [`gatsby-plugin-styled-components`, 'gatsby-plugin-postcss', `gatsby-plugin-image`,
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
      accessToken: process.env.CONTENTFUL_KEY,
    },},
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: action= process.env.MAILCHIMP_END_POINT, 
          timeout: 3500, 
      }},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MISHEAN`,
        short_name: `MISH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: 'none',
      },
    },
    {
   resolve: 'gatsby-plugin-offline',
   options: {
    precachePages: [`/work/*`, `/subscribe`, '/work'],
      workboxConfig: {
         globPatterns: ['src/images/favicon.png']
      },
   },
},
    `gatsby-plugin-netlify`]
}
