import Link from "next/link";
import { NavBarPropType, Pages } from "./header";

const NavBar = ({ active } : NavBarPropType) => {

  let aboutClassName: string =
    active == Pages.ABOUT
      ? "navItemActive bg-white bg-gradient-to-tl from-[#c0ff8a]"
      : "navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#c0ff8a] hover:bg-[#fff]";
  let resumeClassName: string =
    active == Pages.RESUME
      ? "navItemActive bg-white bg-gradient-to-tl from-[#97c1fe]"
      : "navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#97c1fe] hover:bg-[#fff]";
  let projectsClassName: string =
    active == Pages.PROJECTS
      ? "navItemActive bg-white bg-gradient-to-tl from-[#ff7c7e]"
      : "navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#ff7c7e] hover:bg-[#fff]";
  let portfolioClassName: string =
    active == Pages.PORTFOLIO
      ? "navItemActive bg-white bg-gradient-to-tl from-[#e3b57e]"
      : "navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#e3b57e] hover:bg-[#fff]";

  return (
    <div className="navBar">
      <Link href="/about">
        <a className={aboutClassName}>about</a>
      </Link>
      <Link href="/resume">
        <a className={resumeClassName}>resume</a>
      </Link>
      <Link href="http://github.com/ihabotaleb">
        <a className={projectsClassName}>projects</a>
      </Link>
      <Link href="/portfolio">
        <a className={portfolioClassName}>portfolio</a>
      </Link>
    </div>
  );
};

export default NavBar;
