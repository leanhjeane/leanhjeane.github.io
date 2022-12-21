// RESPONSIVE NAVIGATION CONTROL
const navMenu = document.querySelector('.menu-toggle');
const icon = document.querySelector('.fa-bars');
const menuContainer = document.querySelector('#menu-container');

navMenu.addEventListener('click',()=>{
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
        menuContainer.style.display = "flex";
        
    }else{
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-close');
        menuContainer.style.display = "none";
        
    }
});

