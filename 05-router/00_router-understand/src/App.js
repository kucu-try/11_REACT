import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import PlayerDetails from "./components/PlayerDetail";
import PlayerSearchResult from "./pages/PlayerSearchResult";
import Player from "./pages/Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>

          <Route path="player">
            <Route index element={<Player/>}/>
            <Route path=":playerCode" element={<PlayerDetails/>}/>
            <Route path="search" element={<PlayerSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
