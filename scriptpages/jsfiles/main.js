

function showMenu(){
    let m = document.querySelector(".menuContainer");
    let lo = document.querySelector(".fet-logo");
    let overl = document.querySelector(".overlay");

    m.classList.add("smenu");
    lo.classList.add("fet-logo1");
    overl.classList.add("overlay2");
}
function closeMenu(){
    let m = document.querySelector(".menuContainer");
    let lo = document.querySelector(".fet-logo");
    let overl = document.querySelector(".overlay");

    m.classList.remove("smenu");
    lo.classList.remove("fet-logo1");
    overl.classList.remove("overlay2");
}
