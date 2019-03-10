/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/index.css"

const Layout = ({ children, path }) => {
  console.log(path)
  return (
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
        {path === "/about" ? (
          <Link to="/">Search</Link>
        ) : (
          <Link to="/about">About</Link>
        )}
      </header>
      <main>{children}</main>
      <footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
