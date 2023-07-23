import "./App.css";

import { Routes, Route, Navigate, useLocation } from "react-router";

import LayoutCntr from "./containers/LayoutCntr";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import WritePage from "./pages/board/WritePage";
import RoomListPage from "./pages/chat/RoomListPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AreaListPage from "./pages/area/AreaListPage";
import RoomCreatePage from "./pages/chat/RoomCreatePage";
import RoomReadPage from "./pages/chat/RoomReadPage";
import ReadPage from "./pages/board/ReadPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TrafficListPage from "./pages/traffic/TrafficListPage";
import Roompage from "./pages/room/RoomPage";
import SearchPage from './pages/search/SearchPage';
import SearchPwdPage from "./pages/auth/searchPwdPage";
import AdminLayoutCntr from "./containers/admin/AdminLayoutCntr";
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminBoardPage from "./pages/admin/AdminboardPage";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import KoreaMap from "./components/area/KoreaMap";

function App() {
  const { user } = useSelector(({ UserMod }) => ({
    user: UserMod.user,
  }));

  const location = useLocation();
  // const client = 

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route element={<LayoutCntr />}>
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<RoomListPage />} />
            <Route path="/chat/room" element={<RoomCreatePage />} />
            <Route path="/chat/room/:roomId" element={<RoomReadPage />} />
            <Route path="/board" element={<BoardListPage />} />
            <Route path="/area" element={<AreaListPage />} />
            <Route path="/board/write" element={<WritePage />} />
            <Route path="/board/read/:readNo" element={<ReadPage />} />
            <Route path="/profile/:nick" element={user ? <ProfilePage /> : <Navigate to="/" />} />
            <Route path="/traffic" element={<TrafficListPage />} />
            <Route path="/room" element={<Roompage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
            <Route path="/auth/searchPwd/:id" element={<SearchPwdPage />} />
          </Route>
          <Route element={<AdminLayoutCntr />}>
            <Route path="/admin/user" element={<AdminUserPage />} />
            <Route path="/admin/board" element={<AdminBoardPage />} />
          </Route>
          <Route path="map" element={<KoreaMap />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
