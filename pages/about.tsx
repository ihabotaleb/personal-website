import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import NavBar from "./components/navbar";

const About: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Head>
        <title>Ibrahim Abotale - About</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="m-7">
          <div className="flex flex-col">
            <h1 className="pageTitle">About</h1>
            <NavBar />
          </div>
          <Link href="/">
            <a className="times">Back to Home</a>
          </Link>
          <div className="w-[100vw] h-[100vh] flex flex-col ">
            <p>One</p>
            <p>Two</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
