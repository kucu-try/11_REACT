
/* 
    promise는 콜백지옥과 같은 코드가 형성되지 않게 ( 비동기 통신간에 순서를 정하기 쉽게) 하는 방안으로
    es6에서 도입
    (현재 시점에서 es6가 지원되는 브라우저에서 작업중)
*/


// 내부적으로 비동기 처리를 하고 promise를 반환하는 함수
const increase = (number) => {

    // const asyncFunc = (resolve, reject)=>{
    //     setTimeout(()=>{
    //         const result = number+10;
    //         return result;
    //     },1000);
    // }

    // asyncFunc(resolve, reject);

    /* 
        promise 객체 생성 이유
        1. 비동기 처리 함수를 실행시 성공, 실패에 대한 처리가 용이하게 resolve 및 reject를 제공
        2. promise객체가 제공하는 메소드를 사용하기 위함(콜백 지옥 해소하기 때문 (가독성 좋음)
            (메소드 체이닝 방식 제공)
    */


    // promise 는 내부에서 다 기다린다.
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const result = number + 10;
                if (result > 50) {
                    const e = new Eroor("NumberTooBig");
                    return reject(e);
                }

                resolve(result);
            }, 1000
        );

    });
    return promise;
}

/* 
    increase 함수 호출 후에는 promise가 반환된다.
    이 promise는 resolve함수에 던져인 인수를 기억하고 있다
    이 promise를 통해 then함수를 호출하고 던져지는 콜백함수의 인수로 기억했던
    resolve 함수의 인수를 넣어준다.
*/
console.log(increase(0));

const number = increase(0)
    .then(number => {
        console.log(number);
        return increase(number);
    }).then(number =>{
        console.log(number);
        return increase(number);
    }).then(number =>{
        console.log(number);
        return increase(number);
    }).then(number =>{
        return number;
    }).catch(e => console.log(e, "가 발생했네"))
    .finally(()=>{
        console.log("finally 실행");
    });

    console.log(number); // 여기를 먼저 실행함.