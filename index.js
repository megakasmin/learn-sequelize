require("dotenv").config();

const express = require("express");
const app = express();
const { PORT } = require("./config") || 5005;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { sequelize } = require("./config");

sequelize
  .authenticate()
  .then(() => console.log(`Connected to database`))
  .catch(error => {
    throw error;
  });

app.get("/", (req, res) => res.send("Hello NomadenFeels"));
app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
