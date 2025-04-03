let platform = 'youtube' + '平台';
let lesson = 'JS入門課程';

// console.log(platform + '上的' + lesson);
console.log(lesson[0]); // [0] <- 第一個字
console.log(lesson.length);

//Escape character
let lesson2 = " \" JS入門課程 \" "; //show 符號
console.log(lesson2);

// Template String 樣板字面值
let teacher = `文家俊`;
console.log(`在${platform}上有個${lesson2}裹, 可以跟${teacher}學習Javascript`);
console.log('在' + platform + '上有個' + lesson2 + '裹, 可以跟' + teacher + '學習Javascript');

//String 常用功能
let userInput = '  學習Javascript    ';
console.log(userInput);
console.log(userInput.trim()); //拎走字串既空白
console.log(userInput.trimEnd()); //拎走字串後面既空白

let today = '2022年4月4日';
console.log(today.substring(0,4)); //顯示字串範圍
console.log(today.includes('山')); //搵字
console.log(today.replace('20','30')); //將20改30（第一組）
console.log(today.replaceAll('4','30')); //將20改30（所有組）

