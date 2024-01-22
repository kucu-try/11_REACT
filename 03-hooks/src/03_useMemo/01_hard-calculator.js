import { useState } from "react";
/* 
    목적 : 많은 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다
    의문 : 그렇다면 setTimeout으로 루프를 막아버리면?
*/

const hardCalculator = (num) =>{
        console.log("어려운 계산");

        for(let i =0 ; i< 9999; i++){
            
        } //for문은 동작하는 동안 쓰레드를 점유해야함

        // setTimeout(() => {console.log("타임아웃 종료")}, 3000)  // 이벤트루프에 빠져서 스킵되고 다음 동작을 함.
        // 자바는 3초 있다가 다음 동작이 수행되는데, 자바스크립트는 이벤트 루프에 들어가서 스킵되고 나중에 됨.
        //react는 자식요소에 promise를 가질 수 없다.
        // event loop는 영향을  받지 않는다.
        return num + 9999;
    }


    const HardCalculator =() => {
        const [hardNumber, setHardNumber] = useState(0);
        const hardSum = hardCalculator(hardNumber)
;        return (
            <>
                <h3>어려운 계산기</h3>
                <input type="number"
                    value={hardNumber}
                    onChange={e => setHardNumber(parseInt(e.target.value))}
                />
                <span>9999 ={hardSum}</span>
            </>
        
        );
    }
    


export default HardCalculator;