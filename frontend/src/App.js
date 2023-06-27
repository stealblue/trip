import "./App.css";
import { Routes, Route } from "react-router";
import LayoutComp from "./components/LayoutComp";
import Main from "./pages/Main";
import BoardListPage from "./pages/board/BoardListPage";
import WritePage from "./pages/board/WritePage";
import Footer from "./components/main/Footer";
import ChatPage from "./pages/chat/ChatPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Area from "./pages/area/AreaListPage";
// import Room from "./pages/Accommo/RoomListPage";
// import Traffic from "./pages/Trans/TrafficListPage";
import ChatRoom from "./pages/chat/ChatRoom";
// import RegionTheme from "./pages/regionTheme/RegionThemeListPage";
// import Accommo from "./pages/Accommo/AccommoListPage";
// import Trans from "./pages/Trans/TransListPage";

const boardData = [
  {
    id: 1,
    nick: "gclutram0",
    title: "Honorable",
    content:
      "odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
  },
  {
    id: 2,
    nick: "lgaspard1",
    title: "Rev",
    content:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
  },
  {
    id: 3,
    nick: "prosier2",
    title: "Mr",
    content:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
  },
  {
    id: 4,
    nick: "jcawley3",
    title: "Mr",
    content:
      "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
  },
  {
    id: 5,
    nick: "bardley4",
    title: "Mr",
    content:
      "nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
  },
  {
    id: 6,
    nick: "mwelland5",
    title: "Mr",
    content:
      "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
  },
  {
    id: 7,
    nick: "nwike6",
    title: "Mrs",
    content:
      "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
  },
  {
    id: 8,
    nick: "gramelet7",
    title: "Dr",
    content:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
  },
  {
    id: 9,
    nick: "nsaddleton8",
    title: "Mrs",
    content:
      "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
  },
  {
    id: 10,
    nick: "ptiler9",
    title: "Mrs",
    content:
      "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
  },
];
function App() {
  const pathname = window.location.pathname;

  return (
    <>
      <LayoutComp />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/room" element={<ChatRoom />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route
          path="/board"
          element={<BoardListPage boardData={boardData} />}
        />
        <Route path="/area" element={<Area />} />
        {/* <Route path="/room" element={<Room />} />
        <Route path="/traffic" element={<Traffic />} /> */}
        {/* <Route path="/regionTheme" element={<RegionTheme />} /> */}
        {/* <Route path="/accommo" element={<Accommo />} />
        <Route path="/trans" element={<Trans />} /> */}
        <Route path="/board/write" element={<WritePage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
