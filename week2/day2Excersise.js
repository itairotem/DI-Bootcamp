let sentence= " this activity was bad to not it didnt take me a long time "

wordNot= sentence.indexOf("not")
wordBad=sentence.indexOf("bad")

if (wordNot>wordBad) {
    alert(sentence)
}
else {
    startString= sentence.substring(0,wordNot)
    endString=sentence.substring((wordBad+3), )
    alert(startString+ 'Good'+ endString)
}
