import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <meta
        name="description"
        content="Admin App with Next.js, Typescript, Tailwindcss and Auth0."
      />
      <link rel="icon" href="https://nextjs.org/favicon.ico" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
