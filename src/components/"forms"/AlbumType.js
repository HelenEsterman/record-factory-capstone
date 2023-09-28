import { useEffect, useState } from "react";
import { getAlbumTypes } from "../../data/albumTypeData";
import "./AlbumType.css";
import { useNavigate } from "react-router-dom";
import { postNewAlbum } from "../../data/albumData";

//TODO: NOT DONE WITH CSS***

export const AlbumType = () => {
  const [albumTypes, setAlbumTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumTypes().then((albumTypeArr) => {
      setAlbumTypes(albumTypeArr);
    });
  }, []);

  const createDefaultAlbumObj = (type) => {
    const defaultAlbum = {
      albumType: type.id,
    };
    postNewAlbum(defaultAlbum).then(navigate(`/createAlbum/${type.id}`));
  };

  return (
    <>
      <div className="album-options">
        {albumTypes.map((type) => {
          return (
            <button
              className="album-choices"
              key={type.id}
              onClick={() => {
                createDefaultAlbumObj(type);
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
