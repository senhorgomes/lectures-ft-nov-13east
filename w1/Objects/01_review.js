//Primitive Data Types?
// String = ""
// Boolean = false
// Number/integer = 0
// Undefined = Falsey
// Null = Falsey
// NaN = Falsey


// Data structures

// Array = []
// Object = {}

// Objects and Arrays are always truthy

// Float/BigInt
// Symbol

// Check if these are accurate

const valueToCheck = [1,2,3];


function checkIfTrue(dataType){
    if(dataType){
        console.log("This is truthy!")
    } else {
        console.log("This is falsey!")
    }
}

checkIfTrue(valueToCheck)