// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
