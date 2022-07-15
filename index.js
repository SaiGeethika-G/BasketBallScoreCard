let score1=document.querySelector(".homePt");
let score2=document.querySelector(".guestPt");
function addOneHome(){
    score1.innerHTML=parseInt(score1.innerHTML)+1;
}
function addTwoHome(){
    score1.innerHTML=parseInt(score1.innerHTML)+2;
}
function addThreeHome(){
    score1.innerHTML=parseInt(score1.innerHTML)+3;
}
function addOneGuest(){
    score2.innerHTML=parseInt(score2.innerHTML)+1;
}
function addTwoGuest(){
    score2.innerHTML=parseInt(score2.innerHTML)+2;
}
function addThreeGuest(){
    score2.innerHTML=parseInt(score2.innerHTML)+3;
}
