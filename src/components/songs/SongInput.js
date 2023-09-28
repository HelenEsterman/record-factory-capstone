import { useRef, useState } from "react";

export const SongInput = ({ typeId }) => {
  const [newSong, setNewSong] = useState({
    name: "",
    albumId: 0, //need to set this to newAlbum.id in handle save function
  });

  return (
    <>
      <label>Name Your Songs</label>
      <fieldset>
        <input
          className="input-field"
          type="text"
          name="song"
          value={newSong.name}
          onChange={(event) => {
            const newSongCopy = { ...newSong };
            newSongCopy.name = event.target.value;
            setNewSong(newSongCopy);
          }}
        />
      </fieldset>
      <button onClick={}>Add Song</button>
    </>
  );
};
