## 🌊🌊 Ukiyo-e Search 🌊🌊

> Explore the Metropolitan Museum of Art's Japanese Edo Period Woodblock Print Collection

https://ukiyo-e.netlify.com/

Website for exploring over 3000 public domain images of Japanese woodblock prints from the Met's collection.

I realized after I started this project that it already exists - for a larger collection and reverse image search, check out https://ukiyo-e.org/.

Background:

- [Ukiyo-e](https://www.metmuseum.org/toah/hd/plea/hd_plea.htm)
- [Edo period art](https://www.metmuseum.org/toah/hd/edop/hd_edop.htm)
- [Japanse woodblock print tradtion](https://www.metmuseum.org/toah/hd/ukiy/hd_ukiy.htm)

Tech:

- [Met API](https://metmuseum.github.io/)
- This was mostly an excuse to try out [Algolia](https://www.algolia.com/)
- [Gatsby](https://www.gatsbyjs.org/)

TODOS:

- algolia stuff
  - highlight matches
  - make hit fields update search parameters on click
- gatsby stuff
  - statically generated pages for each print from /data/edo-prints.json
  - seo for each page
  - image optimizations?
- tutorials
  - using the met open API
    - Open Access Announcement: https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api
    - API Announcement: https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api
    - API Documentation: https://metmuseum.github.io/
  - basic search with algolia
    - preparing and uploading data
    - javascript implementation
  - react-instant-search with algolia
    - styling widgets
    - extending widgets
  - gatsby 4000 page site
