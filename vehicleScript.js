var modal = document.getElementById('Modal1');

var img = document.getElementById('myimg');
var img1 = document.getElementById('myimg1');
var img2 = document.getElementById('myimg2');
var img3 = document.getElementById('myimg3');
var img4 = document.getElementById('myimg4');
var img5 = document.getElementById('myimg5');
var modalImg = document.getElementById("img1");

img.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

img1.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

img3.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

img4.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

img5.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal1.style.display = "none";
}
