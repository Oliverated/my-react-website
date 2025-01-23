import { useState } from "react";
import "./general.css";
import { Link, animateScroll as scroll } from "react-scroll";
// import { HashRouter as Link } from "react-router-dom";
export default function Nav() {
  const [menu1, setMenu1] = useState(true);
  return (
    <header>
  
      <nav className="nav">
        <div className="nav-logo-block">
          <img className="nav-logo" src="public/oliverated1.png" alt="" />

          <span className="harmburger" onClick={() => setMenu1(!menu1)}>
          
          </span>
        </div>
        <menu className="nav-menu" id={menu1 ? "open" : ""}>
          <ul className="nav-list">
            <li>
              <Link to="home" smooth={true}>Home </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>About</Link>
            </li>
            <li>
              <Link to="contact" smooth= {true}> Contact</Link>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}
