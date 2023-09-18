import { useEffect, useState } from "react";
import { getAllEpAlbums } from "../../data/epAlbumData";
import { getAllLpAlbums } from "../../data/lpAlbumData";
import "./RecordArchive.css";
import { Link } from "react-router-dom";

export const RecordArchive = () => {
  const [epAlbums, setEpAlbums] = useState([]);
  const [lpAlbums, setLpAlbums] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    getAllEpAlbums().then((epArray) => {
      setEpAlbums(epArray);
    });
    getAllLpAlbums().then((lpArray) => {
      setLpAlbums(lpArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    setUserId(userId);
  }, []);
  return (
    <>
      <h2>Record Archive</h2>
      <div className="album-list">
        {epAlbums.map((epObj) => {
          if (epObj.userId === userId) {
            return (
              <div className="album" key={epObj.id}>
                <Link to={`/recordArchive/${epObj.id}`}>
                  <img
                    src={epObj.imgUrl}
                    alt="album covers"
                    width={200}
                    height={200}
                  />
                </Link>

                <div>"{epObj.name}"</div>
              </div>
            );
          }
        })}
      </div>
      <div className="album-list">
        {lpAlbums.map((lpObj) => {
          if (lpObj.userId === userId) {
            return (
              <div className="album" key={lpObj.id}>
                <Link to={`/recordArchive/${lpObj.id}`}>
                  <img
                    src={lpObj.imgUrl}
                    alt="album covers"
                    width={200}
                    height={200}
                  />
                </Link>
                <div>"{lpObj.name}"</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
