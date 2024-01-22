function FooterTwo({fontColor}){
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

    const style6 ={
        color : '#696969'
        ,marginBlockStart : '1rem'
        ,marginBlockEnd : '1rem'
        ,marginLeft : '3%'
        ,color : fontColor ? '#66ffff' : 'black' 
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