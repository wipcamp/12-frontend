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
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no maximum-scale=1.0, user-scalable=0" />
          <meta name="og:title" content="WIP Camp 12" />
          <meta name="og:description" content="Nulla officia id adipisicing do ipsum laborum tempor labore proident." />
          <meta name="og:image" content="http://35.240.193.76/img/temp.jpg" />
          <meta property="og:site_name" content="WIP Camp #12 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที" />

          <link rel="stylesheet" href="\node_modules\bootstrap\dist\css\bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

          <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

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
              h._hjSettings={hjid:1669501,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="../components/Home/Sketch.js" >
        </script>
        <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFZH4C8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

      </html>
    )
  }
}