import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import App from "../Introduce/IntroducePage";

const HomePage = () =>{
    return (
        <>
            <h1>Hey, I’m Jonghwan!</h1>
            <NavLink to={"/home"}>
            <img src="/favicon.ico"/>
            </NavLink>
         
        </>
  
    )
}

export default HomePage;