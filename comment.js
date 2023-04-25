document.getElementById('comment').addEventListener('click', function(){
    const commentBox = document.getElementById('textarea');
    const data =  commentBox.value;

    const commentArea = document.getElementById('comment-data');
    const p = document.createElement('p');
    p.innerText = data;
    commentArea.appendChild(p);
    commentBox.value = '';
})

// addEventListener('click');
// addEventListener('focus');
// addEventListener('blur');
// addEventListener('mouseenter');
// addEventListener('keydown');
// addEventListener('keypress');
// addEventListener('keyup');