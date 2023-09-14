import { Routes, Route } from "react-router-dom";
import { NewEpAlbum } from './components/"forms"/NewEpAlbum';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NewLpAlbum } from './components/"forms"/NewLpAlbum';
import { RecordArchive } from "./components/recordArchive/RecordArchive";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<RecordArchive />} />
    </Routes>
  );
};

// NewEpAlbum
// NewLpAlbum
