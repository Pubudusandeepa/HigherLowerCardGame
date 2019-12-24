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
   let win = false;
   if(temp=="Start"){
       message.innerHTML ="Higher or Lower";
       gameplay.innerHTML =myCard.ranks+ myCard.suits;
       makeCard(myCard);
       toggleButtons();
       return;
   }
   if(myCard.value == curCardValue){
       win = "draw";
       message.innerHTML = "Draw"; 
   }else{
       if((temp == "Higher" && (myCard.value > curCardValue)) || (temp=="Lower" && (myCard.value < curCardValue))){
           win =true;
           scoreValue++;
           score.innerHTML = scoreValue;
           message.innerHTML = "Correct,Next?";
       }
       else{
           message.innerHTML ="Wrong Game Over";
           toggleButtons();
       }
   }
   makeCard(myCard);
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
  
}


function makeCard(card){
    console.log(card);
    let html1 = card.ranks + "<br>&" + card.suits + ";";
    let html2 = card.ranks +"&"+card.suits + ";";
    let curCards = document.querySelectorAll(".card");
     

    let div = document.createElement("div");
    div.setAttribute("class","card");
    div.style.left = (curCards.length*25) + "px";
    curCardValue = card.value;
    
    if(card.suits === "hearts" || card.suits === "diams"){
        div.classList.add("red");
    }
    
    let span1 = document.createElement("span");
    span1.setAttribute("class","tiny");
    span1.innerHTML = html2;
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.setAttribute("class","big");
    span2.innerHTML = html1;
    div.appendChild(span2);

    // div.innerHTML = html1;
  
    gameplay.appendChild(div);
}
