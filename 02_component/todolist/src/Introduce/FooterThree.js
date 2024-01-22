import { useState } from "react";

function FooterThree({fontColor}){
    const style4 = {
        width : '25%',
        height : '100%',
        marginLeft : '2%'
    }

    const style5 = {
        fontSize : '22px',
        borderBottom : '1px solid gray',
        fontWeight : '900',
        paddingBottom : '2.5%'
        ,color : fontColor ? 'orange' : 'black' 

    }

    const[hover, setHover] = useState(false);

    const mouseOver = () => {
        setHover(true);
    };

    const mouseOut = () =>{
        setHover(false);
    }


    const style6 ={
        width : '50px',
        border : fontColor ? ' 1px solid #66ffff' : '1px solid black' ,
        borderRadius: '50%',
        transitionProperty: 'width, height,borderRadius',
        transitionDuration: '0.8s, 1s, 1s'
    }


    const grow = {
        width : '80px',
        border : fontColor ? ' 1px solid #66ffff' : ' 1px solid black' ,
        borderRadius: '50%',
        transitionProperty: 'width, height,borderRadius',
        transitionDuration: '0.5s, 1s, 1s'
    }
    return(
        <div style={style4}>
            <h2 style={style5}>ACHIEVEMENT</h2>
            <div style={{height: '20%',display: "flex" ,gap:'4%'}}>
                <a href="">
                    <img 
                    src="/bell2.png" 
                    style={hover ? {...grow} : {...style6}}
                    onMouseOver={mouseOver}
                    onMouseOut={mouseOut}/>
                </a>
                <a style={{textDecoration: 'none' , color: 'black'}} href="">
                    <h5 style={{fontWeight: '350', fontSize: '16px'  ,color : fontColor ? '#66ffff' : 'black' }}>선생님을 위한 맞춤형 교실 관리 사이트</h5>
                </a>
               
            </div>





            <div style={{height: '20%',display: "flex", gap:'18%'}}>
                
                <a style={{border : fontColor ? ' 1px solid #66ffff' : ' 1px solid black' , width:'50px', height: '50px'}} href="">
                    <img src=""/>
                </a>
                <h5 style={{ color : fontColor ? '#66ffff' : 'black' }}>INTRODUCE PAGE</h5>
            </div>

            <div style={{display: "flex" , gap:'20%'}}>
            <a style={{border : fontColor ? ' 1px solid #66ffff' : ' 1px solid black' , width:'50px', height: '50px'}} href="">
                    <img src=""/>
                </a>
                <h5 style={{ color : fontColor ? '#66ffff' : 'black' }}>FINAL PROJECT</h5>
            </div>
            
        </div>
    )
}

export default FooterThree;