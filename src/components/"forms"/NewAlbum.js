import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import {
  deleteAlbum,
  getAllAlbums,
  postEditedAlbum,
  postNewAlbum,
} from "../../data/albumData";
import { useNavigate, useParams } from "react-router-dom";
import "./NewAlbum.css";
import { getAlbumTypes } from "../../data/albumTypeData";
import { NewSongInput } from "../songs/NewSongInput";

export const NewAlbum = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const { typeId } = useParams();
  const [albumTypes, setAlbumTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  // const [albumsArray, setAlbumsArray] = useState([]);
  const [newAlbum, setNewAlbum] = useState({
    name: "",
    imgUrl: "",
    artistName: "",
    genreId: 0,
    userId: 0,
    albumType: parseInt(typeId),
  });
  useEffect(() => {
    setShowNavbar(false);

    return () => {
      setShowNavbar(true);
    };
  }, [setShowNavbar]);

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    getAlbumTypes().then((albumTypesArr) => {
      setAlbumTypes(albumTypesArr);
    });
    getAllAlbums().then((albumsArr) => {
      setNewAlbum(albumsArr[albumsArr.length - 1]);
    });
  }, []);

  //TODO: considering putting this function in JSX for the optional song inputs (3-6 for EP & 7-15 for LP)

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
      newAlbum.genreId > 0
    ) {
      const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
      const userId = userObj.id;
      const albumCopy = {
        name: newAlbum.name,
        imgUrl: newAlbum.imgUrl,
        artistName: newAlbum.artistName,
        genreId: parseInt(newAlbum.genreId),
        userId: userId,
        albumType: parseInt(typeId),
      };
      postEditedAlbum(newAlbum.id, albumCopy).then(() => {
        navigate("/recordArchive");
      });
    } else {
      window.alert("Input field empty, must complete form");
    }
  };

  const handleCancelAlbum = (event) => {
    event.preventDefault();
    deleteAlbum(newAlbum.id).then(navigate("/"));
  };

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
                value={newAlbum.name ? newAlbum.name : " "}
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
                value={newAlbum.imgUrl ? newAlbum.imgUrl : " "}
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
                value={newAlbum.artistName ? newAlbum.artistName : " "}
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
              {genres?.map((genre) => {
                return (
                  <option
                    className="input-field"
                    value={genre?.id}
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
          <NewSongInput typeId={typeId} />
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
          {/*will need to add deleting album functionality as well as preventDefault and navigation back to home page */}
          <button className="cancel-btn" onClick={handleCancelAlbum}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
