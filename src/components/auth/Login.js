import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail } from "../../data/userData";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "record_factory_user",
          JSON.stringify({
            id: user.id,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="auth-container center-block">
      <section className="auth-box">
        <section>
          <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="header">Ronnie and The Record Factory</h1>
            <h2>Please sign in</h2>
            <fieldset className="auth-fieldset">
              <div>
                <input
                  type="email"
                  value={email}
                  className="auth-form-input"
                  onChange={(evt) => set(evt.target.value)}
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset className="auth-fieldset">
              <div>
                <button type="submit" className="sign-in-btn">
                  Sign in
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <section className="register-link">
          <Link to="/register" className="register-link">
            Not a member yet?
          </Link>
        </section>
      </section>
    </main>
  );
};
