const express = require('express');
const cors = require("cors");
require('dotenv').config();



const pool = require("./db/index")

const app = express();


const PORT = process.env.PORT || 3001;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Routes
app.post('/todos', async (req, res) => {
    try {
        const {task} = req.body
        const query = "INSERT INTO todo (task) VALUES($1)";
        const vaules = [task];

        const newTask = await pool.query(query, vaules);
     
        res.json(newTask); 
    } catch (error) {
        console.error(error.stack)
    }
})


app.listen(PORT, () =>{
    console.log(`App listening on PORT ${PORT}`)
})