/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Melissa Kepler | React Developer",
    description: "Melissa Kepler's coding portfolio",
    image: "/mmkepler_icon.pgn",
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
  
],
  
};

