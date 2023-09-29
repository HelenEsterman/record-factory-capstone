import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import { PostSong, getSongsByAlbumId } from "../../data/songData";
import { NewSongList } from "./NewSongList";
import { getAlbumTypes } from "../../data/albumTypeData";

export const NewSongInput = ({ typeId }) => {
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

  const currentAlbum = allAlbumsArray?.[allAlbumsArray.length - 1];
  const albumId = currentAlbum?.id;

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbumArray(songsArray);
    });
  }, [albumId]);
  //TODO: not sure if we need these variables but something i'm testing out
  const epAlbum = albumTypes[0];
  const lpAlbum = albumTypes[1];
  // if(typeId===albumTypes[0].id){
  //
  //}else if (typeId===albumTypes[1].id){
  // songsOnAlbumArray.length <= type.maxSong &&
  //songsOnAlbumArray.length >= type.minSong &&
  //}

  const handleSavingSong = (event) => {
    event.preventDefault();
    if (typeId === epAlbum.id && newSong.name !== "") {
      if (songsOnAlbumArray.length <= epAlbum.maxSong) {
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
        window.alert(
          `${epAlbum.name} Albums MUST HAVE at least ${epAlbum.minSong} songs and at most ${epAlbum.maxSong} songs`
        );
      }
    } else if (typeId === lpAlbum.id && newSong.name !== "") {
      if (songsOnAlbumArray.length <= lpAlbum.maxSong) {
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
        window.alert(
          `${lpAlbum.name} Albums MUST HAVE at least ${lpAlbum.minSong} songs and at most ${lpAlbum.maxSong} songs`
        );
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
              {/* TODO: the conditionals don't work here, they have to somehow be placed INSIDE handleSave function */}
              <button onClick={handleSavingSong()}>Add Song</button>
              <NewSongList newSong={newSong} albumId={albumId} />
            </div>
          );
        }
      })}
    </>
  );
};
