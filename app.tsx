import { React, useDeno, Marked } from "./deps.ts";


export default function App({ Page, pageProps }: { Page: React.ComponentType<any>, pageProps: any }) {
  
  const paths = Array.from(useDeno(() => Deno.readDirSync("./posts")));
  
  const siteProps = useDeno(() => {
    return {
      posts: paths.reduce((o, p) => {
        return {
          ...o,
          [p.name]: Marked.parse(Deno.readTextFileSync("./posts/" + p.name + "/index.md"))
        };
      }, {})
    }
  });
  

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} {...siteProps} />
    </div>
  )
}
