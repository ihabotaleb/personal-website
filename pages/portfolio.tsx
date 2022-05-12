import type { NextPage } from "next";
import Head from "next/head";
import { useWindowSize } from "usehooks-ts";
import Header from "./components/header";

const Portfolio: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Head>
        <title>Ibrahim Abotale - Portfolio</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="subPage">
          <Header />
          <p className="italic text-center">CONTENT TO BE PUT HERE</p>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

