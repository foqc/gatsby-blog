require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Fabian Quijosaca",
    description: "I am a passionate, enthusiastic and curious about the development and innovation of technology. I am constantly learning...",
    author: "foqc",
    url: "https://quijosakaf.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-176087243-1",
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: 'foqc'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#4299e1",
        theme_color: "#4299e1",
        display: "minimal-ui",
        icon: 'src/images/icon.png'
      },
    },
    "gatsby-plugin-offline",
  ],
}