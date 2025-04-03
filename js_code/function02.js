
    // Arrow Function -> Function 簡寫
    const hi = () =>  console.log('hi');

    // 只有return， 只有一句代碼時，不用寫
    const rectangleArea = ( width = 3 , height = 4 ) => width*height;


    //Callback function
    const say = (callback) => callback();
    const finish = () => console.log( 'callback function' );
    say(finish);

    // 保證功能是在特定事情做好後才運行
    // 非同步 Asyncronous Javascript
    setTimeout( () => (console.log('hi')) , 4000);
    console.log('之後1');
    console.log('之後2');

    //Callback function in Array
    let webLanguage = ['php' , 'javascript' , 'python' , 'java'];
    webLanguage.forEach( (eLement) => console.log(eLement) );

    // 1. 參數整身就是一個功能
    // 2. 保證功能是在特定事情做好後才運行 （例如去資料庫拿資料，拿到後才用Callback function 去print到網頁上）
    // Asyncronous Javascript() 
