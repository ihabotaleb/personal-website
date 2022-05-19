import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import React from "react";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  let perspectivePolygons = [];

  for (let i = 0; i < 300; i++) {
    let x = Math.random() * width * 2 - width / 2;
    let y = Math.random() * height;

    let r = Math.round(Math.random() * 150 + 105);
    let g = Math.round(Math.random() * 150 + 105);
    let b = Math.round(Math.random() * 150 + 105);

    let yprime = height * 1.3;
    let thickness = y / 200;
    let poly = (
      <polygon
        points={
          "" +
          x +
          "," +
          (y - thickness) +
          " " +
          x +
          "," +
          (y + thickness) +
          " " +
          width / 2 +
          "," +
          yprime
        }
        fill={"rgb(" + r + "," + g + "," + b + ")"}
        stroke="None"
        key={i}
      />
    );
    perspectivePolygons.push(poly);
  }

  return (
    <div>
      <Head>
        <title>Ibrahim Abotaleb</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />{" "}
      </Head>
      <main>
        <div className="behind grid grid-cols-6 grid-rows-6 w-[100vw] h-[100vh] ">
          <div className="col-start-1 col-end-7 row-start-1 row-end-7">
            <svg
              width="100%"
              height="100%"
              className="opacity-[0.7] bg-transparent blur-[0.0px]"
              fill="none"
            >
              {perspectivePolygons}
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-6 grid-rows-6 w-[100vw] h-[100vh] ">
          <div className="col-start-2 col-end-4 row-start-3 row-end-5">
            <h1 className="title flex-1 boxcent  h-[100%] w-[100%] mr-4">
              Ibrahim Abotaleb
            </h1>
          </div>
          <div className="col-start-4 col-end-6 row-start-3 row-end-5 grid boxcent grid-row-4 h-[100%] w-[100%] ml-4">
            <Link href="/about">
              <a className="items">About</a>
            </Link>
            <Link href="/resume">
              <a className="items">Resume</a>
            </Link>
            <Link href="/projects">
              <a className="items">Projects</a>
            </Link>
            <Link href="/portfolio">
              <a className="items">Portfolio</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
