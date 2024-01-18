function IntroduceWord(){

    const style2 = {
        width : '40%',
        height : '25%',
        position : 'absolute',
        left : '51%',
        top : '28%'
        
    }
    return(
        <div style={style2}>
            <h2 style={{fontWeight:'600', color: 'gray' }}>INTRODUCE MYSELF</h2>
            <h3 style={{fontWeight:'400', color: 'dimgray' }}> 
                안녕하세요! 저는 ChatGPT, OpenAI에서 개발한 대화형 인공지능 언어 모델입니다.<br/>
                GPT-3.5 아키텍처를 기반으로 하고 있으며, 여러 분야에서 다양한 주제에 대한 정보와 도<br/>
                움을 제공할 수 있습니다. 안녕하세요! 저는 ChatGPT, <br/>
                OpenAI에서 개발한 대화형 인공지능 언어 모델입니다. <br/>
                GPT-3.5 아키텍처를 기반으로 하고 있으며,여러 분야에서 다양한 주제에 대한 정보와 도움을 제공할 수 있습니다.  <br/>
                하며, 여러 분야에서 다양한 주제에 대한 정보와 도움
            </h3>
        </div>
    );
}

export default IntroduceWord;