function changeView(){
    console.log('Resizing');
    if(window.innerWidth < 1200){
        console.log('disapperating')
        document.querySelector(".desktopView").classList.add("d-none");
        document.querySelector(".mobileView").classList.remove("d-none");
    }
    else{
        document.querySelector(".mobileView").classList.add("d-none");
        document.querySelector(".desktopView").classList.remove("d-none");
    }
}
 
document.addEventListener("click" , () => {
    changeView();
})

document.addEventListener("load" , () => {
    changeView();
})

addEventListener("load" , () => {
    changeView();
})

addEventListener("loadstart" , () => {
    changeView();
})

addEventListener("DOMContentLoaded" , () => {
    changeView();
})


addEventListener("resize" , () => {
    changeView();
})

addEventListener("*" , () => {
    changeView();
})


  