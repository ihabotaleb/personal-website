import type { NextPage } from "next";
import Head from "next/head";
import Header, { Pages } from "../components/header";

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
          <Header active={Pages.ABOUT} />
          <div className="flex flex-col">
            <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">
              {
                `
                I'm a passionate developer with a relentless drive to create tools that empower people to unleash their creativity. My love for media, design, and the art of making things has been a constant thread throughout my life. From early experiences scripting in the Adobe Creative Suite to exploring game engines like Unity and diving into the fascinating world of real-time rendering, I've always been captivated by how media is generated and experienced.

With a diverse range of skills and a natural curiosity, I'm constantly pushing the boundaries of what's possible. I thrive on experimenting with new graphics technologies and embarking on cool projects that blend innovation with creativity.

Combining my academic pursuits with a Bachelor's degree in Computer Science, with a focus on Intelligence and Media, I've gained a solid foundation in areas such as data structures, algorithms, computer graphics, machine learning, information visualization, and computer vision. Currently pursuing a Master's degree in Computer Science, with a specialization in Computer Graphics, I'm eager to explore the forefront of graphics technologies and discover new ways to create impactful experiences.

Driven by a strong sense of curiosity, creativity, and an innate desire to make a difference, I'm excited to bring my skills and personality to innovative projects.
                `
              }
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
