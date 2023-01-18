document.querySelector(".menuMobile").addEventListener("click", () => {
   
    if(document.querySelector(".menu ul").style.left == "0px") {
        document.querySelector(".menu ul").style.left = "-100%";
    } else {
        document.querySelector(".menu ul").style.left = "0px";
    }

})