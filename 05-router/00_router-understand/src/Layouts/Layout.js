import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";


const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;