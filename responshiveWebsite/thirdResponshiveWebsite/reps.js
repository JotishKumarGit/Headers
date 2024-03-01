hamburg  = document.querySelector('.hamburg')
navbar = document.querySelector('.nav-bar')
navList= document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav ')

hamburg.addEventListener('click', ()=>{
rightNav.classList.toggle('visibility-responsive');
navList.classList.toggle('visibility-responsive');
navbar.classList.toggle('nav-height-responsive');
})








