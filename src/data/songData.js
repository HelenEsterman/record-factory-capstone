export const PostSong = (newSong) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  };
  return fetch("http://localhost:8088/songs", postOptions);
};

export const getSongsByAlbumId = (albumId) => {
  return fetch(`http://localhost:8088/songs?albumId=${albumId}`).then((res) =>
    res.json()
  );
};

export const deleteSong = (songId) => {
  return fetch(`http://localhost:8088/songs/${songId}`, {
    method: "DELETE",
  });
};
