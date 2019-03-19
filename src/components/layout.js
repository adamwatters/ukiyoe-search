/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/index.css"

const Layout = ({ children, path, data }) => (
  <>
    <Helmet
      meta={[
        {
          name: "author",
          content: "@adamwatters",
        },
        {
          name: "description",
          content:
            "Japanese Woodblock Prints from the collection of the Metropolitan Museaum of Art",
        },
        {
          name: "keywords",
          content:
            "ukiyo-e,japan,woodblock prints,edo period,metropolitan museum",
        },
      ]}
    >
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <div className="app">
      <header className="header">
        <Link to="/">
          <span className="page-title">
            <span role="img" aria-label="wave">
              🌊
            </span>
            {` Ukiyo-e Search`}
          </span>
        </Link>
        {path === "/about" || path === "/about/" ? (
          <Link to="/">Search</Link>
        ) : (
          <Link to="/about">About</Link>
        )}
      </header>
      <main>{children}</main>
      <footer />
    </div>
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return <Layout {...props} data={data} />
    }}
  />
)
