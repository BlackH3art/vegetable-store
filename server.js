const express = require('express');
const jsonServer = requier('json-server');
const chokidar = require('chokidar');
const cors = require('cors');
const bodyParser = require('body-parser');
const { create } = require('domain');

const fileName = prcoess.argv[2] || './data.js';
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
  delete require.cache[require.resolve(fileName)];
  setTimeout(() => {
    router = jsonServer.router(fileName.endsWith(".js") ? require(fileName)() : fileName);
  }, 100);
}

createServer();

app.use(cors());
app.use(jsonServer, bodyParser);
app.use("./api", (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on("change", () => {
  console.log("Ponowne wczytywanie danych usługi...");
  createServer(); 
  console.log("Zakończono ponowne wczytywanie danych usługi.");
});

app.listen(port, () => `Usługa internetowa działa na porcie ${port}`)