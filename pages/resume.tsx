import { NextPage } from "next";
import Head from "next/head";
import Header, { Pages } from "../components/header";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ibrahim Abotaleb - Resume</title>
        <meta
          name="description"
          content="Personal website for Ibrahim Abotaleb"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
        <div className="subPage">
          <div className="flex flex-col">
            <Header active={Pages.RESUME} />
            <div className="flex self-center w-[87vw] h-[80vh]">
              <embed
                className="pdfViewer"
                src="/ibrahimAbotaleb_Resume.pdf"
                type="application/pdf"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
