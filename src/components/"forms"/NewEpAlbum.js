import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import { postNewEpAlbum } from "../../data/epAlbumData";
import { useNavigate } from "react-router-dom";

export const NewEpAlbum = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [newEpAlbum, setNewEpAlbum] = useState({
    name: "",
    imgUrl: "",
    artistName: "",
    song1: "",
    song2: "",
    song3: "",
    song4: "",
    song5: "",
    song6: "",
    genreId: 0,
    userId: 0,
  });

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    const epAlbumCopy = { ...newEpAlbum };
    epAlbumCopy.userId = userId;
    setNewEpAlbum(epAlbumCopy);
  }, []);

  const handleInputStateChanges = (event) => {
    const epAlbumCopy = { ...newEpAlbum };
    epAlbumCopy[event.target.name] = event.target.value;
    setNewEpAlbum(epAlbumCopy);
  };

  const handleSavingEpAlbum = (event) => {
    event.preventDefault();
    const epAlbumCopy = {
      name: newEpAlbum.name,
      imgUrl: newEpAlbum.imgUrl,
      artistName: newEpAlbum.artistName,
      song1: newEpAlbum.song1,
      song2: newEpAlbum.song2,
      song3: newEpAlbum.song3,
      song4: newEpAlbum.song4,
      song5: newEpAlbum.song5,
      song6: newEpAlbum.song6,
      genreId: parseInt(newEpAlbum.genreId),
      userId: newEpAlbum.userId,
    };
    postNewEpAlbum(epAlbumCopy).then(() => {
      navigate("/recordArchive");
    });
  };

  return (
    <div className="ep-album-form">
      <form>
        <h2 className="ep-album-title">Create Your Album</h2>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Name of Your Album
              <input
                type="text"
                name="name"
                value={newEpAlbum.name}
                placeholder="enter album name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Album Cover Image URL
              <input
                type="text"
                name="imgUrl"
                value={newEpAlbum.imgUrl}
                placeholder="www.example.com"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Artist Name
              <input
                type="text"
                name="artistName"
                value={newEpAlbum.artistName}
                placeholder="enter artist name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 1
              <input
                type="text"
                name="song1"
                value={newEpAlbum.song1}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 2
              <input
                type="text"
                name="song2"
                value={newEpAlbum.song2}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 3
              <input
                type="text"
                name="song3"
                value={newEpAlbum.song3}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 4
              <input
                type="text"
                name="song4"
                value={newEpAlbum.song4}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 5
              <input
                type="text"
                name="song5"
                value={newEpAlbum.song5}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Song 6
              <input
                type="text"
                name="song6"
                value={newEpAlbum.song6}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div className="ep-album-info">
            <div>Genre</div>
            <select name="genreId" onChange={handleInputStateChanges}>
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
        <button className="save-btn" onClick={handleSavingEpAlbum}>
          Create Album
        </button>
      </form>
    </div>
  );
};
