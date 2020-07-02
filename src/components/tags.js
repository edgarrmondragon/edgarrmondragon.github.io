import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import kebabCase from "lodash/kebabCase"

const Tags = ({ tags }) => (
  <ul style={{ marginBottom: 0, marginLeft: 0 }}>
    {tags.map((tag) => (
      <li
        style={{
          ...scale(-1 / 5),
          display: `inline`,
          position: `relative`,
          listStyle: `none`,
          fontWeight: `bold`,
          marginRight: rhythm(0.5),
          marginTop: rhythm(0.5),
        }}
      >
        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
      </li>
    )
    )}
  </ul>
)

export default Tags
