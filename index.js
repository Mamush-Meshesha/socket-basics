const express = require("express");
const app = express();
const http = require("http");
const port = 3300;
const expressServer = http.createServer(app);

const { Server } = require("socket.io");  
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("new user connected");
 
//     setTimeout(() => {
//       socket.send("hello this message is from server to client")
    //   },10000)
    
    socket.on("message", (msg) => {
        console.log(msg)
    })

    setInterval(() => {
        let date = new Date()
        let time = date.getTime()
        socket.emit("mam",time)
    }, 2000);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`server is now runing on port ${port}`);
});
