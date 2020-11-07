module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    lang: 'ja',
    siteUrl: 'http://bizp.co.jp/',
    title: 'BP Inc.',
    description: '東京に本社を構えるビジネスパートナーズの公式ホームページです。',
    author: '@gatsbyjs',
    copyrightYear: '2020',
    companyName: '株式会社ビジネスパートナーズ',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
