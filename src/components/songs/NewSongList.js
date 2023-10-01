import { useEffect, useState } from "react";
import { deleteSong, getSongsByAlbumId } from "../../data/songData";
import "./NewSongList.css";

export const NewSongList = ({ newSong, albumId, setSongsOnAlbum }) => {
  const [songsOnNewAlbum, setSongsOnNewAlbum] = useState([]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnNewAlbum(songsArray);
      setSongsOnAlbum(songsArray);
    });
  }, [albumId, newSong, setSongsOnAlbum]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbum(songsArray);
    });
  }, [songsOnNewAlbum, albumId, setSongsOnAlbum]);

  return (
    <>
      <ol>
        {songsOnNewAlbum.map((song) => {
          return (
            <li key={song.id} className="list-of-songs">
              "{song.name}"
              <button
                className="song-delete-btn"
                onClick={(event) => {
                  event.preventDefault();
                  deleteSong(song.id).then(() => {
                    setSongsOnNewAlbum(
                      songsOnNewAlbum.filter((s) => s.id !== song.id)
                    );
                  });
                }}
              >
                <div className="icon">
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};
