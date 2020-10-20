var slideeIndex = 1;
showwDivs(slideeIndex);

function plussDivs(n) {
  showwDivs(slideeIndex += n);
}

function currenttDiv(n) {
  showwDivs(slideeIndex = n);
}
function checked(n){
  console.log(n);
  var p = document.getElementsByClassName("container");
  p[n].style.color = "yellow";
}

function showwDivs(n) {
  var i;
  var x = document.getElementsByClassName("myS");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideeIndex = 1}
  if (n < 1) {slideeIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideeIndex-1].style.display = "block";  
  dots[slideeIndex-1].className += " w3-white";
}
