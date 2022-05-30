let places = document.querySelectorAll(".places #a");
for(let i of places){
    i.addEventListener('click',()=>{
        //placeholder function - map tag will appear
        console.log(i.textContent);
    })
}
