import MenuRegistForm from "../components/form/MenuRegistForm";
import { Navigate } from "react-router-dom";


const MenuRegist = () =>{
    const loginStatus = !!localStorage.getItem("isLogin");
    if(!loginStatus){
        return <Navigate to="/login" replace={true}/>
    }

    return (
        <>
            <h1>메뉴 등록 페이지</h1>
            <MenuRegistForm/>
        </>
    )
}

export default MenuRegist;