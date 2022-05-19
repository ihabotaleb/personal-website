import Link from "next/link";
import NavBar from "./navbar";

export enum Pages {
  ABOUT,
  PROJECTS,
  RESUME,
  PORTFOLIO
}

export type NavBarPropType = {
  active : Pages;
}

const Header = ({ active } : NavBarPropType) => {
  return (
    <div className="headerBar">
      <Link href="/">
        <a className="headerTitle">Ibrahim Abotaleb</a>
      </Link>
      <NavBar active={active} />
    </div>
  );
};

export default Header;
