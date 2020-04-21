
document.addEventListener('DOMContentLoaded', function(event) {

var rellax = new Rellax('.rellax');

new Glide('.glide').mount()
new Glide('.glide2').mount()
new Glide('.glide3').mount()

});


function rotateCards() {

}



var card1 = document.getElementById("card1");

var randomSpeed1 = Math.random() * 4;
var randomSpeed2 = Math.random() * 4;
var randomSpeed3 = Math.random() * 4;
var randomSpeed4 = Math.random() * 4;


let cardJson = [
  {
    "card_face" : ["ace.png", "two.png", "five.png", "seven.png"],
    "card_back" : "back.png"
  }
]

var face = cardJson['card_back'];
var back = cardJson['card_face'];
var cardPicker = Math.floor(Math.random() * 2);

function cardChooser() {
  var face = cardJson['card_back'];
  var back = cardJson['card_face'];
  var cardPicker = Math.floor(Math.random() * 2);

  if (cardPicker == 1) {
    console.log("face");
    return "face"
  }
  else if (cardPicker == 2) {
    console.log("back");
    return "back"
  }
}

cardChooser()

// let cardChooser = Math.floor(Math.random() * 4);


var cardDiv = document.getElementById("cardDeck");

let newCard = document.createElement("IMG");
newCard.classList.add("card1");
newCard.src = "back.png";
// cardDiv.appendChild(newCard);

// console.log(cardJson["card_back"])


// $(document).ready(function(){
//   $('.part1Carousel').slick({
//     setting-name: setting-value
//   });
// });

var videoBackground = document.getElementById("videoBackground");

let newVideo = document.createElement("VIDEO");
let newSource = document.createElement("SOURCE");
newSource.classList.add("video1");
newSource.src = "https://youtu.be/yUDc78znrLM";
newVideo.appendChild(newSource);
// videoBackground.appendChild(newVideo);



let buttonA = document.getElementById("buttonA");
let buttonB = document.getElementById("buttonB");

buttonA.addEventListener("click", uiFunctionA);
buttonB.addEventListener("click", uiFunctionB);

let buttonDivA = document.getElementById("buttonDivA");
let buttonDivB = document.getElementById("buttonDivB");

function uiFunctionA() {
  console.log("true");
  let newSynopsis = document.createElement("DIV");
  newSynopsis.classList.add("synopsisPart2");
  newSynopsis.innerText = "He dances around a lot, ultimately doing a major number with a deck of cards. He dances with the queen, making the king jealous. He comes after Mickey with swords, and Mickey defends himself with a sewing needle";

  newSynopsis.style.display = "flex";
  newSynopsis.style.textAlign = "center";
  newSynopsis.style.marginLeft = "10vw";
  newSynopsis.style.marginRight = "10vw";
  newSynopsis.style.fontSize = "2.5rem";
  newSynopsis.style.fontFamily = "\'Volkhov\', serif";
  newSynopsis.style.backgroundColor = "#e6e6cf";
  newSynopsis.style.padding = "10px";
  newSynopsis.style.marginTop = "20px";
  newSynopsis.style.marginBottom = "20px";

  buttonDivA.appendChild(newSynopsis);
}


function uiFunctionB() {
  console.log("true");
  let newSynopsis2 = document.createElement("DIV");
  newSynopsis2.classList.add("synopsisPart3");
  newSynopsis2.innerText = "Mickey gets the upper hand, and the king calls for reinforcements. Mickey finds himself chased by several decks, which throw their spots at him. He turns on a fan and blows them away, back through the mirror, where his alarm is ringing.";

  newSynopsis2.style.display = "flex";
  newSynopsis2.style.textAlign = "center";
  newSynopsis2.style.marginLeft = "10vw";
  newSynopsis2.style.marginRight = "10vw";
  newSynopsis2.style.fontSize = "2.5rem";
  newSynopsis2.style.fontFamily = "\'Volkhov\', serif";
  newSynopsis2.style.backgroundColor = "#e6e6cf";
  newSynopsis2.style.padding = "10px";
  newSynopsis2.style.marginTop = "20px";
  newSynopsis2.style.marginBottom = "20px";

  newSynopsis2.style.transition = "2s";

  buttonDivB.appendChild(newSynopsis2);
}


buttonDivA.style.fontFamily = "Roboto Condensed";
buttonDivA.style.marginBottom = "20px;"

buttonDivB.style.fontFamily = "Roboto Condensed";
buttonDivB.style.marginBottom = "20px;"




// spacer
