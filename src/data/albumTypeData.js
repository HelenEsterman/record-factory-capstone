export const getAlbumTypes = () => {
  return fetch(`http://localhost:8088/albumTypes`).then((res) => res.json());
};
