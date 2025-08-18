import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header id="navbar">
      <nav id="left">
        <NavLink id="home" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink id="about" to="/about">
          About
        </NavLink>
        <NavLink id="random" to="/random">
          Random
        </NavLink>
      </nav>
      <nav id="right">
        {token ? (
          <>
            <NavLink id="account" to="/account">
              Account
            </NavLink>
            <NavLink id="logout" to="/posts" onClick={logout}>
              Log out
            </NavLink>
          </>
        ) : (
          <NavLink id="login" to="/login">
            Log in
          </NavLink>
        )}
      </nav>
    </header>
  );
}
