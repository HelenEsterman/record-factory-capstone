import { useEffect, useState } from "react";
import { FilterBtns } from "./FilterBtns";
import { getAllAlbums } from "../../data/albumData";
import { getAlbumTypes } from "../../data/albumTypeData";
import "./RecordArchive.css";
import { Link } from "react-router-dom";

export const LpAlbumList = () => {
  const [lpAlbums, setEpAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [albumTypes, setAlbumTypes] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    getAllAlbums().then((albumArr) => {
      setAllAlbums(albumArr);
    });
    getAlbumTypes().then((typesArr) => {
      setAlbumTypes(typesArr);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    setUserId(userId);
  }, []);

  useEffect(() => {
    const filteredAlbums = allAlbums.filter(
      (album) => album.albumType === albumTypes?.[1]?.id
    );
    setEpAlbums(filteredAlbums);
  }, [albumTypes, allAlbums]);

  return (
    <div className="records-container center-block">
      <div>
        <FilterBtns />
      </div>
      <div className="album-list">
        {lpAlbums.map((albumObj) => {
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
