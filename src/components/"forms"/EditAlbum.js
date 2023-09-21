import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumsById, postEditedAlbum } from "../../data/albumData";
import { getGenres } from "../../data/genreData";
import "./EditAlbum.css";

export const EditAlbum = () => {
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [genres, setGenres] = useState([]);
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
  }, []);

  useEffect(() => {
    getAlbumsById(albumId).then((albumObj) => {
      setCurrentAlbum(albumObj);
    });
  }, [albumId]);

  const handleInputStateChanges = (event) => {
    const currentAlbumCopy = {
      ...currentAlbum,
    };
    currentAlbumCopy[event.target.name] = event.target.value;
    currentAlbumCopy.genreId = parseInt(currentAlbumCopy.genreId);
    setCurrentAlbum(currentAlbumCopy);
  };

  const handleNewAlbumSave = (event) => {
    event.preventDefault();

    const updatedAlbum = {
      id: currentAlbum.id,
      name: currentAlbum.name,
      imgUrl: currentAlbum.imgUrl,
      artistName: currentAlbum.artistName,
      song1: currentAlbum.song1,
      song2: currentAlbum.song2,
      song3: currentAlbum.song3,
      song4: currentAlbum.song4,
      song5: currentAlbum.song5,
      song6: currentAlbum.song6,
      genreId: currentAlbum.genreId,
      userId: currentAlbum.userId,
    };

    postEditedAlbum(updatedAlbum.id, updatedAlbum).then(
      navigate(`/recordArchive/${currentAlbum.id}`)
    );
  };

  return (
    <>
      <form className="edit-form-container">
        <div className="edit-album-info">
          <h1>Edit Your Album</h1>
          <fieldset>
            <label>
              Edit Album Name
              <input
                className="edit-input-field"
                type="text"
                name="name"
                value={currentAlbum.name ? currentAlbum.name : ""}
                placeholder="enter album name"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Album Cover Image URL
              <input
                className="edit-input-field"
                type="text"
                name="imgUrl"
                value={currentAlbum.imgUrl ? currentAlbum.imgUrl : ""}
                placeholder="www.example.com"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Artist Name
              <input
                className="edit-input-field"
                type="text"
                name="artistName"
                value={currentAlbum.artistName ? currentAlbum.artistName : ""}
                placeholder="enter artist name"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>Genre</label>
            <select
              name="genreId"
              value={currentAlbum.genreId}
              onChange={handleInputStateChanges}
              className="edit-genres"
            >
              {genres.map((genre) => {
                return (
                  <option
                    className="edit-input-field"
                    value={genre.id}
                    key={genre.id}
                  >
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
        <div className="edit-song-info">
          <label>Edit Your Songs</label>
          <fieldset>
            <label>
              1.
              <input
                className="edit-input-field"
                type="text"
                name="song1"
                value={currentAlbum.song1 ? currentAlbum.song1 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              2.
              <input
                className="edit-input-field"
                type="text"
                name="song2"
                value={currentAlbum.song2 ? currentAlbum.song2 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              3.
              <input
                className="edit-input-field"
                type="text"
                name="song3"
                value={currentAlbum.song3 ? currentAlbum.song3 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              4.
              <input
                className="edit-input-field"
                type="text"
                name="song4"
                value={currentAlbum.song4 ? currentAlbum.song4 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              5.
              <input
                className="edit-input-field"
                type="text"
                name="song5"
                value={currentAlbum.song5 ? currentAlbum.song5 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              6.
              <input
                className="edit-input-field"
                type="text"
                name="song6"
                value={currentAlbum.song6 ? currentAlbum.song6 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
        </div>
        <div className="save-edit-btn-container">
          <button className="save-edit-btn" onClick={handleNewAlbumSave}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};
