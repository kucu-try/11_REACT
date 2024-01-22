function IntroduceWord({fontColor}){

    const style2 = {
        width : '26%',
        height : '43%',
        position : 'absolute',
        left : '51%',
        top: '8%'
    }
    // '#cfffe5' '#cc99ff' '#ff99ff' '#ff99cc' '#66ffff'
    return(
        <div style={style2}>
            <div style={{width: '100%',height:'44%',position: 'absolute', bottom: '0'}}>
                <h2 style={{fontSize:'1.1875rem',fontWeight:'700',  marginBlockStart: '15%',color : fontColor ? 'orange' : 'dimgray' }}>
                    INTRODUCE MYSELF</h2>

                <h3 style={{fontSize:'1.0625rem',position: 'absolute', bottom: '0',fontWeight:'300', color: 'black' ,
                    marginBlockStart: '0', marginBlockEnd: '0'  ,color : fontColor ? '#66ffff' : 'black' }}> 
                    안녕하세요! 저는 ChatGPT, OpenAI에서 <br/> 
                    GPT-3.5 아키텍처를 기반으로 하고 있으며, 여러 분야에서<br/>
                    움을 제공할 수 있습니다. 안녕하세요! 저는 ChatGPT, <br/>
                    GPT-3.5 아키텍처를 기반으로 하 하며, 여러 분야에서 다양한 주제에 대한 <br/>
                    GPT-3.5 아키텍처를 기반으로 하 하며, 여러 분야에서 다양한 <br/>
                </h3>
            </div>
        </div>
    );
}

export default IntroduceWord;