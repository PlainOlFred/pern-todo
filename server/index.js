const express = require('express');
const cors = require("cors");
const { urlencoded } = require('express');

const app = express();


const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(urlencoded({}))


app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`)
})