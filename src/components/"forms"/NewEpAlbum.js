import { useState } from "react";

export const NewEpAlbum = () => {
  const [newEpAlbum, setNewEpAlbum] = useState({
    name: "",
    imgUrl: "",
    artistName: "",
    song1: "",
    song2: "",
    song3: "",
    song4: "",
    song5: "",
    song6: "",
    genreId: "",
    userId: "",
  });

  const handleInputStateChanges = (event) => {
    const epAlbumCopy = { ...newEpAlbum };
    epAlbumCopy[event.target.name] = event.target.value;
    setNewEpAlbum(epAlbumCopy);
  };
  return (
    <div className="ep-album-form">
      <form>
        <h2 className="ep-album-title">Create Your Album</h2>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Name of Your Album
              <input
                type="text"
                name="name"
                value={newEpAlbum.name}
                placeholder="enter album name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="ep-album-info">
            <label>
              Album Cover Image URL
              <input
                type="text"
                name="imgUrl"
                value={newEpAlbum.imgUrl}
                placeholder="www.example.com"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
