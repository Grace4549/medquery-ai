import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">MedQuery AI</NavLink>
      </div>

      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resources
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/faqs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FAQs
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar__actions">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active login-btn" : "login-btn")}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;