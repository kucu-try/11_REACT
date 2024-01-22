

function Title({fontColor}){
    const style = {
        width : '21%',
        height : '43%',
        fontSize : 50,
        fontWeight :  '800',
        textAlign : 'center',
        position : 'absolute',
        left : '3%',
        top: '8%',
        color : fontColor ? 'orange' : 'black'
    }


    return(
        
            <div style={style}>KUCU</div>
            
    );
}


export default Title;