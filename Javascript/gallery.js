'use strict'

function myFunction() {
    var x = document.getElementById("pages");
    var y = document.getElementById("socialmedia")
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
  } 