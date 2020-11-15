const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});

require('dotenv').config()


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to Mongo database with Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);


// Socket.io
io.on("connection", (socket) => {
  console.log("New client connected");

  io.sockets.emit('broadcast', 'Welcome to Google Books Search!');

  socket.on('saveMsg', (msg) => {
    io.sockets.emit('broadcast', msg);
  })

});


http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
