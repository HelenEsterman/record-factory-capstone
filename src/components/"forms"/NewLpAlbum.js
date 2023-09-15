import { useEffect, useState } from "react";
import { getGenres } from "../../data/genreData";
import { postNewLpAlbum } from "../../data/lpAlbumData";
import { useNavigate } from "react-router-dom";

export const NewLpAlbum = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [newLpAlbum, setNewLpAlbum] = useState({
    name: "",
    imgUrl: "",
    artistName: "",
    song1: "",
    song2: "",
    song3: "",
    song4: "",
    song5: "",
    song6: "",
    song7: "",
    song8: "",
    song9: "",
    song10: "",
    song11: "",
    genreId: 0,
    userId: 0,
  });

  useEffect(() => {
    getGenres().then((genreArray) => {
      setGenres(genreArray);
    });
    const userObj = JSON.parse(localStorage.getItem("record_factory_user"));
    const userId = userObj.id;
    const lpAlbumCopy = { ...newLpAlbum };
    lpAlbumCopy.userId = userId;
    setNewLpAlbum(lpAlbumCopy);
  }, []);

  const handleInputStateChanges = (event) => {
    const lpAlbumCopy = { ...newLpAlbum };
    lpAlbumCopy[event.target.name] = event.target.value;
    setNewLpAlbum(lpAlbumCopy);
  };

  const handleSavingLpAlbum = (event) => {
    event.preventDefault();
    const lpAlbumCopy = {
      name: newLpAlbum.name,
      imgUrl: newLpAlbum.imgUrl,
      artistName: newLpAlbum.artistName,
      song1: newLpAlbum.song1,
      song2: newLpAlbum.song2,
      song3: newLpAlbum.song3,
      song4: newLpAlbum.song4,
      song5: newLpAlbum.song5,
      song6: newLpAlbum.song6,
      song7: newLpAlbum.song7,
      song8: newLpAlbum.song8,
      song9: newLpAlbum.song9,
      song10: newLpAlbum.song10,
      song11: newLpAlbum.song11,
      genreId: parseInt(newLpAlbum.genreId),
      userId: newLpAlbum.userId,
    };
    postNewLpAlbum(lpAlbumCopy).then(() => {
      navigate("/recordArchive");
    });
  };

  return (
    <div className="lp-album-form">
      <form>
        <h2 className="lp-album-title">Create Your Album</h2>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Name of Your Album
              <input
                type="text"
                name="name"
                value={newLpAlbum.name}
                placeholder="enter album name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Album Cover Image URL
              <input
                type="text"
                name="imgUrl"
                value={newLpAlbum.imgUrl}
                placeholder="www.example.com"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Artist Name
              <input
                type="text"
                name="artistName"
                value={newLpAlbum.artistName}
                placeholder="enter artist name"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 1
              <input
                type="text"
                name="song1"
                value={newLpAlbum.song1}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 2
              <input
                type="text"
                name="song2"
                value={newLpAlbum.song2}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 3
              <input
                type="text"
                name="song3"
                value={newLpAlbum.song3}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 4
              <input
                type="text"
                name="song4"
                value={newLpAlbum.song4}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 5
              <input
                type="text"
                name="song5"
                value={newLpAlbum.song5}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 6
              <input
                type="text"
                name="song6"
                value={newLpAlbum.song6}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 7
              <input
                type="text"
                name="song7"
                value={newLpAlbum.song7}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 8
              <input
                type="text"
                name="song8"
                value={newLpAlbum.song8}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 9
              <input
                type="text"
                name="song9"
                value={newLpAlbum.song9}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 10
              <input
                type="text"
                name="song10"
                value={newLpAlbum.song10}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <label>
              Song 11
              <input
                type="text"
                name="song11"
                value={newLpAlbum.song11}
                placeholder="enter song here"
                onChange={handleInputStateChanges}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="lp-album-info">
            <div>Genre</div>
            <select name="genreId" onChange={handleInputStateChanges}>
              <option value={0} key={0}>
                Pick Your Genre
              </option>
              {genres.map((genre) => {
                return (
                  <option value={genre.id} key={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <button className="save-btn" onClick={handleSavingLpAlbum}>
          Create Album
        </button>
      </form>
    </div>
  );
};
