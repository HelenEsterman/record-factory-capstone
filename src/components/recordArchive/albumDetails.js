import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpAlbumsById } from "../../data/epAlbumData";
import { getLpAlbumsById } from "../../data/lpAlbumData";
import { getGenres } from "../../data/genreData";
import "./albumDetails.css";

export const AlbumDetails = () => {
  const [epAlbum, setEpAlbum] = useState([]);
  const [lpAlbum, setLpAlbum] = useState([]);
  const [userId, setUserId] = useState([]);
  const [genres, setGenres] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    getEpAlbumsById(albumId).then((epAlbumObj) => {
      setEpAlbum(epAlbumObj);
    });
    getLpAlbumsById(albumId).then((lpAlbumObj) => {
      setLpAlbum(lpAlbumObj);
    });
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    setUserId(userId);
  }, [albumId]);

  if (epAlbum[0]?.userId === userId) {
    const genreObj = genres.find((genre) => genre.id === epAlbum[0].genreId);
    return (
      <div>
        <p>"{epAlbum[0].name}"</p>
        <p>{epAlbum[0].artistName}</p>
        <img
          src={epAlbum[0].imgUrl}
          alt="album cover"
          width={200}
          height={200}
        />
        <ul className="list-unstyled">
          <li>"{epAlbum[0].song1}"</li>
          <li>"{epAlbum[0].song2}"</li>
          <li>"{epAlbum[0].song3}"</li>
          <li>"{epAlbum[0].song4}"</li>
          <li>"{epAlbum[0].song5}"</li>
          <li>"{epAlbum[0].song6}"</li>
        </ul>
        <p>{genreObj?.name}</p>
      </div>
    );
  } else if (lpAlbum[0]?.userId === userId) {
    const genreObj = genres.find((genre) => genre.id === lpAlbum[0].genreId);
    return (
      <div>
        <p>"{lpAlbum[0].name}"</p>
        <p>{lpAlbum[0].artistName}</p>
        <img
          src={lpAlbum[0].imgUrl}
          alt="album cover"
          width={200}
          height={200}
        />
        <ul className="list-unstyled">
          <li>"{lpAlbum[0].song1}"</li>
          <li>"{lpAlbum[0].song2}"</li>
          <li>"{lpAlbum[0].song3}"</li>
          <li>"{lpAlbum[0].song4}"</li>
          <li>"{lpAlbum[0].song5}"</li>
          <li>"{lpAlbum[0].song6}"</li>
          <li>"{lpAlbum[0].song7}"</li>
          <li>"{lpAlbum[0].song8}"</li>
          <li>"{lpAlbum[0].song9}"</li>
          <li>"{lpAlbum[0].song10}"</li>
          <li>"{lpAlbum[0].song11}"</li>
        </ul>
        <p>{genreObj?.name}</p>
      </div>
    );
  }
};
