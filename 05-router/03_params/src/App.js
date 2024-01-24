import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import MenuDetails from "./components/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu">
            <Route index element={<Menu/>}/>
            <Route path=":menuCode" element={<MenuDetails/>}/> {/* : 은 pathVariable : */}
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
