import { useEffect, useState } from "react";
import { getSongsByAlbumId } from "../../data/songData";
import { useParams } from "react-router-dom";

export const DetailsSongList = () => {
  const [songsOnCurrentAlbum, setSongsOnCurrentAlbum] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    getSongsByAlbumId(albumId).then((songsArray) => {
      setSongsOnCurrentAlbum(songsArray);
    });
  }, [albumId]);

  return (
    <>
      <ul>
        {songsOnCurrentAlbum.map((song) => {
          return <li key={song.id}>"{song.name}"</li>;
        })}
      </ul>
    </>
  );
};
