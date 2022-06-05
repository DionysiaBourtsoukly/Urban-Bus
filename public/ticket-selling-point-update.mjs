

//sign-in - sign-up popup window
let popuptsp = document.createElement('div');
popuptsp.className = "accounts";

popuptsp.style.backgroundColor = "rgb(137, 82, 220)";
popuptsp.style.width = "20em";
popuptsp.style.height = "100%";
popuptsp.style.listStyleType = "none";
popuptsp.style.position = "absolute";
popuptsp.style.right = "0px";
popuptsp.style.borderTopLeftRadius = "15px";

//log in
let logintsp = document.createElement("div");
logintsp.className = "login";
popuptsp.appendChild(logintsp);
logintsp.style.textAlign = "center";

let txttsp = document.createElement("h2");
txttsp.textContent = "Δεν έχετε συνδεθεί";
logintsp.appendChild(txttsp);

txttsp.style.textAlign = "center";
txttsp.style.fontWeight = "500";
txttsp.style.fontSize = "1.2em"

let loginButtontsp = document.createElement("button");
loginButtontsp.textContent = "Σύνδεση";
loginButtontsp.setAttribute("onclick", "location.href='/login'");
logintsp.appendChild(loginButtontsp);

//register
let registertsp = document.createElement("div");
registertsp.className = "register";
registertsp.style.textAlign = "center";
popuptsp.appendChild(registertsp);

let txt2tsp = document.createElement("h2");
txt2tsp.textContent = "Δεν έχετε λογαριασμό;";
registertsp.appendChild(txt2tsp);

txt2tsp.style.textAlign = "center";
txt2tsp.style.fontWeight = "500";
txt2tsp.style.fontSize = "1.2em"

let registerButtontsp = document.createElement("button");
registerButtontsp.textContent = "Δημιουργία λογαριασμού";
registerButtontsp.setAttribute("onclick", "location.href='/register'");
registertsp.appendChild(registerButtontsp);

//profile button
let profileButtontsp = document.querySelector('.sign-in');

profileButtontsp.addEventListener('click', function () {
    if (profileButtontsp.id == "0") {
        document.querySelector(".content").appendChild(popuptsp);
        profileButtontsp.id = "1"
    }
    else if (profileButtontsp.id == "1") {
        document.querySelector(".content").removeChild(popuptsp);
        profileButtontsp.id = "0"
    }
});
let ntsp = document.querySelectorAll(".sign-in")[0].parentElement;
if (ntsp.id) {
    while (popuptsp.childNodes[0]) {
        popuptsp.removeChild(popuptsp.childNodes[0]);
    }
    let ustsp = document.createElement("h2");
    ustsp.textContent = "welcome username"
    popuptsp.appendChild(ustsp);
}

let placesTable = document.querySelectorAll(".places .r td p");
for (let i of placesTable) {
    i.addEventListener('click', () => {
        let p = i.parentNode;
        p.removeChild(i);
        let j = document.createElement("input");
        j.setAttribute("type", "input");
        j.setAttribute("size", "40");
        j.setAttribute("id", p.parentNode.parentNode.parentNode.parentNode.id);
        p.appendChild(j);
    })
}

let change = document.createElement("button");
change.style.padding = "15px 32px"
change.textContent = "Υποβολή Αλλαγών"
change.style.cursor = "pointer"

change.addEventListener('click', () => {
    let places = document.querySelectorAll(".places .r");
    let tab = document.querySelectorAll(".places .r td");
    let newPlaces = new Array();
    for (let i of places) {
        let ar = new Array();
        for(let j of tab){
            if(j.parentNode.parentNode.parentNode.parentNode == i){
                
                if(j.className == "address"){
                    if(j.children[0].className == "update"){
                        ar.push(j.children[0].textContent);
                    }
                    else{
                        ar.push(j.children[0].value);
                    }
                }
                else{
                    if(j.children[0].className == "update"){
                        ar.push(j.children[0].textContent);
                    }
                    else{
                        ar.push(j.children[0].value);
                    }
                }
                ar.push(Array.from(places).indexOf(i));
            }
        }
        newPlaces.push(ar);
    }
    for (let i of newPlaces) {
        let x = i[0];
        let y = i[2].toString() + ',' + i[4].toString();
        let z = i[1];
        console.log(i);
        fetch('/update-ticket-selling-points-submit/' + x + '/' + y + '/' + z).then((response) => { response.json().then(result => console.log(result)) })
    }
})
document.querySelector(".content ").appendChild(change);