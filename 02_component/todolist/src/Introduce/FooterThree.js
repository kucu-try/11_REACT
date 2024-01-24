import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function FooterThree({ fontColor }) {
    const style4 = {
        width: '25%',
        height: '100%',
        marginLeft: '2%'
    }

    const style5 = {
        fontSize: '22px',
        borderBottom: '1px solid gray',
        fontWeight: '900',
        paddingBottom: '2.5%'
        , color: fontColor ? 'orange' : 'black'

    }

    const [hover, setHover] = useState(false);

    const mouseOver = () => {
        setHover(true);
    };

    const mouseOut = () => {
        setHover(false);
    }


    const style6 = {
        height: '3rem',
        border: fontColor ? ' 1px solid #cc99ff' : '1px solid black',
        borderRadius: '50%',
        transitionProperty: ' height,borderRadius',
        transitionDuration: ' 0.5s, 1s'
    }


    const grow = {
        height: '4rem',
        border: fontColor ? ' 1px solid #cc99ff' : ' 1px solid black',
        borderRadius: '50%',
        transitionProperty: 'height,borderRadius',
        transitionDuration: ' 0.3s, 1s'
    }

    const fontGrow = {
        fontWeight: '300',
        fontSize: '14px',
        color: fontColor ? '#cc99ff' : 'black',

    }

    const style7 = {
        fontWeight: '350',
        fontSize: '14px',
        color: fontColor ? '#cc99ff' : 'black',

    }
    return (
        <div style={style4}>
            <h2 style={style5}>ACHIEVEMENT</h2>

            <Link to={"/project"}>
                <div onMouseOver={mouseOver}
                    onMouseOut={mouseOut} style={{height: '20%',  gap: '4%' ,display: "flex"}}>
                        <img
                            src="/bell2.png"
                            style={hover ? { ...grow } : { ...style6 }}
                        />
                    <a style={{ textDecoration: 'none', color: 'black' }} href="">
                        <h5 style={hover ? { ...fontGrow } : { ...style7 }}>선생님을 위한 맞춤형 교실 관리 사이트</h5>
                    </a>

                </div>
            </Link>



            <div style={{ height: '20%', display: "flex", gap: '18%' }}>

                <a style={{ border: fontColor ? ' 1px solid #cc99ff' : ' 1px solid black', width: '50px', height: '50px', borderRadius: '50%' }} href="">
                    <img src="" />
                </a>
                <h5 style={{ color: fontColor ? '#cc99ff' : 'black', fontWeight: fontColor ? '300' : '600' }}>INTRODUCE PAGE</h5>
            </div>

            <div style={{ display: "flex", gap: '20%' }}>
                <a style={{ border: fontColor ? ' 1px solid #cc99ff' : ' 1px solid black', width: '50px', height: '50px', borderRadius: '50%' }} href="">
                    <img src="" />
                </a>
                <h5 style={{ color: fontColor ? '#cc99ff' : 'black', fontWeight: fontColor ? '300' : '600' }}>FINAL PROJECT</h5>
            </div>

        </div>
    )
}

export default FooterThree;