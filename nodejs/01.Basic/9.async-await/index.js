function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


async function delayedGreet(name) {
    // 先處理
    await delayFn(2000);
    console.log(`Hello, ${name}!`);
}

delayedGreet('Cyrus');

// 非同步
async function division(num1, num2) {
    try{
        if (num2 === 0) throw new Error('num2 cannot be 0');
        return num1 / num2;
    }catch(error){
        console.error('Error:', error);
        return null;
    }
}

async function main() {
    console.log(await division(10, 2));
    console.log(await division(10, 0));
}

main();