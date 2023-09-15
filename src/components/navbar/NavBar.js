import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="nav-bar">
      <li className="navbar-item">
        <Link to="/createAlbum" className="navbar-item">
          Create Album
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/recordArchive" className="navbar-item">
          Record Archive
        </Link>
      </li>
      {localStorage.getItem("record_factory_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("record_factory_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
