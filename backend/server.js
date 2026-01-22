const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');   
const app = express();
const PORT = process.env.PORT || 5000;

const http=require("http")
const server=http.createServer(app)
const io=socketio(server);
const router=require("./router")

app.use(cors());
app.use(router);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});