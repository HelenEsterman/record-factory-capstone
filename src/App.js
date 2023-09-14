import { Routes, Route } from "react-router-dom";
import { NewEpAlbum } from './components/"forms"/NewEpAlbum';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NewLpAlbum } from './components/"forms"/NewLpAlbum';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<NewLpAlbum />} />
    </Routes>
  );
};
