const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index', { userName: 'Sam' })
})

// app.get("/", (req, res) => {
//   console.log("A New request");
//   res.send("<script src='codes.js'></script><link rel='stylesheet' href='/styles.css'><h1>hi</h1>");
// })

console.log(__dirname);
// First
// app.get("/styles.css", (req, res) => {
//   res.send("h1 { color: red; }")
// })

// Second
// const fs = require('fs');
// app.get("/styles.css", (req, res) => {
//   let contents = fs.readFileSync("./styles.css");
//   res.send(contents)
// })

//
// app.get("/codes.js", (req, res) => {
//   let contents = fs.readFileSync("./codes.js");
//   res.send(contents)
// })

app.use("/", express.static("public"))

app.listen(3000);
