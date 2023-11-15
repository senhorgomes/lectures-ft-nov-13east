//this???

// A reference of an object

const dog1Object = {
  breed: "Labrador",
  furColor: "Grey",
  age: 2,
  happyBirthday: function() {
    // dog1Object.age += 1
    // this.age += 1
    console.log("Happy birthday! You are now " + this.age + " !")
  }
}

dog1Object.happyBirthday()
console.log(dog1Object)