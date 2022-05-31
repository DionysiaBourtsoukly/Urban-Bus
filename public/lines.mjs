let mapLink = document.querySelectorAll(".map")
let scheduleLink = document.querySelectorAll(".schedule")
let timetable = document.querySelectorAll(".container table")
let container = timetable[0].parentNode;

let lines = document.querySelectorAll(".line-names tr td p");


mapLink[0].addEventListener('click', ()=>{
    try {
        container.removeChild(timetable[0]);
    } catch (error) {
        
    }
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";
})

scheduleLink[0].addEventListener('click', ()=>{
    container.appendChild(timetable[0]);
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";    
})

let c = lines.length;
let table = document.querySelectorAll(".container table tr");
for(let line of lines){
    line.addEventListener('click',()=>{
        for(let i=0;i<c;i++){
            lines[i].removeAttribute('style');
        }
        line.style.backgroundColor = "rgb(181, 118, 245)";
        line.style.borderRadius = "10px";
        for(let j=1;j<table.length;j++){
            for(let k=0;k<table[j].cells.length;k++){
                table[j].cells[k].innerHTML = Array.from(lines).indexOf(line);
            }
        }
    })
}