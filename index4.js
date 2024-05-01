import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";


// var logger = function (req, res, next){
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }
// app.use(logger);

// if we want to hold if req.body in logger middleware we have to put the bodyparser above the logger function
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your Band Body is: </h1><h1>${bandName}</h1>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
