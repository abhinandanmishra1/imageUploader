const express = require("express");
const app = express();
const mongoose = require("mongoose");
const imageRoutes = require("./routes/image");
const path = require("path");

require("dotenv").config();

//Connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("Not connected!");
  });

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/image", imageRoutes);

app.listen(process.env.PORT || 8080, function () {
  console.log("App running!");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
