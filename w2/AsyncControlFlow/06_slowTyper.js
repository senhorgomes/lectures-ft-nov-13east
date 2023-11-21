//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
// Loop through the string?
// Each letter needs to have their own delay
// H - 500
// e - 1000
// l - 1500
let delay = 500;
for(const letter of stringExample){
    setInterval(()=> {
        // Something is going to repeat every 500ms
        // Every 500ms a BRAND NEW setInterval with a delay of 500ms is being called
        // setInterval counter = 4
        // 500ms -> new setInterval will be created for 500ms and H will be printed out
        // 500ms -> new setInterval will be created for 500ms and H will be printed out
        setInterval(()=> {
            process.stdout.write(letter)
        }, delay)
    // setTimeout(()=> {
        // console.log(letter)
    }, delay)
    delay += 500
}