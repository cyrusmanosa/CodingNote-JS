function delayFn(time){
    // Promise 會在指定的時間後 resolve
    return new Promise((resolve) => setTimeout(resolve,time));
}

console.log('Promise lecture start')
delayFn(200).then(() => {console.log('after 2 seconds promise')})
console.log('Promise lecture end')


function divideFn(num1, num2){
    return new Promise((resolve,reject) => {
        if (num2 === 0){
            reject('You cannot divide by zero')
        } else {
            resolve(num1/num2)
        }
    });
}

divideFn(10,5)
// 之後處理
.then(result => console.log(result))
// 如有另外結果
.catch(error => console.log(error,'error'));