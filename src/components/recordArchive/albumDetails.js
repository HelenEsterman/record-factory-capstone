import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAlbum, getAlbumsById } from "../../data/albumData";
import { getGenres } from "../../data/genreData";
import "./albumDetails.css";

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
  }, [albumId]);

  const handleDelete = () => {
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
          <div>
            <h1>"{album.name}"</h1>
            <h2>{album.artistName}</h2>
          </div>
          <div className="songs-list">
            <ul className="list-unstyled">
              <li>"{album.song1}"</li>
              <li>"{album.song2}"</li>
              <li>"{album.song3}"</li>
              <li>"{album.song4}"</li>
              <li>"{album.song5}"</li>
              <li>"{album.song6}"</li>
            </ul>
          </div>
          <p>{genreObj?.name}</p>
        </div>
      </div>
      <div className="details-btns">
        <div className="details-btn">
          <button onClick={() => navigate(`/recordArchive/${album.id}/edit`)}>
            Edit Album
          </button>
        </div>
        <div className="details-btn">
          <button onClick={handleDelete}>Delete Album</button>
        </div>
      </div>
    </>
  );
};
