const router = require("express").Router();
const { query } = require("../db/index");
const pool = require("../db/index");

router
  .route("/todos")
  .get(async (req, res) => {
    try {
      const query = "SELECT * FROM todo";

      const allTasks = await pool.query(query);

      res.json(allTasks.rows);
    } catch (error) {
      console.error(error.stack);
    }
  })
  .post(async (req, res) => {
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

router
  .route("/todos/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const query = "SELECT * FROM todo WHERE id = $1";

      const task = await pool.query(query, [id]);

      res.json(task.rows[0]);
    } catch (error) {
      console.error(error.stack);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { task } = req.body;
      const query = "UPDATE todo SET task = $1 WHERE id = $2";
      const values = [task, id];

      const updateTask = await pool.query(query, values);

      res.json(updateTask);
    } catch (error) {
      console.error(error.stack);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const query = "DELETE FROM todo WHERE id = $1";

      const deleteTask = await pool.query(query, [id]);

      res.json(deleteTask);
    } catch (error) {
      console.error(error.stack);
    }
  });

module.exports = router;
