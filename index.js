// set initial value set

let totalAttemts = 5;
let attems = 0;
let totalWins = 0;
let totallosts = 0;
// Finding all html elements
const cardBody = document.querySelector(".card-body")
const form = document.querySelector("form")
const gessingNumber = form.querySelector("#gessingNumber")
const check = form.querySelector("#check")
const resultText = cardBody.querySelector(".resultText")
const remainingAttems = cardBody.querySelector(".remainingAttems")
const lostWinMessage = document.createElement("p")


// styling 
resultText.style.backgroundColor = "#e74c3c"
resultText.style.fontSize = "10px"
resultText.style.color = "#1e272e"
lostWinMessage.style.color = "#808e9b"
lostWinMessage.style.marginTop = "1rem"
lostWinMessage.style.fontSize = "12px"

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    checkResult(gessingNumber.value);
    attems++;
    if(attems === 5){
        gessingNumber.disabled = true;
        check.disabled = true;
    }if(attems < 6){
        const guessNumber = Number(gessingNumber.value)
        checkResult(guessNumber)
        remainingAttems.innerHTML = `Remaining attems ${totalAttemts - attems}`
    }
    gessingNumber.value = ""
    
})

// check result 

const checkResult = (gessingNumber) => {
    const randomNumber = getRandomNumber(5)
    if(gessingNumber === randomNumber) {
        resultText.innerHTML = `you have won`
        totalWins++;
    }else{
        resultText.innerHTML = `you have lost . random number was : ${randomNumber}`
        totallosts++;
    }

    lostWinMessage.innerHTML = `Win = ${totalWins} and Losts = ${totallosts}`
    cardBody.appendChild(lostWinMessage)

}
// randomNumber genaret

const getRandomNumber = (limit) => {
    return  Math.floor( Math.random() * limit) + 1
}