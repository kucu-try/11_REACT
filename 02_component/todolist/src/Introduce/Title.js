import { Link, NavLink } from "react-router-dom";


function Title({fontColor}){
    const style = {
        width : '21%',
        height : '7%',
        fontSize : 50,
        fontWeight :  '800',
        textAlign : 'center',
        position : 'absolute',
        left : '3%',
        top: '8%',
        color : fontColor ? 'orange' : 'black',
        textDecoration : 'none'
    }


    return(
        
        <div><Link to={"/main"} style={style}>KUCU</Link></div>
            
    );
}


export default Title;