import React from "react";
import { useRouter } from "framework/react";
import { useDeno } from "framework/react";
import E404 from "~/404.tsx";
import { Marked } from "markdown";
import Page from "~/components/page.tsx";

export default function Post({ posts }: { posts: any }) {
    const {
        pathname,
        routePath,
        params,
        query
    } = useRouter();


    if ( posts[params.id] ) {
        return (
            <Page pageTitle={ posts[params.id].meta.title }>
                <h1>{ posts[params.id].meta.title }</h1>
                <main dangerouslySetInnerHTML={{__html: posts[params.id].content }}></main>
            </Page>
        );
    } 

    return <E404></E404>;
}
