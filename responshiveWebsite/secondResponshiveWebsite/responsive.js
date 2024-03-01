hamburg = document.querySelector('.hamburg')
navbar = document.querySelector('.nav-bar')
navList = document.querySelector('.nav-list')

hamburg.addEventListener('click', ()=>{
    navList.classList.toggle('visibility-responsive');
    navbar.classList.toggle('nav-height-responsive');
})