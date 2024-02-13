words= 'Hello, World, In, Frame'
const wordsArray= words.split(',').map(word=> word.trim());

function rectangle(words) {
    let maxLength=0 
    for (let word of words) {
        if (word.length> maxLength)
        maxLength=word.length
    }

    console.log( "*".repeat(maxLength+4))

    for (let word in words){
        console.log("* "+ word + ' '.repeat(maxLength-word.length) + "*")
    }

    console.log( "*".repeat(maxLength+4))
}
rectangle(words)