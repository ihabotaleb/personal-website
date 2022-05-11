import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Resume:NextPage = () => {
    return(
        <div>
            <Head>
                <title>Ibrahim Abotale - Resume</title>
                <meta name="description" content="Personal website for Ibrahim Abotaleb" />
                <meta name="theme-color" content="#fff" />
            </Head>
            <main>
                <div className="m-7">
                    <h1 className="pageTitle">Resume</h1>
                    <Link href="/">
                            <a className="times">Back to Home</a>
                        </Link>   
													<embed className="w-[65%] max-w-[600px] h-[75vh] pdfViewer" src="/ibrahimAbotaleb_Resume.pdf" type="application/pdf"/>
                </div>
            </main>
        </div>
        );
    };

export default Resume;