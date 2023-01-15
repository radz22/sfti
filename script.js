let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}




var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "5px";
    z.style.left = "110px";


}

function login()  {
    x.style.left = "5px";
    y.style.left = "400px";
    z.style.left = "0px";
}