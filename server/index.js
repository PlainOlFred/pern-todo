const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
