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
        width : '120px',
        height : '28px',
        top: '8%',
        right: '15%',
        fontSize : '0.9375rem',
        fontWeight : '600',
        backgroundColor : 'white'
    }


    const style3 = {
        width : '100%',
        height : '40%',
        position : 'absolute',
        left : '0',
        bottom : '1%',
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
            <IntroduceWord fontColor={fontColor}/>
            <footer style={style3}>
                <FooterOne fontColor={fontColor}/>
                <FooterTwo fontColor={fontColor}/>
                <FooterThree fontColor={fontColor}/>
                <FooterFour fontColor={fontColor}/>
            </footer>
        </div>
        </>
    );
}


export default App;