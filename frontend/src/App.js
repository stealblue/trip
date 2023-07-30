import "./App.css";

// import { Routes, Route, Navigate, useLocation } from "react-router";
import { Routes, Route, Navigate } from "react-router";
// import { useNavigate } from "react-router-dom";
import LayoutCntr from "./containers/LayoutCntr";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import WritePage from "./pages/board/WritePage";
// import RoomListPage from "./pages/chat/RoomListPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AreaListPage from "./pages/area/AreaListPage";
// import RoomCreatePage from "./pages/chat/RoomCreatePage";
// import RoomReadPage from "./pages/chat/RoomReadPage";
import ReadPage from "./pages/board/ReadPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TrafficListPage from "./pages/traffic/TrafficListPage";
import Roompage from "./pages/room/RoomPage";
import SearchPage from './pages/search/SearchPage';
import SearchPwdPage from "./pages/auth/searchPwdPage";
import AdminLayoutCntr from "./containers/admin/AdminLayoutCntr";
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminBoardPage from "./pages/admin/AdminboardPage";
import AdminThemePage from "./pages/admin/AdminThemePage";
// import AdminNoticePage from './pages/admin/AdminNoticePage';
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import KoreaMap from "./components/area/KoreaMap";
// import Swal from 'sweetalert2';

function App() {
  // const navigate = useNavigate();
  const { user } = useSelector(({ UserMod }) => ({
    user: UserMod.user,
  }));

  // const onSwal = () => {
  //   Swal.fire({
  //     title: "구현 중",
  //     showConfirmButton: true,
  //     confirmButtonText: "확인"
  //   })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         return <Navigate to='/' />
  //       }
  //     })
  // }

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route element={<LayoutCntr />}>
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<Navigate to='/' />} />
            {/* <Route path="/chat" element={onSwal} /> */}
            {/* <Route path="/chat" element={<RoomListPage />} />
            <Route path="/chat/room" element={<RoomCreatePage />} />
            <Route path="/chat/room/:roomId" element={<RoomReadPage />} /> */}
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
            <Route path="/auth/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
            <Route path="/auth/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
            <Route path="/auth/searchPwd/:id" element={user ? <Navigate to="/" /> : <SearchPwdPage />} />
          </Route>
          {user.grade === 2 ? <Route element={<AdminLayoutCntr />}>
            {/* <Route path="/admin/user" element={user?.grade === 2 ? <AdminUserPage /> : <Navigate to="/" />} />
            <Route path="/admin/board" element={user?.grade === 2 ? <AdminBoardPage /> : <Navigate to='/' />} />
            <Route path="/admin/theme" element={user?.grade === 2 ? <AdminThemePage /> : <Navigate to='/' />} />
            <Route path="/admin/notice" element={user?.grade === 2 ? <AdminThemePage /> : <Navigate to='/' />} /> */}
            <Route path="/admin/user" element={<AdminUserPage />} />
            <Route path="/admin/board" element={<AdminBoardPage />} />
            <Route path="/admin/theme" element={<AdminThemePage />} />
            {/* <Route path="/admin/notice" element={<AdminNoticePage />} /> */}
          </Route> : <Navigate to='/' />}
          <Route path="map" element={<KoreaMap />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
