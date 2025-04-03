const title = document.querySelector('h1')
// 方法一 會影響HTML的Style
// title.setAttribute('style','text-align:center');

// 方法二 不會影響HTML的Style
// title.style.textAlign='center';
// title.style.fontSize = '70px';

// 方法三 加入 / 移除 tag 的 CSS class
const p2 = document.querySelector('.second');
console.log(p2.classList)

p2.classList.add('blackBorder'); // class 加入 class
p2.classList.remove('blackBorder'); // class 移除 class

