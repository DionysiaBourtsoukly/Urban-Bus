//sign-in - sign-up popup window
let popupt = document.createElement('div');
popupt.className = "accounts";

popupt.style.backgroundColor = "rgb(137, 82, 220)";
popupt.style.width = "20em";
popupt.style.height =  "100%";
popupt.style.listStyleType = "none";
popupt.style.position = "absolute";
popupt.style.right = "0px";
popupt.style.borderTopLeftRadius = "15px"; 

//log in
let logint = document.createElement("div");
logint.className = "login";
popupt.appendChild(logint);
logint.style.textAlign = "center";

let txtt = document.createElement("h2");
txtt.textContent = "Δεν έχετε συνδεθεί";
logint.appendChild(txtt);

txtt.style.textAlign = "center";
txtt.style.fontWeight = "500";
txtt.style.fontSize = "1.2em"

let loginButtont = document.createElement("button");
loginButtont.textContent="Σύνδεση";
loginButtont.setAttribute("onclick","location.href='/login'");
logint.appendChild(loginButtont);

//register
let registert = document.createElement("div");
registert.className = "register";
registert.style.textAlign = "center";
popupt.appendChild(registert);

let txt2t = document.createElement("h2");
txt2t.textContent = "Δεν έχετε λογαριασμό;";
registert.appendChild(txt2t);

txt2t.style.textAlign = "center";
txt2t.style.fontWeight = "500";
txt2t.style.fontSize = "1.2em"

let registerButtont = document.createElement("button");
registerButtont.textContent="Δημιουργία λογαριασμού";
registerButtont.setAttribute("onclick","location.href='/register'");
registert.appendChild(registerButtont);

//profile button
let profileButtont = document.querySelector('.sign-in');

profileButtont.addEventListener('click', function(){
    if(profileButtont.id == "0"){
        document.querySelector(".content").appendChild(popupt);
        profileButtont.id = "1"
    }
    else if(profileButtont.id == "1"){
        document.querySelector(".content").removeChild(popupt);
        profileButtont.id = "0"
    }
});
let nt = document.querySelectorAll(".sign-in")[0].parentElement;
if (nt.id){
    while(popupt.childNodes[0]){
        popupt.removeChild(popupt.childNodes[0]);
    }
    let ust = document.createElement("h2");
    ust.textContent="welcome username"
    popupt.appendChild(ust);
}

