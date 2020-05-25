let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobile = document.querySelector('.mobile-nav')
hamberger.addEventListener('click',function(){
    mobile.classList.add('open');

});
times.addEventListener('click',function(){
    mobile.classList.remove('open');
});
function submission(){
    alert("Your request is under process");
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("go");
var btn1 = document.getElementById("gos");
var span = document.getElementsByClassName("close")[0];
window.onload = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
btn.onclick = function() {
    alert("You will receive a mail soon");
    modal.remove();
  };
btn1.onclick = function() {
    modal.remove();
  };
