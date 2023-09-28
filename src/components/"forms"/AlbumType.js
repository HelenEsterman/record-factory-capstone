import { useEffect, useState } from "react";
import { getAlbumTypes } from "../../data/albumTypeData";
import "./AlbumType.css";
import { useNavigate } from "react-router-dom";

//TODO: NOT DONE WITH CSS***

export const AlbumType = () => {
  const [albumTypes, setAlbumTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumTypes().then((albumTypeArr) => {
      setAlbumTypes(albumTypeArr);
    });
  }, []);

  return (
    <>
      <div className="album-options">
        {albumTypes.map((type) => {
          return (
            <button
              className="album-choices"
              key={type.id}
              onClick={(event) => {
                navigate(`/createAlbum/${type.id}`);
              }}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      <div className="choose-one">Choose One</div>
    </>
  );
};
