

function increase(number, callback){
    setTimeout(()=>{
        const result = number + 10;

        if(callback){
            callback(result);
        }
    },1000);
}

increase(0,result=>console.log(result));  //함수에서 다른함수를 호출하는 걸 콜백함수라고한다.


/* 
여러번 순차적으로 결과들을 콜백함수로 던지기 위해서는 중첩을 사용해서 호출할 수 있다
하지만 이러한 형태는 가독성도 좋지 않고 유지보수도 힘들기 떄문에 피해야하는 패턴이다
이러한 형태를 콜백 지옥이라고 한다.
*/

//이것을 메소드 체이닝이라고 한다.
const api = fetch().then(r => r.json()).then(jValue => jValue).catch(e => console.log(e));


increase(0,result=>{
    console.log(result);
    increase(result, result=>{
        console.log(result);
        increase(result, result=>{
            console.log(result);
            increase(result, result=>{
                console.log(result);
                increase(result, result=>{
                    console.log(result);
                    increase(result, result=> {
                        console.log(result);
                    })
                })
            })
        })
    })
});