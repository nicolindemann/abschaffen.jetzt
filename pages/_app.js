import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo
          title={pageProps.full} 
          description=""
          canonical={"https://" + pageProps.host}
          openGraph={{
            type: 'website',
            url: "https://" + pageProps.host,
            title: pageProps.full,
            description: pageProps.full,
            images: [
              { url: 'https://' + pageProps.host + '/cat.svg' },
            ]
          }}
          twitter={{
            site: '@tikatukaio',
            cardType: 'summary_large_image',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon-32x32.png',
              type: 'image/png',
              sizes: '32x32'
            },
            {
              rel: 'icon',
              href: '/favicon-16x16.png',
              type: 'image/png',
              sizes: '16x16'
            },
            {
              rel: 'apple-touch-icon',
              href: '/apple-touch-icon.png',
              sizes: '180x180'
            },
            {
              rel: 'manifest',
              href: '/site.webmanifest'
            },
            {
              rel: 'shortcut icon',
              href: '/favicon.ico'
            },
            {
              rel: 'mask-icon',
              href: '/safari-pinned-tab.svg',
              color: '#000000'
            }
          ]}
          additionalMetaTags={[{
            name: 'author',
            content: 'Abschaffen Cat'
          },
          {
            name: 'keywords',
            content: 'abschaffen,jetzt'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          },
          {
            name: 'msapplication-config',
            content: '/browserconfig.xml'
          },
          {
            name: 'msapplication-TileColor',
            content: '#ffffff'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          }]}
        />
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}