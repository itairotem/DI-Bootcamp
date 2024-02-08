// for (i=1; i<=7; i++)

// {
//     console.log('#'.repeat(i))
// }
// char=""
// for (row=0; row<=6; row++){


//     for(hashtag=0; hashtag<row; hashtag++)
// {
//     char+="* "
// }
// char+="\n"

// }
// console.log(char)


const numbers = [5,0,9,1,7,4,2,6,3,8];

for (i=0; i< numbers.length; i++)
    {
        for (j=0; j< (numbers.length- i - 1);j++)
            if (numbers[j]> numbers[j+1])
            {
                var temp=numbers[j]
                numbers[j]= numbers[j+1]
                numbers[j+1]=temp
            }
    }
console.log(numbers)