import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";

const Home: NextPage = () => {

  const { width, height } = useWindowSize();


  let svgXStartOffset = 50;

  let polys = [];
  for (let i = 0; i < 300 ; i++) {

    let sign = (Math.random() > 0.5) ? 1:-1;
    let r = Math.random() * width * 1.5 * sign; 

    let l = Math.random() * height * 0.35;

      polys.push(
        <polygon points={"" + (r-r/10) +","+ (l-l/10) + " " + (r-r/10) +","+ (l+l/10) + " " + 1*sign*(-1) + ",0"} fill={"rgb("+parseInt(Math.random()*200_55)+","+parseInt(Math.random()*200+55)+","+parseInt(Math.random()*200+55)+")"} stroke="None"/>
    );
  }

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
            <svg width="100%" height="100%" className="opacity-[0.7]" fill='none'>
              <svg x={"" + svgXStartOffset + "%"} y="60%" overflow="visible">
                <g>
                  {polys}
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
