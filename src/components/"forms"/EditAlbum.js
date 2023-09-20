import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumsById, postEditedAlbum } from "../../data/albumData";
import { getGenres } from "../../data/genreData";

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

    postEditedAlbum(updatedAlbum.id, updatedAlbum).then(navigate(-1));
  };

  return (
    <div className="album-form">
      <form>
        <h2 className="album-title">Create Your Album</h2>
        <fieldset>
          <div className="album-info">
            <label>
              Name of Your Album
              <input
                type="text"
                name="name"
                value={currentAlbum.name ? currentAlbum.name : ""}
                placeholder="enter album name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Album Cover Image URL
              <input
                type="text"
                name="imgUrl"
                value={currentAlbum.imgUrl ? currentAlbum.imgUrl : ""}
                placeholder="www.example.com"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Artist Name
              <input
                type="text"
                name="artistName"
                value={currentAlbum.artistName ? currentAlbum.artistName : ""}
                placeholder="enter artist name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 1
              <input
                type="text"
                name="song1"
                value={currentAlbum.song1 ? currentAlbum.song1 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 2
              <input
                type="text"
                name="song2"
                value={currentAlbum.song2 ? currentAlbum.song2 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 3
              <input
                type="text"
                name="song3"
                value={currentAlbum.song3 ? currentAlbum.song3 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 4
              <input
                type="text"
                name="song4"
                value={currentAlbum.song4 ? currentAlbum.song4 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 5
              <input
                type="text"
                name="song5"
                value={currentAlbum.song5 ? currentAlbum.song5 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="album-info">
            <label>
              Song 6
              <input
                type="text"
                name="song6"
                value={currentAlbum.song6 ? currentAlbum.song6 : ""}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div className="album-info">
            <div>Genre</div>
            <select
              name="genreId"
              value={currentAlbum.genreId}
              onChange={handleInputStateChanges}
            >
              <option value={0} key={0}>
                Pick Your Genre
              </option>
              {genres.map((genre) => {
                return (
                  <option value={genre.id} key={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <button className="save-btn" onClick={handleNewAlbumSave}>
          Save
        </button>
      </form>
    </div>
  );
};
