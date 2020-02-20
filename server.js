const express = require('express');
const nunjunks = require('nunjucks');
// const videos = require('./data.js')

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");
nunjunks.configure("views", {
  express: server
});

server.get('/', (req, res) => {
  return res.render("about");
});

server.get('/portfolio', (req, res) => {
  return res.render("portfolio");
});

server.listen(3333, (req, res) => {
  console.log("server is runing!");
});

