import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header({ children }) {
  return (
    <header>
      <div className="nav">
        <Link className="brand" to="/">
          <img className="mark" src={logo} alt="Agrivaluechain logo" />
          Agrivaluechain
        </Link>
        <nav className="navlinks">
          <Link className="nav-home" to="/#intro">Home</Link>
          <Link className="nav-technical" to="/#option1">Technical Support</Link>
          <Link className="nav-linking" to="/#option3">Linking Farmers</Link>
          <Link className="nav-collab" to="/#option2">Collaborative Research &amp; Development</Link>
          <Link className="nav-capacity" to="/#option4">Capacity Development Program</Link>
          <Link className="nav-contact" to="/#contact">Contact Us</Link>
        </nav>
        {children}
      </div>
    </header>
  );
}
