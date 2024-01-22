import { useMemo, useState } from "react";


const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 1999; i++){

    }

    return num + 10000;
}


const easyCalculator = (num) => {
    console.log("쉬운 계산");

    return num +1;
}


const UseMemoComponent= () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = useMemo(() =>{   
        return hardCalculator(hardNumber);
    },[hardNumber]);   // hardNumber 값이 변경되면 useMemo를 저장해서 리턴을 수행하겠다. 
    //그래서 밑의 easynuber 쪽은 렌더링할때  hardnumber의 값을 호출만 해오기 때문에 easy만 된다.

    const easySum = useMemo(() =>{
        return easyCalculator(easyNumber);
    },[easyNumber]);

    return(
        <>
            <input type="number" value={hardNumber} 
            onChange={e => setHardNumber(parseInt(e.target.value))}/>

            <span> +10000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>

            <input type="number" value={easyNumber} 
            onChange={e => setEasyNumber(parseInt(e.target.value))}/>

            <span> +1 = {easySum}</span>
        </>
    );
}

export default UseMemoComponent;