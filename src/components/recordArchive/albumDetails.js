import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAlbum, getAlbumsById } from "../../data/albumData";
import { getGenres } from "../../data/genreData";
import "./albumDetails.css";
import { DetailsSongList } from "../songs/DetailsSongList";

export const AlbumDetails = () => {
  const [album, setAlbum] = useState([]);
  const [userId, setUserId] = useState([]);
  const [genres, setGenres] = useState([]);
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumsById(albumId).then((albumObj) => {
      setAlbum(albumObj);
    });
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    setUserId(userId);
  }, [albumId]); //album- was causing infinite fetch call

  const handleDelete = (event) => {
    deleteAlbum(albumId).then(navigate("/recordArchive"));
  };

  const genreObj = genres.find((genre) => genre.id === album.genreId);
  return (
    <>
      <div className="album-detail-container">
        <img
          className="album-details-image"
          src={album.imgUrl}
          alt="album cover"
          width={500}
          height={500}
        />
        <div className="text-overlay">
          <h1>
            <i>"{album.name}"</i>
          </h1>
          <h2>{album.artistName}</h2>
          <div className="songs-list">
            <DetailsSongList />
            {/* <ul className="list-unstyled">
              <li>
                <p className="album-song">"{album.song1}"</p>
              </li>
              <li>
                <p className="album-song">"{album.song2}"</p>
              </li>
              <li>
                <p className="album-song">"{album.song3}"</p>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <p className="album-song">"{album.song4}"</p>
              </li>
              <li>
                <p className="album-song">"{album.song5}"</p>
              </li>
              <li>
                <p className="album-song">"{album.song6}"</p>
              </li>
            </ul> */}
          </div>
          <p className="genre-name">{genreObj?.name}</p>
        </div>
      </div>
      <div className="details-btns">
        <div className="details-btn">
          <button
            className="edit-btn"
            onClick={() => navigate(`/recordArchive/${album.id}/edit`)}
          >
            Edit Album
          </button>
        </div>
        <div className="details-btn">
          <button className="delete-btn" onClick={handleDelete}>
            Delete Album
          </button>
        </div>
      </div>
    </>
  );
};
