import React from "react";
import { connectHits } from "react-instantsearch-dom";
import "./hits.css";

const CustomHits = connectHits(({ hits }) => {
  return (
    <div className="hits">
      {hits.map(hit => {
        console.log(hit);
        return (
          <div key={hit.objectID} className="hit">
            <img
              className="hit-image"
              src={hit.primaryImageSmall}
              alt={hit.title}
            />
            <div>
              <div>{hit.artistDisplayName}</div>
              <a target="_blank" rel="noopener noreferrer" href={hit.objectURL}>
                {hit.title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CustomHits;
