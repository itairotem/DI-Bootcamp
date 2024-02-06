let x=5
lety=2
if (x>y) {
console.log("x is bigger")
}
else{
    console.log("y is bigger")
}


newDog="Chihuahua"
alert(newDog.length)
alert(newDog.upper)
console.log(toUpperCase(newDog))
console.log(toLowerCase(newDog))
if (newDog== "Chihuahua")
{
    alert("I love Chihuahuas, it\’s my favorite dog breed")
    console.log(‘I dont care, I prefer cats’)
}


let number= prompt("What number")

if (number%2 == 0) {
    alert("Even!")
}
else{
    alert("ODD!")
}




const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length==0)
    {
        console.log("no one is online")
    }
else if (users.length==1)
    {
        console.log( users[0]+ "Is online")
    }
else if (users.length==2)
    {
        console.log(users[0]+ "and"+ users[1]+ "are online")
    }
else if (users.length>2)
    {
        console.log(users[0]+","+users[1]+ "and" + (users.length-2)+ "more are online")
    }
