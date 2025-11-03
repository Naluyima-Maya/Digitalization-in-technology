const navToggle = document.getElementById('mobile-menu');
const menuItems = document.getElementById("nav-menu");


navToggle.addEventListener('click', ()=> {
    menuItems.classList.toggle("active");
})


