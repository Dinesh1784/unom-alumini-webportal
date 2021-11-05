const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 5000;
const sequelize = require("./database/config");

//models
const User = require("./models/user");
//common routes
const commonRoute = require("./routes/common");
//auth routes
const authRoute = require("./routes/auth");
//private routes
const privateRoute = require("./routes/private");
//error routes
const errorController = require("./controller/error");

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static files
app.use(express.static(path.join(__dirname, "public")));

//body parser
app.use(express.urlencoded({ extended: false }));

//logger
app.use(logger("dev"));
//common route
app.use(commonRoute);
//auth route
app.use(authRoute);
//private route
app.use(privateRoute);
//error route
app.use(errorController.get404);

//sequelize databse orm connection
sequelize
  .sync({ force: true })
  .then((result) => {
    //console.log(result);
    // starting server
    app.listen(PORT, () => {
      console.log(`Server is rocking at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
