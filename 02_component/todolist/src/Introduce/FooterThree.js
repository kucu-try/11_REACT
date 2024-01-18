function FooterThree(){
    const style4 = {
        width : '25%',
        height : '100%',
        marginLeft : '2%'
    }

    const style5 = {
        fontSize : '23px',
        borderBottom : '1px solid gray',
        fontWeight : 'bold',

    }
    return(
        <div style={style4}>
            <h2 style={style5}>ACHIEVEMENT</h2>
            <div style={{display: "flex" ,gap:'4%'}}>
                <a href="">
                    <img style={{height: '50px'}} src="/bell2.png"/>
                </a>
                <h5 style={{fontWeight: '350', fontSize: '16px'}}>선생님을 위한 맞춤형 교실 관리 사이트</h5>
            </div>

            <div style={{display: "flex"}}>
                
                <a style={{border: '1px solid black', width:'50px', height: '50px'}}href="">
                    <img src=""/>
                </a>
                <h5></h5>
            </div>

            <div style={{display: "flex"}}>
            <a href="">
                    <img src=""/>
                </a>
                <h5></h5>
            </div>
            
        </div>
    )
}

export default FooterThree;