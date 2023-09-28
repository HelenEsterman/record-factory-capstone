export const PostSong = (songObj) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songObj),
  };
  return fetch("http://localhost:8088/songs", postOptions);
};
