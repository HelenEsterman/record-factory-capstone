import { useEffect, useState } from "react";
import { getSongsByAlbumId } from "../../data/songData";
import { useParams } from "react-router-dom";
import "./DetailsSongList.css";

export const DetailsSongList = () => {
  const [songsOnCurrentAlbum, setSongsOnCurrentAlbum] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnCurrentAlbum(songsArray);
    });
  }, [albumId]);

  return (
    <div className="song-list-container">
      <ul className="song-listy">
        {songsOnCurrentAlbum.map((song) => {
          return (
            <li className="album-song" key={song.id}>
              "{song.name}"
            </li>
          );
        })}
      </ul>
    </div>
  );
};
