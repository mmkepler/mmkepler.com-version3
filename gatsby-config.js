/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Melissa Kepler | React Developer",
    description: "Melissa Kepler's coding portfolio",
    image: "/mmkepler_icon.png",
    siteUrl: "https://www.mmkepler.com",
  },
  plugins: ["gatsby-plugin-image", {
    resolve: "gatsby-plugin-manifest",
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve:"gatsby-plugin-manifest",
    options: {
      name: "Melissa Kepler",
      short_name: "MK",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#009799",
      display: "standalone",
      icon: "src/images/logo2_comp.webp"
    },
  },
  {
    resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    options: {
      devMode: true,
    },
  },
],
  
};

