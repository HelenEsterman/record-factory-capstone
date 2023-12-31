import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { NewAlbum } from '../components/"forms"/NewAlbum';
import { RecordArchive } from "../components/recordArchive/RecordArchive";
import { AlbumDetails } from "../components/recordArchive/albumDetails";
import { EditAlbum } from '../components/"forms"/EditAlbum';
import { AlbumType } from '../components/"forms"/AlbumType';
import { useState } from "react";
import { EpAlbumList } from "../components/recordArchive/EpAlbumList";
import { LpAlbumList } from "../components/recordArchive/LpAlbumList";

export const ApplicationViews = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {showNavbar && <NavBar />} <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="/epAlbums" element={<EpAlbumList />} />
        <Route path="/lpAlbums" element={<LpAlbumList />} />
        <Route path="/createAlbum">
          <Route index element={<AlbumType />} />
          <Route
            path=":typeId"
            element={<NewAlbum setShowNavbar={setShowNavbar} />}
          />
        </Route>
        <Route path="/recordArchive">
          <Route index element={<RecordArchive />} />
          <Route path=":albumId" element={<AlbumDetails />} />
          <Route
            path=":albumId/edit"
            element={<EditAlbum setShowNavbar={setShowNavbar} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
