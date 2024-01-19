

function Title({fontColor}){
    const style = {
        width : '22%',
        height : '45%',
        fontSize : 50,
        fontWeight :  '800',
        textAlign : 'center',
        position : 'absolute',
        left : '0',
        top : '10%',
        color : fontColor ? 'orange' : 'black'
    }


    return(
        
            <div style={style}>KUCU</div>
            
    );
}


export default Title;