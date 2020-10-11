let left = document.getElementById('left-card');
let middle = document.getElementById('middle-card');
let right = document.getElementById('right-card');

let toggle = document.getElementById('toggle')
let clicked = false;

toggle.addEventListener('click', ()=> {
    clicked = !clicked;
    if(clicked){
        left.innerHTML = '&dollar;19.99';
        middle.innerHTML = '&dollar;24.99';
        right.innerHTML = '&dollar;39.99';
        
        
    }else{
        left.innerHTML = '&dollar;199.99';
        middle.innerHTML = '&dollar;249.99';
        right.innerHTML = '&dollar;399.99';

    }
})

