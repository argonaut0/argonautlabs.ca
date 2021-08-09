import { React, useDeno, formatDate } from "../deps.ts";

export default function Footer() {
    const version = useDeno(() => Deno.version.deno);

    return (
        <footer className="bottomNav">
            <section>
                <p>Built with Aleph.js and Deno {version} on {formatDate(new Date(), "yyyy-MM")}</p>
            </section>
        </footer>
    );
}