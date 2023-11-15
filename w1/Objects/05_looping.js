//How can we iterate(or loop) through objects?
// for loop -> c style
// for..of -> Only for arrays
// while
// for..in -> Objects? Arrays?
// .forEach

const arrayOfNumbers = [1,2,3,4,5]
arrayOfNumbers[0]
// bryansCarObject["wheels"]
// for(const element in arrayOfNumbers){
//   console.log(element)
// }


const bryansCarObject = {
  //key: Value
  windows: 4,
  doors: 4,
  wheels: 4,
  color: "Yellow and Blue",
}
// for(const key in bryansCarObject){
//   // console.log("The key is: " + key + " , which has a value of: " + bryansCarObject[key])
//   // Can we manipulate an object in a for in loop?
//   // Rule of thumb, if you can retrieve the key value, you can also reassign said key value
//   bryansCarObject[key] // retrieving 
//   bryansCarObject[key] = "coffee" //reassigning
// }
// console.log(bryansCarObject)

// Objects do not have indexes, only arrays

const jansCarObject = {
  //key: Value
  doors: 4,
  wheels: 4,
  color: "White",
  windows: 4,
}
// When should we use arrays?
// Whenever we dont need organized data
// Unorganized list
// Numbers


// What if we wanted to grab the color of each car Object?
const listOfCarObjects = [bryansCarObject, jansCarObject]

// for(const object of listOfCarObjects){
//   if(object.color){
//     console.log(object.color)
//   }
// }

// We can create an array of the keys of an object
const arrayOfKeys = Object.keys(bryansCarObject)
// We can create an array of the values of an object
const arrayOfValues = Object.values(bryansCarObject)
// We can create an array of the key value pairs (key: value) of an object
const arrayOfKeyValuePairs = Object.entries(bryansCarObject)
console.log(arrayOfKeyValuePairs)