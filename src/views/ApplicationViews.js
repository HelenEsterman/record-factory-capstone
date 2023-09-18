import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { AlbumType } from '../components/"forms"/AlbumType';
import { NewEpAlbum } from '../components/"forms"/NewEpAlbum';
import { NewLpAlbum } from '../components/"forms"/NewLpAlbum';
import { RecordArchive } from "../components/recordArchive/RecordArchive";
import { AlbumDetails } from "../components/recordArchive/albumDetails";

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
        <Route path="/createAlbum" element={<AlbumType />} />
        <Route path="/createEpAlbum" element={<NewEpAlbum />} />
        <Route path="/createLpAlbum" element={<NewLpAlbum />} />
        <Route path="/recordArchive">
          {/*TODO: gotta finish adding routes to album details while using use params */}
          <Route index element={<RecordArchive />} />
          <Route path=":albumId" element={<AlbumDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
