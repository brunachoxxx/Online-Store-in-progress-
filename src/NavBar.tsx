import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartCountSelector } from "./store.js";

export default function Nav() {
  const cartQuantity = useSelector(cartCountSelector);
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartQuantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
