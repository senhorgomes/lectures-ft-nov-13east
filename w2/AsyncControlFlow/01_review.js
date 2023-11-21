//Functions
function anonymousFunction(){

}
// Function Declaration
const functionExpression = function() {
    
}
const arrowExpression = () => {

}

const aRandomFunction = () => {
    console.log("A Random Message!")
}

// Call or Invoke this function
aRandomFunction()
// Reference
const variable = aRandomFunction
variable()

// Higher Order Function -> A higher order function, takes in another function as a parameter

const higherOrderFunction = (callback) => {
    callback()
}

higherOrderFunction(aRandomFunction);
