import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

const Index = ({ data: { allPrismicPost, prismicHomePage } }) => (
  <React.Fragment>
    <h1>{prismicHomePage.data.title.text}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: prismicHomePage.data.content.html }}
    />
    <ul>
      {allPrismicPost.edges.map(post => (
        <li key={post.node.uid}>
          <Link to={post.node.uid}>{post.node.data.title.text}</Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allPrismicPost: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomePage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    allPrismicPost {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`
