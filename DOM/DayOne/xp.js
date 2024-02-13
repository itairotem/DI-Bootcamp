//excersie 1
// let blue= document.body.children[0]
// blue.style.backgroundColor='blue'
// blue.style.padding= "50px 10px"

// listOne=document.body.children[1]
// cat=listOne.children[0]
// cat.innerHTML='Richard'



// listTwo=document.body.children[2]
// John=listTwo.children[1]
// listTwo.removeChild(John);

// let lists= document.querySelectorAll('ul')
// for (let list of lists)[
//     list.firstElementChild.textContent='itai'
// ]

// navbar=document.body.children[0]
// navbar.setAttribute("id", 'socialNetworkNavigation' )

// const newlist=document.createElement('li')
// let textnode=document.createTextNode('logout')
// newlist.appendChild(textnode)
// navbar.appendChild(newlist)

// let first=navbar.firstElementChild
// first.textContent


const allBooks= [
    {
title: "Night",
author: "Ellie Weisel",
alreadyRead: true
} ,
{
    title: "Tale of Two Cities",
    author: "Charles Dickens",
    alreadyRead:false
}

]
const divBooks = document.body.children[0]
for (let object of allBooks) {
   let title=object['title']
let author=object['author']


//2nd: create the element
let newP = document.createElement('p')
//3rd: create content
const content = document.createTextNode(title+ ' '+ author)
//4th add the content in the element(<p>content</p>)
newP.appendChild(content)
//5th add element to the section
divBooks.appendChild(newP)
}




