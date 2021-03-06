import { React } from "../../deps.ts";
import { useRouter, useDeno, Marked } from "../../deps.ts";
import E404 from "../../404.tsx";
import Page from "../../components/page.tsx";

export default function Post({ posts }: { posts: any }) {
    const {
        pathname,
        routePath,
        params,
        query
    } = useRouter();


    if ( posts[params.id] ) {
        return (
            <Page className="post" pageTitle={ posts[params.id].meta.title }>
                <h1 className="post-title">{ posts[params.id].meta.title }</h1>
                <main className="post-content" dangerouslySetInnerHTML={{__html: posts[params.id].content }}></main>
            </Page>
        );
    } 

    return <E404></E404>;
}
