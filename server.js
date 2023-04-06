// requiring the functionality of express framework
const express = require("express");
// calling the express method and assigning it to a variable
const server = express();

const PORT = 5000;

server.use(express.static("public"));

// Have the html(browser) file display a greeting to the user http:localhost:5000
server.get("/", (request, response) => {
  response.send("Welcome User");
});

server.get("/index", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
