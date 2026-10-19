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
          <Link className="nav-home" to="/#intro">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9M9 21v-7h6v7" />
            </svg>
            Home
          </Link>
          <Link className="nav-technical" to="/#option1">Technical Support</Link>
          <Link className="nav-linking" to="/#option3">Linking Farmers</Link>
          <Link className="nav-collab" to="/#option2">Collaborative Research &amp; Development</Link>
          <Link className="nav-capacity" to="/#option4">Capacity Development Program</Link>
          <Link className="nav-contact" to="/#contact">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 5h16v12H9l-5 4V5Z" />
              <path d="M8 10h8M8 13h5" />
            </svg>
            Contact Us
          </Link>
        </nav>
        {children}
      </div>
    </header>
  );
}
