import { React } from "../deps.ts";
import Head from "./head.tsx";
import NavBar from "./navbar.tsx";
import Footer from "./footer.tsx";

export default function Page(props: {pageTitle: string, children: React.ReactNode, className?: string}) {
    return (
        <div className={props.className ? props.className : "page"}>
            <Head title={ props.pageTitle }></Head>
            <NavBar></NavBar>
            { props.children }
            <Footer></Footer>
        </div>
    )
}