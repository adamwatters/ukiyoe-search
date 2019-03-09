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
import logo from "./algolia.svg";

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
                backgroundColor: "#F2DABE",
                borderRadius: "10px"
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
                <div className={"main-search"} style={{ position: "relative" }}>
                  <SearchBox />
                  <img
                    style={{
                      right: "6px",
                      top: "12px",
                      height: "16px",
                      position: "absolute"
                    }}
                    src={logo}
                    alt={"powered by algolia"}
                  />
                </div>
                <span style={{ marginLeft: "10px" }}>
                  Made by{" "}
                  <a href="https://www.adamwatters.nyc/about">Adam Watters</a>
                </span>
              </div>
              <span>
                <Stats />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  backgroundColor: "#F2DABE",
                  padding: "16px",
                  marginLeft: "30px",
                  marginTop: "5px",
                  width: "230px",
                  flex: "0 0 auto",
                  borderRadius: "10px"
                }}
              >
                <RefinementList
                  searchable={true}
                  operator={"and"}
                  limit={20}
                  attribute={"artistDisplayName"}
                />
                <RefinementList
                  searchable={true}
                  operator={"and"}
                  limit={20}
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
                  <div
                    style={{
                      backgroundColor: "#F2DABE",
                      borderRadius: "10px",
                      width: "100%",
                      padding: "10px",
                      margin: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Pagination />
                  </div>
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
              borderRadius: "10px",
              width: "180px",
              padding: "10px",
              margin: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch"
            }}
          >
            <img
              style={{ width: "180px", flex: "0 0 auto", borderRadius: "10px" }}
              src={hit.primaryImageSmall}
              alt={hit.title}
            />
            <div>
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
          </div>
        );
      })}
    </div>
  );
});

export default App;
