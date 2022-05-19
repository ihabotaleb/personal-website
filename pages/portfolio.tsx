import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import PhotoAlbum from "react-photo-gallery";

const Portfolio: NextPage = () => {
  const IMAGES = [
    { src: "imgs/6.png", width: 835, height: 1080 },
    { src: "imgs/8.png", width: 1028, height: 537 },
    { src: "imgs/12.png", width: 3678, height: 1958 },
    { src: "imgs/14.png", width: 1372, height: 1110 },
    { src: "imgs/1.png", width: 1628, height: 2090 },
    { src: "imgs/2.png", width: 1360, height: 762 },
    { src: "imgs/3.png", width: 800, height: 801 },
    { src: "imgs/15.png", width: 794, height: 1021 },
    { src: "imgs/dd4.png", width: 3795, height: 2134 },
    { src: "imgs/10.png", width: 3795, height: 2134 },
    { src: "imgs/11.png", width: 3795, height: 2134 },
    { src: "imgs/5.png", width: 1000, height: 1017 },
    { src: "imgs/7.png", width: 794, height: 1028 },
    { src: "imgs/13.png", width: 1714, height: 1134 },
    { src: "imgs/9.png", width: 12518, height: 3886 },
    { src: "imgs/4.png", width: 800, height: 791 },
  ];

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
          <PhotoAlbum photos={IMAGES} />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
