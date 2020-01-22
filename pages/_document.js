import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <title>WIP Camp #12 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="og:title" content="WIP Camp 12" />
          <meta name="og:description" content="Nulla officia id adipisicing do ipsum laborum tempor labore proident." />
          <meta name="og:image" content="/img/Who/lungtu.png" />
          <meta property="og:site_name" content="WIP Camp #12 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที" />


          <link rel="stylesheet" href="\node_modules\bootstrap\dist\css\bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js"></script>
          <script src="sketch.js"></script>
          <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="../components/Home/Sketch.js" >
        </script>
        <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        
        
      </html>
    )
  }
}