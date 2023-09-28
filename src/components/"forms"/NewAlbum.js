import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import { postNewAlbum } from "../../data/albumData";
import { useNavigate, useParams } from "react-router-dom";
import "./NewAlbum.css";
import { getAlbumTypes } from "../../data/albumTypeData";
import { SongInput } from "../songs/SongInput";
import { PostSong } from "../../data/songData";

export const NewAlbum = () => {
  const navigate = useNavigate();
  const { typeId } = useParams();
  const [albumTypes, setAlbumTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [newAlbum, setNewAlbum] = useState({
    name: "",
    imgUrl: "",
    artistName: "",
    genreId: 0,
    userId: 0,
    albumType: parseInt(typeId),
  });

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    getAlbumTypes().then((albumTypesArr) => {
      setAlbumTypes(albumTypesArr);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    const albumCopy = { ...newAlbum };
    albumCopy.userId = userId;
    setNewAlbum(albumCopy);
  }, []);

  //TODO: considering putting this function in JSX for the optional song inputs (3-6 for EP & 7-15 for LP)
  // const songInputJSX = () => {
  //   if (typeId === albumTypes[0].id) {
  //     return <></>;
  //   } else if (typeId === albumTypes[1].id) {
  //   }
  // };

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
      newAlbum.genreId > 0 &&
      newAlbum.userId > 0
    ) {
      const albumCopy = {
        name: newAlbum.name,
        imgUrl: newAlbum.imgUrl,
        artistName: newAlbum.artistName,
        genreId: parseInt(newAlbum.genreId),
        userId: newAlbum.userId,
        albumType: parseInt(typeId),
      };
      postNewAlbum(albumCopy).then(() => {
        navigate("/recordArchive");
      });
    } else {
      window.alert("Input field empty, must complete form");
    }
  };

  // const postSong = (songObj) => {
  //   const songObjCopy = { ...songObj };
  //   songObjCopy.albumId = newAlbum.id;
  //   PostSong(songObjCopy);
  // };
  return (
    <>
      <form className="album-form-container">
        <div className="album-info">
          <h1>Create Your Album</h1>
          <fieldset>
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
          </fieldset>
          <fieldset>
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
          </fieldset>
          <fieldset>
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
          </fieldset>
          <fieldset>
            <label>Genre</label>
            <select
              name="genreId"
              onChange={handleInputStateChanges}
              className="genre-select grayText"
              onClick={(event) => {
                event.target.className = "blackText";
              }}
            >
              <option className="grayText" value={0} key={0}>
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
          </fieldset>
        </div>
        {/*TODO: need to redo song inputs and make them dynamic instead of hard coded will probably need
        to use useParams from albumType data for if id is 1 then songs have restraints and if id is 2 then songs have different restraints */}
        <div className="song-info">
          <SongInput typeId={typeId} />
        </div>
        {/*albumTypes[0].id = 1 & albumTypes[1].id = 2 */}
        {/* <div className="song-info">
          <label>Name Your Songs</label>
          <fieldset>
            <label>
              1.{" "}
              <input
                className="input-field"
                type="text"
                name="song1"
                value={newAlbum.song1}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              2.
              <input
                className="input-field"
                type="text"
                name="song2"
                value={newAlbum.song2}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              3.
              <input
                className="input-field"
                type="text"
                name="song3"
                value={newAlbum.song3}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              4.
              <input
                className="input-field"
                type="text"
                name="song4"
                value={newAlbum.song4}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              5.
              <input
                className="input-field"
                type="text"
                name="song5"
                value={newAlbum.song5}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              6.
              <input
                className="input-field"
                type="text"
                name="song6"
                value={newAlbum.song6}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </fieldset>
        </div> */}
        <div className="save-btn-container">
          <button className="save-btn" onClick={handleSavingAlbum}>
            Create Album
          </button>
        </div>
      </form>
    </>
  );
};
