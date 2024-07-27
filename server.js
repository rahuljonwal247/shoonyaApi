/**
 * app.js
 * Use `app.js` to run your app.
 * To start the server, run: `node app.js`.
 */
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
global.__basedir = __dirname;
const models = require("./model");
const routes = require("./routes");
const session = require("express-session");
const bodyParser = require("body-parser");





const app = express();
const httpServer = require("http").createServer(app);


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set secure to true if using HTTPS
  })
);

app.get("/", (req, res) => {
  console.log("change");
  res.send(` Server is running........ `);
});
app.use((req, res, next) => {
  next();
});

function name() {
  console.log("Router is Working!");
}
if (process.env.NODE_ENV !== "test") {
  models.sequelize
    .sync({ alter: true })
    .then(() => {})
    .finally(() => {
      app.use(routes);
      /**
       *  seeder();
       */
      name();
    });
  httpServer.listen(process.env.PORT, () => {
    console.log(`your application is running on ${process.env.PORT}`);
  });
} else {
  module.exports = app;
}
