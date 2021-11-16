'use strict'

function myFunction() {
    var x = document.getElementById("pages");
    var y = document.getElementById("socialmedia");
    var n = document.getElementsByTagName("nav")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if (y.style.display === "inline") {
        y.style.display = "none";
      } else {
        y.style.display = "inline";
    }
    if (n.style.height === "100vh") {
      n.style.height = "auto";
    } else {
      n.style.display = "100vh";
  }
  } 