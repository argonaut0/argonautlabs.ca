import { React } from "../deps.ts";

export default function NavBar() {
    return (
        <header className="topbar">
            <nav className="topnav">
                <a href="/">Home</a>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
            </nav>
        </header>
    )
}