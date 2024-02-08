// excerises 1

// function infoAboutMe () {

//     console.log( "Im Itai and I like to play basketball")
// }
// infoAboutMe()




// function infoaboutperson(personName, personAge, personFavoriteColor)
// {
//     console.log ("Your name is "+ personName + ", you are " + personAge +" years old. Your eye color is "+ personFavoriteColor)
// }

//excersies 2


function calculateTip() {
    var amount= prompt("What is the bill:")

    if (amount<50) {
        let tip=0.2 * amount
        amount+= tip
        console.log( "Tip:" +tip + "finalbill:" +amount)
    }
    else if (200>amount>50) {
        let tip=0.15 * amount
        amount+= tip
        console.log( "Tip:" +tip + "finalbill:" +amount)

    }
    else {
        let tip=0.1 * amount
        amount+= tip
        console.log( "Tip:" +tip + "finalbill:" +amount)
    }
    calculateTip()
}
