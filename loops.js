var testArray = []

function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    if (i === 1) {
    array.push("I am " + i + " strange loop")
    }
    else {
      array.push('I am ${i} strange loops.')
    }
  }
}

function whileLoop() {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
} 
  
function doWhileLoop(array) {
  do {
    array.length > 0 && maybeTrue()
  }
  while (maybeTrue()) {
    array.pop(array)
  } 
return array
}