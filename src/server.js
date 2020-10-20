const express = require("express");
const path = require("path");
const pages = require("./pages");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

server.get("/", pages.index );
server.get("/list-orphanages", pages.listOrphanages );
server.get("/orphanage", pages.orphanage );
server.get("/orphanages", pages.orphanages );
server.get("/create-orphanage", pages.createOrphanage );
server.post("/save-orphanage", pages.saveOrphanage );


server.listen(5000, function() {
    console.log("Server is running!")
});