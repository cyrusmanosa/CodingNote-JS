    //選1個element
    const firstP = document.querySelector('p'); // 在Html內的第一個 P
    console.log(firstP);

    const secondP = document.querySelector('.second'); // class 名
    console.log(secondP);

    const copyrightP = document.querySelector('#copyright'); // class 名
    console.log(copyrightP);

    // 選擇多個HTML元素
    const allP = document.querySelectorAll('p');
    console.log(allP);
    console.log(allP[0]);

    allP.forEach( p => console.log(p) );