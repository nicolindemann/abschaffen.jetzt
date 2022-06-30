import Cat from '../public/cat.svg'
import Head from 'next/head'

const punycode = require('punycode')

import "@fontsource/balsamiq-sans"

export async function getServerSideProps(context) {
  return {
    props: {
      reason: punycode.toUnicode(context.req.headers.host).replace('.abschaffen.jetzt', '').toUpperCase().replace('.', ' ').replace('_', ' '),
      full: punycode.toUnicode(context.req.headers.host).replace('.abschaffen.jetzt', '').toUpperCase().replace('.', ' ').replace('_', ' ') + ' ABSCHAFFEN! JETZT!',
      host: context.req.headers.host
    }
  }
}

export default function Home({ full, host }) {
  if (host === 'abschaffen.jetzt' || host === 'localhost:3000') { 
    full = <input style={{ width: '100%' }} onKeyDown={(e) => { 
      if (e.key === 'Enter') { 
        try {
          let prefix = encodeURIComponent(e.target.value.trim().replace(' ', '_'))
          location.href = 'https://' + prefix + (prefix ? '.' : '') + 'abschaffen.jetzt'
        } catch (e) {
          alert('URL nicht möglich')
        }
      } 
    }}/>
  }

  return (
    <>
      <Head>
        <style>{`
          html,
          body {
            padding: 0;
            margin: 0;
          }

          * {
            font-family: 'Balsamiq Sans';
            font-weight: 700;
          }

          @media only screen and (max-width: 600px) {
            * {
            font-size: 95%;
          }
          } 

          @media only screen and (min-width: 600px) {
            * {
            font-size: 105%;
          }
          } 

          @media only screen and (min-width: 768px) {
            * {
            font-size: 105%;
          }
          } 

          @media only screen and (min-width: 992px) {
            * {
            font-size: 105%;
          }
          } 

          @media only screen and (min-width: 1200px) {
            * {
              font-size: 105%;
            }
          }

          @media only screen and (min-width: 2000px) {
            * {
              font-size: 115%;
            }
          }
          `}
        </style>
      </Head>
      <div style={{ 'minHeight': '100vh', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100vh' }}>
        <main style={{ width: '75vh', position: 'relative' }}>
          <Cat style={{ width: '100%' }}></Cat>
          <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'textAlign': 'center', 'transform': 'rotate(8deg)', 'position': 'absolute', top: '11%', right: '3.3%', width: '35%', height: '23%' }}> {full}</div>
        </main>
      </div>
    </>
  )
}
