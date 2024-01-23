
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Page from "../Home/Page";



function App(){ 


   
    
    return(
        <>

            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/home" element={<Page/>}/>
                    <Route path="/main" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
           
        </>
    );
}


export default App;