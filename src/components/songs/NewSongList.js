import { useEffect, useState } from "react";
import { deleteSong, getSongsByAlbumId } from "../../data/songData";
import { useNavigate } from "react-router-dom";

export const NewSongList = ({ newSong, albumId }) => {
  const [songsOnNewAlbum, setSongsOnNewAlbum] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnNewAlbum(songsArray);
    });
  }, [albumId, newSong]);

  return (
    <>
      <h1>Songs</h1>
      <ol>
        {songsOnNewAlbum.map((song) => {
          return (
            <li key={song.id}>
              "{song.name}"
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteSong(song.id).then(() => {
                    setSongsOnNewAlbum(
                      songsOnNewAlbum.filter((s) => s.id !== song.id)
                    );
                  });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};
