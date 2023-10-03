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
            <i>{album.name}</i>
          </h1>
          <h2>by {album.artistName}</h2>
          <div className="songs-list">
            <DetailsSongList />
          </div>
          <p className="genre-name">{genreObj?.name}</p>
        </div>
      </div>
      <div className="details-btns">
        <button
          className="back-btn"
          onClick={() => {
            navigate("/recordArchive");
          }}
        >
          Back To Archive
        </button>

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
