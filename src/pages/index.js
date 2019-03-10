import React, { Component } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure, Pagination } from "react-instantsearch-dom"
import Search from "../components/Search"
import Hits from "../components/Hits"
import Sidebar from "../components/Sidebar"
import Layout from "../components/layout"

const searchClient = algoliasearch(
  "4GNBVCYURZ",
  "abedb5e07b75f98908f0f63ead437d67"
)

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Layout path={this.props.location.pathname}>
        <InstantSearch indexName="met_photos" searchClient={searchClient}>
          <Configure hitsPerPage={20} analytics={false} distinct />
          <div className="main">
            <Sidebar />
            <div className="right">
              <Search />
              <Hits />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </Layout>
    )
  }
}

export default App
