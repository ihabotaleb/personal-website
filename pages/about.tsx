import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import Header from "../components/header";

const About: NextPage = () => {
  const { width, height } = useWindowSize();

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
            {/* <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">{"I'm a developer with a passion in making tools that help people create."}</p> */}
            <p className="neue aboutBigText mt-5 pl-[16.5%] pr-[16.5%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et interdum dolor. Duis nec tortor non mi ultrices mattis. Pellentesque pretium porta est at tempor. Nulla facilisi. Fusce ullamcorper nibh commodo nibh hendrerit sodales. Quisque sed feugiat magna, vel viverra risus. Donec imperdiet elit a hendrerit dapibus. Suspendisse mattis viverra consequat.Donec ut pretium diam, et porta turpis. In quis turpis suscipit, tempus ex eu, tempus neque. Sed finibus eleifend sagittis. Nunc tristique viverra nisl at hendrerit. Suspendisse vel sapien a odio mattis elementum a ut nunc. Nam aliquet, odio ac molestie ultricies, eros diam elementum erat, quis porttitor dui ex sed quam. Aliquam eget pretium mi. Curabitur arcu massa, tempor finibus enim at, posuere vehicula libero. Cras rhoncus ullamcorper justo. Nullam at commodo elit. Nam eget gravida est. In eget erat eu dolor lobortis aliquet
            
            Vestibulum dictum, ante et sagittis vehicula, tortor nisi porttitor augue, mollis lobortis purus magna id enim. Maecenas facilisis a enim nec tristique. Sed mollis nulla dapibus vehicula ullamcorper. Maecenas nibh urna, commodo et sapien commodo, sagittis vehicula tortor. Suspendisse consectetur quis tortor ac vehicula. Fusce auctor urna at orci faucibus efficitur. Mauris sollicitudin, sem vel vestibulum scelerisque, ex velit aliquam leo, vel ornare augue lorem nec nibh. Praesent nunc lacus, tincidunt a commodo quis, dignissim at magna. Mauris metus ipsum, porttitor vitae velit sed, commodo suscipit leo. Curabitur ultricies commodo tortor a interdum. Nullam ut pharetra tellus. Quisque molestie velit odio, at venenatis mauris elementum vel. Maecenas bibendum velit nibh, imperdiet varius purus pellentesque id. Suspendisse a laoreet nibh. Integer sit amet magna libero. Nam nec elit quis augue efficitur consequat.
            
            Vivamus congue, justo vitae porta laoreet, felis odio aliquet mi, quis aliquam eros purus vel lacus. In hac habitasse platea dictumst. Mauris facilisis eu odio non aliquet. Fusce mattis justo in neque cursus facilisis quis at turpis. Etiam neque metus, vestibulum et maximus fermentum, auctor sit amet elit. Duis tincidunt tincidunt lacus at sagittis. Ut non gravida magna. Donec mattis et massa et vulputate. In convallis magna nec libero mollis vulputate. Maecenas nec interdum turpis. Nulla mi mauris, sollicitudin vitae sollicitudin eget, tempus et orci. Cras volutpat lectus eget pharetra tincidunt.\nAliquam accumsan et eros id efficitur. Duis aliquet volutpat vehicula. Curabitur semper bibendum justo, non auctor justo dignissim nec. Nullam ultricies eleifend quam, sed semper nisi hendrerit quis. Ut at dictum arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean a eros a libero ultricies auctor vel eu eros. Sed vestibulum erat eu quam efficitur luctus. Suspendisse potenti. Sed fringilla, leo et congue molestie, leo nulla rutrum eros, non accumsan quam nisl at diam. Quisque ante urna, luctus scelerisque ligula sed, cursus lobortis nisl. Donec gravida bibendum quam at volutpat.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
