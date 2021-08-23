console.log("page loaded...");
function playvideo(vid) {
    vid.play();
}

function pausevideo(vid) {
    vid.pause();
   
}
function subscribe(element){
    element.innerText="Unsubscribe";
}
function login(element){
    element.innerText="Logout";
}