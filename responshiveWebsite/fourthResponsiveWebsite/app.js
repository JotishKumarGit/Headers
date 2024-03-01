

window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

function toggle(){
    var navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

