import Link from "next/link";
import NavbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navWrapper}>
      <div className={NavbarStyles.navContainer}>
        <div className="navbar-brand">
          <Link href={"/"}>
            <h2 className={NavbarStyles.title}>CodeMacaw</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
