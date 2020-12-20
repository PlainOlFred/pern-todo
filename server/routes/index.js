const router = require("express").Router();
const pool = require("../db/index");

router.route("/todos").post(async (req, res) => {
  try {
    const { task } = req.body;
    const query = "INSERT INTO todo (task) VALUES($1)";
    const vaules = [task];

    const newTask = await pool.query(query, vaules);

    res.json(newTask);
  } catch (error) {
    console.error(error.stack);
  }
});

module.exports = router;
