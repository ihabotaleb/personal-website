import Link from "next/link";

const NavBar = () => {
    return(            
    <div className="navBar">
        <Link href="/about">
        <a className="navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#c0ff8a] hover:bg-[#fff]">about</a>
        </Link>
        <Link href="/resume">
        <a className="navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#97c1fe] hover:bg-[#fff]">resume</a>
        </Link>
        <Link href="/projects">
        <a className="navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#ff7c7e] hover:bg-[#fff]">projects</a>
        </Link>
        <Link href="/portfolio">
        <a className="navItem bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#e3b57e] hover:bg-[#fff]">portfolio</a>
        </Link>
     </div>
  );
}

export default NavBar;