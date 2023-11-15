const eqArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
}
const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };
const eqObjects = function(object1, object2) {
    
 if (Object.keys(object1).length !== Object.keys(object2).length) {
   return false;
 }
 for (let keyObj1 in object1) {
   for (let keyObj2 in object2) {
    //Key names are the same
     if (keyObj1 === keyObj2) {
       if (Array.isArray(object1[keyObj1])) {
         if (Array.isArray(object2[keyObj2])) {

        //    if (!eqArrays(object1[keyObj1], object2[keyObj2])) {

           if (!eqArrays(dogObj[arrays], dogObj2[arrays])) {
             return false;
           }
         }
       } else {
        //Key values are the same as well
         if (object1[keyObj1] !== object2[keyObj2]) {
           return false;
         }
       }
     }
   }
 }
 return true;
};


assertEqual(eqObjects(obj1, obj2), false)
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect; // <= add this line
    if (actual !== expected) {
      console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    } else if (Object.keys(actual).length !== Object.keys(expected).length){
        console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    } else {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} == ${inspect(expected)}`);
    }
  };
  module.exports = assertObjectsEqual;
  //Sample Tests
  //const ab = { a: "1", b: "2" };
  //const ba = { b: "2", a: "1" };
  //assertObjectsEqual((ab, ba), (ab, ba)); // => true
  //
  //const abc = { a: "1", b: "2", c: "3" };
  //assertObjectsEqual((ab, abc), (ab, ab)); // => false