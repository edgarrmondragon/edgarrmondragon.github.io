import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All tags" />
      <div>
        <h1>Tags</h1>
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
