const message = document.querySelector(".message");
const score = document.querySelector(".score");
const button = document.querySelectorAll("button");
const gameplay = document.querySelector(".gameplay");

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suits = ["hearts","diams","clubs","spades"];

for(let i=0; i<button.length;i++){
    button[i].addEventListener("click",playGame);
}

function toggleButtons(){
   button[0].classList.toggle("hideButton");
   button[1].classList.toggle("hideButton");
   button[2].classList.toggle("hideButton");
}

function playGame(e){
   let temp = e.target.innerText;
   console.log(temp);
   let myCard = drawCard();
   if(temp=="Start"){
       message.innerHTML ="Higher or Lower";
       gameplay.innerHTML =myCard.ranks+ myCard.suits;
       makeCard();
       toggleButtons();
   }
}

function drawCard(){
 if(deck.length > 0){
     let randIndex = Math.floor(Math.random()*deck.length);
     let card = deck.splice(randIndex,1)[0];
     console.log(card);
     return card;
 }else{
     makeDeck();
     return drawCard();
 }
}

function makeDeck(){
    deck= [];
    for(let i =0;i<suits.length; i++){
        for(let j=0;j<ranks.length; j++){
            let card ={};
            card.suits = suits[i];
            card.ranks = ranks[j];
            card.value = (j+1);
            deck.push(card);
        }
    }
    console.log(deck);
}


function makeCard(){

}