import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import PhotoAlbum from "react-photo-gallery";

const Portfolio: NextPage = () => {
  
  const IMAGES=[{ 
    src:'imgs/rw1.png',
    width:876,
    height:322
  },{ 
    src:'imgs/sq1.png',
    width:1000,
    height:1017
  }];
  
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
            <PhotoAlbum photos={IMAGES}/>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

