function FooterOne(){

    const style4 = {
        width : '25%',
        height : '100%',
        marginLeft : '3%'
    }

    const style5 = {
        fontSize : '23px',
        borderBottom : '1px solid gray',
        fontWeight : 'bold',

    }

    const style6 ={
        fontSize : '18px',
        fontWeight : '600',
        color : '#696969'
    }
    
    
    return(
        <div style={style4}>
            <h2 style={style5}>PROFILE</h2>
            <h4 style={style6}>백 종 환</h4>
            <h4 style={style6}>1995 .02 .02</h4>
            <h4 style={style6}>call : 010 - 5450 - 5642</h4>
            <h4 style={style6}>baekfive@gmail.com</h4>
        </div>

    )
}

export default FooterOne;