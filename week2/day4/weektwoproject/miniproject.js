function playTheGame() {
    let answer = confirm ("want to play the game?")
    if (answer == true) {
        let userNumber = parseFloat(prompt ("enter a number 1-10"))

        if (isNaN (userNumber)) {
            alert ('Sorry this is not a number, Goodbye') 
        } else (userNumber>10 || userNumber<1){
        
        alert("Too Big")
        }
        else {
            let computerNumber = ((Math.floor(Math.random() * 10))+1)
            compareNumbers(userNumber, computerNumber)
        }
    } 
    else {
        alert ('No problem, Goodbye');

    }


}

function compareNumbers(userNumber, computerNumber) {
    count=1
    while (count<=4){

    if (userNumber== computerNumber){
        alert("WINNER")
        break;

    }
    else if (userNumber> computerNumber){
         userNumber= prompt(" Your number is larger than the computers, guess again")
        count+=1

    }
    
    else if (userNumber < computerNumber){

    
         userNumber= prompt(" Your number is smaller than the computers, guess again")
         count+=1

    }

    alert("Loser")
}
    
  

}
