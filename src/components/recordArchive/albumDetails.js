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
        <img src={album.imgUrl} alt="album cover" width={500} height={500} />
        <div className="text-overlay">
          <p>"{album.name}"</p>
          <p>{album.artistName}</p>
          <ul className="list-unstyled">
            <li>"{album.song1}"</li>
            <li>"{album.song2}"</li>
            <li>"{album.song3}"</li>
            <li>"{album.song4}"</li>
            <li>"{album.song5}"</li>
            <li>"{album.song6}"</li>
          </ul>
          <p>{genreObj?.name}</p>
        </div>
      </div>
      <button onClick={() => navigate(`/recordArchive/${album.id}/edit`)}>
        Edit Album
      </button>
      <button onClick={handleDelete}>Delete Album</button>
    </>
  );
};
