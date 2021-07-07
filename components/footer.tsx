import React from "react";
import { useDeno } from "framework/react";
import { format } from "std";

export default function Footer() {
    const version = useDeno(() => Deno.version.deno);

    return (
        <footer className="bottomNav">
            <section>
                <p>Built with Aleph.js and Deno {version} on {format(new Date(), "yyyy-MM")}</p>
            </section>
        </footer>
    );
}