import React from "react";
import { useRouter } from "framework/react";
import { useDeno } from "framework/react";
import E404 from "~/404.tsx";
import { Marked } from "markdown";
import Page from "~/components/page.tsx";

export default function Post({ posts }: { posts: Deno.DirEntry[] }) {
    const {
        pathname,
        routePath,
        params,
        query
    } = useRouter();

    const path: string = params.id;
    const postNames: string[] = posts.map( (x) => x.name );

    if ( postNames.includes(path) ) {
        const {
            content,
            meta
        } = Marked.parse(useDeno(() => Deno.readTextFileSync("./posts/" + path + "/index.md")));
        return (
            <Page pageTitle={ meta.title }>
                <main dangerouslySetInnerHTML={{__html: content}}></main>
            </Page>
        );
    } 

    return <E404></E404>;
}
