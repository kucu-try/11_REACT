import cat from 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";


////////////////////////


const CatFact = ()=>{
    const [fact1, setFact] =useState('');
    // const initImage = "https://cataas.com/cat/pbrosoqOlUUtR5XJ";
    // const [catImg, setCatImg] =useState(initImage);
    
   
       const onClickHandler = ()=>{
            fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
            .then(response => response.json())
            .then(data =>{
                console.log(data.text);
                setFact(data.text);
                // setCatImg("https://cataas.com/cat");
            });
            
            // fetch(`https://cataas.com/cat?json=true`)
            // .then(response1 => response1.json())
            // .then(data1=>{
            //     console.log(data1.mimetype + "d");
            //     setCatImg(data1.mimetype);
                
            // });
       }
          
  

    return(
        <>
            <h3>오늘의 고양이 사실</h3>
            <h4>{fact1}</h4>
            {/* <img style={{width: '400px', height: '400px'}} src={catImg}/> */}
            <button onClick={onClickHandler}>다시 고르기</button>
        </>
    )
}

export default CatFact;


