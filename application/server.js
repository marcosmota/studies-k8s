const http = require("http");
const express = require("express");
const os = require("os");
const app = express();
const prettyjson = require('prettyjson');

app.get("/", function(req, res) {
    const hostname = os.hostname();
    const body = {
        hostname: hostname,
        environments: process.env
    }
    res.send(body);

});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));