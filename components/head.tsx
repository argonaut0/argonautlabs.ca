import { React } from "../deps.ts";

export default function Head(props: {title: string}) {

    return (
        <head>
            <title>Argonaut Labs - { props.title } </title>
            <link rel="stylesheet" href="../style/index.css" />
        </head>
    )
}