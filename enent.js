console.log('hello world');
// type of top methord event in javascript programming 
// 

// option 2 [ use this some time ]
function pink() {
    document.body.style.backgroundColor = "pink";
}

//option 3
const changeColor = document.getElementById('totmato');
changeColor.onclick = totmato;
function totmato() {
    document.body.style.backgroundColor = "green";
}

// option 4 [ use this some time ]
const purple = document.getElementById('purple');
purple.onclick = function noName(){
    document.body.style.backgroundColor = "purple";
}

// option 5
const blackButton = document.getElementById('black');
blackButton.addEventListener('click' , function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

// option final [ important ]
const final = document.getElementById('golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})

