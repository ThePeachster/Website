'use strict'

function openmodal() {
  document.getElementById('myModal').style.display = "inline-block";
  document.getElementById('close').style.display = "inline";
  document.getElementById('content').style.display = "block";
}

function closemodal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('close').style.display = "none";
    document.getElementById('content').style.display = "none";
  }

function openphoto(n) {
    var image = document.getElementById(n).src;
    document.getElementById("image").src = image;
}