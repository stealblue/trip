import "./App.css";
import { Routes, Route } from "react-router";
import LayoutCntr from "./containers/LayoutCntr";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import WritePage from "./pages/board/WritePage";
import RoomListPage from "./pages/chat/RoomListPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Area from "./pages/area/AreaListPage";
import RoomCreatePage from "./pages/chat/RoomCreatePage";
import RoomReadPage from "./pages/chat/RoomReadPage";
import ReadPage from "./pages/board/ReadPage";
import MyPage from "./pages/auth/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutCntr />}>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<RoomListPage />} />
          <Route path="/chat/room" element={<RoomCreatePage />} />
          <Route path="/chat/room/:roomId" element={<RoomReadPage />} />
          <Route path="/board" element={<BoardListPage />} />
          <Route path="/area" element={<Area />} />
          <Route path="/board/write" element={<WritePage />} />
          <Route path="/board/read/:readNo" element={<ReadPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/:nick" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
