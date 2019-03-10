import React, { Component } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  RefinementList,
  Pagination
} from "react-instantsearch-dom";
import Search from "./Search";
import Hits from "./Hits";
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
            <div className="sidebar">
              <div className="sidebar-title">Artists</div>
              <RefinementList
                showMore
                searchable={true}
                operator={"and"}
                limit={10}
                showMoreLimit={50}
                attribute={"artistDisplayName"}
              />
              <div className="sidebar-divider" />
              <div className="sidebar-title">Subjects</div>
              <RefinementList
                showMore
                searchable={true}
                operator={"and"}
                limit={10}
                showMoreLimit={50}
                attribute={"tags"}
              />
            </div>
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
