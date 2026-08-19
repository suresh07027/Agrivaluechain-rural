import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <Link className="brand" to="/">
          <svg className="mark" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="14" stroke="#1E3A2C" strokeWidth="1.4" />
            <path d="M9 18c1-6 4-9 6-10 2 1 5 4 6 10" stroke="#C4703A" strokeWidth="1.4" fill="none" />
            <path d="M15 8v14" stroke="#1E3A2C" strokeWidth="1.4" />
          </svg>
          Agrivaluechain
        </Link>
        <nav className="navlinks">
          <Link to="/">Home</Link>
        </nav>
        <a className="contact-pill" href="mailto:agrivaluechain@gmail.com">
          Get in touch
        </a>
      </div>
    </header>
  );
}
