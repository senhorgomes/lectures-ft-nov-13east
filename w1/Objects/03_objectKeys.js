//Two ways to look up values in objects
//dot notation - object.key
//bracket or square bracket notation - object["key"]

const bryansCarObject = {
  //key: Value
  windows: 4,
  doors: 4,
  wheels: 4,
  color: "Yellow and Blue",
  1999: "Prince"
  // If our key value is a number, we can use the actual number or a string of it to retrieve the key value
}

// dot notation -> the key themselves

// console.log(bryansCarObject.color)
// square bracket notation -> We can use variables and strings

const keyValue = "color"

// console.log(bryansCarObject[keyValue])
// console.log(bryansCarObject["color"]["key"]["key"]["key"])
// console.log(bryansCarObject.color.key.key.key)
// We are fetching for a key called keyValue
// console.log(bryansCarObject.keyValue)
// console.log(bryansCarObject["keyValue"])
// In the event that we want to add key value pairs to our object, we can assign them
bryansCarObject.model = "Porsche"

// const emptyObject ={}

// emptyObject["0"] = "zero"
// emptyObject["1"] = "one"


// console.log(emptyObject)

const jansCarObject = {
  //key: Value
  doors: 4,
  wheels: 4,
  color: "White",
  windows: 4,
}


function repaintCarObjects(car, newColor){
  car.color = newColor
  return car = {}
}
// Change what the variable name jansCarObject is reffering to
// jansCarObject = {}
// repaintCarObjects(jansCarObject, "Silver")


// console.log(jansCarObject)

// console.log(jansCarObject.windows, bryansCarObject.windows)
// When should we use arrays?
// Whenever we dont need organized data
// Unorganized list
// Numbers


// What if we wanted to grab the color of each car Object?
const listOfCarObjects = [bryansCarObject, jansCarObject]

// const anotherCarObject = jansCarObject;
// Use the spread operator to grab all the key and key values
const anotherCarObject = {...jansCarObject};

anotherCarObject.color = "Silver"

console.log(anotherCarObject)

console.log("Jan's car", jansCarObject)
