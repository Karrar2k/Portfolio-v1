// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Any <link> tags for fonts, e.g. Google Fonts, can go here. */}
          {/* Example:
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&family=Overpass:wght@400;600&family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
          */}
        </Head>
        <body className="bg-[#3E4150] text-[#EBE4D5] min-h-screen m-0 p-0 relative overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
