const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
  const date = new Date()

  const seconds = date.getSeconds()
  const secondDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = "rotate(" + secondDegrees + "deg)"

  const minutes = date.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)"

  const hours = date.getHours()
  const hoursDegrees = (hours / 12) * 360 + 90
  hourHand.style.transform = "rotate(" + hoursDegrees + "deg)"
}

setInterval(setDate, 1000)
