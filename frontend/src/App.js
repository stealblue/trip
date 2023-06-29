import "./App.css";
import { Routes, Route } from "react-router";
import LayoutComp from "./components/LayoutComp";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import WritePage from "./pages/board/WritePage";
import ChatPage from "./pages/chat/ChatPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Area from "./pages/area/AreaListPage";
import ChatRoom from "./pages/chat/ChatRoom";
import ReadPage from "./pages/board/ReadPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutComp />}>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/room" element={<ChatRoom />} />
          <Route
            path="/board"
            element={<BoardListPage />}
          />
          <Route path="/area" element={<Area />} />
          <Route path="/board/write" element={<WritePage />} />
          <Route path="/board/:postId" element={<ReadPage />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
export default App;
