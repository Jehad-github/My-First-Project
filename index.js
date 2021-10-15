let menuBtn = document.querySelector("#menuBtn");
let sideNav = document.querySelector("#sideNav");
menuBtn.onclick = function(){
    if(sideNav.style.right =="-250px"){
        sideNav.style.right ="0px"
    }else{
        sideNav.style.right ="-250px"
    }
}

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});