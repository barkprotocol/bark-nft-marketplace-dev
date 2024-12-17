import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Import Inter for titles */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        {/* Import Poppins for sub text */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
