import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useWindowSize } from 'usehooks-ts'

const Home: NextPage = () => {

  const {width, height} = useWindowSize();
  let yt = height/2 - height/8;
  let yb = height/2 + height/8;

  let circles = [];
  for (var i = 0; i < 100 * (Math.max(height, width) / 250) ; i++) {
      let t = Math.random() * 70 + 20;

      let r = Math.random() * height; 
      while (r > yt && r < yb) {
        r = Math.random() * height;
      }
      let l = Math.random() * width;
      // console.log("" + (r+r/10) +","+ (l-l/10) + " " + (r-r/10) +","+ (l+l/10))

        circles.push(
          // <polygon points="0,100 50,25 50,75 100,0" transform={"translate("+l+","+r+");"} />
          <polygon points={"" + (r-r/10) +","+ (l-l/10) + " " + (r-r/10) +","+ (l+l/10) + " 100,100"} fill="#ff0000" stroke="#fff"/>
          // </g>
      );
    }

  return (
    <div>
      <Head>
        <title>Ibrahim Abotaleb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="behind">
          <svg width="100%" height="100%">
            {circles}
          </svg>
        </div>
        <div className="min-w-[100wh] h-[100vh] grid grid-cols-2">
          <div className="flex-1 mr-2">
            <h1 className="title boxcent h-[100%] w-[100%]">Ibrahim Abotaleb</h1>
          </div>
          <div className="grid boxcent grid-row-4 ml-3 mt-[25vh] mb-[25vh] items">
            <a>About</a>
            <a>Resume</a>
            <a>Projects</a>
            <a>Design Portfolio</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
