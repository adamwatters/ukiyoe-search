import React from "react"
import { connectHits } from "react-instantsearch-dom"
import "../styles/hits.css"

const CustomHits = connectHits(({ hits }) => {
  return (
    <div className="hits">
      {hits.map(hit => {
        return (
          <div key={hit.objectID} className="hit">
            <div
              className="hit-image"
              style={{
                backgroundImage: `url('${hit.primaryImageSmall}')`,
              }}
            />
            <div>
              <div className="hit-section">
                <i className="fas fa-user" />
                <div>{hit.artistDisplayName}</div>
              </div>
              <div className="hit-section">
                <i className="far fa-calendar-alt" />
                {hit.objectDate}
              </div>
              <div className="hit-section">
                <i className="fas fa-palette" />
                {hit.title}
              </div>
              {hit.tags.length > 0 && (
                <div className="hit-section">
                  <i className="fas fa-tags" />
                  {hit.tags.map(t => `${t}`).join(", ")}
                </div>
              )}
              <a
                className="hit-link"
                target="_blank"
                rel="noopener noreferrer"
                href={hit.objectURL}
              >
                <i className="fas fa-link" />
                More info
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default CustomHits
