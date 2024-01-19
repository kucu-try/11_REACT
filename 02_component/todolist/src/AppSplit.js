import { useState } from "react";

//list를 출력하기 위한 컴포넌트
const Item = ({todo,setTodoList,todoList,fontColor})=>{
    // check 되었을 경우 취소선 처리
    const [check,setCheck] = useState(false);

    const style={
        textDecoration : check? 'line-through' : "none",
         
        color : fontColor? fontColor :'blue'
    }

 
    const changeBox = (e)=>{
        setCheck(!check);
    }

    const removeTodo = () =>{
        const result = todoList.filter(item => item !== todo);
        setTodoList(result);
    }

  

    return(
        <div>
            <input type="checkBox" onChange={changeBox}/>
            <label style={style}>{todo}</label>
            <button onClick={removeTodo}>삭제</button>
            
        </div>
    );
}
/* ------------------------------------------------------------------------------ */

// todolist를 화면에 출력하기 위한 컨테이너
const Container = ({todoList, setTodoList, fontColor})=>{

    return (
            todoList.map((current, index) =>{
             return <Item fontColor = {fontColor} todo={current} key={index} setTodoList={setTodoList} todoList={todoList}/>
            })
    );
}
/* ------------------------------------------------------------------------------ */

const InputContainer = ({todoList,setTodo})=>{
    const [input, setInput] = useState("");

    const addList = ()=>{
        setTodo([...todoList, input]);
    }

    const changeInput = (e)=>{
        setInput(e.target.value);
    }

    return(
        <>
            <input type="text" value={input} onChange={changeInput}/>
            <button onClick={addList}>추가</button>
        </>
    );
}
/* ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------ */

//애플리케이션의 전체 화면 
function App(){
    const [todoList, setTodoList] = useState(["안녕", "안녕2"]);
    const [black,setBlack] = useState(false);
    const [fontColor,setFontColor] = useState(false);
    const [inputFont, setInputFont] = useState("");

    const styl1={
        backgroundColor : black? 'black' :'white'
    }

    const styl2={
        color : fontColor? fontColor : 'blue'
    }

    // const color = fontColor? 'red' : 'white';

    const blackScreen = ()=>{
        setBlack(!black);
        setFontColor(!fontColor);
    }

    const InputBtn = (e)=>{
        setFontColor(e.target.value);
    }

    const InputColor =(e)=>{
        setInputFont(e.target.value);
    }
      

    return (
        // div 에 style={styl1, color} 주면 todo의 목록들도 색 적용 됨
        <div style={styl1}>
        <h1 style={styl2}>to do list</h1>
        <button onClick={blackScreen}>블랙모드</button>  
    
        <Container fontColor = {fontColor} todoList = {todoList} setTodoList={setTodoList} />
        <InputContainer setTodo={setTodoList} todoList={todoList}/>
        <input type="text" value={inputFont} onChange={InputColor}/>
        <button onClick={InputBtn} value={inputFont}>색변경</button>
        
        </div>
    );
}
/* ------------------------------------------------------------------------------ */


export default App;


// const [ input, setInput] = useState("");
// const colorChange = (e) =>{
//     const a = e.target.value
//     console.log("color :" + a);
//     setFontColor(a);
//    }
//    const changeInput = (e) => {
//     setInput(e.target.value);
//     }

//     <input type='text' value={input} onChange={changeInput}/>
//     <button onClick={colorChange} value={input}>색변경</button>