import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumsById, postEditedAlbum } from "../../data/albumData";
import { getGenres } from "../../data/genreData";
import "./EditAlbum.css";
import { NewSongInput } from "../songs/NewSongInput";
import { getSongsByAlbumId } from "../../data/songData";
import { getAlbumTypes } from "../../data/albumTypeData";

export const EditAlbum = ({ setShowNavbar }) => {
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [genres, setGenres] = useState([]);
  const [songsOnAlbum, setSongsOnAlbum] = useState([]);
  const [albumTypes, setAlbumTypes] = useState([]);
  const { albumId } = useParams();
  const navigate = useNavigate();

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
    getAlbumTypes().then((typesArray) => {
      setAlbumTypes(typesArray);
    });
  }, []);

  useEffect(() => {
    getAlbumsById(albumId).then((albumObj) => {
      setCurrentAlbum(albumObj);
    });
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbum(songsArray);
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
    if (currentAlbum.albumType === albumTypes[0].id) {
      if (
        currentAlbum.name !== "" &&
        currentAlbum.imgUrl !== "" &&
        currentAlbum.artistName !== "" &&
        currentAlbum.genreId > 0 &&
        songsOnAlbum.length >= albumTypes[0].minSong
      ) {
        const updatedAlbum = {
          id: currentAlbum.id,
          name: currentAlbum.name,
          imgUrl: currentAlbum.imgUrl,
          artistName: currentAlbum.artistName,
          genreId: currentAlbum.genreId,
          userId: currentAlbum.userId,
          albumType: currentAlbum.albumType,
        };

        postEditedAlbum(updatedAlbum.id, updatedAlbum).then(
          navigate(`/recordArchive/${currentAlbum.id}`)
        );
      } else {
        window.alert(
          "Input field empty or not enough songs, must complete form"
        );
      }
    } else if (currentAlbum.albumType === albumTypes[1].id) {
      if (
        currentAlbum.name !== "" &&
        currentAlbum.imgUrl !== "" &&
        currentAlbum.artistName !== "" &&
        currentAlbum.genreId > 0 &&
        songsOnAlbum.length >= albumTypes[1].minSong
      ) {
        const updatedAlbum = {
          id: currentAlbum.id,
          name: currentAlbum.name,
          imgUrl: currentAlbum.imgUrl,
          artistName: currentAlbum.artistName,
          genreId: currentAlbum.genreId,
          userId: currentAlbum.userId,
          albumType: currentAlbum.albumType,
        };

        postEditedAlbum(updatedAlbum.id, updatedAlbum).then(
          navigate(`/recordArchive/${currentAlbum.id}`)
        );
      } else {
        window.alert(
          "Input field empty or not enough songs, must complete form"
        );
      }
    }
  };

  return (
    <>
      <form className="edit-form-container">
        <div className="edit-album-info">
          <h1>Edit Your Album</h1>
          <fieldset>
            <label>
              Edit Album Name {"     "}
              <input
                className="edit-input-field af"
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
              Album Cover Image URL {"     "}
              <input
                className="edit-input-field af"
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
              Artist Name {"     "}
              <input
                className="edit-input-field af"
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
          <NewSongInput
            typeId={currentAlbum.albumType}
            setSongsOnAlbum={setSongsOnAlbum}
            albumId={albumId}
          />
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
