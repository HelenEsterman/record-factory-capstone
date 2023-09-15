import { useEffect, useState } from "react";
import { getAllEpAlbums } from "../../data/epAlbumData";
import { getAllLpAlbums } from "../../data/lpAlbumData";
import "./RecordArchive.css";

export const RecordArchive = () => {
  const [epAlbums, setEpAlbums] = useState([]);
  const [lpAlbums, setLpAlbums] = useState([]);

  useEffect(() => {
    getAllEpAlbums().then((epArray) => {
      setEpAlbums(epArray);
    });
    getAllLpAlbums().then((lpArray) => {
      setLpAlbums(lpArray);
    });
  }, []);
  return (
    <>
      <h2>Record Archive</h2>
      <div className="album-list">
        {epAlbums.map((epObj) => {
          return (
            <div className="album" key={epObj.id}>
              <img
                src={epObj.imgUrl}
                alt="album covers"
                width={200}
                height={200}
              />
              <div>"{epObj.name}"</div>
            </div>
          );
        })}
      </div>
      <div className="album-list">
        {lpAlbums.map((lpObj) => {
          return (
            <div className="album" key={lpObj.id}>
              <img
                src={lpObj.imgUrl}
                alt="album covers"
                width={200}
                height={200}
              />
              <div>"{lpObj.name}"</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
