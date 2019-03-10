import React, { Component } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure, Pagination } from "react-instantsearch-dom";
import Search from "./Search";
import Hits from "./Hits";
import Sidebar from "./Sidebar";
import "./app.css";

const searchClient = algoliasearch(
  "4GNBVCYURZ",
  "abedb5e07b75f98908f0f63ead437d67"
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <span className="page-title">
            <span role="img" aria-label="wave">
              🌊
            </span>
            {` Ukiyo-e Search`}
          </span>
          <span>About</span>
        </header>
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
      </div>
    );
  }
}

export default App;
