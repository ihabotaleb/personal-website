import Link from "next/link";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="headerBar">
      <Link href="/">
        <a className="headerTitle">Ibrahim Abotaleb</a>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
