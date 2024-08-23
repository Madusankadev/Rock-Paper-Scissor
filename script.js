
var userSelection;
var pcSelection;

var pcSeletImgUrl;
var userGameIconUrl;

var result = document.getElementById("result")

var userGameIcon = document.getElementById("userGameIcon")
var pcSeletImg = document.getElementById("gameIcon")


const cricleBox = document.getElementById("cricleBox")
const resultDiv = document.getElementById("resultDiv")

document.getElementById("rock").addEventListener('click', () => {
  userSelection = "ROCK"
  pcSeletImgUrl = getPcSeection()
  userGameIconUrl = "./rock.svg"

  showResult(pcSelection, userSelection)

})

document.getElementById("paper").addEventListener('click', () => {
  userSelection = "PAPER"
  pcSeletImgUrl = getPcSeection()
  userGameIconUrl = "./paper.svg"

  showResult(pcSelection, userSelection)

})

document.getElementById("scissors").addEventListener('click', () => {
  userSelection = "SCISSORS"
  pcSeletImgUrl = getPcSeection()
  userGameIconUrl = "./scissors.svg"

  showResult(pcSelection, userSelection)

})

function showResult(pSelection, uSelection) {
  clearInterval(timeCount)
  clearInterval(countdownAnimation)
  var res = getResult(uSelection, pSelection)
  console.log(res)

  cricleBox.classList.add("dNone")
  resultDiv.classList.remove("dNone")

  result.innerHTML = res

  pcSeletImg.src = pcSeletImgUrl
  userGameIcon.src = userGameIconUrl

  console.log(pcSeletImgUrl)


}

cricleBox.classList.remove("dNone")
resultDiv.classList.add("dNone")


//generate pc selection

function getPcSeection() {

  var num = Math.floor(Math.random() * 100)
  if (num <= 33) {
    pcSelection = "ROCK"
    return "./rock.svg"

  } else if (num <= 66) {
    pcSelection = "PAPER"
    return "./paper.svg"
  } else {
    pcSelection = "SCISSORS"
    return "./scissors.svg"

  }
  // return pcSelection

}


var getResult = (userSelection, pcSelection) => {
  if (userSelection == pcSelection) {
    return "DRAW"
  } else if ((userSelection === "ROCK" && pcSelection === "PAPER") || (userSelection === "PAPER" && pcSelection === "SCISSORS") || (userSelection === "SCISSORS" && pcSelection === "ROCK")) {
    return "PC WINS"
  } else {
    return "YOU WIN"
  }
}


// setInterval(() => {
//     if (userSelection != undefined) {
//         pcSelection = getPcSeection()

//         console.log(result())
//     }
// }, 1000)



// set countdown

const box = document.getElementById("box")
const time = document.getElementById("time")
var boxFill = 100
var timeTextValue = 5

//animation circle border
var countdownAnimation = setInterval(() => {
  boxFill -= 2
  box.style.backgroundImage = `conic-gradient(#02abc9 ${boxFill}% , #E0E0E0 0%)`;

  if (boxFill <= 0) {
    clearInterval(countdownAnimation)
  }

}, 100)


var timeCount = setInterval(() => {
  timeTextValue -= 1

  if (timeTextValue != -1) {
    time.innerHTML = timeTextValue
  }

  console.log(timeTextValue)

  if (timeTextValue < 0) {
    clearInterval(timeCount)

    if (userSelection === undefined) {
      userSelection = "ROCK"
      userGameIcon.src = "./rock.svg"
      alert('The system Automatically Selected ROCK as your Selection')
      console.log("The system Automatically Selected ROck as your Selection")

      pcSeletImgUrl = getPcSeection()
      userGameIconUrl = "./rock.svg"
      showResult(pcSelection, userSelection)
    }


  }

}, 1000)

console.log(`pc selected ${userSelection}`)

function gameRestart() {
  location.reload()
}