import React from 'react'

class Sitemap extends React.Component {
  static async getInitialProps({ req, res }) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://` + req.headers.host + `</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <lastmod>` + new Date().toISOString() + `</lastmod>
    </url>
    </urlset>`)
    res.end()
  }
}

export default Sitemap