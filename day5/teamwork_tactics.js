/** In a board game, a piece may advance 1-6 tiles forward 
 * depending on the number rolled on a six-sided dice. 
 * If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 * Given you and your friend's tile number, create a function 
 * that returns if it's possible to earn a bonus when you roll the dice. */


 const possibleBonus = (playerTile, secondPlayerTile) => {
     if(playerTile >= secondPlayerTile || playerTile + 6 <= secondPlayerTile) {
     return false;
     }
    return true;
 }

 console.log(possibleBonus(3,7))  //true
 console.log(possibleBonus(1,8))  //false
 console.log(possibleBonus(5,3))  //false
 
 const addNumberToNumber = (x) => {
    return function(y) {
        return x + y
    }
}
const myFunction = addNumberToNumber(3);
console.log(myFunction(3))
console.log(addNumberToNumber(3)(5))