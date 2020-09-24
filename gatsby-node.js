/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
        {
          blogs: allDevArticles {
            edges {
              node {
                article {
                  id
                  slug
                }
              }
            }
          }
        }
      `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog blogs pages.
    const blogs = result.data.blogs.edges
    blogs.forEach((blog, index) => {
        const data = blog.node.article
        createPage({
            path: `/blog/${data.slug}`,
            component: require.resolve("./src/templates/blog.js"),
            context: {
                id: data.slug,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    // auth0 isn't required during build time, so it can be replaced with a null loader so builds don't break
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /worker/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

