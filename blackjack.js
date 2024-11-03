let holders = []
let cardDisp = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5")
]

let cards = []
let sum 
let hasBlackJack 
let isAlive = false
let message = ""
var count 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("card-el")
let pay = document.getElementById("pay")


let images = [
    "Images/2_of_clubs.png",//0
    "Images/3_of_clubs.png",//1
    "Images/4_of_clubs.png",//2
    "Images/5_of_clubs.png",//3
    "Images/6_of_clubs.png",//4
    "Images/7_of_clubs.png",//5
    "Images/8_of_clubs.png",//6
    "Images/9_of_clubs.png",//7
    "Images/10_of_clubs.png",//8
    "Images/jack_of_clubs.png",//9
    "Images/queen_of_clubs2.png",//10
    "Images/king_of_clubs2.png",//11
    "Images/ace_of_clubs.png",//12
    "Images/2_of_diamonds.png",//13
    "Images/3_of_diamonds.png",//14
    "Images/4_of_diamonds.png",//15
    "Images/5_of_diamonds.png",//16
    "Images/6_of_diamonds.png",//17
    "Images/7_of_diamonds.png",//18
    "Images/8_of_diamonds.png",//19
    "Images/9_of_diamonds.png",//20
    "Images/10_of_diamonds.png",//21
    "Images/jack_of_diamonds2.png",//22
    "Images/queen_of_diamonds2.png",//23
    "Images/king_of_diamonds2.png",//24
    "Images/ace_of_diamonds.png",//25
    "Images/2_of_hearts.png",//26
    "Images/3_of_hearts.png",//27
    "Images/4_of_hearts.png",//28
    "Images/5_of_hearts.png",//29
    "Images/6_of_hearts.png",//30
    "Images/7_of_hearts.png",//31
    "Images/8_of_hearts.png",//32
    "Images/9_of_hearts.png",//33
    "Images/10_of_hearts.png",//34
    "Images/jack_of_hearts2.png",//35
    "Images/queen_of_hearts2.png",//36
    "Images/king_of_hearts2.png",//37
    "Images/ace_of_hearts.png",//38
    "Images/2_of_spades.png",//39
    "Images/3_of_spades.png",//40
    "Images/4_of_spades.png",//41
    "Images/5_of_spades.png",//42
    "Images/6_of_spades.png",//43
    "Images/7_of_spades.png",//44
    "Images/8_of_spades.png",//45
    "Images/9_of_spades.png",//46
    "Images/10_of_spades.png",//47
    "Images/jack_of_spades2.png",//48
    "Images/queen_of_spades2.png",//49
    "Images/king_of_spades2.png",//50
    "Images/ace_of_spades2.png",//51
]

let values = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
]


function startGame(){
    isAlive = true
    hasBlackJack = false
    count = 2
    holders[0] = randomCard()
    holders[1] = randomCard()
    sum = values[holders[0] % 13] + values[holders[1] % 13]
    cards = [values[holders[0] % 13], values[holders[1] % 13]]
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "Cards: "
    displaycard()
    for (let i = 0; i < cards.length; i++){
        cardsEL.textContent += " " + cards[i] 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }

    else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }

    else {
        message = "You are out of the game!"
        isAlive = false   
    }
    messageEl.textContent = message
}

//////
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        count++
        holders[count] = randomCard()
        sum += values[holders[count] % 13]
        cards.push(values[holders[count] % 13])
        renderGame()
    }
}

function randomCard(){
    let random = Math.floor(Math.random()*52)
    return random
}

// function displaycard(){
    // dispcard1.src = images[holders[0]]
    // dispcard2.src = images[holders[1]]
    // dispcard1.classList.toggle("active")
    // dispcard2.classList.toggle("active")
// }

function displaycard(){
    for (let i = 0; i < count; i++){
        cardDisp[i].src = images[holders[i]]
        cardDisp[i].classList.add("active")
    }
}

// stuff to do:
// add new card function, Fix the classlist toggle, add more card holders