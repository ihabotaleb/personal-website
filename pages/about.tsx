import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const About:NextPage = () => {
    return (
        <div>
            <Head>
            <title>Ibrahim Abotale - About</title>
            </Head>
            <main>
                <h1>About</h1>
                <Link href="/">Back to index</Link>
            </main>
        </div>
    );
};

export default About