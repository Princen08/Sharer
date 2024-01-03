// imports 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require('http').Server(app);
const io =  require('socket.io')(http,  { cors: { origin: '*' } });

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

require("dotenv").config();

const url = process.env.ATLAS_URL;

// Database connection
mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB database connection established successfully");
    })
    .catch((err) => console.error(err));

// Main route
const codeData = require("./routes/codeData")
app.use('/', codeData)

const Document = require("./models/codeDataSchema")

// Test route
app.get("/", (req, res) => {
    res.json("Hello Coder....");
});

// Socket connection

io.on('connection', (socket) => {
    socket.on("join room", async (room) => {
        socket.join(room);
        const data = await Document.findOne({id: room})
        if(data) {
            socket.emit("load-data", data.data)
        } else {
            await Document.create({ id: room, data: ""})
        }
        socket.on('send-changes', (data) => {
            socket.broadcast.to(room).emit("receive-changes", data)
        });
    });
    
});


http.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

