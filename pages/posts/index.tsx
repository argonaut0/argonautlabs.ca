import React from "react";
import { useDeno } from "framework/react";
import Page from "~/components/page.tsx";

export default function Posts({ posts }: { posts: Deno.DirEntry[]}) {

    return (
        <Page pageTitle="Posts">
            <h1>Posts</h1>
            <main>
                <ul>
                { posts.map((x) => <a href={"/posts/" + x.name}>{x.name}</a>) }
                </ul>
            </main>
        </Page>
    )
}