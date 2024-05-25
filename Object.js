    // 創造新Object方式 #1 ： Object Literal
    const user = {
        name : '文家俊',
        username : 'Cyrusman1207',
        hometown : 'HongKong',
        age : 30,
        isGoodTeacher : true,
        blog : ['1234' , '5678' , '9012'],
        login(){ console.log('登入方法')},   
        logout(){ console.log('登出方法')},
        listBlog(){ console.log(this.blog)}, // this.blog 才能讀取user內的 blog , //寫法 1.function 2.Method
    }

    //更新資料
    user.name = 'Cyrus';

    // 讀取
    console.log(user.name);    // #1
    console.log(user['name']); // #2

    const key = 'hometown';    // Key 叫 Property
    console.log(user[key]);    // 不能用uer.key，讀取唔到 Hometown 內容

    user.login();

    let num = 1.2345;
    console.log(num.toFixed(2));

    user.listBlog();