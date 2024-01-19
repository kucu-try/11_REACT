function FooterFour(){

    const style4 = {
        width : '25%',
        height : '100%',
        marginLeft : '2%',
        marginRight : '3%'
    }

    const style5 = {
        fontSize : '23px',
        borderBottom : '1px solid gray',
        fontWeight : 'bold',

    }

    const style6 = {
        width : '90%',
        height : '50%'
    }
    return(
        <div style={style4}>
            <h2 style={style5}>GITHUB</h2>
            <a href="https://github.com/kucu-try">
                <img style={style6} src="/깃허브3.png" alt="깃허브 로고"/>
            </a>
        </div>

    )
}

export default FooterFour;