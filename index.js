// first dice
var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDicePic = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var picSource = "images/" + randomDicePic; // image/dice1.png - image/dice6.png

var image1 = document.querySelectorAll(".img")[0];

image1.setAttribute("src", picSource);


// second dice
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDicePic2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".img")[1].setAttribute("src", randomDicePic2);





var ansage = document.querySelector("h1"); // Who wins? - var


if (randomNumber1 > randomNumber2){
    ansage.innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    ansage.innerHTML = "Player 2 wins";
}
else{
    ansage.innerHTML = "It's a Draw";
}







//## Discarded ##


// var randomNumber2 = Math.floor(Math.random() * 6) +1;


 /*
if (randomNumber1 == 1){
    document.querySelector(".img1").setAttribute("src", "/images/dice1.png");
}
if (randomNumber1 == 2){
    document.querySelector(".img1").setAttribute("src", "/images/dice2.png");
}
if (randomNumber1 == 3){
    document.querySelector(".img1").setAttribute("src", "/images/dice3.png");
}
if (randomNumber1 == 4){
    document.querySelector(".img1").setAttribute("src", "/images/dice4.png");
}
if (randomNumber1 == 5){
    document.querySelector(".img1").setAttribute("src", "/images/dice5.png");
}
if (randomNumber1 == 6){
    document.querySelector(".img1").setAttribute("src", "/images/dice6.png");
}



if (randomNumber2 == 1){
    document.querySelector(".img2").setAttribute("src", "/images/dice1.png");
}
if (randomNumber2 == 2){
    document.querySelector(".img2").setAttribute("src", "/images/dice2.png");
}
if (randomNumber2 == 3){
    document.querySelector(".img2").setAttribute("src", "/images/dice3.png");
}
if (randomNumber2 == 4){
    document.querySelector(".img2").setAttribute("src", "/images/dice4.png");
}
if (randomNumber2 == 5){
    document.querySelector(".img2").setAttribute("src", "/images/dice5.png");
}
if (randomNumber2 == 6){
    document.querySelector(".img2").setAttribute("src", "/images/dice6.png");
}

*/
