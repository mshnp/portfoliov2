require('dotenv').config({
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
      accessToken: process.env.CONTENTFUL_API_KEY,
    },},
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: action="https://gmail.us13.list-manage.com/subscribe/post?u=97f0ca09c098836b03af15ace&amp;id=24456f8ffa&amp;f_id=00f0dce2f0", // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MISHEAN`,
        short_name: `MISH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFFF00`,
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
    ]
}
