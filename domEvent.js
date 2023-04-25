
function holdClick(){
    const change = document.getElementById('text');
    change.innerText = "click by the event from javascript";
    change.style.fontSize = "50px";
}


document.getElementById('button').addEventListener('click' , function(){
    const change = document.getElementById('text');
    change.innerText = 'this is change by this event js methord';
    change.style.fontSize = "50px";
});

// option 2 
 document.getElementById('update').addEventListener('click', function(){
    const input = document.getElementById('input');
    let inputeText = input.value;
    const tital = document.getElementById('tital');
    tital.innerText = inputeText;
    input.value = ''; 

 })




