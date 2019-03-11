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
            <h1>about the art</h1>
            <p>
              {`Ukiyo-e is a genre of Japanese art that developed during the Edo
              Period (1603–1868). I'm no historian... here are links to material from The Metropolitian Museum: `}
              <NewTabLink href="https://www.metmuseum.org/toah/hd/plea/hd_plea.htm">
                Art of the Pleasure Quarters and the Ukiyo-e Style
              </NewTabLink>
              {`, `}
              <NewTabLink href="https://www.metmuseum.org/toah/hd/edop/hd_edop.htm">
                Art of the Edo Period (1615–1868)
              </NewTabLink>
              {`, `}
              <NewTabLink href="https://www.metmuseum.org/toah/hd/ukiy/hd_ukiy.htm">
                Woodblock Prints in the Ukiyo-e Style
              </NewTabLink>
              {`.`}
            </p>
            <p>
              {`Speaking of the Met, all the images and data used on this website
              came from their collection. These prints are just a small percentage the material they've made available as part of their `}
              <NewTabLink href="https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api">
                Open Access program
              </NewTabLink>
              {`.`}
            </p>
            <p>
              {`Half a day into this project I discovered an excellent Ukiyo-e search already exists at `}
              <NewTabLink href="https://ukiyo-e.org/">ukiyo-e.org</NewTabLink>
              {`. There are way more more prints in that database, plus reverse image search. Basically, its superior in every way except it lacks a pretty background.`}
            </p>
            <p>
              {`If you're curious about the contemporary state of the art, `}
              <NewTabLink href="https://www.instagram.com/adachi.hanga/?hl=en">
                Adachi Hanga
              </NewTabLink>
              {` has some cool stuff on their instagram.`}
            </p>
            <p>
              {`If you found this site fun or useful, I'd love to hear from you! Seriously, I'm curious who you are and how you got here - `}
              <NewTabLink href="mailto:adamwatters11@gmail.com">
                adamwatters11@gmail.com
              </NewTabLink>
              {`.`}
            </p>
          </div>
          <div className="about-right">
            <h1>about me</h1>
            <NewTabLink href="https://github.com/adamwatters">
              {`👨🏻‍🔧 adam watters`}
            </NewTabLink>
            <NewTabLink href="mailto:adamwatters11@gmail.com">
              {`📫 email me`}
            </NewTabLink>
            <NewTabLink href="mailto:adamwatters11@gmail.com">
              {`🐥 maybe i'll start tweeting?`}
            </NewTabLink>
            <NewTabLink href="https://www.adamwatters.nyc/">
              {`🏠 adamwatters.nyc`}
            </NewTabLink>
            <div className="divider" />
            <h1>about this site</h1>
            <NewTabLink href="https://github.com/adamwatters/ukiyoe-search-website">
              {`🐙 source on Github`}
            </NewTabLink>
            <NewTabLink href="https://metmuseum.github.io/">
              {`🏛️ Met API`}
            </NewTabLink>
            <NewTabLink href="https://www.algolia.com/">
              {`🔍 Algolia for search`}
            </NewTabLink>
            <NewTabLink href="https://www.gatsbyjs.org/">
              {`🤵 Gatsby for pages`}
            </NewTabLink>
            <NewTabLink href="https://www.gatsbyjs.org/">
              {`🥅 Deployed to Netlify`}
            </NewTabLink>
          </div>
        </div>
      </Layout>
    )
  }
}

export default App
