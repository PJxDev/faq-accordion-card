import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body className="bg-gradient-to-t from-softBlue to-softViolet || h-screen w-[100%] flex justify-center items-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
