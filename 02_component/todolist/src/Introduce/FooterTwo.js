function FooterTwo(){
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

    const style6 ={
        color : '#696969'
    }
    

    return(
            <div style={style4}>
                    <h2 style={style5}>EDUCATION</h2>
                    <h4 style={style6}>JAVA</h4>
                    <h4 style={style6}>MYSQL</h4>
                    <h4 style={style6}>SPRING FRAME WORK</h4>
                    <h4 style={style6}>REACT</h4>
                    <h4 style={style6}>JAVASCRIPT</h4>
                    <h4 style={style6}>CSS</h4>
                    <h4 style={style6}>HTML</h4>
            </div>
    )
}

export default FooterTwo;