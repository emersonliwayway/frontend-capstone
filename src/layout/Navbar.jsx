import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/random">Random</NavLink>
      <nav>
        {token ? (
          <>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/posts" onClick={logout}>
              Log out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}
