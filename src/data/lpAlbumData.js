export const postNewLpAlbum = (newLpAlbum) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLpAlbum),
  };
  return fetch("http://localhost:8088/lpAlbums", postOptions);
};
