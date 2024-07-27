var randomNumber1=Math.floor(Math.random()*6)+1;
var randiceimg="dice"+randomNumber1+".png";
var rimgsrc="images/"+randiceimg;
document.querySelectorAll("img")[0].setAttribute("src",rimgsrc);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randiceimg2="dice"+randomNumber2+".png";
var rimgsrc2="images/"+randiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",rimgsrc2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}