module.exports = {
  siteMetadata: {
    title: 'Max Euler',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'static',
      },
    },
  ],
};
