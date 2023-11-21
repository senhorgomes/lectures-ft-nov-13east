// function A
// function B
// function C

// A() -> 5 seconds
// B() -> 10 minutes
// C() -> 1 minute
//Asynchronous?
// Fast food
// A()
// B()
// C() 
//Synchronous
// Sit down restaurant
// A() -> B() -> C()
// fetch information from a website -> vary in size
// reading a file with fs.readFile -> 
// setTimeout/setInterval

console.log("FIRST")
setTimeout(()=>{
    console.log("SECOND")
}, 2000) 
for(let i = 0; i < 5; i++){
    console.log("Number", i)
}
setTimeout(()=>{
    console.log("THIRD")
}, 2000) 
//MS 2000 = 2 seconds


// console.log("THIRD")

// setTimeout(()=>{
//     console.log("FOURTH")
// }, 1000)

// console.log("FIFTH")
