import Title from "../Introduce/Title"

const style = {
    position : 'absolute',
    left : '15%',
    top : '20%',
    fontSize : '3.3rem',
    fontFamily : 'jejuhallasan'
}

const asideColor = {
    position : 'absolute',
    right : '0',
    backgroundColor : '#669966',
    width : '22%',
    height : '100%'
}

const Semi = ()=>{
    return(
        <>
            <Title/>
            <h1 style={style}>학교 종이 땡땡땡</h1>
            <div style={asideColor}/>
            <div>

            </div>
        </>
    )
}

export default Semi;