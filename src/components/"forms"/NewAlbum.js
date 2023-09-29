import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import {
  deleteAlbum,
  getAllAlbums,
  postEditedAlbum,
} from "../../data/albumData";
import { useNavigate, useParams } from "react-router-dom";
import "./NewAlbum.css";
import { getAlbumTypes } from "../../data/albumTypeData";
import { NewSongInput } from "../songs/NewSongInput";
import { getSongsByAlbumId } from "../../data/songData";

export const NewAlbum = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const { typeId } = useParams();
  const [albumId, setAlbumId] = useState();
  const [albumTypes, setAlbumTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songsOnAlbum, setSongsOnAlbum] = useState([]);
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

  useEffect(() => {
    getSongsByAlbumId(newAlbum.id).then((songArray) => {
      setSongsOnAlbum(songArray);
    });
    setAlbumId(newAlbum.id);
  }, [newAlbum]);

  const handleInputStateChanges = (event) => {
    const albumCopy = { ...newAlbum };
    albumCopy[event.target.name] = event.target.value;
    setNewAlbum(albumCopy);
  };

  const handleSavingAlbum = (event) => {
    event.preventDefault();
    if (parseInt(typeId) === albumTypes[0].id) {
      if (
        newAlbum.name !== "" &&
        newAlbum.imgUrl !== "" &&
        newAlbum.artistName !== "" &&
        newAlbum.genreId > 0 &&
        songsOnAlbum.length >= albumTypes[0].minSong
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
        window.alert(
          "Input field empty or not enough songs, must complete form"
        );
      }
    } else if (parseInt(typeId) === albumTypes[1].id) {
      if (
        newAlbum.name !== "" &&
        newAlbum.imgUrl !== "" &&
        newAlbum.artistName !== "" &&
        newAlbum.genreId > 0 &&
        songsOnAlbum.length >= albumTypes[1].minSong
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
        window.alert(
          "Input field empty or not enough songs, must complete form"
        );
      }
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
        <div className="song-info">
          <NewSongInput
            typeId={typeId}
            setSongsOnAlbum={setSongsOnAlbum}
            albumId={albumId}
          />
        </div>
        <div className="save-btn-container">
          <button className="save-btn" onClick={handleSavingAlbum}>
            Create Album
          </button>
          <button className="cancel-btn" onClick={handleCancelAlbum}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
