ludogame=()=>{
const player1=Math.floor(Math.random()*6)+1;
const player1dice=`Dice Images/dice${player1}.png`;
document.getElementById('check1').setAttribute('src',player1dice);

const player2=Math.floor(Math.random()*6)+1;
const player2dice=`Dice Images/dice${player2}.png`;
document.getElementById('check2').setAttribute('src',player2dice);

if(player1>player2){
    document.querySelector('h1').innerHTML="Player 1 WON 😃";
}
else if(player2>player1){
    document.querySelector('h1').innerHTML="Player 2 WON 😃";
}
else{
    document.querySelector('h1').innerHTML="Match DRAW 😲";
}

}