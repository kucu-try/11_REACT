import {useEffect, useState} from "react";


const Quiz1 = () =>{
    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    const onChange1 = e =>{
        setInput(e.target.value);
    }

    const onClick1 = () =>{
        if(input == '백종환'){
            setIsDone(true);
        }else{
            alert('틀림');
        }
    }

    useEffect(() => {
        if(isDone == true){
            alert('축하드립니다');
        }else{
            alert('환영해요');
        }

    },[isDone])




    return(
        <>
            <input type="text" value={input} onChange={onChange1}/>
            <button onClick={onClick1}>제출</button>
        </>
    );

}

export default Quiz1