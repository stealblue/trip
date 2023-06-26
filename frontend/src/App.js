import { Routes, Route } from "react-router";
import ChatPage from "./pages/chat/ChatPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<p>app</p>} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
