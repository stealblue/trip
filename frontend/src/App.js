import { Routes, Route } from "react-router";
import Chat from "./pages/chat/Chat";
function App() {
  return (
    <Routes>
      <Route path="/" element={<p>app</p>} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
