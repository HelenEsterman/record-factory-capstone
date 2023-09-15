import { Routes, Route } from "react-router-dom";
import { NewEpAlbum } from './components/"forms"/NewEpAlbum';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NewLpAlbum } from './components/"forms"/NewLpAlbum';
import { RecordArchive } from "./components/recordArchive/RecordArchive";
import { Welcome } from "./components/welcome/Welcome";
import { NavBar } from "./components/navbar/NavBar";
import { AlbumType } from './components/"forms"/AlbumType';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/createNewAlbum" element={<AlbumType />} />
      <Route path="/createEpAlbum" element={<NewEpAlbum />} />
      <Route path="/createLpAlbum" element={<NewLpAlbum />} />
      <Route path="/recordArchive" element={<RecordArchive />} />
    </Routes>
  );
};
