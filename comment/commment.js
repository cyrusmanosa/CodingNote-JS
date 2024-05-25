const comment = document.querySelector('input');
const submitBtn = document.querySelector('button');
const commentCount = document.querySelector('#commentCount')
const commentDiv = document.querySelector('.comment');


submitBtn.addEventListener('click',()=>{
    console.log(comment.value);
    // 留言 (p tag)
    const newComment = document.createElement('p');
    newComment.innerText = 'me:' + comment.value;
    // 加入新留言
    commentDiv.appendChild(newComment);
    // comment數
    // commentCount.innerText = commentDiv.childElementCount;
})
