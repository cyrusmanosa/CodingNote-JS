
// 修改文字內容 （只限顯示，HTML內沒有影響）
const p1 = document.querySelector('p');
console.log(p1);

p1.innerText = 'JavaScript介紹'; // 修改文字
p1.innerText += 'JavaScript介紹'; // 追加文字 

// 內容連帶所有div的內容一齊改
const section = document.querySelector('div');
console.log(section.innerHTML);

section.innerHTML = '<strong> 內容連帶所有HTML一齊改 </strong>'

// 修改HTML tag Attribute
const courseImg = document.querySelector('img');
console.log(courseImg.getAttribute('width'));

// 追加及修改HTML內的功能
courseImg.setAttribute('width',300);
courseImg.setAttribute('style','border: 5px solid #2196f3');
