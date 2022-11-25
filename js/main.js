// navbar
var list_small_navbar = document.getElementById("list-small-navbar");
var open_list_small_navbar = document.getElementById("open_list_small_navbar");

var animation_open = "animate__backInDown";
var animation_exit = "animate__fadeOutUp";

function open_small_navbar(){
    list_small_navbar.classList.remove("invisible");
    list_small_navbar.classList.add(animation_open);
}

function close_small_navbar(){
    list_small_navbar.classList.remove(animation_open);
    list_small_navbar.classList.add(animation_exit);
    setTimeout(function() {
        list_small_navbar.classList.add("invisible");
        list_small_navbar.classList.remove(animation_exit);
    }, 1000);
}

function on_off_small_navbar(){
    if(list_small_navbar.classList.contains("invisible")){
        open_small_navbar();
    }
    else{
        close_small_navbar();
    }
}

open_list_small_navbar.addEventListener("click", on_off_small_navbar);


// other
var alert_buy_elements = document.getElementsByClassName("alert_buy");
function alert_buy(){
    alert("Sorry, now this service is offline. Please wait.");
}

for(var element in alert_buy_elements){
    try{
        alert_buy_elements[element].addEventListener("click", alert_buy)
    }
    catch{}
}
