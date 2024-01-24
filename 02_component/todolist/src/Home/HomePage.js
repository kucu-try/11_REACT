import { NavLink} from "react-router-dom";

const style = {
    width : '100%',
    height : '100%',
}

const style1 = {
    position : 'absolute',
    width : '100%',
    top : '22%',
    textAlign : 'center',
    fontSize : '2.8125rem',
    letterSpacing : '0.1375rem'
}

const style2 = {
    position : 'absolute',
    width : '100%',
    height: '20%',
    bottom : '0',
    textAlign : 'center',
}


const style3 = {
    height :'100%'
}


const HomePage = () =>{
    return (
        <>
        <div style={style}>
            <h1 style={style1}>Hey, I’m Jonghwan!</h1>

            <NavLink to={"/home"} style={style2}>
            <img style={style3} src="/favicon.ico"/>
            </NavLink>
        </div>
           
         
        </>
  
    )
}

export default HomePage;