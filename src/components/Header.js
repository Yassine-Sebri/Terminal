import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="underline">
          /About
        </Link>
        <Link to="/Projects" className="underline">
          /Projects
        </Link>
        <Link to="/Writeups" className="underline">
          /Writeups
        </Link>
        <Link
          to="mailto:yassine.sebri@enetcom.u-sfax.tn "
          className="underline"
        >
          /Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
