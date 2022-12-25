import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="text-decoration-none">
          <p className="display-5 collapse navbar-collapse text-danger">
            Dev<span className="text-info">Engines</span>
          </p>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item pe-3">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/"
                className="nav-link fs-4 active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item pe-3">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/people"
                className="nav-link fs-4"
                aria-current="page"
              >
                People
              </NavLink>
            </li>

            <li className="nav-item pe-3">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/paths"
                className="nav-link fs-4"
                aria-current="page"
              >
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/contact"
                className="nav-link fs-4"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
