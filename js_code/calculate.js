console.log(2 ** 3); //2既3次方
console.log(3 % 2); //3除2晚餘數

//算術符號執行次序：括號 -＞ 指數 -＞ 成/除 -＞ 加減

//簡短寫法
let like = 2;
like **= 3;
console.log(like);

//NaN (Not A Number)
console.log(1 - "A");

let num = 12.3456;
console.log(num.toFixed(3)); //小數點後短（會四捨五入）
console.log(Math.round(num)); //變成整數
console.log(Math.round(Math.random() * 100));

let AAA = 0; //值和資料類別都相同於
console.log(AAA === 0);
