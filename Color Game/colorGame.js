const generateRandomColors = function (number){

  var arr = [];
  
  for (count = 0; count < number; count++){
    arr.push(randomColors());
  }
  
  return arr;
}

var randomColors = function(){

  var r = Math.floor( Math.random() * 256)
  var g = Math.floor( Math.random() * 256)
  var b = Math.floor( Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`;
  
}


var colors = generateRandomColors(numbSquares);
var reset = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numbSquares = 6;
var setDifficulty = function (number){
  colors = generateRandomColors(number);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (count = 0; count < squares.length; count++){
    if (colors[count]) {
        squares[count].style.backgroundColor = colors[count];
        squares[count].style.display = "block";
        } else {
          squares[count].style.display = "none";
        }
  }
  
}
easyBtn.addEventListener("click", function (){
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
//   colors = generateRandomColors(3);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (count = 0; count < squares.length; count++){
//     if (colors[count]) {
//         squares[count].style.backgroundColor = colors[count];
//         } else {
//           squares[count].style.display = "none";
//         }
//   }
  setDifficulty(3);
  setSquares();
});

hardBtn.addEventListener("click", function(){
  this.classList.add("selected");
  numbSquares = 6;
  easyBtn.classList.remove("selected");
  setDifficulty(6);
  setSquares();
});

reset.addEventListener("click", function(){
  colors = generateRandomColors(numbSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  setSquares();
  h1.style.backgroundColor = "steelblue";
});
var squares = document.querySelectorAll(".square");


var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

const pickColor = function(){
  var random = Math.floor(  Math.random() * colors.length );
  return colors[random];
}

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

const changeColors = function(color) {
  for (count = 0; count < squares.length; count++) {
    squares[count].style.backgroundColor = color;
  }
};


var setSquares = function (){
  for (let count = 0; count < squares.length; count++) {
  //initial colors
  squares[count].style.backgroundColor = colors[count];
  //click listeners.
  squares[count].addEventListener("click", function() {

    //grab color of picked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}
  
};

setSquares();
