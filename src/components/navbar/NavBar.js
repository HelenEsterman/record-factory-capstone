import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="nav-bar">
      <li className="navbar-item">
        <img
          className="image"
          src="https://i.pinimg.com/originals/bb/78/f6/bb78f67f48275da08383d982498e62aa.gif"
          alt="tom the cat playing piano keys with jerry the mouse inside"
          width={70}
          height={70}
        />
        <Link to="/createAlbum" className="navbar-link">
          Create Album
        </Link>
      </li>
      <li className="navbar-item">
        <img
          className="image"
          src="https://media.tenor.com/YN7bkFSEtwcAAAAM/good-music-tom-and-jerry.gif"
          alt="jerry the mouse listening to music with headphones on"
          width={70}
          height={70}
        />
        <Link to="/recordArchive" className="navbar-link">
          Record Archive
        </Link>
      </li>
      {localStorage.getItem("record_factory_user") ? (
        <li className="navbar-item">
          <img
            className="image"
            src="https://media.tenor.com/GLVCw4f0GVIAAAAC/tom-sad.gif"
            alt="tom the cat leaving with a stick and bindle"
            width={70}
            height={70}
          />
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
