// Function 功能
// 內建功能 Build-in function
alert();
console.log("123");

// 自定義功能 Custom function
// function declaration
function hello() {
  console.log("hello");
}

hello();

// function expression 功能表達式
const hi = function () {
  console.log("hi");
};
hi();

// Hoisting
// JavaScript Declarations are Hoisted
// Parameter 參數
const say = function (message, message2) {
  // Local Variable
  console.log(message, message2);
};

let message = "hi"; // Global Variable
console.log(message);
say("123", "3456");

// 預設參數,Return(返回值)
const rectangleArea = function (width = 3, height = 4) {
  return width * height;
};

let output = rectangleArea(1, 2); // <- 優先, return 去output
console.log(output);

