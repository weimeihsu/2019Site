// Get the modal
var modal = document.getElementsByClassName('popup-bg');

// Get the button that opens the modal
var btn = document.getElementsByClassName('popup-open');

var closebtn = document.getElementsByClassName('popup-close');

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}

btn[2].onclick = function() {
    modal[2].style.display = "block";

}
btn[3].onclick = function() {
    modal[3].style.display = "block";
}

btn[4].onclick = function() {
    modal[4].style.display = "block";
}

// When the user clicks on <closebtn> (x), close the modal
closebtn[0].onclick = function() {
    modal[0].style.display = "none";
}

closebtn[1].onclick = function() {
    modal[1].style.display = "none";
}

closebtn[2].onclick = function() {
    modal[2].style.display = "none";
}

closebtn[3].onclick = function() {
    modal[3].style.display = "none";
}

closebtn[4].onclick = function() {
    modal[4].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}