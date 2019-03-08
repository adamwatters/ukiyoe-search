import React, { Component } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  Configure,
  RefinementList,
  Pagination,
  Stats
} from "react-instantsearch-dom";
import "./index.css";
import logo from "./logo-algolia-nebula-blue-full.png";

const searchClient = algoliasearch(
  "4GNBVCYURZ",
  "abedb5e07b75f98908f0f63ead437d67"
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InstantSearch indexName="met_photos" searchClient={searchClient}>
            <Configure hitsPerPage={30} analytics={false} distinct />
            <div
              style={{
                padding: "10px",
                margin: "32px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#F2DABE"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <SearchBox />
                <span style={{ marginLeft: "10px" }}>powered by</span>
                <img
                  style={{
                    marginLeft: "10px",
                    height: "20px"
                  }}
                  src={logo}
                  alt={"powered by algolia"}
                />
                <span style={{ marginLeft: "10px" }}>
                  and made with{" "}
                  <span role="img" aria-label="love">
                    💚
                  </span>{" "}
                  by{" "}
                  <a href="https://www.adamwatters.nyc/about">Adam Watters</a>
                </span>
              </div>
              <span>
                <Stats />
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "#F2DABE",
                  marginLeft: "30px",
                  width: "230px",
                  flex: "0 0 auto"
                }}
              >
                <RefinementList
                  operator={"and"}
                  limit={40}
                  attribute={"tags"}
                />
              </div>
              <div>
                <CustomHits />
                <div
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </header>
      </div>
    );
  }
}

const CustomHits = connectHits(({ hits }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 30px",
        justifyContent: "flex-end",
        flexWrap: "wrap"
      }}
    >
      {hits.map(hit => {
        return (
          <div
            key={hit.objectID}
            style={{
              backgroundColor: "#F2DABE",
              width: "170px",
              padding: "5px",
              margin: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              style={{ width: "160px", flex: "0 0 auto" }}
              src={hit.primaryImageSmall}
              alt={hit.title}
            />
            <div style={{ fontSize: "12px" }}>{hit.artistDisplayName}</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "12px" }}
              href={hit.objectURL}
            >
              {hit.title}
            </a>
          </div>
        );
      })}
    </div>
  );
});

export default App;
