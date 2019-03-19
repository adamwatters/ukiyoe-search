const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "PrintsJson") {
    console.log("making a prints json node")
    createNodeField({
      node,
      name: `slug`,
      value: node.objectID,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPrintsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allPrintsJson.edges.forEach(({ node }) => {
      console.log(node.fields.slug)
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/print.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
