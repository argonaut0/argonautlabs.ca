import React from "react";
import { useRouter } from "framework/react";
import { useDeno } from "framework/react";
import E404 from "~/404.tsx";
import { Marked } from "markdown";
import Page from "~/components/page.tsx";

export default function Post() {
    const {
        pathname,
        routePath,
        params,
        query
    } = useRouter();

    const dirlist = useDeno(() => Deno.readDirSync("./posts"));

    const path: string = params.id;

    for (const post of dirlist) {
        if (post.name === path) {
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
    }

    return <E404></E404>;
}
