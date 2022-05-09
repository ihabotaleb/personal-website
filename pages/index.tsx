import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";

const Home: NextPage = () => {

  const { width, height } = useWindowSize();
  
  // TODO: Add responsive offsets
  let svgXStartOffset = (height > width) ? 47.5 : 48.5;

  return (
    <div>
      <Head>
        <title>Ibrahim Abotaleb</title>
        <meta name="description" content="Personal website for Ibrahim Abotaleb" />
	      <meta name="theme-color" content="#7b1d06" />
      </Head>
      <main>
        <div className="behind grid grid-cols-6 grid-rows-6 w-[100vw] h-[100vh]">
          <div className="col-start-1 col-end-7 row-start-1 row-end-7">
            <svg width="100%" height="100%">
              <svg x={"" + svgXStartOffset + "%"} y="50%" overflow="visible">
                <g transform="rotate(12)">
                  <ellipse cx={0} cy={0} rx={170} ry={100} fill="none" stroke="black" />
                </g>
              </svg>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-6 grid-rows-6 w-[100vw] h-[100vh]">
              <div className="col-start-2 col-end-4 row-start-3 row-end-5">
                <h1 className="title flex-1 boxcent  h-[100%] w-[100%] mr-4">Ibrahim Abotaleb</h1>
              </div>
            <div className="col-start-4 col-end-6 row-start-3 row-end-5 grid boxcent grid-row-4 h-[100%] w-[100%] ml-4 items">
              <Link href="about">About</Link>
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
