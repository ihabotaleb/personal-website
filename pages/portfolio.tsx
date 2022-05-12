import type { NextPage } from "next";
import Head from "next/head";
import { useWindowSize } from "usehooks-ts";
import Header from "./components/header";
import Gallery from "react-grid-gallery";

const Portfolio: NextPage = () => {
  const { width, height } = useWindowSize();
  
  const IMAGES = [{
      src: "imgs/sq1.png",
      thumbnail: "imgs/sq1.png",
      thumbnailWidth: 300,
      thumbnailHeigh: 400,
      caption: "Wrektacular pour"
  }, {src: "imgs/sq1.png",
  thumbnail: "imgs/sq1.png",
  thumbnailWidth: 300,
  thumbnailHeigh: 400,
  caption: "Wrektacular pour"},{src: "imgs/sq1.png",
  thumbnail: "imgs/sq1.png",
  thumbnailWidth: 300,
  thumbnailHeigh: 400,
  caption: "Wrektacular pour"},{src: "imgs/sq1.png",
  thumbnail: "imgs/sq1.png",
  thumbnailWidth: 300,
  thumbnailHeigh: 400,
  caption: "Wrektacular pour"}];

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
          <p className="italic text-center">PORTFOLIO CONTENT INTRO TO BE PUT HERE</p>
            <Gallery images={IMAGES} />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

