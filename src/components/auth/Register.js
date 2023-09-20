import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserByEmail, createUser } from "../../data/userData";

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    const newUser = {
      ...user,
    };

    createUser(newUser).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "record_factory_user",
          JSON.stringify({
            id: createdUser.id,
            // staff: createdUser.isStaff, *i don't believe you have anything similar to this property in your object
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <main className="auth-container center-block">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1 className="header">Ronnie and The Record Factory</h1>
        <h2>Please Register</h2>
        <fieldset className="auth-fieldset">
          <div>
            <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="auth-form-input"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div>
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="auth-form-input"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div>
            <button type="submit" className="sign-in-btn">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
