import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import { postNewAlbum } from "../../data/albumData";
import { useNavigate } from "react-router-dom";
import "./NewAlbum.css";

export const NewAlbum = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [newAlbum, setNewAlbum] = useState({
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
    const albumCopy = { ...newAlbum };
    albumCopy.userId = userId;
    setNewAlbum(albumCopy);
  }, []);

  const handleInputStateChanges = (event) => {
    const albumCopy = { ...newAlbum };
    albumCopy[event.target.name] = event.target.value;
    setNewAlbum(albumCopy);
  };

  const handleSavingAlbum = (event) => {
    event.preventDefault();
    if (
      newAlbum.name !== "" &&
      newAlbum.imgUrl !== "" &&
      newAlbum.artistName !== "" &&
      newAlbum.song1 !== "" &&
      newAlbum.song2 !== "" &&
      newAlbum.song3 !== "" &&
      newAlbum.song4 !== "" &&
      newAlbum.song5 !== "" &&
      newAlbum.song6 !== "" &&
      newAlbum.genreId > 0 &&
      newAlbum.userId > 0
    ) {
      const albumCopy = {
        name: newAlbum.name,
        imgUrl: newAlbum.imgUrl,
        artistName: newAlbum.artistName,
        song1: newAlbum.song1,
        song2: newAlbum.song2,
        song3: newAlbum.song3,
        song4: newAlbum.song4,
        song5: newAlbum.song5,
        song6: newAlbum.song6,
        genreId: parseInt(newAlbum.genreId),
        userId: newAlbum.userId,
      };
      postNewAlbum(albumCopy).then(() => {
        navigate("/recordArchive");
      });
    } else {
      window.alert("Input field empty, must complete form");
    }
  };

  return (
    <div className="album-form">
      <form className="album-form-container">
        {/* <h2 className="album-title">Create Your Album</h2> */}
        <fieldset>
          <div className="album-info">
            <label>
              Name of Your Album
              <input
                className="input-field"
                type="text"
                name="name"
                value={newAlbum.name}
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
                className="input-field"
                type="text"
                name="imgUrl"
                value={newAlbum.imgUrl}
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
                className="input-field"
                type="text"
                name="artistName"
                value={newAlbum.artistName}
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
                className="input-field"
                type="text"
                name="song1"
                value={newAlbum.song1}
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
                className="input-field"
                type="text"
                name="song2"
                value={newAlbum.song2}
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
                className="input-field"
                type="text"
                name="song3"
                value={newAlbum.song3}
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
                className="input-field"
                type="text"
                name="song4"
                value={newAlbum.song4}
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
                className="input-field"
                type="text"
                name="song5"
                value={newAlbum.song5}
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
                className="input-field"
                type="text"
                name="song6"
                value={newAlbum.song6}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div className="album-info">
            <label>Genre</label>
            <select
              name="genreId"
              onChange={handleInputStateChanges}
              className="genre-choices"
            >
              <option value={0} key={0}>
                Pick Your Genre
              </option>
              {genres.map((genre) => {
                return (
                  <option
                    className="input-field"
                    value={genre.id}
                    key={genre.id}
                  >
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <button className="save-btn" onClick={handleSavingAlbum}>
          Create Album
        </button>
      </form>
    </div>
  );
};
