import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import { PostSong, getSongsByAlbumId } from "../../data/songData";
import { NewSongList } from "./NewSongList";
import { getAlbumTypes } from "../../data/albumTypeData";

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

  // const currentAlbum = allAlbumsArray?.[allAlbumsArray.length - 1];
  // const albumId = currentAlbum?.id;

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
            <div key={type.id}>
              <label>Name Your Songs</label>
              <p>
                {type.name} Albums can have {type.minSong}-{type.maxSong} songs
                on them
              </p>
              <fieldset>
                <input
                  className="input-field"
                  type="text"
                  name="song"
                  value={newSong?.name}
                  onChange={(event) => {
                    const newSongCopy = { ...newSong };
                    newSongCopy.name = event.target.value;
                    setNewSong(newSongCopy);
                  }}
                />
              </fieldset>
              <button onClick={handleSavingSong}>Add Song</button>
              <NewSongList
                newSong={newSong}
                albumId={albumId}
                setSongsOnAlbum={setSongsOnAlbum}
              />
            </div>
          );
        }
      })}
    </>
  );
};
