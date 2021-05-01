let menumobile = document.getElementById('menumobile');
let burger = document.getElementById('burger')
let clicked = false;

burger.addEventListener('click', ()=> {
    clicked = !clicked;
    if(clicked){
        menumobile.style.transform = "translateY(0px)";
        
        
    }else{
        menumobile.style.transform = "translateY(-400px)";

    }
})