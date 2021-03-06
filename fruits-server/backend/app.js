let express = require("express");
const FruitRoutes = require("./fruit-routes");
const bodyParser = require("body-parser");
let path = require('path');

const app = express();
let cors = require('cors');
const port = process.env.PORT || 1234;

const apiRoutes = express.Router();

// TODO-1: need to npm install and run to start up this fruit server

// setup the fruit routes
FruitRoutes.setup(apiRoutes);

// TODO-4: need to setup route for cart purchase

app.use(bodyParser.json());
app.use(cors()); 

// all REST api calls should be under api
app.use("/api", apiRoutes);
app.use(express.static(path.join(__dirname, 'dist/fruits-server2')));
app.use('/', express.static(path.join(__dirname, 'dist/fruits-server2')));
app.use((error, req, res, next) => {
  // error handling
  console.log('testing purpose')
  res.status(500).send(error);
})

// basic get route for the system
app.get("/", (req, res) => {
  res.send("Welcome to fruit server 1.0.0");
});

// listening on the nodemon port configured in @see package.json
app.listen(port, (req, res) => {
  console.log(
    `fruit server started from nodemon and listening at http://localhost:${port}`
  );
});

// Custom Error handler for fruit server
app.use(function (err, req, res, next) {
  // TODO-5: handle common errors
});
