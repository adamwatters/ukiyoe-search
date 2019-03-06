import React, { Component } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHits,
  Configure
} from "react-instantsearch-dom";
import StackGrid from "react-stack-grid";

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
            <SearchBox />
            <CustomHits />
          </InstantSearch>
        </header>
      </div>
    );
  }
}

const CustomHits = connectHits(({ hits }) => {
  return (
    <StackGrid columnWidth={150} monitorImagesLoaded={true}>
      {hits.map(hit => {
        return (
          <div key={hit.primaryImageSmall}>
            <img
              style={{ width: "150px" }}
              src={hit.primaryImageSmall}
              alt={hit.title}
            />
            <div>{hit.title}</div>
          </div>
        );
      })}
    </StackGrid>
  );
});

export default App;
