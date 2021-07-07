import React, { ComponentType } from "react";
import { useDeno } from "framework/react";

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  const siteProps = {
    posts: Array.from(useDeno(() => Deno.readDirSync("./posts"))),
};

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} {...siteProps} />
    </div>
  )
}
