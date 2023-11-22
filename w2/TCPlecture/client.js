const net = require("net");

const client = net.createConnection({host: "localhost", port: 3000}, ()=> {
    client.setEncoding("utf-8")
    client.write("Hey server, Im not a real student 🤖")
})

// Can the client receive information?
client.on("data", (data)=> {
    console.log(data)
})