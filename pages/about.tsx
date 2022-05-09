import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Draggable from 'react-draggable';

const About:NextPage = () => {
    return (
        <div>
            <Head>
            <title>Ibrahim Abotale - About</title>
            </Head>
            <main>
                <h1>About</h1>
                <Link href="/">Back to index</Link>

                <div className="w-[100vw] h-[100vh]">
                <Draggable
                    // axis="y"
                    defaultPosition={{x: 20, y: 20}}  >
                    <div className="bg-orange-500 ">
                        <p>
                            yes!
                        </p>
                        <h3>
                            Definitely
                        </h3>
                    </div>
                </Draggable>
                </div>
            </main>
        </div>
    
    );
};

export default About