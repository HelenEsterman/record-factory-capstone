export const postNewEpAlbum = (newEpAlbum) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEpAlbum),
  };
  return fetch("http://localhost:8088/epAlbums", postOptions);
};

export const getAllEpAlbums = () => {
  return fetch("http://localhost:8088/epAlbums").then((res) => res.json());
};

export const getEpAlbumsById = (albumId) => {
  return fetch(`http://localhost:8088/epAlbums?id=${albumId}`).then((res) =>
    res.json()
  );
};
