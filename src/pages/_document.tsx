import { getAbsoluteUrl } from "@/utils";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Fitfo Labs</title>
        <meta
          property="og:image"
          content={getAbsoluteUrl("/img/opengraph.png")}
        />
      </Head>
      <body style={{ overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
