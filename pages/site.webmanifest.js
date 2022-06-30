
import React from 'react'

class Webmanifest extends React.Component {
  static async getInitialProps({ req, res }) {
    res.setHeader('Content-Type', 'application/json')
    res.write(`{
        "name": "` + req.headers.host + `",
        "short_name": "` + req.headers.host + `",
        "icons": [
            {
                "src": "/android-chrome-36x36.png",
                "sizes": "36x36",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-48x48.png",
                "sizes": "48x48",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-72x72.png",
                "sizes": "72x72",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-96x96.png",
                "sizes": "96x96",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-144x144.png",
                "sizes": "144x144",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-256x256.png",
                "sizes": "256x256",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-384x384.png",
                "sizes": "384x384",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
            }
        ],
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "start_url": "https://` + req.headers.host + `",
        "display": "standalone"
    }`)
    res.end()
  }
}

export default Webmanifest



