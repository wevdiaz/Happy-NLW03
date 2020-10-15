const express = require("express");

const server = express();

server.get("/", function(req, res){
    return res.send("<h1>Riverdale</h1>");
});


server.listen(5000, function() {
    console.log("Server is running!")
});