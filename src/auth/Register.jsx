import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="page">
        <h1 className="centerText">Register for an account</h1>
        <form action={onRegister} className="registerForm">
          <label>
            Username
            <input type="text" name="username" />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button>Register</button>
          {error && <output>{error}</output>}
        </form>
        <Link to="/login" className="centerText">
          Already have an account? Log in here.
        </Link>
      </div>
    </>
  );
}
