import { React, useDeno } from "../../deps.ts";
import Page from "../../components/page.tsx";

export default function Posts({ posts }: { posts: any }) {
    return (
        <Page pageTitle="Posts">
            <h1>Posts</h1>
            <main>
                <ul>
                {
                Object.keys(posts).map((x) => {
                    return (
                        <li key={x}>
                            <a href={"/posts/" + x}>{posts[x].meta.title}</a>
                            <p>{posts[x].meta.description}</p>
                        </li>
                    )
                })}
                </ul>
            </main>
        </Page>
    )
}