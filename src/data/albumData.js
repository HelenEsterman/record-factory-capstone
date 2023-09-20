export const postNewAlbum = (newAlbum) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAlbum),
  };
  return fetch("http://localhost:8088/albums", postOptions);
};

export const getAllAlbums = () => {
  return fetch("http://localhost:8088/albums").then((res) => res.json());
};

export const getAlbumsById = (albumId) => {
  return fetch(`http://localhost:8088/albums/${albumId}`).then((res) =>
    res.json()
  );
};

export const postEditedAlbum = (albumId, editedAlbum) => {
  const putOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedAlbum),
  };
  return fetch(`http://localhost:8088/albums/${albumId}`, putOptions);
};

export const deleteAlbum = (albumId) => {
  return fetch(`http://localhost:8088/albums/${albumId}`, {
    method: "DELETE",
  });
};
