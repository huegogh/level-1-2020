const buttons = document.getElementsByClassName("btn");
const changeMe = document.getElementById("changeMe");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e){
        changeMe.innerHTML = e.target.innerHTML;
        changeMe.className = this.className;
    });
}// end of loop