import { useState } from "react";
import "./general.css";
import { Link } from "react-router-dom";
// import { HashRouter as Link } from "react-router-dom";
export default function Nav() {
  const [menu1, setMenu1] = useState(false);
  return (
    <header>
      <nav className="nav">
        <div className="nav-logo-block">
          <img className="nav-logo" src="src/oliverated1.png" alt="" />

          <span className="harmburger" onClick={() => setMenu1(!menu1)}>
            &#9776;
          </span>
        </div>
        <menu className="nav-menu" id={menu1 ? "open" : ""}>
          <ul className="nav-list">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact"> Contact</Link>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}
