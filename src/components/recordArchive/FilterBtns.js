import { useNavigate } from "react-router-dom";
import "./FilterBtns.css";

export const FilterBtns = () => {
  const navigate = useNavigate();
  return (
    <div className="button-container">
      <button
        className="ep-button"
        onClick={() => {
          navigate("/epAlbums");
        }}
      ></button>
      <button
        className="lp-button"
        onClick={() => {
          navigate("/lpAlbums");
        }}
      ></button>
    </div>
  );
};
