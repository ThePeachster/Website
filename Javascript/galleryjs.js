'use strict'

function openmodal() {
  document.getElementById('myModal').style.display = "block";
}

function closemodal() {
    document.getElementById('myModal').style.display = "none";
  }

function openphoto(n) {
    var image = document.getElementById(n).src;
    document.getElementById("image").src = image;
}