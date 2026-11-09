import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

export default function Header({ children }) {
  const { pathname } = useLocation();

  return (
    <header className={pathname === "/" ? "home-header" : undefined}>
      <div className="nav">
        <div className="nav-lead">
          {children}
          <Link className="brand" to="/">
            <span className="brand-mark-frame">
              <img className="mark" src={logo} alt="Agrivaluechain logo" />
            </span>
            Agrivaluechain
          </Link>
          <Link className="nav-about" to="/#agrivaluechain-intro">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5" />
              <path d="M12 7.5h.01" />
            </svg>
            About Us
          </Link>
        </div>
        <nav className="navlinks">
          <Link className="nav-home" to="/">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9M9 21v-7h6v7" />
            </svg>
            Home
          </Link>
          <Link className="nav-contact" to="/#contact">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h16v12H9l-5 4V5Z" />
              <path d="M8 10h8M8 13h5" />
            </svg>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
