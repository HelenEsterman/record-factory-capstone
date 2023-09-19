import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import "./RecordArchive.css";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Record Archive</h2>
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
                  />
                </Link>

                <div>"{albumObj.name}"</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
