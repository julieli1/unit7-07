// connects the button to the multiply function
document.getElementById('calculate').addEventListener('click', multiply)

// declare the variables and set everything to 0
let one = 0
let two = 0
let counter = 0
let answer = 0
let negative = false

function multiply () {
  one = document.getElementById('one').value
  two = document.getElementById('two').value
  one = parseInt(one)
  two = parseInt(two)
  answer = 0
  negative = false

  if (one < 0) {
    negative = !negative
    one = Math.abs(one)
  }
  if (two < 0) {
    negative = !negative
    two = Math.abs(two)
  }

  for (counter = 0; counter < one; counter++) {
    answer = answer + two
  }
  
  if (negative) {
    answer = 0 - answer
  }
  document.getElementById('answer').innerHTML = answer
}
