AOS.init();

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Start redirecting...");
});
window.onload = () =>{
    console.log("Loading...");
    setInterval(close_loader,3000);
}
function close_loader() {
    $("#preloader").css({"display": "none"});
}
$(window).ready(() => {
    console.log("Done.");
});
