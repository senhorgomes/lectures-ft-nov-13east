const net = require("net");
// Anytime anyone enters our chatroom, we will place them into the arrayOfConnections to keep track of who is in here
const arrayOfStudents = [];

const server = net.createServer((student)=>{
    // Tell our server to translate all incoming data from Buffer to regular text
    student.setEncoding("utf-8")
    // console.log(connection)
    arrayOfStudents.push(student)
    // Execute code whenever a connection is made
    console.log("Somone has joined our server!")
    // If we want code to be executed on a specific event
    // We need to be able to recieve data
    // Once we recieved said data, we want to display it in our server terminal
    student.on("data", (data)=> {
        // Send this information to ALL of the clients/connections in the arrayOfConnections
        // We want this line of code to execute for each connection
        for(const singleStudent of arrayOfStudents){
            // joseph.write(`Client says: ${data}`);
            // We can check to see who asked this question, so we dont repeat it to themselves
            if(singleStudent !== student){
                singleStudent.write(`Client says: ${data}`);
            }
        }
        // console.log(data);
    })
    student.on("close", ()=> {
        console.log("Someone has left our server!")
    })
});

// Event listener
// 3000,8000,8080
server.listen(3000, ()=> {
    console.log("I am listening!")
})