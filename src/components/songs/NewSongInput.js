import { useEffect, useState } from "react";
import { getAllAlbums } from "../../data/albumData";
import { PostSong } from "../../data/songData";
import { NewSongList } from "./NewSongList";

export const NewSongInput = ({ typeId }) => {
  const [allAlbumsArray, setAllAlbumsArray] = useState([]);
  const [newSong, setNewSong] = useState({
    name: "",
    albumId: 0,
  });

  useEffect(() => {
    getAllAlbums().then((albumsArray) => {
      setAllAlbumsArray(albumsArray);
    });
  }, []);

  const currentAlbum = allAlbumsArray?.[allAlbumsArray.length - 1];
  const albumId = currentAlbum?.id;

  const handleSavingSong = (event) => {
    event.preventDefault();
    if (newSong.name !== "") {
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
      window.alert("Create song");
    }
  };

  return (
    <>
      <label>Name Your Songs</label>
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
      <NewSongList newSong={newSong} albumId={albumId} />
    </>
  );
};
