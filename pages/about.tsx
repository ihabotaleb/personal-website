import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Box from "./components/box";
import { useWindowSize } from "usehooks-ts";

const About:NextPage = () => {

    const { width, height } = useWindowSize();

    return (
        <div>
            <Head>
            <title>Ibrahim Abotale - About</title>
            <meta name="description" content="Personal website for Ibrahim Abotaleb" />
	        <meta name="theme-color" content="#fff" />
            </Head>
            <main>
                <div className="m-7">
                    <h1 className="pageTitle">About</h1>
                    <Link href="/">
                        <a className="times">Back to Home</a>
                    </Link>
                    <div className="w-[100vw] h-[100vh] flex flex-col ">
                        <Box title="Box 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat urna id nibh consectetur, vel bibendum magna venenatis. In condimentum lacus tellus, sed pulvinar est sagittis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam feugiat mollis consequat. Proin eu nisl turpis. Etiam sodales magna tortor, in malesuada justo ultrices in. Nulla porttitor nibh quis vestibulum ultricies. In hac habitasse platea dictumst. Nam semper sodales purus sit amet cursus." />
                        <Box title="Box 2" text="Sed a feugiat metus, eget ultrices eros. Phasellus condimentum purus eu feugiat tincidunt. Sed tempus dictum elementum. Vivamus cursus libero lacus, tempus sagittis ligula volutpat in. Pellentesque efficitur molestie urna, ut commodo erat lacinia in. In lobortis lacinia lacus, non facilisis purus pharetra at. Maecenas nisi eros, vehicula at molestie vitae, consectetur quis ante. Integer imperdiet, turpis et tincidunt pharetra, justo lacus vulputate erat, sit amet feugiat tortor augue non nisl. Donec semper auctor tortor, vitae pharetra nunc ultricies eu." />
                        <Box title="Box 3" text="Text entered here." />
                    </div>
                </div>
            </main>
        </div>
    );
};



export default About