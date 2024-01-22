function TitlePicture(){
    const style1 = {
        width : '21%',
        height : '43%',
        border : '1px solid black',
        position : 'absolute',
        left : '27%',
        top: '8%'
        
    }

    const style2 = {
        width : '100%',
        height : '100%',
        
    }


    return(
        <div style={style1}>
            <img style={style2} src="/프로필1.png"/>
        </div>
    )
}

export default TitlePicture;