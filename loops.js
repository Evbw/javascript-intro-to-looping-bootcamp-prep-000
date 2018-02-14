var testArray = []

function forLoop(array) {
  for (let i = 1; i < 27; i++) {
    if (i<2) {
    console.log ("I am " + i + " strange loop")
    }
    else {
      console.log ("I am ${i} strange loops.")
    }
  }
}

function whileLoop() {
  while (countdown > 0) {
    console.log(--countdown)
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
    maybeTrue
  } 
return array
}