import { useNavigate } from "react-router-dom";
import "./AlbumType.css";

export const AlbumType = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="album-types">
        <button
          className="album-choices"
          onClick={() => {
            navigate("/createEpAlbum");
          }}
        >
          EP Album
        </button>
        <button
          className="album-choices"
          onClick={() => {
            navigate("/createLpAlbum");
          }}
        >
          LP Album
        </button>
      </div>
      <p className="choose-one">Choose One</p>
    </>
  );
};
