//To view navbar dynamically when screen-size goes small
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobile = document.querySelector('.mobile-nav')
hamberger.addEventListener('click',function(){
    mobile.classList.add('open');

});
times.addEventListener('click',function(){
    mobile.classList.remove('open');
});

//for send message button in contact form
function submission(){
    alert("Your request is under process");
}

//for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("go");
var btn1 = document.getElementById("gos");
var span = document.getElementsByClassName("close")[0];
function modal1(){
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

//for loader  
var $j = jQuery.noConflict();
$j(window).on('load', function () {
  $j("#preloader").delay(4000).fadeOut('slow');
  modal1();
});
setTimeout(function () {
  document.getElementById("navbar").style.display = "block";
}, 4200);

//for download cv button
function cv(){
  alert("You will get it soon.")
}