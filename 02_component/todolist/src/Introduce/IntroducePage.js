import { useState } from "react";
import Title from "./Title";
import TitlePicture from "./TitlePicture";
import IntroduceWord from "./IntroduceWord";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";
import "./index.css";

function App(){ 
    const [black,setBlack] = useState(false);
    const [fontColor, setFontColor] = useState(false);


    const style1 ={
        margin :0,
        padding : 0,
        width : '100vw',
        height : '100vh',
        backgroundColor : black ?  `rgb(25, 25, 26)` : 'white'
    
    }

    const style2 ={
        position: 'absolute',
        width : '18%',
        height : '20%',
        top: '0%',
        left: '2%',
        borderRadius : '10%',
        fontSize : '30px',
        fontWeight : '900',
        color : 'white',
        backgroundColor: 'darkgrey'
    }


    const style3 = {
        width : '100%',
        height : '40%',
        position : 'absolute',
        left : '0',
        bottom : '0',
        display : 'flex'
    }
  
    const blackScreen = ()=>{
        setBlack(!black);
        setFontColor(!fontColor);
    }

    
    return(
        <>
        <div style={style1}>
            <button style={style2} onClick={blackScreen}>DARK MODE</button>
            <Title fontColor={fontColor}/>
            <TitlePicture/>
            <IntroduceWord/>
            <footer style={style3}>
                <FooterOne/>
                <FooterTwo/>
                <FooterThree/>
                <FooterFour/>
            </footer>
        </div>
        </>
    );
}


export default App;