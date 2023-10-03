import { useEffect, useState } from "react";
import { deleteSong, getSongsByAlbumId } from "../../data/songData";
import "./NewSongList.css";

export const NewSongList = ({
  newSong,
  albumId,
  setSongsOnAlbum,
  setSongsOnAlbumArray,
}) => {
  const [songsOnNewAlbum, setSongsOnNewAlbum] = useState([]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnNewAlbum(songsArray);
      setSongsOnAlbum(songsArray);
      setSongsOnAlbumArray(songsArray);
    });
  }, [albumId, newSong, setSongsOnAlbum, setSongsOnAlbumArray]);

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnAlbum(songsArray);
      setSongsOnAlbumArray(songsArray);
    });
  }, [songsOnNewAlbum, albumId, setSongsOnAlbum, setSongsOnAlbumArray]);

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
