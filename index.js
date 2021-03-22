const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());

//import your models
require("./models/quote");

mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
// require("./routes/quoteRoutes.js")(app);

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
