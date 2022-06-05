let popup = document.querySelectorAll(".accounts")[0];
let profileButton = document.querySelector('.sign-in');

profileButton.addEventListener('click', function(){
    if(profileButton.id == "0"){
        document.querySelector(".content").appendChild(popup);
        profileButton.id = "1"
    }
    else if(profileButton.id == "1"){
        document.querySelector(".content").removeChild(popup);
        profileButton.id = "0"
    }
});

let n = document.querySelectorAll(".sign-in")[0].parentElement;
if (n.id){
    while(popup.childNodes[0]){
        popup.removeChild(popup.childNodes[0]);
    }
    let us = document.createElement("h2");
    us.textContent="welcome username"
    popup.appendChild(us);
}