let mainMenu = document.querySelector('.mainMenu');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let home = document.getElementById('Home');
let close = document.querySelector('.close');


// openMenu.addEventListener('click',open);
// closeMenu.addEventListener('click',close);

// function show(){
//     mainMenu.style.display = 'block';
//     mainMenu.style.top = '70px';
//     openMenu.style.display = 'none';
//     closeMenu.style.display = 'block';
// }

// function close(){
    
//     closeMenu.style.display='none';
//     openMenu.style.display='block';
//     mainMenu.style.top='-100%';
// }





// function open(){
//     mainMenu.style.display='block';
//     openMenu.style.display='none';
//     closeMenu.style.display='block';
//     home.style.marginTop="360px";
// }

// function close(){
//     mainMenu.style.display='none';
//     closeMenu.style.display='none';
//     openMenu.style.display='block';
//     home.style.marginTop="0";
// }


// let demo = document.getElementsByClassName('openMenu');
// let btn = document.getElementById('btn');
// @media (min-width:300px) and (max-width:767px){

    function Hide(){
        
    mainMenu.style.display='none';
    closeMenu.style.display='none';
    openMenu.style.display='block';
    home.style.marginTop="0";
}
function Show(){
        mainMenu.style.display='block';
        openMenu.style.display='none';
        closeMenu.style.display='block';
        home.style.marginTop="360px";
    
}
// }
// }
// function close(){
//     mainMenu.style.top="0";
// }