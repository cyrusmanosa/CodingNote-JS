// 加入新element
const div = document.querySelector('div');

// 方法一：現有HTML中加入
// div.innerHTML += '<p>新加的段落文字</p>';

// 方法二 ： 創造新tag
const newP = document.createElement('p');
newP.innerText = '新加的段落文字';

// 原素後加入
// div.append(newP);

// 原素前加入
// div.prepend(newP);