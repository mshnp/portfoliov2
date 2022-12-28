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
      accessToken: process.env.CONTENTFUL_API_KEY,
    },},
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: action= process.env.MAILCHIMP_ENDPOINT, 
          timeout: 3500, 
      }},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MISHEAN`,
        short_name: `MISH`,
        start_url: `/`,
        description: `MISHEAN PEIRIS PORTFOLIO.`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: `none`,
      }
    },
    `gatsby-plugin-remove-serviceworker`, 
    `gatsby-plugin-netlify`,
  {
     resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         process.env.GOOGLE_ID, // Google Analytics / GA
       ],
       // This object is used for configuration specific to this plugin
       pluginConfig: {
         // Puts tracking script in the head instead of the body
         head: true,
         // Setting this parameter is also optional
         respectDNT: true,
         // Avoids sending pageview hits from custom paths
         exclude: ["/preview/**", "/do-not-track/me/too/"],
       },
     },
   },]
}
