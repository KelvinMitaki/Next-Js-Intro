import Document, { Main, NextScript, Head } from "next/document";

export class myDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="A Next Js portfolio" />
          <meta name="robots" content="noindex, nofollow" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
      </html>
    );
  }
}

export default myDocument;
