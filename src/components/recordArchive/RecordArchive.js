import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import "./RecordArchive.css";
import { Link } from "react-router-dom";
import { FilterBtns } from "./FilterBtns";

export const RecordArchive = () => {
  const [albums, setAlbums] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    getAllAlbums().then((epArray) => {
      setAlbums(epArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    setUserId(userId);
  }, []);
  return (
    <div className="records-container center-block">
      <div>
        <FilterBtns />
      </div>
      <div className="album-list">
        {albums.map((albumObj) => {
          if (albumObj.userId === userId) {
            return (
              <div className="album" key={albumObj.id}>
                <Link to={`/recordArchive/${albumObj.id}`}>
                  <img
                    src={albumObj.imgUrl}
                    alt="album covers"
                    width={200}
                    height={200}
                    className="album-image"
                  />
                </Link>

                <div className="album-name">{albumObj.name}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
