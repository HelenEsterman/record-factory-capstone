import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { NewAlbum } from '../components/"forms"/NewAlbum';
import { RecordArchive } from "../components/recordArchive/RecordArchive";
import { AlbumDetails } from "../components/recordArchive/albumDetails";
import { EditAlbum } from '../components/"forms"/EditAlbum';
import { AlbumType } from '../components/"forms"/AlbumType';

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
        {/*TODO: need to add albumType component routing will most likely need useParams for ep/lp route */}
        <Route index element={<Welcome />} />
        <Route path="/createAlbum">
          <Route index element={<AlbumType />} />
          <Route path=":typeId" element={<NewAlbum />} />
        </Route>
        <Route path="/recordArchive">
          <Route index element={<RecordArchive />} />
          <Route path=":albumId" element={<AlbumDetails />} />
          <Route path=":albumId/edit" element={<EditAlbum />} />
        </Route>
      </Route>
    </Routes>
  );
};
