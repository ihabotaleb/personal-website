import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import Header from "../components/header";

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
        <div className="subPage">
          <Header />
          <div className="flex flex-col">
            {/* <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">{"I'm a developer with a passion in making tools that help people create."}</p> */}
            <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">I'm a developer with a passion in making tools that help people create.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
