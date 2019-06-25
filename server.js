var express = require("express");
var app = express();
var cors = require("cors")
var PORT = process.env.PORT || 8080;


var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use(express.static("public"));


// require("./routes/loginRoutes")(app);
require("./routes/itemRoutes")(app);
// require("./routes/cartRoutes")(app)


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
