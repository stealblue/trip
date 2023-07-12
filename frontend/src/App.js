import "./App.css";
import { Routes, Route, Navigate} from "react-router";
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
import ProfilePage from "./pages/auth/ProfilePage";
import TrafficListPage from "./pages/traffic/TrafficListPage";
import Roompage from "./pages/room/RoomPage";
import SearchPwdPage from "./pages/auth/searchPwdPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminBoardPage from "./pages/admin/AdminboardPage";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector(({ UserMod }) => ({
    user: UserMod.user
  }));

  return (
    <>
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
          <Route path="/auth/login" element={ <LoginPage />} />
          <Route path="/auth/register" element={user ? <Navigate to="/"/> : <RegisterPage />} />
          <Route path="/auth/searchPwd/:id" element={<SearchPwdPage />} />
          <Route path="/auth/:nick" element={<ProfilePage />} />
          <Route path="/traffic" element={<TrafficListPage />} />
          <Route path="/room" element={<Roompage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/board" element={<AdminBoardPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
