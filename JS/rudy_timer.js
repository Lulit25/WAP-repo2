timer = null;
function rudyTimer(){
     
    (function delayMsg2() {
        if (timer === null) {
        timer = setInterval(rudy, 1000);
        } 
        else {
        clearInterval(timer);
        timer = null;
    }
    })();

}
function rudy() { // called each time the timer goes
    document.getElementById("output").innerHTML += "Rudy!";
}