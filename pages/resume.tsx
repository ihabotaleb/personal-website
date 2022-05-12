import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import NavBar from "./components/navbar";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ibrahim Abotale - Resume</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="subPage">
					<div className="flex flex-col">
          	<h1 className="pageTitle">Resume</h1>
            <NavBar />
          </div>
          <embed
            className="w-[65%] min-w-[265px] max-w-[600px] h-[75vh] pdfViewer"
            src="/ibrahimAbotaleb_Resume.pdf"
            type="application/pdf"
          />
        </div>
      </main>
    </div>
  );
};

export default Resume;
