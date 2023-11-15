//Why objects?
// Map each value to a name, key value pairs
// Store data
// Pass data

// Car -> has 4 doors, 4 wheels, yellow and blue, 4 windows, automatic, 4 wheel drive

const bryansCar = [4, 4, "Yellow and Blue", 4, "Automatic", "4 Wheel Drive"]
const jansCar = [4, 4, "White", 4, "Manual", "Rear Wheel Drive"]
const randomCar = [2, 4, "Manual", 4, "Blue", "4 Wheel Drive"]
// Create a single item

const bryansCarObject = {
  //key: Value
  windows: 4,
  doors: 4,
  wheels: 4,
  color: "Yellow and Blue",
}
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