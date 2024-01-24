import { NavLink } from "react-router-dom"

const Navbar =() => {
    const activeStyle = {
        backgroundColor : 'purple',
        color : "white"
    }

    return (
        <div style={{width : '30%', position: "absolute", right: '10%', top : '2%'}}>
            <ul  style={{fontSize:'20px',width : '100%', display: "flex" , gap:'30px'}}>
                <li>
                    <NavLink
                        to="/main"
                        style={({isActive}) => isActive ? activeStyle:null}>
                        HOME
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        style={({isActive}) => isActive ? activeStyle:null}>
                        소개
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/player"
                        style={({isActive}) => isActive ? activeStyle:null}>
                        선수 목록
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;