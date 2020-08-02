require("dotenv").config({
  path: `.env`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `money-traps`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        // page: require("./src/schemas/page.json"),
        schemas: {
          home_page: require("./src/schemas/homePage.json"),
          post: require("./src/schemas/post.json"),
        },
      },
    },
  ],
}
