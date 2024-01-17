import React from "react";
import { useState } from "react";

function App() {
  const [list, setList] = React.useState([
     
  ]);


  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChangeHandler = e => setInputText(e.target.value);

  const onClickHandler = () =>{
    const changeNames = list.concat({
      id:nextId,
      name: inputText
    });

    setNextId(nextId +1);
    setList(changeNames);
    setInputText("");
  }
 

  

  const nameList = list.map(
    list => {
      return (
        
        <div key={list.id} id={list.id} >
          {list.name}
        </div>
      );
    }
  );

  
  const onRemove = id => {
    const changeNames = list.filter(list => list.id !== id);
    setList(changeNames);
  }
  const nameList1 = list.map(
    list => {
      return (
        
        <button key={list.id} onClick={() => onRemove(list.id)} >
          삭제
        </button>
      );
    }
  );


  const onColor= id =>{
    const abcMart = document.getElementById(id);
    abcMart.style.textDecoration = 'line-through';
    abcMart.style.textDecorationColor = 'red';
  }
  const nameList2 = list.map(
    list => {
      return (
        <button key={list.id} onClick={() => onColor(list.id)} >
          색깔 변경
        </button>
      );
    }
  );


  return(
    <>
      <h1  style={{width:'100%', textAlign:'center'}}>to do list</h1>
      <div style={{flexDirection:'column',padding:'1%',backgroundColor: 'green',width: '70%', height:'50%',position:'absolute' , overflowY:'auto',left:'15%', border : '1px solid black'}}>
        <div style={{border : '1px solid black',width:'80%', height: '10%',textAlign:'center', fontSize:'30px', marginBottom:'20px'}} >
          {nameList}
        </div>
        {nameList1}
        {nameList2}
       
      </div>
    <div style={{width:'70%', height:'20%',gap:'10%',position:'absolute', bottom:'10%', left:'15%'}}>
        <input style={{width:'50%', height:'20%', marginRight:'10%'}} type={inputText} onChange={onChangeHandler}/>
        <button style={{width:'30%', height:'20%'}} onClick={onClickHandler}>추가</button>
    </div>
     
    </>
  )

  

}

export default App;
