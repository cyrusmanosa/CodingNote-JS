    // Array
    let webLanguage = ['php','javascript','python','java'];
    console.log(webLanguage[2]);

    // 2D Array
    let friends = [ ['123','456'] , ['abc','def'] ];
    console.log(friends[0][1]);

    // Array 常用功能
    console.log(webLanguage.indexOf('java')); //找尋內容位置
    console.log(webLanguage.includes('java')); //找尋內容的真偽 （有：trus)

    // 加入新元素
    webLanguage.push('Css');
    console.log(webLanguage);

    // 移除最後的番地
    webLanguage.pop();
    console.log(webLanguage);