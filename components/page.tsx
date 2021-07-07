import React from "react";
import Head from "~/components/head.tsx";
import NavBar from "~/components/navbar.tsx";
import Footer from "~/components/footer.tsx";

export default function Page(props: {pageTitle: string, children: React.ReactNode}) {
    return (
        <div className="page">
            <Head title={ props.pageTitle }></Head>
            <NavBar></NavBar>
            { props.children }
            <Footer></Footer>
        </div>
    )
}