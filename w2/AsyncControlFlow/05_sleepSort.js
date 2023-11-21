const numbers = [1, 900, -500, 52, 603, 59, 81, -50];
// Loop through all the number
// Maybe reorganize them into another array
// Then console.log those numbers

// for(const number of numbers){
//     setTimeout(()=> {
//         console.log(number)
//     }, number);
// }


//Web API
// setTimeout(()=> {
    
// }, 1);
// setTimeout(()=> {
//     console.log(-50)
// }, 0);

const sayHello = setInterval(()=> {
    console.log("Hello!")
}, 1000)


setTimeout(()=> {
    clearInterval(sayHello)
}, 4000)