import { NextPage } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import { useWindowSize } from "usehooks-ts";
import Header, { Pages } from "../components/header";

const Projects: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Head>
        <title>Ibrahim Abotale - Projects</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="subPage">
          <Header active={Pages.PROJECTS} />
          <div className="projectBoxGrid" >
            <ProjectBox className=""
                        title="Raytracer.ts"
                        subheading="web-based raytracer to render shaded primitives"
                        link="http://github.com/ihabotaleb/tbd"
                        text="A TypeScript based raytracer that calculates primitive intersections, diffuse shading, shadows, and
                        specular highlights for spheres and disks on an HTML5 canvas." />
            
            <ProjectBox title="TransferApp"
                        subheading="fast and efficient patient profile transfer platform"
                        link="https://github.com/AtticATL/triage-app-team-1311"
                        text="An end-to-end encrypted progressive web app on Next.JS to facilitate the transmission of patient
                        information between hospital institutions during the patient transfer process." />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

type ProjectBoxProps = {
  title: string,
  subheading: string,
  text: string,
  link: string,
  className?: string
}

const ProjectBox : FunctionComponent<ProjectBoxProps> = ( { title, subheading, text, link, className } ) => {
  return(
    <div className={"box hover:bg-[#ffd4d6] "+className}>
              <h2 className="neue text-[22px] font-light">{title}</h2>
              <h4 className="times italic text-[#2f2f2f] text-[16px]">{subheading}</h4>
              <a className="font-mono text-[11px] text-right w-[100vw]" href={link}>{link}</a>
              <p className="pt-5 text-sm neue">{text}</p>
            </div>
  );
};