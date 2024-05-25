const mypanel = document.querySelectorAll('.div-set');
console.log(mypanel);
mypanel.forEach(panel =>{
    console.log("abhinav");
    panel.addEventListener('click',() =>{
        removePanel();
        panel.classList.add("active");
    });

})
function removePanel(){
    mypanel.forEach(panel =>{
        panel.classList.remove("active");
    });
}