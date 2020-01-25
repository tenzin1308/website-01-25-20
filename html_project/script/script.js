
var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function welcome() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let pass = document.getElementById("pass").value;
  alert("Hello " + fname + " Welcome!!!");
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("pass").value = "";
}



function addElement() {
  var x = Math.round(Math.random() * 13) + 1;

  var nameVal = document.getElementById("name").value;
  var fieldVal = document.getElementById("txtVal").value;
  var liNode = document.createElement("LI");
  var para = document.createElement("p");
  var strongEle = document.createElement("strong");
  var newImg = document.createElement("img");
  var breakLine = document.createElement("br");
  var source = "image/icon/icon" + x + ".png";
  newImg.src = source;

  var nameNode = document.createTextNode(nameVal);
  strongEle.appendChild(nameNode);
  var colon = document.createTextNode(' : "');
  var fieldNode = document.createTextNode(fieldVal);
  var endColon = document.createTextNode('"');

  para.appendChild(newImg);

  para.appendChild(nameNode);
  para.appendChild(colon);
  para.appendChild(fieldNode);
  para.appendChild(endColon);
  liNode.appendChild(para);
  liNode.appendChild(breakLine);
  document.getElementById("ask-list").appendChild(liNode);


  /*reset the value*/

  document.getElementById("name").value = "";
  document.getElementById("txtVal").value = "";

}