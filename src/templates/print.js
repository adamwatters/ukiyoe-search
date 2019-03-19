import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/print.css"

export default ({ data }) => {
  const { title, primaryImageSmall, artistDisplayName, tags } = data.printsJson
  return (
    <Layout>
      <div className="print">
        <div>
          <img className="print-image" src={primaryImageSmall} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <div>{artistDisplayName}</div>
          <div>{tags.join(", ")}</div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: Int) {
    printsJson(fields: { slug: { eq: $slug } }) {
      title
      artistDisplayName
      primaryImageSmall
      tags
    }
  }
`
