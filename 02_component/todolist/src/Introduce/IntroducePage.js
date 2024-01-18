import { useState } from "react";
import Title from "./Title";
import TitlePicture from "./TitlePicture";
import IntroduceWord from "./IntroduceWord";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";

function App(){ 
    const [black,setBlack] = useState(false);

    const style1 ={
        margin :0,
        padding : 0,
        width : '100%',
        height : '100vh',
        backgroundColor : black ? 'black' : 'white'
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
    }
    return(
        <>
        <div style={style1}>
            <button onClick={blackScreen}>DARK MODE</button>
            <Title/>
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