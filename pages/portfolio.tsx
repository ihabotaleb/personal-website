import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/header";
import PhotoAlbum from "react-photo-gallery";

const Portfolio: NextPage = () => {
  
const IMAGES=[{ src:'imgs/PrepartyPoster.png',width:1446,height:1872},{ src:'imgs/White Mockup.png',width:2634,height:1376},{ src:'imgs/WREK Vines.png',width:1372,height:1110},{ src:'imgs/Variant 5.png',width:2550,height:3300},{ src:'imgs/Variant 8.png',width:2550,height:3300},{ src:'imgs/sq1.png',width:1000,height:1017},{ src:'imgs/PrepartyPoster0.png',width:1628,height:2090},{ src:'imgs/Swirl WIP.png',width:1360,height:762}];
  
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
          <PhotoAlbum photos={IMAGES}/>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

