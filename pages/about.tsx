import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const About: NextPage = () => {
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
            <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">
              {
                "I'm a developer with a passion in making tools that help people create. I love media. I love making things. I love designing things. Growing up, I went from learning scripting with the Adobe Creative Suite, to sandboxing in game engines like Unity, and even researching how realtime rendering was achieved. I always questioned how media I consumed was able to be generated and experienced. That's why you'll always find me messing around with new graphics technologies and seeing what cool experiments lead to."
              }
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
