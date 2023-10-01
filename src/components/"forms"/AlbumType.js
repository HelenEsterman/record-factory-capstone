import { useEffect, useState } from "react";
import { getAlbumTypes } from "../../data/albumTypeData";
import "./AlbumType.css";
import { useNavigate } from "react-router-dom";
import { postNewAlbum } from "../../data/albumData";

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
    <div className="types-container">
      {albumTypes.map((type) => {
        return (
          <div key={type.id} className="choices-container">
            <button
              className="album-choices"
              id={type.id}
              key={type.id}
              onClick={() => {
                createDefaultAlbumObj(type);
              }}
            >
              <div className="choices-description">
                {type.name} Album ({type.minSong}-{type.maxSong} songs)
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};
