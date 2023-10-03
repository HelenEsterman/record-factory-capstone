import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import { PostSong, getSongsByAlbumId } from "../../data/songData";
import { NewSongList } from "./NewSongList";
import { getAlbumTypes } from "../../data/albumTypeData";
import "./NewSongInput.css";

export const NewSongInput = ({ typeId, setSongsOnAlbum, albumId }) => {
  const [allAlbumsArray, setAllAlbumsArray] = useState([]);
  const [songsOnAlbumArray, setSongsOnAlbumArray] = useState([]);
  const [albumTypes, setAlbumTypes] = useState([]);
  const [newSong, setNewSong] = useState({
    name: "",
    albumId: 0,
  });

  useEffect(() => {
    getAllAlbums().then((albumsArray) => {
      setAllAlbumsArray(albumsArray);
    });
    getAlbumTypes().then((types) => {
      setAlbumTypes(types);
    });
  }, []);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbumArray(songsArray);
      setSongsOnAlbum(songsArray);
    });
  }, [albumId, newSong, setSongsOnAlbum]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbum(songsArray);
    });
  }, [albumId, songsOnAlbumArray, setSongsOnAlbum]);

  const epAlbum = albumTypes[0];
  const lpAlbum = albumTypes[1];

  const handleSavingSong = (event) => {
    event.preventDefault();

    if (parseInt(typeId) === epAlbum.id && newSong.name !== "") {
      if (songsOnAlbumArray.length < epAlbum.maxSong) {
        const songCopy = {
          name: newSong.name,
          albumId: albumId,
        };
        PostSong(songCopy).then(() => {
          setNewSong({
            name: "",
            albumId: 0,
          });
        });
      } else {
        window.alert(`Too many songs, delete one to add`);
      }
    } else if (parseInt(typeId) === lpAlbum.id && newSong.name !== "") {
      if (songsOnAlbumArray.length < lpAlbum.maxSong) {
        const songCopy = {
          name: newSong.name,
          albumId: albumId,
        };
        PostSong(songCopy).then(() => {
          setNewSong({
            name: "",
            albumId: 0,
          });
        });
      } else {
        window.alert(`Too many songs, delete one to add`);
      }
    }
  };

  return (
    <>
      {albumTypes.map((type) => {
        if (parseInt(typeId) === type.id) {
          return (
            <div key={type.id} className="songs">
              <label>Name Your Songs</label>({type.minSong}-{type.maxSong}{" "}
              songs)
              <div className="add-song-container">
                <fieldset>
                  <input
                    className="input-field"
                    type="text"
                    name="song"
                    placeholder="enter songs here"
                    value={newSong?.name}
                    onClick={(event) => {
                      event.target.className = "blackText";
                    }}
                    onChange={(event) => {
                      const newSongCopy = { ...newSong };
                      newSongCopy.name = event.target.value;
                      setNewSong(newSongCopy);
                    }}
                  />
                </fieldset>
                <button className="add-song-btn" onClick={handleSavingSong}>
                  <div className="plus">
                    +
                    <i
                      className="fa-solid fa-music"
                      style={{ color: "rgb(181, 80, 103)" }}
                    ></i>
                  </div>
                </button>
              </div>
              <div>
                <NewSongList
                  newSong={newSong}
                  albumId={albumId}
                  setSongsOnAlbum={setSongsOnAlbum}
                  setSongsOnAlbumArray={setSongsOnAlbumArray}
                />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
