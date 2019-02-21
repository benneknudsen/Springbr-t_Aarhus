window.onscroll = function()
{
    var navn = document.getElementById("myVideo");
    var navn1 = document.getElementById("myVideo1");
    var navn2 = document.getElementById("myVideo2");
    var navn3 = document.getElementById("myVideo3");
    var navn4 = document.getElementById("myVideo4");
  
    
    
    if(navn.getBoundingClientRect().bottom < 380 || navn.getBoundingClientRect().top > 380)
       navn.pause();       
    else
       navn.play();
      
    if(navn1.getBoundingClientRect().bottom < 450 || navn1.getBoundingClientRect().top > 450)
     navn1.pause();   
    else
      navn1.play();
    
        if(navn2.getBoundingClientRect().bottom < 550 || navn2.getBoundingClientRect().top > 550)
     navn2.pause();   
    else
      navn2.play();
    
        if(navn3.getBoundingClientRect().bottom < 580 || navn3.getBoundingClientRect().top > 580)
       navn3.pause();       
    else
       navn3.play();
      
    if(navn4.getBoundingClientRect().bottom < 850 || navn4.getBoundingClientRect().top > 600)
     navn4.pause();   
    else
      navn4.play();
    
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
    
   
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


