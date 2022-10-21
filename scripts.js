/*Close menu*/
function toggleMenu() {
  var close = document.getElementById("clothMenu");
  if (close.style.display === "block") {
    close.style.display = "none";
  } else {
    close.style.display = "block";
  }
}
/*Collapsible menues*/
function collapseDameMand() {
  var coll = document.getElementsByClassName("cat-shop");
  var i;
  for (i = 0; i < coll.length; i++) {
    if (coll[i].style.display === "block") {
      coll[i].style.display = "none";
    } else {
      coll[i].style.display = "block";
    }
  }
}
function collapseDame() {
  var coll = document.getElementsByClassName("dame");
  var coll2 = document.getElementById("dame-tag");
  var i;
  for (i = 0; i < coll.length; i++) {
    if (coll[i].style.display === "block") {
      coll[i].style.display = "none";
      coll2.style.color = "var(--iconColor)";
      coll2.style.textDecoration = "none";
    } else {
      coll[i].style.display = "block";
      coll2.style.color = "black";
      coll2.style.textDecoration = "underline";
    }
  }
}
function collapseMand() {
  var coll = document.getElementsByClassName("mand");
  var coll2 = document.getElementById("herre-tag");
  var i;
  for (i = 0; i < coll.length; i++) {
    if (coll[i].style.display === "block") {
      coll[i].style.display = "none";
      coll2.style.color = "var(--iconColor)";
      coll2.style.textDecoration = "none";
    } else {
      coll[i].style.display = "block";
      coll2.style.color = "black";
      coll2.style.textDecoration = "underline";
    }
  }
}
/*Search menu*/
function toggleSearch() {
  var x = document.getElementById("searchMenu");
  var close = document.getElementById("clothMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
    close.style.display = "block";
  } else {
    x.style.display = "block";
    close.style.display = "none";
  }
}
/*Search function*/
function searchItem() {
  let input = document.getElementById('item-search-id').value
 input=input.toLowerCase();
 let x = document.getElementsByClassName('result-items');
 
 for (i = 0; i < x.length; i++) { 
     if (!x[i].innerHTML.toLowerCase().includes(input)) {
         x[i].style.display="none";
     }
     else {
         x[i].style.display="flex";                 
      }
  }
}

/*Change images*/
/*Change image guadua*/
var bigimg = document.getElementById('bigImg');
function changeSand() {document.getElementById("bigImg").src="../../images/produkter/guadua/sand-dress.png";}
function changeRose() {document.getElementById("bigImg").src="../../images/produkter/guadua/rose-dress.png";}
function changeWhite() {document.getElementById("bigImg").src="../../images/produkter/guadua/white-dress.png";}
function changeMint() {document.getElementById("bigImg").src="../../images/frontpage/cloth/Guadua.png";}
/*Add to number*/
function mValue() {
    var value = parseInt(document.getElementById('num-id').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('num-id').value = value;
}
function pValue() {
    var value = parseInt(document.getElementById('num-id').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('num-id').value = value;
}
/*Select size*/
function selectSize() {
  var size = document.getElementById('select-size');
  if (size.style.display === "block") {
    size.style.display = "none";
  } else {
    size.style.display = "block";
  }
}
function size34() {
  var sized = document.getElementById('selected-size');
  var size = document.getElementById('select-size');
  if (size.style.display === "block") {
    size.style.display = "none";
    sized.innerHTML = "34";
  } else {
    size.style.display = "block";
  }
}
function size36() {
  var sized = document.getElementById('selected-size');
  var size = document.getElementById('select-size');
  if (size.style.display === "block") {
    size.style.display = "none";
    sized.innerHTML = "36";
  } else {
    size.style.display = "block";
  }
}
function size38() {
  var sized = document.getElementById('selected-size');
  var size = document.getElementById('select-size');
  if (size.style.display === "block") {
    size.style.display = "none";
    sized.innerHTML = "38";
  } else {
    size.style.display = "block";
  }
}
function size40() {
  var sized = document.getElementById('selected-size');
  var size = document.getElementById('select-size');
  if (size.style.display === "block") {
    size.style.display = "none";
    sized.innerHTML = "40";
  } else {
    size.style.display = "block";
  }
}
/*Manual slider*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function resize() {
  var heights = window.innerHeight;
  document.getElementById("body-content").style.height = heights - "128px";
}
resize();
window.onresize = function() {
  resize();
};