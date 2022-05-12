import Link from "next/link";

const NavBar = () => {
    return(            
    <div className="navBar flex pb-5">
        <Link href="/about">
        <a className="navItem grow-1 bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#c0ff8a] hover:bg-[#7de344]">about</a>
        </Link>
        <Link href="/resume">
        <a className="navItem grow-1 bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#97c1fe] hover:bg-[#5e8cc7]">resume</a>
        </Link>
        <Link href="/projects">
        <a className="navItem grow-1 bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#ff7c7e] hover:bg-[#d24a59]">projects</a>
        </Link>
        <Link href="/portfolio">
        <a className="navItem grow-1 bg-white transition-colors duration-200 hover:bg-gradient-to-tl from-[#e3b57e] hover:bg-[#ca9540]">portfolio</a>
        </Link>
     </div>
  );
}

export default NavBar;