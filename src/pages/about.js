import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/about.css"

const NewTabLink = ({ href, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  )
}

class App extends Component {
  render() {
    return (
      <Layout path={this.props.location.pathname}>
        <div className="about">
          <div className="about-left">
            <div>
              This is where I explain what this site is all about. I realized
              after I started this project that an excellent Ukiyo-e search
              already exists - for a larger collection and reverse image search,
              check out https://ukiyo-e.org/.
            </div>
            <div>
              <img
                src="https://images.metmuseum.org/CRDImages/as/web-large/DP134650.jpg"
                alt="view of mount fuji"
                style={{ width: "150px" }}
              />
              <img
                src="https://images.metmuseum.org/CRDImages/as/web-large/DP141037.jpg"
                alt="view of mount fuji"
                style={{ width: "300px" }}
              />
              <span>Text</span>
            </div>
          </div>
          <div className="about-right">
            Meta
            <span>{`👨🏻‍🔧 adam watters`}</span>
            <NewTabLink href="mailto:adamwatters11@gmail.com">
              {`📫 email me`}
            </NewTabLink>
            <NewTabLink href="https://www.adamwatters.nyc/">
              {`🏠 www.adamwatters.nyc`}
            </NewTabLink>
            <NewTabLink href="https://github.com/adamwatters/ukiyoe-search-website">
              {`🐙 source on Github`}
            </NewTabLink>
            <NewTabLink href="https://metmuseum.github.io/">
              {`🏛️ Met API`}
            </NewTabLink>
            <NewTabLink href="https://www.algolia.com/">
              {`🔍 Algolia for search`}
            </NewTabLink>
            <NewTabLink href="https://www.algolia.com/">
              {`🤵 Gatsby for pages`}
            </NewTabLink>
          </div>
        </div>
      </Layout>
    )
  }
}

export default App
