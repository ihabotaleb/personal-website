import type { NextPage } from "next";
import Head from "next/head";
import Header, { Pages } from "../components/header";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ibrahim Abotaleb - About</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="subPage">
          <Header active={Pages.ABOUT} />
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%] aboutDescription">
              <p>
                I am a highly motivated developer committed to crafting cutting-edge tools that empower professionals to unlock their full creative potential. Throughout my life, I have been driven by a passion for media, design, and the art of creating. Whether it was my early experiences scripting in the Adobe Creative Suite or delving into game engines like Unreal and real-time rendering, I have always been captivated by the generation and experience of media. <br/>
              </p>
              <p>
                With a versatile skill set and an insatiable curiosity, I constantly push the boundaries of what is achievable. I thrive on experimenting with the latest graphics technologies and embarking on exciting projects that fuse innovation with creativity. <br/>
              </p>
              <p>
                My academic journey has further equipped me with a strong foundation in computer science, specializing in Intelligence and Media. I have honed my skills in areas such as data structures, algorithms, computer graphics, machine learning, information visualization, and computer vision. Currently pursuing a MSCS degree at GT, focusing on Computer Graphics, I am eager to explore the forefront of graphics technologies and discover groundbreaking methods to create impactful experiences.
              </p>
              <p>
                Fueled by a deep sense of inquisitiveness, a creative spirit, and an innate drive to make a positive impact, I am thrilled to contribute my expertise and unique perspective to trailblazing projects.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
