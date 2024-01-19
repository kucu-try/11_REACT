import { useEffect, useState } from "react";

const Quiz = () =>{
    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    const submit = () => {
      if(input == '고구마'){
        setIsDone(true);
      }else{
        alert('틀렸습니다');
       
      }
   }
    
    const onAnswer = e => {
        setInput(e.target.value);
    }


    useEffect(() => {
        
        if(isDone == true){
            alert('축하드려요');
        }else{
          
                alert('환영');
            
        }

        
    },[isDone])

    return(
        <>
            <input type="text" value={input} onChange={onAnswer}/>
            <button onClick={submit}>제출</button>
        </>

    );
}

export default Quiz;