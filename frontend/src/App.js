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
import ChatRoom2 from "./pages/chat/ChatRoom2";
import ReadPage from "./pages/board/ReadPage";

function App() {
  return (
    <>
      <LayoutComp />
      <Routes>
        <Route element={<LayoutComp />}>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/room" element={<ChatRoom />} />
          <Route path="/chat/room/:roomId" element={<ChatRoom2 />} />
          <Route path="/board" element={<BoardListPage />} />
          <Route path="/area" element={<Area />} />
          <Route path="/board/write" element={<WritePage />} />
          <Route path="/board/:nick/:postId" element={<ReadPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
