const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app(express.json());

app.use(express.static("public"));

//mongo connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


//routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT,() => {
    console.log(`'App running on port ${PORT}'`)
});