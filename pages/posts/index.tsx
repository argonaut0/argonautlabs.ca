import React from "react";
import { useDeno } from "framework/react";
import Page from "~/components/page.tsx";

export default function Posts() {
    const posts = useDeno(() => Deno.readDirSync("./posts"));

    const list: JSX.Element[] = [];
    
    for (const p of posts) {
        list.push(<a href={"/posts/" + p.name}>{p.name}</a>)
    }
    
    return (
        <Page pageTitle="Posts">
            <h1>Posts</h1>
            <main>
                <ul>
                    {list}
                </ul>
            </main>
        </Page>
    )
}