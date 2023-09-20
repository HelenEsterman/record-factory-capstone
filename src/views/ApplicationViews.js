import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { NewAlbum } from '../components/"forms"/NewAlbum';
import { RecordArchive } from "../components/recordArchive/RecordArchive";
import { AlbumDetails } from "../components/recordArchive/albumDetails";
import { EditAlbum } from '../components/"forms"/EditAlbum';

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar /> <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="/createAlbum" element={<NewAlbum />} />
        <Route path="/recordArchive">
          <Route index element={<RecordArchive />} />
          <Route path=":albumId" element={<AlbumDetails />} />
          <Route path=":albumId/edit" element={<EditAlbum />} />
        </Route>
      </Route>
    </Routes>
  );
};
