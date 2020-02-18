import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }
  render() {
    return (
      <html>
        <title>WIP Camp #12 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charSet="utf-8" />
          {/* OG */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no maximum-scale=1.0, user-scalable=0" />
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม"/>
          <meta name="og:description" content="WIP Camp #12 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ"/>
          <meta name="og:title" content="WIP Camp #12 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที " />
          <meta property="og:image" content="/img/OG/og2.png" />
          {/* <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="314" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://wip.camp/" />
          <meta property="og:site_name" content="WIP Camp #12 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที" />
          <meta property="fb:app_id" content="250617067968" />
          {/* OG Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:site" content="@meawmafia" /> */}
          <meta name="twitter:image" content="https://wip.camp/img/OG/og1.png" />
          <meta property="og:url" content="https://wip.camp/" />
          <meta property="og:title" content="WIP Camp #12 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที" />
          <meta property="og:description" content="WIP Camp #12 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที 
          อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ" />

          <link rel="icon" href="/img/favicon.ico" />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFZH4C8');` }} />
          {this.props.styleTags}
          <script dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1672654,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />
          <script dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '192345871878170');
            fbq('track', 'PageView');` }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFZH4C8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

      </html>
    )
  }
}